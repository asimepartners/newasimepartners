import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ourWorkPage } from '@/data/content'
import { dismissPreloader } from '@/utils/dismissPreloader'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import HighlightedWork from '@/components/HighlightedWork'
import Insights from '@/components/Insights'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function WorkPage() {
  useSmoothScroll()

  return (
    <div className="wf-stages-page">
      <Navbar variant="solid" />

      <main>
        <section className="wf-training-hero" aria-labelledby="work-hero-title">
          <div className="wf-training-hero-media" aria-hidden="true">
            <img
              src={ourWorkPage.heroImage}
              alt=""
              className="wf-training-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-training-hero-overlay" />
          </div>
          <h1 id="work-hero-title" className="wf-training-hero-title">
            {ourWorkPage.title}
          </h1>
        </section>

        <Insights />
        <HighlightedWork
          eyebrow={ourWorkPage.trackRecordEyebrow}
          intro={ourWorkPage.trackRecordIntro}
        />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkPage />
  </StrictMode>,
)

dismissPreloader()
