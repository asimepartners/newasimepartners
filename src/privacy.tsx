import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { siteBrand } from '@/data/content'
import './styles/custom.css'
import './styles/theme-dark.css'
import './styles/typography.css'
import './styles/refine.css'

function PrivacyPage() {
  return (
    <div className="wf-privacy-page">
      <main className="wf-privacy-main">
        <div className="container wf-privacy-container">
          <div className="wf-privacy-topbar">
            <a href="/" className="wf-privacy-brand" aria-label="Asime Partners home">
              <img src={siteBrand.logo} alt={siteBrand.name} className="wf-privacy-logo" />
            </a>
            <a href="/" className="wf-privacy-backlink">Back to home</a>
          </div>

          <div className="wf-privacy-content">
            <span className="wf-eyebrow">Privacy</span>
            <h1 className="wf-display wf-privacy-title">Privacy & Cookies</h1>
            <p className="wf-prose wf-privacy-prose">
              We are committed to handling personal data and cookies transparently and in line with applicable data protection standards.
            </p>

            <div className="wf-privacy-layout">
              <section className="wf-privacy-section-block">
                <h2 className="wf-card-heading wf-privacy-section-title">Cookies</h2>
                <p className="wf-card-body wf-privacy-body">
                  Cookies are small text files that are placed on your computer by websites that you visit.
                </p>
                <p className="wf-card-body wf-privacy-body">
                  They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. The tables below explain the cookies we use and why.
                </p>
              </section>

              <section className="wf-privacy-section-block">
                <h2 className="wf-card-heading wf-privacy-section-title">Essential cookies</h2>
                <p className="wf-card-body wf-privacy-body">
                  These cookies are required for our website to work properly. They do not require users&apos; consent for use.
                </p>

                <div className="wf-privacy-table-wrap">
                  <table className="wf-privacy-table">
                    <thead>
                      <tr>
                        <th>Cookie</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>CRAFT_CSRF_TOKEN</code></td>
                        <td>This is a security feature to protect against Cross-Site Request Forgery attacks</td>
                      </tr>
                      <tr>
                        <td><code>CraftSessionId</code></td>
                        <td>Helps to maintain sessions across web requests</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="wf-privacy-section-block">
                <h2 className="wf-card-heading wf-privacy-section-title">Data</h2>
                <p className="wf-card-body wf-privacy-body">
                  We follow national and international Data Protection rules, such as GDPR.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)