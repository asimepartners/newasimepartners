import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  SparklesIcon,
  Rocket01Icon,
  ChartIncreaseIcon,
  Briefcase01Icon,
  BankIcon,
  FlowConnectionIcon,
} from '@hugeicons/core-free-icons'
import { stagesPage } from '@/data/stages'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

const STAGE_ICONS = {
  'Pre-Seed': SparklesIcon,
  Seed: Rocket01Icon,
  'Series A': ChartIncreaseIcon,
  'SME/SGBs': Briefcase01Icon,
  'Large Companies': BankIcon,
  'Infrastructure/Projects': FlowConnectionIcon,
} as const

function StagesPage() {
  return (
    <div className="wf-stages-page">
      <Navbar variant="solid" />

      <main>
        <section className="wf-training-hero" aria-labelledby="stages-hero-title">
          <div className="wf-training-hero-media" aria-hidden="true">
            <img
              src={stagesPage.heroImage}
              alt=""
              className="wf-training-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-training-hero-overlay" />
          </div>
          <h1 id="stages-hero-title" className="wf-training-hero-title">
            {stagesPage.title}
          </h1>
        </section>

        <section className="wf-stages-main" aria-label="Investment stages">
        <div className="wf-stages-inner">
          <header className="wf-stages-head">
            <p className="wf-stages-intro">{stagesPage.intro}</p>
          </header>

          <div className="wf-stages-grid">
            {stagesPage.items.map((item) => (
              <article key={item.title} className="wf-stages-card">
                <span className="wf-stages-card-icon" aria-hidden="true">
                  <HugeiconsIcon
                    icon={STAGE_ICONS[item.title as keyof typeof STAGE_ICONS]}
                    size={25}
                    strokeWidth={1.8}
                  />
                </span>
                <h2 className="wf-stages-card-title">{item.title}</h2>
                <p className="wf-stages-card-body">{item.body}</p>
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
    <StagesPage />
  </StrictMode>,
)

dismissPreloader()
