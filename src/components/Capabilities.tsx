import { sectorsIntro, thesisAreas } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

export default function Capabilities() {
  return (
    <div id="capabilities" className="wf-capabilities">
      <AnimatedSection id="sectors" className="wf-sec2">
        <div className="wf-sec2-inner">
          <FadeUp className="wf-sec2-head">
            <span className="wf-sec2-eyebrow">{sectorsIntro.eyebrow}</span>
            <h2 className="wf-sec2-title">{sectorsIntro.headline}</h2>
            <p className="wf-sec2-lead">{sectorsIntro.lead}</p>
          </FadeUp>

          <StaggerParent className="wf-sec2-grid wf-photo-card-grid">
            {thesisAreas.map((area, index) => (
              <StaggerItem key={area.title} index={index}>
                <PhotoCard
                  image={area.image ?? ''}
                  imageAlt={area.title}
                  title={area.title}
                  description={area.description}
                />
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </AnimatedSection>
    </div>
  )
}
