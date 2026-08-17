import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { executiveTrainingPage } from '@/data/executiveTraining'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PhotoCard from '@/components/PhotoCard'
import { StaggerParent, StaggerItem } from '@/components/Motion'
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

        <Awards title="Certifications" items={executiveTrainingPage.certifications} />

        <section className="wf-work wf-training-work" aria-label="Executive training programs">
          <div className="wf-work-grid-lines" aria-hidden="true" />
          <div className="wf-work-inner">
            <p className="wf-training-intro">{executiveTrainingPage.intro}</p>
            <StaggerParent className="wf-work-cards">
              {executiveTrainingPage.items.map((item, index) => (
                <StaggerItem key={item.title} index={index}>
                  <PhotoCard
                    image={item.image}
                    title={item.title}
                    description={item.body}
                    titleAs="h2"
                  />
                </StaggerItem>
              ))}
            </StaggerParent>
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
