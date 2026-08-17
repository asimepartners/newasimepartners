import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { insightCards, insightsIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

export default function Insights() {
  return (
    <AnimatedSection id="insights" className="wf-news2">
      <div className="wf-news2-inner">
        <FadeUp className="wf-news2-head">
          <h2 className="wf-news2-title">
            <span className="wf-news2-title-accent">{insightsIntro.headlineAccent}</span>{' '}
            {insightsIntro.headlineRest}
          </h2>
          <p className="wf-news2-sub">{insightsIntro.body}</p>
        </FadeUp>

        <StaggerParent className="wf-news2-grid wf-work-cards wf-photo-card-grid">
          {insightCards.map((card, index) => (
            <StaggerItem key={card.title} index={index}>
              <PhotoCard
                image={card.image}
                category={card.platform}
                meta={card.date}
                title={card.title}
              />
            </StaggerItem>
          ))}
        </StaggerParent>

        <FadeUp className="wf-news2-foot" index={1}>
          <a
            href={insightsIntro.readMoreHref}
            target="_blank"
            rel="noreferrer"
            className="wf-news2-readmore"
          >
            {insightsIntro.readMoreLabel}
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.4} />
          </a>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
