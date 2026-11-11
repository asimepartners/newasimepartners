type ContactPayload = {
  name?: string
  email?: string
  message?: string
  token?: string
  honey?: string
}

type ContactResult = {
  status: number
  body: { success: boolean; message?: string }
}

type ContactRequestHeaders = {
  host?: string
  referer?: string
  'x-forwarded-host'?: string
  'x-forwarded-proto'?: string
}

export function getContactPageUrl(headers: ContactRequestHeaders, encrypted = false): string | undefined {
  const referer = headers.referer
  if (referer) {
    try {
      const url = new URL(referer)
      if (url.protocol === 'http:' || url.protocol === 'https:') {
        url.search = ''
        url.hash = ''
        return url.toString()
      }
    } catch {
      // Fall back to the request host if the referer is malformed.
    }
  }

  const host = headers['x-forwarded-host']?.split(',')[0]?.trim() || headers.host
  if (!host) return undefined
  const forwardedProtocol = headers['x-forwarded-proto']?.split(',')[0]?.trim()
  const protocol = forwardedProtocol === 'https' || (!forwardedProtocol && encrypted) ? 'https' : 'http'
  return `${protocol}://${host}/contact.html`
}

export async function processContact(
  payload: ContactPayload,
  secret: string,
  toEmail: string,
  bypassCaptcha = false,
  formUrl?: string,
): Promise<ContactResult> {
  if (payload.honey) {
    return { status: 200, body: { success: true } }
  }

  const name = String(payload.name ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const message = String(payload.message ?? '').trim()
  const token = String(payload.token ?? '').trim()

  if (!name || !email || !message || (!token && !bypassCaptcha)) {
    return { status: 400, body: { success: false, message: 'Missing fields' } }
  }

  if (!bypassCaptcha) {
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    })

    const captcha = (await verifyResponse.json()) as {
      success?: boolean
      score?: number
      action?: string
    }
    if (!captcha.success || (captcha.action && captcha.action !== 'contact') || (captcha.score ?? 0) < 0.5) {
      return { status: 400, body: { success: false, message: 'Captcha failed' } }
    }
  }

  const mailResponse = await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Website enquiry from ${name}`,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
      ...(formUrl ? { _url: formUrl } : {}),
    }),
  })

  const mail = (await mailResponse.json()) as { success?: boolean | string; message?: string }
  const ok = mailResponse.ok && (mail.success === true || mail.success === 'true')
  if (!ok) {
    return { status: 502, body: { success: false, message: mail.message || 'Send failed' } }
  }

  return { status: 200, body: { success: true } }
}

export default async function handler(
  req: { method?: string; body?: unknown; headers?: ContactRequestHeaders; socket?: { encrypted?: boolean } },
  res: { status: (code: number) => { json: (body: unknown) => void } },
) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' })
    return
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY ?? ''
  if (!secret) {
    res.status(500).json({ success: false, message: 'Missing reCAPTCHA secret' })
    return
  }

  const payload = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactPayload
  const result = await processContact(
    payload ?? {},
    secret,
    process.env.CONTACT_EMAIL || 'contact@asimepartners.com',
    false,
    getContactPageUrl(req.headers ?? {}, req.socket?.encrypted ?? false),
  )
  res.status(result.status).json(result.body)
}
