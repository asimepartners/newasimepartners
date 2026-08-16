import { highlightedWork, highlightedWorkIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

export default function HighlightedWork() {
  return (
    <AnimatedSection id="our-work" className="wf-work">
      <div className="wf-work-grid-lines" aria-hidden="true" />

      <div className="wf-work-inner">
        <FadeUp className="wf-work-head">
          <span className="wf-work-eyebrow">{highlightedWorkIntro.eyebrow}</span>
          <h2 className="wf-work-title">
            {highlightedWorkIntro.headline} {highlightedWorkIntro.headlineAccent}
          </h2>
        </FadeUp>

        <StaggerParent className="wf-work-cards">
          {highlightedWork.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <PhotoCard
                id={item.id}
                href={item.href}
                image={item.image}
                category={item.platform}
                meta={item.country}
                title={item.title}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
