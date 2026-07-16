import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import {
  advisoryFocusAreas,
  businessLines,
  investmentPlatforms,
  type InvestmentPlatform,
} from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

type PillarLine = (typeof businessLines)['advisory']

function PillarCta({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      className="wf-lines-cta"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <span>{label}</span>
      <span className="wf-lines-cta-icon" aria-hidden="true">
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.5} />
      </span>
    </motion.a>
  )
}

function LinePanel({
  id,
  index,
  line,
  platforms,
}: {
  id: string
  index: string
  line: PillarLine
  platforms?: InvestmentPlatform[]
}) {
  return (
    <article id={id} className="wf-lines-panel">
      <div className="wf-lines-panel-media">
        <img src={line.image} alt={line.imageAlt} className="wf-lines-panel-img" loading="lazy" />
      </div>

      <div className="wf-lines-panel-body">
        <div className="wf-lines-panel-meta">
          <span className="wf-lines-panel-index">{index}</span>
          <span className="wf-lines-panel-eyebrow">{line.eyebrow}</span>
        </div>

        <h2 className="wf-lines-panel-title">{line.title}</h2>
        <p className="wf-lines-panel-lead">{line.summary}</p>
        <p className="wf-lines-panel-desc">{line.description}</p>

        {platforms && platforms.length > 0 ? (
          <ul className="wf-lines-platforms">
            {platforms.map((platform) => (
              <li key={platform.name}>
                <a href={platform.href} className="wf-lines-platform">
                  {platform.name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <PillarCta href={line.href} label={line.cta} />
      </div>
    </article>
  )
}

export default function BusinessPillars() {
  return (
    <AnimatedSection className="wf-lines">
      <div className="wf-lines-inner">
        <FadeUp className="wf-lines-intro">
          <span className="wf-lines-intro-eyebrow">What we do</span>
          <h2 className="wf-lines-intro-title">
            Advisory and capital platforms built for African growth
          </h2>
        </FadeUp>

        <StaggerParent className="wf-lines-grid">
          <StaggerItem>
            <LinePanel
              id="advisory"
              index="01"
              line={businessLines.advisory}
              platforms={advisoryFocusAreas}
            />
          </StaggerItem>
          <StaggerItem>
            <LinePanel
              id="management"
              index="02"
              line={businessLines.management}
              platforms={investmentPlatforms}
            />
          </StaggerItem>
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
