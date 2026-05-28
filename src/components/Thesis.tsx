import { HugeiconsIcon } from '@hugeicons/react'
import { Leaf01Icon, ManWomanIcon, Briefcase01Icon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { investmentThesisAreas, thesisIntro } from '@/data/content'
import { AnimatedSection, FadeUp, SlideRight, StaggerParent, StaggerItem, motion } from './Motion'

const thesisIcons: IconSvgElement[] = [
  ManWomanIcon,
  Leaf01Icon,
  Briefcase01Icon,
]

export default function Thesis() {
  return (
    <AnimatedSection id="thesis" className="wf-section">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">{thesisIntro.eyebrow}</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-5">
            <SlideRight>
              <h2 className="wf-display">{thesisIntro.headline}</h2>
            </SlideRight>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
            {thesisIntro.body.map((para, i) => (
              <FadeUp key={i} index={i}>
                <p className="wf-prose">{para}</p>
              </FadeUp>
            ))}
          </div>
        </div>

        <StaggerParent className="row g-4 mt-5 pt-lg-3">
          {investmentThesisAreas.map((area, i) => (
            <StaggerItem key={area.title} index={i} className="col-md-6 col-lg-4">
              <motion.div
                className="wf-card-minimal"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="wf-card-icon">
                  <HugeiconsIcon icon={thesisIcons[i]} size={28} strokeWidth={1.5} color="currentColor" />
                </span>
                <h3 className="wf-card-heading">{area.title}</h3>
                <p className="wf-card-body">{area.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
