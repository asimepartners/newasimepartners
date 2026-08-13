import { businessLines } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

const pillars = [
  { id: 'advisory', index: '01', line: businessLines.advisory },
  { id: 'management', index: '02', line: businessLines.management },
  { id: 'technology', index: '03', line: businessLines.tech },
] as const

export default function BusinessPillars() {
  return (
    <AnimatedSection className="wf-lines">
      <div className="wf-lines-inner">
        <FadeUp className="wf-lines-intro">
          <span className="wf-lines-intro-eyebrow">What We Do</span>
          <h2 className="wf-lines-intro-title">
            Advisory and Capital Platforms Built for African Growth
          </h2>
        </FadeUp>

        <StaggerParent className="wf-lines-grid">
          {pillars.map(({ id, index, line }) => (
            <StaggerItem key={id}>
              <PhotoCard
                id={id}
                href={line.href}
                image={line.image}
                imageAlt={line.imageAlt}
                category={`${index} · ${line.eyebrow}`}
                title={line.title}
                description={line.description}
                cta={line.cta}
                titleAs="h2"
              />
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
