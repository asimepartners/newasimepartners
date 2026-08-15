import { StrictMode, useEffect, useRef, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { contactPage, siteBrand } from '@/data/content'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { executeRecaptchaV3 } from '@/components/RecaptchaV3'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function ContactPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.documentElement.classList.add('wf-contact-root')
    document.body.classList.add('wf-contact-root')
    return () => {
      document.documentElement.classList.remove('wf-contact-root')
      document.body.classList.remove('wf-contact-root')
    }
  }, [])

  useEffect(() => {
    if (!sent) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSent(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [sent])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending) return

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const honey = String(data.get('_honey') ?? '').trim()

    if (honey) {
      setError('')
      setSent(true)
      form.reset()
      return
    }

    setSending(true)
    setError('')

    try {
      const token = await executeRecaptchaV3(contactPage.recaptchaSiteKey, 'contact')
      if (!token) throw new Error('captcha')

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          token,
        }),
      })

      const result = (await response.json()) as { success?: boolean | string; message?: string }
      const ok = response.ok && (result.success === true || result.success === 'true')
      if (!ok) throw new Error(result.message || 'Send failed')

      form.reset()
      setSent(true)
    } catch {
      setError(contactPage.sendErrorLabel)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="wf-contact-page">
      <Navbar variant="solid" />

      <main className="wf-contact-main">
        <section className="wf-contact-hero" aria-labelledby="contact-hero-title">
          <div className="wf-contact-hero-media" aria-hidden="true">
            <img
              src={contactPage.heroImage}
              alt=""
              className="wf-contact-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-contact-hero-overlay" />
          </div>
          <h1 id="contact-hero-title" className="wf-contact-hero-title">
            {contactPage.title}
          </h1>
        </section>

        <section className="wf-contact-panel" aria-labelledby="contact-heading">
          <div className="wf-contact-inner">
            <h2 id="contact-heading" className="wf-contact-heading">
              {contactPage.heading}
            </h2>
            <p className="wf-contact-intro">
              {contactPage.intro}{' '}
              <a href={`mailto:${siteBrand.email}`}>{siteBrand.email}</a>.
            </p>
            <p className="wf-contact-intro">
              {contactPage.complaints}{' '}
              <a href={`mailto:${siteBrand.email}`}>{siteBrand.email}</a>.
            </p>

            <h3 className="wf-contact-form-title">{contactPage.formTitle}</h3>

            <form className="wf-contact-form" onSubmit={onSubmit}>
              <input
                type="text"
                name="_honey"
                className="wf-contact-honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="wf-contact-form-row">
                <label className="wf-contact-field">
                  <span>{contactPage.nameLabel}</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label className="wf-contact-field">
                  <span>{contactPage.emailLabel}</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
              </div>

              <label className="wf-contact-field">
                <span>{contactPage.messageLabel}</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={contactPage.messagePlaceholder}
                />
              </label>

              <p className="wf-contact-recaptcha-note">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>{' '}
                apply.
              </p>

              <button type="submit" className="wf-contact-submit" disabled={sending}>
                {sending ? contactPage.submittingLabel : contactPage.submitLabel}
              </button>

              {error ? <p className="wf-contact-error" role="alert">{error}</p> : null}
            </form>
          </div>
        </section>

        <section className="wf-contact-offices" aria-labelledby="contact-offices-title">
          <div className="wf-contact-offices-inner">
            <div className="wf-contact-offices-map">
              <img
                className="wf-contact-offices-map-img"
                src={contactPage.mapSrc}
                alt="Dotted world map showing Asime Partners offices"
                loading="lazy"
                decoding="async"
              />
              {contactPage.offices.map((office) => (
                <span
                  key={office.city}
                  className="wf-contact-offices-pin"
                  style={{ left: `${office.pin.left}%`, top: `${office.pin.top}%` }}
                >
                  <svg viewBox="0 0 28 40" width="100%" height="100%" aria-hidden="true">
                    <ellipse cx="14" cy="34" rx="8" ry="4.2" fill="#FCD116" opacity="0.95" />
                    <rect x="12.6" y="16" width="2.8" height="16" rx="1.2" fill="#1b2430" />
                    <circle cx="14" cy="12" r="8" fill="#1b2430" />
                  </svg>
                  <span className="wf-contact-offices-pin-label">{office.city}</span>
                </span>
              ))}
            </div>

            <div className="wf-contact-offices-copy">
              <h2 id="contact-offices-title" className="wf-contact-offices-title">
                {contactPage.officesTitle}
              </h2>
              <div className="wf-contact-offices-grid">
                {contactPage.offices.map((office) => (
                  <article key={office.city} className="wf-contact-office">
                    <h3 className="wf-contact-office-city">{office.city}</h3>
                    {office.lines.map((line) => (
                      <p key={line} className="wf-contact-office-line">
                        {line.includes('@') ? <a href={`mailto:${line}`}>{line}</a> : line}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />

      {sent ? (
        <div className="wf-contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-success-title">
          <button
            type="button"
            className="wf-contact-modal-backdrop"
            aria-label="Close"
            onClick={() => setSent(false)}
          />
          <div className="wf-contact-modal-panel">
            <h2 id="contact-success-title" className="wf-contact-modal-title">
              {contactPage.sentTitle}
            </h2>
            <p className="wf-contact-modal-body">{contactPage.sentLabel}</p>
            <button
              ref={closeRef}
              type="button"
              className="wf-contact-submit"
              onClick={() => setSent(false)}
            >
              {contactPage.sentCloseLabel}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)

dismissPreloader()
