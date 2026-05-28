import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { highlightedWork, highlightedWorkIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function HighlightedWork() {
  return (
    <AnimatedSection id="our-work" className="wf-section wf-cb-work">
      <div className="container wf-cb-work-head">
        <FadeUp>
          <span className="wf-eyebrow">{highlightedWorkIntro.eyebrow}</span>
          <h2 className="wf-display mt-3">
            {highlightedWorkIntro.headline}
            <span className="wf-display-accent"> {highlightedWorkIntro.headlineAccent}</span>
          </h2>
        </FadeUp>
      </div>

      <StaggerParent className="wf-cb-work-list">
        {highlightedWork.map((item, index) => (
          <StaggerItem key={item.title} index={index} className="wf-cb-work-row">
            <motion.a
              href={item.href}
              className="wf-cb-work-item"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <div className="wf-cb-work-item-inner">
                <div className="wf-cb-work-meta">
                  <span className="wf-cb-work-platform">{item.platform}</span>
                  <span className="wf-cb-work-country">{item.country}</span>
                </div>
                <div className="wf-cb-work-copy">
                  <h3 className="wf-cb-work-title">{item.title}</h3>
                  <p className="wf-cb-work-desc">{item.description}</p>
                </div>
                <span className="wf-cb-work-more">
                  Read More
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} strokeWidth={2.5} />
                </span>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerParent>
    </AnimatedSection>
  )
}
