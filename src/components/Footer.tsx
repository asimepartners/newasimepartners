import { HugeiconsIcon } from '@hugeicons/react'
import { Linkedin01Icon } from '@hugeicons/core-free-icons'
import { footerColumns, footerLegal, siteBrand } from '@/data/content'
import { FadeIn } from './Motion'

export default function Footer() {
  return (
    <FadeIn>
      <footer className="wf-ft">
        <div className="wf-ft-wrapper">
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
                  <HugeiconsIcon icon={Linkedin01Icon} size={22} strokeWidth={1.5} />
                </a>
                <a
                  href={siteBrand.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="wf-ft-social"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.739L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="wf-ft-columns">
              <div className="wf-ft-col">
                {footerColumns.explore.map((item) => (
                  <a key={item.label} href={item.href} className="wf-ft-link">
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="wf-ft-col">
                {footerColumns.connect.map((item) => (
                  <a key={item.label} href={item.href} className="wf-ft-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="wf-ft-baseline">
            <span className="wf-ft-copy">{footerLegal.copyright}</span>
            <div className="wf-ft-legal-links">
              <a href="/privacy.html" className="wf-ft-copy-link">Privacy Policy</a>
              <a href="/terms.html" className="wf-ft-copy-link">Terms of Service</a>
            </div>
          </div>

          <div className="wf-ft-legal">
            {footerLegal.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </footer>
    </FadeIn>
  )
}
