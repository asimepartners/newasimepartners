import { diligenceCards, advisoryContent } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Advisory() {
  return (
    <AnimatedSection id="framework" className="wf-section wf-section-grey wf-advisory-section">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">ADVISORY</span>
          <div className="wf-hr" />
        </div>

        <div className="wf-advisory-shell">
          <div className="row align-items-start g-4">
            <div className="col-lg-8">
              <FadeUp>
                <h2 className="wf-display wf-advisory-title">{advisoryContent.title}</h2>
              </FadeUp>
              <FadeUp index={1}>
                <p className="wf-prose wf-advisory-prose mt-4">{advisoryContent.body}</p>
              </FadeUp>
            </div>
          </div>
        </div>

        <StaggerParent className="row g-4 mt-3">
          {diligenceCards.map((card, index) => (
            <StaggerItem key={card.title} index={index} className="col-md-6">
              <motion.div
                className="wf-diligence-card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <div className="wf-eyebrow mb-3">{card.label}</div>
                <h3 className="wf-card-heading">{card.title}</h3>
                <p className="wf-card-body mt-3">{card.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
