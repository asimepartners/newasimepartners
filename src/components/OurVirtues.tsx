import { virtues, virtuesIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'

export default function OurVirtues() {
  return (
    <AnimatedSection id="virtues" className="wf-band-dark wf-cb-virtues">
      <div className="container">
        <FadeUp>
          <span className="wf-eyebrow">{virtuesIntro.eyebrow}</span>
          <h2 className="wf-display text-white mt-3">
            {virtuesIntro.headline}
            <span className="wf-hero-accent"> {virtuesIntro.headlineAccent}</span>
          </h2>
          <a href={virtuesIntro.href} className="wf-cb-virtues-link mt-3">
            {virtuesIntro.linkLabel}
          </a>
        </FadeUp>

        <StaggerParent className="wf-cb-virtues-grid mt-5">
          {virtues.map((virtue, index) => (
            <StaggerItem key={virtue.phrase} index={index}>
              <article className="wf-cb-virtue-card">
                <p className="wf-cb-virtue-lead">{virtue.title}</p>
                <p className="wf-cb-virtue-phrase">{virtue.phrase}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
