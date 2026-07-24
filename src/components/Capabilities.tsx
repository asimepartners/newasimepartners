import { capabilitiesIntro, diligenceCards, sectorsIntro, thesisAreas } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Capabilities() {
  return (
    <div className="wf-capabilities">
      <AnimatedSection id="capabilities" className="wf-cap2">
        <div className="wf-cap2-inner">
          <FadeUp className="wf-cap2-head">
            <span className="wf-cap2-eyebrow">{capabilitiesIntro.eyebrow}</span>
            <h2 className="wf-cap2-title">{capabilitiesIntro.headline}</h2>
            <p className="wf-cap2-lead">{capabilitiesIntro.lead}</p>
          </FadeUp>

          <StaggerParent className="wf-cap2-grid">
            {diligenceCards.map((card, index) => (
              <StaggerItem key={card.title} index={index}>
                <motion.article
                  className="wf-cap2-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <span className="wf-cap2-card-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="wf-cap2-card-label">{card.label}</span>
                  <h3 className="wf-cap2-card-title">{card.title}</h3>
                  <p className="wf-cap2-card-body">{card.description}</p>
                  <span className="wf-cap2-card-line" aria-hidden="true" />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </AnimatedSection>

      <AnimatedSection id="sectors" className="wf-sec2">
        <div className="wf-sec2-inner">
          <FadeUp className="wf-sec2-head">
            <span className="wf-sec2-eyebrow">{sectorsIntro.eyebrow}</span>
            <h2 className="wf-sec2-title">{sectorsIntro.headline}</h2>
            <p className="wf-sec2-lead">{sectorsIntro.lead}</p>
          </FadeUp>

          <StaggerParent className="wf-sec2-grid">
            {thesisAreas.map((area, index) => (
              <StaggerItem key={area.title} index={index}>
                <motion.article
                  className="wf-sec2-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="wf-sec2-card-media">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="wf-sec2-card-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="wf-sec2-card-icon" aria-hidden="true">
                      {area.icon}
                    </span>
                  </div>
                  <div className="wf-sec2-card-body">
                    <h3 className="wf-sec2-card-title">{area.title}</h3>
                    <p className="wf-sec2-card-text">{area.description}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </AnimatedSection>
    </div>
  )
}
