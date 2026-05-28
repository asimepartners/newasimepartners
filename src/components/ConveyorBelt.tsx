import { conveyorSteps } from '@/data/content'
import { AnimatedSection, StaggerParent, StaggerItem, FadeUp, motion } from './Motion'

interface ConveyorBeltProps {
  embedded?: boolean
}

export default function ConveyorBelt({ embedded = false }: ConveyorBeltProps) {
  const content = (
    <div className={embedded ? 'wf-conveyor-embedded' : undefined}>
        <div className={`wf-section-eyebrow-row${embedded ? '' : ' wf-eyebrow-dark'}`}>
          <span className={`wf-eyebrow${embedded ? '' : ' wf-eyebrow-yellow'}`}>Our Process</span>
          <div className={`wf-hr${embedded ? '' : ' wf-hr-dark'}`} />
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <FadeUp>
              <h2 className={`wf-display${embedded ? '' : ' text-white'}`}>From Discovery<br />to Impact</h2>
            </FadeUp>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-end mt-3 mt-lg-0">
            <FadeUp index={1}>
              <p className="wf-prose-light">
                A disciplined approach to sourcing, evaluating, investing, and supporting gender-inclusive SMEs across Africa.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="wf-conveyor-row mt-5 pt-2">
          {conveyorSteps.map((step, i) => (
            <StaggerItem key={step.num} index={i} className="wf-conveyor-step">
              <div className="wf-conveyor-num-wrap">
                <span className="wf-conveyor-num">{step.num}</span>
                {i < conveyorSteps.length - 1 && (
                  <motion.div
                    className="wf-conveyor-line"
                    initial={{ scaleX: 0, opacity: 0.45 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 24, delay: i * 0.12 }}
                  >
                    <motion.span
                      className="wf-conveyor-line-glow"
                      aria-hidden="true"
                      initial={{ x: '-140%', opacity: 0 }}
                      animate={{ x: '220%', opacity: [0, 1, 0] }}
                      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.6, delay: i * 0.2 }}
                    />
                  </motion.div>
                )}
              </div>
              <div className="wf-conveyor-content">
                <h3 className="wf-conveyor-title">{step.title}</h3>
                <p className="wf-conveyor-desc">{step.description}</p>
                <span className="wf-conveyor-tag">{step.tag}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerParent>
    </div>
  )

  if (embedded) {
    return content
  }

  return (
    <AnimatedSection className="wf-band-dark">
      <div className="container">{content}</div>
    </AnimatedSection>
  )
}
