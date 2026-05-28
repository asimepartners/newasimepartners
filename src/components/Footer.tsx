import { HugeiconsIcon } from '@hugeicons/react'
import { Linkedin01Icon } from '@hugeicons/core-free-icons'
import { footerColumns, offices, siteBrand } from '@/data/content'
import { FadeIn } from './Motion'

export default function Footer() {
  return (
    <FadeIn>
      <footer className="wf-ft">
        <div className="wf-ft-body">
          <div className="container">
            <div className="wf-ft-grid wf-ft-grid--cb">
              <div className="wf-ft-col wf-ft-col--brand">
                <a href="#" className="wf-ft-brand">
                  <img src={siteBrand.logoWordmark} alt={siteBrand.name} className="wf-ft-logo" />
                </a>
                <p className="wf-ft-desc">{siteBrand.tagline}</p>
                <p className="wf-ft-contact">
                  <a href={`mailto:${siteBrand.email}`}>{siteBrand.email}</a>
                </p>
                <div className="wf-ft-socials">
                  <a href={siteBrand.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="wf-ft-social">
                    <HugeiconsIcon icon={Linkedin01Icon} size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Our Businesses</p>
                <nav className="wf-ft-nav">
                  {footerColumns.businesses.map((item) => (
                    <a key={item.label} href={item.href} className="wf-ft-link">{item.label}</a>
                  ))}
                </nav>
              </div>

              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Regions</p>
                <nav className="wf-ft-nav">
                  {footerColumns.regions.map((item) => (
                    <a key={item.label} href={item.href} className="wf-ft-link">{item.label}</a>
                  ))}
                </nav>
              </div>

              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Resources</p>
                <nav className="wf-ft-nav">
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
                </nav>
              </div>

              <div className="wf-ft-col">
                <p className="wf-ft-col-label">Offices</p>
                {offices.map((o) => (
                  <div key={o.city} className="wf-ft-office">
                    <span className="wf-ft-office-city">{o.city}</span>
                    {o.lines.map((l) => (
                      <span key={l} className="wf-ft-office-line">{l}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wf-ft-bar">
          <div className="container">
            <div className="wf-ft-bar-inner">
              <span className="wf-ft-copy">© {new Date().getFullYear()} {siteBrand.name}</span>
              <span className="wf-ft-follow">Follow Us</span>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}
