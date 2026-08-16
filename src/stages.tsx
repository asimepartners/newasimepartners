import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { stagesPage } from '@/data/stages'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function StagesPage() {
  return (
    <div className="wf-stages-page">
      <Navbar variant="solid" />

      <main className="wf-stages-main">
        <div className="wf-stages-inner">
          <header className="wf-stages-head">
            <h1 className="wf-stages-title">{stagesPage.title}</h1>
            <p className="wf-stages-intro">{stagesPage.intro}</p>
          </header>

          <div className="wf-stages-grid">
            {stagesPage.items.map((item) => (
              <article key={item.title} className="wf-stages-card">
                <h2 className="wf-stages-card-title">{item.title}</h2>
                <p className="wf-stages-card-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StagesPage />
  </StrictMode>,
)

dismissPreloader()
