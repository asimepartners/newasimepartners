import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { platformCards, platformIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

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
              <motion.a
                href={item.href}
                className="wf-case-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div className="wf-case-media">
                  <img
                    src={item.image}
                    alt=""
                    className="wf-case-media-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="wf-case-content">
                  <span className="wf-case-category">{item.category}</span>
                  <h3 className="wf-case-question">{item.title}</h3>
                  <p className="wf-case-desc">{item.description}</p>
                </div>
              </motion.a>
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
