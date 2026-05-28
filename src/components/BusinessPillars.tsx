import {
  businessLines,
  investmentPlatforms,
  type InvestmentPlatform,
} from '@/data/content'
import { AnimatedSection, FadeUp } from './Motion'

type PillarLine = (typeof businessLines)['advisory']

function PillarCta({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="wf-bl-pillar-cta">
      <span>{label}</span>
      <span className="wf-bl-pillar-cta-arrow" aria-hidden>
        →
      </span>
    </a>
  )
}

function BusinessPillar({
  id,
  variant,
  line,
  platforms,
  fadeIndex = 0,
}: {
  id: string
  variant: 'advisory' | 'management'
  line: PillarLine
  platforms?: InvestmentPlatform[]
  fadeIndex?: number
}) {
  return (
    <FadeUp index={fadeIndex} className="wf-business-lines-item">
      <article id={id} className={`wf-bl-pillar wf-bl-pillar--${variant}`}>
        <div className="wf-bl-pillar-visual">
          <img
            src={line.image}
            alt={line.imageAlt}
            className="wf-bl-pillar-img"
            loading="lazy"
          />
        </div>
        <div className="wf-bl-pillar-content">
          <div className="wf-bl-pillar-head">
            <span className="wf-eyebrow wf-bl-pillar-eyebrow">{line.eyebrow}</span>
            <h2 className="wf-bl-pillar-title">{line.title}</h2>
            <p className="wf-bl-pillar-lead">{line.summary}</p>
          </div>
          <p className="wf-bl-pillar-desc">{line.description}</p>
          {platforms && platforms.length > 0 && (
            <ul className="wf-bl-pillar-platforms">
              {platforms.map((platform) => (
                <li key={platform.name}>
                  <a href={platform.href} className="wf-bl-pillar-platform">
                    <span className="wf-bl-pillar-platform-name">{platform.name}</span>
                    <span className="wf-bl-pillar-platform-desc">{platform.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
          <PillarCta href={line.href} label={line.cta} />
        </div>
      </article>
    </FadeUp>
  )
}

export default function BusinessPillars() {
  return (
    <AnimatedSection className="wf-section wf-business-lines">
      <div className="container wf-business-lines-inner">
        <BusinessPillar
          id="advisory"
          variant="advisory"
          line={businessLines.advisory}
          fadeIndex={0}
        />
        <BusinessPillar
          id="management"
          variant="management"
          line={businessLines.management}
          platforms={investmentPlatforms}
          fadeIndex={1}
        />
      </div>
    </AnimatedSection>
  )
}
