type ContactPayload = {
  name?: string
  email?: string
  message?: string
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
        if (['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)) {
          return `https://newasimepartners.vercel.app${url.pathname}`
        }
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
  if (['localhost', '127.0.0.1', '[::1]'].includes(host.replace(/:\d+$/, '').toLowerCase())) {
    return 'https://newasimepartners.vercel.app/contact.html'
  }
  const forwardedProtocol = headers['x-forwarded-proto']?.split(',')[0]?.trim()
  const protocol = forwardedProtocol === 'https' || (!forwardedProtocol && encrypted) ? 'https' : 'http'
  return `${protocol}://${host}/contact.html`
}

export async function processContact(
  payload: ContactPayload,
  toEmail: string,
  formUrl?: string,
): Promise<ContactResult> {
  if (payload.honey) {
    return { status: 200, body: { success: true } }
  }

  const name = String(payload.name ?? '').trim()
  const email = String(payload.email ?? '').trim()
  const message = String(payload.message ?? '').trim()

  if (!name || !email || !message) {
    return { status: 400, body: { success: false, message: 'Missing fields' } }
  }

  let mailResponse: Response
  try {
    mailResponse = await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(formUrl ? { Referer: formUrl, Origin: new URL(formUrl).origin } : {}),
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
  } catch (error) {
    console.error('Contact email provider request failed', error)
    return { status: 502, body: { success: false, message: 'Unable to reach the email service' } }
  }

  let mail: { success?: boolean | string; message?: string }
  try {
    mail = (await mailResponse.json()) as { success?: boolean | string; message?: string }
  } catch (error) {
    console.error('Contact email provider returned a non-JSON response', error)
    return { status: 502, body: { success: false, message: 'The email service returned an invalid response' } }
  }
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

  try {
    const payload = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as ContactPayload
    const result = await processContact(
      payload ?? {},
      process.env.CONTACT_EMAIL || 'contact@asimepartners.com',
      getContactPageUrl(req.headers ?? {}, req.socket?.encrypted ?? false),
    )
    res.status(result.status).json(result.body)
  } catch (error) {
    console.error('Contact API request failed', error)
    res.status(500).json({ success: false, message: 'Unable to process the contact request' })
  }
}
