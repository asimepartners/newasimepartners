import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, CogIcon, HandHelpingIcon, ViewIcon } from '@hugeicons/core-free-icons'
import { aboutContent } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'

export default function OurPeople() {
  return (
    <AnimatedSection id="our-people" className="wf-about">
      <div className="wf-about-shell" id="group">
        <FadeUp className="wf-about-header">
          <span className="wf-about-eyebrow">{aboutContent.eyebrow}</span>
          <h2 className="wf-about-title">{aboutContent.title}</h2>
          <p className="wf-about-sub">{aboutContent.subheading}</p>
        </FadeUp>

        <StaggerParent className="wf-ab3-grid">
          <StaggerItem className="wf-ab3-card">
            <span className="wf-ab3-icon" aria-hidden="true">
              <HugeiconsIcon icon={ViewIcon} size={34} strokeWidth={1.8} color="currentColor" />
            </span>
            <h3 className="wf-ab3-card-title">{aboutContent.vision.label}</h3>
            <p className="wf-ab3-card-body">{aboutContent.vision.body}</p>
          </StaggerItem>

          <StaggerItem className="wf-ab3-card">
            <span className="wf-ab3-icon" aria-hidden="true">
              <HugeiconsIcon icon={CogIcon} size={34} strokeWidth={1.8} color="currentColor" />
            </span>
            <h3 className="wf-ab3-card-title">{aboutContent.mission.label}</h3>
            <p className="wf-ab3-card-body">{aboutContent.mission.body}</p>
          </StaggerItem>

          <StaggerItem className="wf-ab3-card">
            <span className="wf-ab3-icon" aria-hidden="true">
              <HugeiconsIcon icon={HandHelpingIcon} size={34} strokeWidth={1.8} color="currentColor" />
            </span>
            <h3 className="wf-ab3-card-title">{aboutContent.values.label}</h3>
            <ul className="wf-ab3-values" aria-label={aboutContent.values.label}>
              {aboutContent.values.items.map((item) => (
                <li key={item.label} className="wf-ab3-value-line">
                  {item.full}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerParent>

        <FadeUp index={2} className="wf-about-cta-wrap">
          <a href={aboutContent.cta.href} className="wf-about-cta">
            {aboutContent.cta.label}
            <span className="wf-about-cta-arrow" aria-hidden="true">
              <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2.4} />
            </span>
          </a>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
