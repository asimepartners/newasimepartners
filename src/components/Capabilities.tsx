import { capabilitiesIntro, diligenceCards, sectorsIntro, thesisAreas } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Capabilities() {
  return (
    <div className="wf-capabilities">
      <div className="wf-capabilities-watermark" aria-hidden="true">
        <img
          className="wf-capabilities-watermark-img"
          src="/images/africa-map.svg"
          alt=""
          width={1525}
          height={1440}
          decoding="async"
        />
      </div>

      <AnimatedSection id="capabilities" className="wf-section wf-capabilities-section">
        <div className="container wf-capabilities-content">
          <FadeUp>
            <span className="wf-eyebrow">{capabilitiesIntro.eyebrow}</span>
            <h2 className="wf-display mt-3">{capabilitiesIntro.headline}</h2>
          </FadeUp>
          <StaggerParent className="row g-4 mt-4">
            {diligenceCards.slice(0, 4).map((card, index) => (
              <StaggerItem key={card.title} index={index} className="col-md-6">
                <motion.div className="wf-diligence-card" whileHover={{ y: -4 }}>
                  <div className="wf-eyebrow mb-3">{card.label}</div>
                  <h3 className="wf-card-heading">{card.title}</h3>
                  <p className="wf-card-body mt-3">{card.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sectors" className="wf-section wf-section-grey wf-capabilities-section">
        <div className="container wf-capabilities-content">
          <FadeUp>
            <span className="wf-eyebrow">{sectorsIntro.eyebrow}</span>
            <h2 className="wf-display mt-3">{sectorsIntro.headline}</h2>
          </FadeUp>
          <StaggerParent className="row g-4 mt-4">
            {thesisAreas.map((area, index) => (
              <StaggerItem key={area.title} index={index} className="col-md-6 col-lg-4">
                <motion.div className="wf-card-minimal" whileHover={{ y: -4 }}>
                  <h3 className="wf-card-heading">{area.title}</h3>
                  <p className="wf-card-body">{area.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </AnimatedSection>
    </div>
  )
}
