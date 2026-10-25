import SmoothScroll from '@/components/SmoothScroll'
import { StrictMode, useEffect, useRef, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { contactPage } from '@/data/content'
import { navigation } from '@/institutional/content'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { executeRecaptchaV3 } from '@/components/RecaptchaV3'
import CookieBanner from '@/components/CookieBanner'
import { installAnalytics, track } from '@/institutional/analytics'
import '@/institutional/site.css'
import '@/institutional/contact-compact.css'

function ContactPage() {
  const interest = new URLSearchParams(window.location.search).get('interest') || ''
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
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSent(false)
      if (event.key === 'Tab') { event.preventDefault(); closeRef.current?.focus() }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
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
    const message = [`Organisation: ${String(data.get('organisation') ?? '').trim()}`, `Audience: ${String(data.get('audience') ?? '').trim()}`, `Interest: ${String(data.get('interest') ?? '').trim()}`, '', String(data.get('message') ?? '').trim()].join('\n')
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

      track('enquiry_submitted', { interest: String(data.get('interest') ?? 'General enquiry') })
      form.reset()
      setSent(true)
    } catch {
      setError(contactPage.sendErrorLabel)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="wf-contact-page ap-site">
      <Navbar variant="solid" />

      <main id="main-content" className="wf-contact-main">
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
            Talk to Asime
          </h1>
        </section>

        <section className="wf-contact-panel" aria-labelledby="contact-heading">
          <div className="wf-contact-inner">
            <h2 id="contact-heading" className="wf-contact-heading">
              Build the next generation of <span style={{ color: '#fcd116' }}>African alternative capital.</span>
            </h2>
            <p className="wf-contact-intro">Tell us about your institution and the capability, strategy or capital challenge you want to address.</p>

            <h3 className="wf-contact-form-title">Start a conversation</h3>

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

              <div className="wf-contact-form-row">
                <label className="wf-contact-field"><span>Organisation</span><input type="text" name="organisation" autoComplete="organization" required /></label>
                <label className="wf-contact-field"><span>I represent</span><select name="audience" required defaultValue=""><option value="" disabled>Select an audience</option>{[...navigation.find(group => group.title === 'Who We Serve')!.links.map(link => link.label), 'Others'].map(x=><option key={x}>{x}</option>)}</select></label>
              </div>
              <label className="wf-contact-field"><span>Programme or service of interest</span><input name="interest" defaultValue={interest} list="asime-interests" placeholder="Select or describe your interest" required/><datalist id="asime-interests">{['Academy','Advisory','Capital Solutions','Intelligence','Institutional Capital Network','Careers'].map(x=><option key={x} value={x}/>)}</datalist></label>
              <label className="wf-contact-field">
                <span>{contactPage.messageLabel}</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your objectives, timing and preferred programme or service."
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
              <img className="wf-contact-offices-map-img" src="/images/markets-world-map.jpeg" alt="Dotted world map" width="1600" height="886" loading="lazy"/>
              <svg className="wf-contact-map-locations" viewBox="0 0 1600 886" role="img" aria-label="Office locations: Accra, Ghana; Nairobi, Kenya; New York, USA">
                <g><circle cx="727" cy="427" r="14"/><path d="M727 427 682 475H535"/><text x="535" y="510">Accra, Ghana</text></g>
                <g><circle cx="901" cy="472" r="14"/><path d="m901 472 55 40h177"/><text x="965" y="548">Nairobi, Kenya</text></g>
                <g><circle cx="350" cy="236" r="14"/><path d="m350 236 50 48h170"/><text x="410" y="320">New York, USA</text></g>
              </svg>
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
                        {line}
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
      <CookieBanner />

      {sent ? (
        <div className="wf-contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-success-title">
          <button
            type="button"
            className="wf-contact-modal-backdrop"
            tabIndex={-1}
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
  <StrictMode><SmoothScroll>
    <ContactPage />
  </SmoothScroll></StrictMode>,
)

dismissPreloader()

installAnalytics()

import './institutional/buttons.css'

import './institutional/hero-layout.css'
