import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { businessLines } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

const pillars = [
  { id: 'advisory', line: businessLines.advisory },
  { id: 'management', line: businessLines.management },
  { id: 'technology', line: businessLines.tech },
] as const

export default function BusinessPillars() {
  return (
    <AnimatedSection id="our-capabilities" className="wf-lines">
      <div className="wf-lines-inner">
        <FadeUp className="wf-lines-intro">
          <span className="wf-lines-intro-eyebrow">Our Capabilities</span>
          <h2 className="wf-lines-intro-title">
            Advisory & Capital Platforms Built for African Growth
          </h2>
        </FadeUp>

        <StaggerParent className="wf-lines-grid">
          {pillars.map(({ id, line }) => (
            <StaggerItem key={id}>
              <PhotoCard
                href={line.href}
                image={line.image}
                imageAlt={line.imageAlt}
                category={line.eyebrow}
                title={line.title}
                description={line.description}
                cta={line.cta}
                titleAs="h2"
              />
            </StaggerItem>
          ))}
        </StaggerParent>

        <FadeUp className="wf-lines-foot" index={1}>
          <a href="/work.html" className="wf-platform-cta">
            Our Work
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.4} />
          </a>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
