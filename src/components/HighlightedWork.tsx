import { HugeiconsIcon } from '@hugeicons/react'
import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { highlightedWork, highlightedWorkIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

const MEDIA_VARIANTS = ['spheres', 'turbine', 'waveform'] as const

export default function HighlightedWork() {
  return (
    <AnimatedSection id="our-work" className="wf-work">
      <div className="wf-work-grid-lines" aria-hidden="true" />

      <div className="wf-work-inner">
        <FadeUp className="wf-work-head">
          <span className="wf-work-mark" aria-hidden="true">
            <HugeiconsIcon icon={PlusSignIcon} size={40} strokeWidth={1} />
          </span>
          <h2 className="wf-work-title">
            {highlightedWorkIntro.headline}
            <br />
            {highlightedWorkIntro.headlineAccent}
          </h2>
        </FadeUp>

        <StaggerParent className="wf-work-cards">
          {highlightedWork.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <motion.a
                href={item.href}
                className="wf-case-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div className="wf-case-content">
                  <div className="wf-case-meta">
                    <span className="wf-case-category">{item.platform}</span>
                    <span className="wf-case-country">{item.country}</span>
                  </div>
                  <h3 className="wf-case-question">{item.title}</h3>
                  <p className="wf-case-desc">{item.description}</p>
                  <span className="wf-case-plus" aria-hidden="true">
                    <HugeiconsIcon icon={PlusSignIcon} size={24} strokeWidth={2.5} />
                  </span>
                </div>
                <div
                  className={`wf-case-media wf-case-media--${MEDIA_VARIANTS[index % MEDIA_VARIANTS.length]}`}
                  aria-hidden="true"
                />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
