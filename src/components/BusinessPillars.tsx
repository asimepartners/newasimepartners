import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { businessLines } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'
import Magnetic from './Magnetic'

type PillarLine = (typeof businessLines)['advisory']

function PillarCta({ href, label }: { href: string; label: string }) {
  return (
    <Magnetic strength={0.22} className="wf-lines-cta-magnetic">
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
    </Magnetic>
  )
}

function LinePanel({
  id,
  index,
  line,
}: {
  id: string
  index: string
  line: PillarLine
}) {
  return (
    <article id={id} className="wf-lines-panel">
      <div className="wf-lines-panel-media">
        <img src={line.image} alt={line.imageAlt} className="wf-lines-panel-img" loading="lazy" decoding="async" />
      </div>

      <div className="wf-lines-panel-body">
        <div className="wf-lines-panel-meta">
          <span className="wf-lines-panel-index">{index}</span>
          <span className="wf-lines-panel-eyebrow">{line.eyebrow}</span>
        </div>

        <h2 className="wf-lines-panel-title">{line.title}</h2>

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
            <LinePanel id="advisory" index="01" line={businessLines.advisory} />
          </StaggerItem>
          <StaggerItem>
            <LinePanel id="management" index="02" line={businessLines.management} />
          </StaggerItem>
          <StaggerItem>
            <LinePanel id="technology" index="03" line={businessLines.tech} />
          </StaggerItem>
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
