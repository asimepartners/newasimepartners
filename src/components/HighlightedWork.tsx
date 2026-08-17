import { highlightedWork, highlightedWorkIntro, type HighlightedWorkItem } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

type HighlightedWorkProps = {
  eyebrow?: string
  headline?: string
  headlineAccent?: string
  intro?: string
}

function renderDescription(item: HighlightedWorkItem) {
  if (!item.descriptionParts?.length) return item.description

  return (
    <>
      {item.descriptionParts.map((part, index) =>
        part.type === 'text' ? (
          <span key={index}>{part.value}</span>
        ) : (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="wf-photo-card-desc-link"
          >
            {part.label}
          </a>
        ),
      )}
    </>
  )
}

export default function HighlightedWork({
  eyebrow = highlightedWorkIntro.eyebrow,
  headline = highlightedWorkIntro.headline,
  headlineAccent = highlightedWorkIntro.headlineAccent,
  intro,
}: HighlightedWorkProps) {
  return (
    <AnimatedSection id="our-work" className="wf-work">
      <div className="wf-work-grid-lines" aria-hidden="true" />

      <div className="wf-work-inner">
        <FadeUp className="wf-work-head">
          <span className="wf-work-eyebrow">{eyebrow}</span>
          {intro ? (
            <p className="wf-work-intro">{intro}</p>
          ) : (
            <h2 className="wf-work-title">
              {headline} {headlineAccent}
            </h2>
          )}
        </FadeUp>

        <StaggerParent className="wf-work-cards">
          {highlightedWork.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <PhotoCard
                id={item.id}
                image={item.image}
                category={item.platform}
                title={item.title}
                description={renderDescription(item)}
              />
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
