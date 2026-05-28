import { HugeiconsIcon } from '@hugeicons/react'
import { AiBrain01Icon, AiBrain05Icon, Leaf01Icon, Briefcase01Icon, ManWomanIcon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { thesisAreas, howWeInvestIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'

const investIcons: IconSvgElement[] = [
  Leaf01Icon,
  Briefcase01Icon,
  AiBrain01Icon,
  ManWomanIcon,
  AiBrain05Icon,
]

export default function HowWeInvest() {
  return (
    <AnimatedSection id="how-we-invest" className="wf-section wf-section-how-we-invest">
      <div className="container">
        <div className="wf-how-invest-shell">
          <div className="row align-items-start g-4">
            <div className="col-lg-7">
              <FadeUp>
                <h2 className="wf-display wf-how-invest-title">{howWeInvestIntro.title}</h2>
              </FadeUp>
              <FadeUp index={1}>
                <p className="wf-prose wf-how-invest-prose mt-4">
                  {howWeInvestIntro.body}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>

        <StaggerParent className="row g-4 wf-how-invest-cards">
          {thesisAreas.map((area, index) => (
            <StaggerItem key={`${area.title}-how-we-invest`} index={index} className="col-md-6 col-xl-4">
              <article className="wf-how-invest-card">
                <span className="wf-how-invest-card-icon">
                  <HugeiconsIcon icon={investIcons[index]} size={28} strokeWidth={1.5} color="currentColor" />
                </span>
                <h3 className="wf-card-heading wf-how-invest-card-title">{area.title}</h3>
                <p className="wf-card-body wf-how-invest-card-body">{area.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
