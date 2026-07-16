import { HugeiconsIcon } from '@hugeicons/react'
import {
  BulbIcon,
  ManWomanIcon,
  Shield01Icon,
  Timer02Icon,
  UserGroupIcon,
  ViewIcon,
} from '@hugeicons/core-free-icons'
import { aboutContent } from '@/data/content'
import { AnimatedSection, FadeUp, motion } from './Motion'

const valueIcons = {
  people: UserGroupIcon,
  inclusivity: ManWomanIcon,
  resilience: Shield01Icon,
  innovation: BulbIcon,
} as const

export default function OurPeople() {
  return (
    <AnimatedSection id="our-people" className="wf-about">
      <div className="wf-about-shell" id="group">
        <div className="wf-about-top">
          <FadeUp className="wf-about-header">
            <span className="wf-about-eyebrow">{aboutContent.eyebrow}</span>
            <h2 className="wf-about-title">{aboutContent.title}</h2>
            <p className="wf-about-sub">{aboutContent.subheading}</p>
          </FadeUp>

          <FadeUp index={1} className="wf-about-values-card">
            <ul className="wf-about-values-zigzag" aria-label={aboutContent.values.label}>
              {aboutContent.values.items.map((item) => (
                <li key={item.label} className="wf-about-value-item" title={item.full}>
                  <span className="wf-about-value-icon" aria-hidden="true">
                    <HugeiconsIcon
                      icon={valueIcons[item.icon]}
                      size={48}
                      strokeWidth={1.5}
                      color="currentColor"
                    />
                  </span>
                  <span className="wf-about-value-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        <div className="wf-about-lower">
          <FadeUp index={2} className="wf-about-vm">
            <article className="wf-about-vm-col">
              <h3 className="wf-about-vm-heading">
                <HugeiconsIcon icon={ViewIcon} size={28} strokeWidth={1.6} color="currentColor" />
                {aboutContent.vision.label}
              </h3>
              <p className="wf-about-vm-body">{aboutContent.vision.body}</p>
            </article>

            <div className="wf-about-vm-divider" aria-hidden="true" />

            <article className="wf-about-vm-col">
              <h3 className="wf-about-vm-heading">
                <HugeiconsIcon icon={Timer02Icon} size={28} strokeWidth={1.6} color="currentColor" />
                {aboutContent.mission.label}
              </h3>
              <p className="wf-about-vm-body">{aboutContent.mission.body}</p>
            </article>
          </FadeUp>

          <FadeUp index={3} className="wf-about-cta-wrap">
            <motion.a
              href={aboutContent.cta.href}
              className="wf-about-cta"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              {aboutContent.cta.label}
            </motion.a>
          </FadeUp>
        </div>
      </div>
    </AnimatedSection>
  )
}
