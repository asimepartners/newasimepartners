import { HugeiconsIcon } from '@hugeicons/react'
import { ChartIncreaseIcon, Briefcase01Icon, TestTube01Icon } from '@hugeicons/core-free-icons'
import { whatWeDoIntro, whatWeDoPillars } from '@/data/content'
import { AnimatedSection, FadeUp, BlurIn, StaggerParent, StaggerItem, motion } from './Motion'

const pillarIcons = [ChartIncreaseIcon, Briefcase01Icon, TestTube01Icon]

export default function WhatWeDo() {
  return (
    <AnimatedSection id="ventures" className="wf-whatwedo">
      <div className="container">

        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">{whatWeDoIntro.eyebrow}</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-5">
            <FadeUp>
              <h2 className="wf-display">
                {whatWeDoIntro.headline}<br />
                <span className="wf-display-accent">{whatWeDoIntro.headlineAccent}</span>
              </h2>
            </FadeUp>
          </div>
          <div className="col-lg-5 offset-lg-2 mt-4 mt-lg-0 d-flex align-items-end">
            <BlurIn>
              <p className="wf-prose">{whatWeDoIntro.body}</p>
            </BlurIn>
          </div>
        </div>

        <StaggerParent className="wf-pillars">
          {whatWeDoPillars.map((p, i) => (
            <StaggerItem key={p.number} index={i} className="wf-pillar">
              <motion.div
                className="wf-pillar-inner"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <div className="wf-pillar-top">
                  <span className="wf-pillar-icon">
                    <HugeiconsIcon icon={pillarIcons[i]} size={22} strokeWidth={1.5} color="currentColor" />
                  </span>
                </div>

                <h3 className="wf-pillar-title">{p.title}</h3>
                <p className="wf-pillar-body">{p.body}</p>

                <a href={p.href} className="wf-pillar-link">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

      </div>
    </AnimatedSection>
  )
}
