import { StrictMode, useEffect, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { contactPage, siteBrand } from '@/data/content'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function ContactPage() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('wf-contact-root')
    document.body.classList.add('wf-contact-root')
    return () => {
      document.documentElement.classList.remove('wf-contact-root')
      document.body.classList.remove('wf-contact-root')
    }
  }, [])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${siteBrand.email}?subject=${subject}&body=${body}`
    setSent(true)
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

              <label className="wf-contact-verify">
                <input type="checkbox" name="verify" required />
                <span>I am not a robot</span>
              </label>

              <button type="submit" className="wf-contact-submit">
                {contactPage.submitLabel}
              </button>

              {sent ? <p className="wf-contact-sent">{contactPage.sentLabel}</p> : null}
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
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactPage />
  </StrictMode>,
)

dismissPreloader()
