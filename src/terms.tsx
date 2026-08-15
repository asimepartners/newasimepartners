import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { termsOfService } from '@/data/termsOfService'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function TermsPage() {
  useEffect(() => {
    document.documentElement.classList.add('wf-privacy-root')
    document.body.classList.add('wf-privacy-root')
    return () => {
      document.documentElement.classList.remove('wf-privacy-root')
      document.body.classList.remove('wf-privacy-root')
    }
  }, [])

  return (
    <div className="wf-privacy-page">
      <Navbar variant="solid" />

      <main className="wf-privacy-main">
        <div className="wf-privacy-container">
          <article className="wf-privacy-content">
            <h1 className="wf-privacy-title">{termsOfService.title}</h1>

            <div className="wf-privacy-layout">
              <section className="wf-privacy-section-block">
                {termsOfService.paragraphs.map((text, index) => (
                  <p key={index} className="wf-privacy-body">
                    {text}
                  </p>
                ))}
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
)

dismissPreloader()
