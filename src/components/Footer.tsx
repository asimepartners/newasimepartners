import { HugeiconsIcon } from '@hugeicons/react'
import { Linkedin01Icon } from '@hugeicons/core-free-icons'
import { footerColumns, newsletterContent, siteBrand } from '@/data/content'
import { FadeIn } from './Motion'

export default function Footer() {
  return (
    <FadeIn>
      <footer className="wf-ft">
        <div className="wf-ft-wrapper">
          <div className="wf-news-card">
            <div className="wf-news-left">
              <h2 className="wf-news-title">
                {newsletterContent.heading.split('\n').map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className="wf-news-body">{newsletterContent.body}</p>
            </div>

            <div className="wf-news-right">
              <span className="wf-news-label">{newsletterContent.label}</span>
              <form className="wf-news-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="wf-news-input"
                  type="email"
                  placeholder={newsletterContent.placeholder}
                  aria-label="Email address"
                />
                <button type="submit" className="wf-news-btn">
                  {newsletterContent.button}
                </button>
              </form>
              <span className="wf-news-fine">
                {newsletterContent.finePrintLead}{' '}
                <a href={newsletterContent.privacyHref}>{newsletterContent.privacyLabel}</a>
              </span>
            </div>
          </div>

          <div className="wf-ft-lower">
            <div className="wf-ft-brand-block">
              <a href="#" className="wf-ft-brand">
                <img src="/asime-logo-white.png" alt={siteBrand.name} className="wf-ft-logo" />
              </a>
              <p className="wf-ft-desc">{siteBrand.tagline}</p>
              <div className="wf-ft-socials">
                <a
                  href={siteBrand.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="wf-ft-social"
                >
                  <HugeiconsIcon icon={Linkedin01Icon} size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="wf-ft-columns">
              <div className="wf-ft-col">
                <h4 className="wf-ft-col-label">Our Businesses</h4>
                {footerColumns.businesses.map((item) => (
                  <a key={item.label} href={item.href} className="wf-ft-link">
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="wf-ft-col">
                <h4 className="wf-ft-col-label">Regions</h4>
                {footerColumns.regions.map((item) => (
                  <a key={item.label} href={item.href} className="wf-ft-link">
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="wf-ft-col">
                <h4 className="wf-ft-col-label">Resources</h4>
                {footerColumns.resources.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="wf-ft-link"
                    {...(item.href.endsWith('.html') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="wf-ft-baseline">
            <span className="wf-ft-copy">© {new Date().getFullYear()} {siteBrand.name}</span>
            <a href={`mailto:${siteBrand.email}`} className="wf-ft-copy-link">{siteBrand.email}</a>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}
