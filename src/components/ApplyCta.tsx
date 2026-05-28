import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  AiInnovation01Icon,
  AiNetworkIcon,
  Briefcase01Icon,
  ChartIncreaseIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { applyCta, siteBrand } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

const workWithUsPaths: {
  label: string
  hint: string
  href: string
  icon: IconSvgElement
}[] = [
  {
    label: 'Partner With Us',
    hint: 'Co-investments & strategic collaboration',
    href: '#work-with-us',
    icon: AiNetworkIcon,
  },
  {
    label: 'Apply to Chale Fund',
    hint: 'Impact capital for qualifying ventures',
    href: `mailto:${siteBrand.email}?subject=Chale%20Fund%20Application`,
    icon: ChartIncreaseIcon,
  },
  {
    label: 'Apply as Tech Startup',
    hint: 'Venture & angel investment pathways',
    href: `mailto:${siteBrand.email}?subject=Tech%20Startup%20Application`,
    icon: AiInnovation01Icon,
  },
  {
    label: 'Apply SME/MSME/SGB',
    hint: 'Growth capital & advisory support',
    href: `mailto:${siteBrand.email}?subject=SME%2FMSME%2FSGB%20Application`,
    icon: Briefcase01Icon,
  },
]

export default function ApplyCta() {
  return (
    <AnimatedSection id="apply" className="wf-section-cta wf-section-cta--full">
      <div className="wf-wwu-card">
        <div className="wf-wwu-shell">
          <div className="container wf-wwu-inner">
            <FadeUp className="wf-wwu-header">
              <span className="wf-wwu-eyebrow">Work With Us</span>
              <h2 className="wf-display wf-wwu-title">{applyCta.headline}</h2>
              <p className="wf-prose wf-wwu-prose">{applyCta.body}</p>
              <motion.a
                href={`mailto:${siteBrand.email}`}
                className="wf-wwu-contact"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                Email us directly
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2.5} />
              </motion.a>
            </FadeUp>

            <StaggerParent className="wf-wwu-paths wf-wwu-paths--full">
              {workWithUsPaths.map((path, index) => (
                <StaggerItem key={path.label} index={index} className="wf-wwu-path-col">
                  <motion.a
                    href={path.href}
                    className="wf-wwu-path"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  >
                    <span className="wf-wwu-path-icon">
                      <HugeiconsIcon icon={path.icon} size={28} strokeWidth={1.6} color="currentColor" />
                    </span>
                    <span className="wf-wwu-path-copy">
                      <span className="wf-wwu-path-label">{path.label}</span>
                      <span className="wf-wwu-path-hint">{path.hint}</span>
                    </span>
                    <span className="wf-wwu-path-arrow" aria-hidden="true">
                      <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2.5} />
                    </span>
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerParent>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
