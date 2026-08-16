import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { executiveTrainingPage } from '@/data/executiveTraining'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function TrainingPage() {
  return (
    <div className="wf-stages-page">
      <Navbar variant="solid" />

      <main>
        <section className="wf-training-hero" aria-labelledby="training-hero-title">
          <div className="wf-training-hero-media" aria-hidden="true">
            <img
              src={executiveTrainingPage.heroImage}
              alt=""
              className="wf-training-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-training-hero-overlay" />
          </div>
          <h1 id="training-hero-title" className="wf-training-hero-title">
            {executiveTrainingPage.title}
          </h1>
        </section>

        <Awards />

        <section className="wf-stages-main wf-training-body">
          <div className="wf-stages-inner">
            <div className="wf-stages-grid">
              {executiveTrainingPage.items.map((item) => (
                <article key={item.title} className="wf-stages-card wf-stages-card--photo">
                  <div className="wf-stages-card-media">
                    <img src={item.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="wf-stages-card-copy">
                    <h2 className="wf-stages-card-title">{item.title}</h2>
                    <p className="wf-stages-card-body">{item.body}</p>
                  </div>
                </article>
              ))}
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
    <TrainingPage />
  </StrictMode>,
)

dismissPreloader()
