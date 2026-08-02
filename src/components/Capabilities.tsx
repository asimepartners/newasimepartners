import { sectorsIntro, thesisAreas } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Capabilities() {
  return (
    <div className="wf-capabilities">
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
