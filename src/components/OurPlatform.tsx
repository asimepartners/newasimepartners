import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { platformCards, platformIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

export default function OurPlatform() {
  return (
    <AnimatedSection id="platform" className="wf-work wf-platform">
      <div className="wf-work-grid-lines" aria-hidden="true" />

      <div className="wf-work-inner">
        <FadeUp className="wf-platform-head">
          <h2 className="wf-platform-title">{platformIntro.title}</h2>
          <p className="wf-platform-body">{platformIntro.body}</p>
        </FadeUp>

        <StaggerParent className="wf-work-cards wf-platform-cards">
          {platformCards.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <PhotoCard
                href={item.href}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
              />
            </StaggerItem>
          ))}
        </StaggerParent>

        <FadeUp className="wf-platform-foot" index={1}>
          <a href={platformIntro.ctaHref} className="wf-platform-cta">
            {platformIntro.ctaLabel}
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.4} />
          </a>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
