declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

function loadScript(siteKey: string): Promise<void> {
  if (window.grecaptcha?.execute) return Promise.resolve()

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-asime-recaptcha="v3"]')
    if (existing) {
      const wait = () => {
        if (window.grecaptcha?.execute) resolve()
        else window.setTimeout(wait, 50)
      }
      wait()
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`
    script.async = true
    script.defer = true
    script.dataset.asimeRecaptcha = 'v3'
    script.onload = () => {
      const wait = () => {
        if (window.grecaptcha?.ready) {
          window.grecaptcha.ready(() => resolve())
          return
        }
        window.setTimeout(wait, 50)
      }
      wait()
    }
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
    document.head.appendChild(script)
  })
}

export async function executeRecaptchaV3(siteKey: string, action = 'contact'): Promise<string> {
  await loadScript(siteKey)
  if (!window.grecaptcha?.execute) throw new Error('reCAPTCHA unavailable')
  return window.grecaptcha.execute(siteKey, { action })
}
