import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { heroContent } from '@/data/content'
import { FadeUp, BlurIn, motion } from './Motion'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="wf-hero position-relative overflow-hidden">
      <HeroParticles />
      <div className="container position-relative wf-hero-content">
        <div className="wf-hero-center wf-hero-center--purpose">
          <BlurIn>
            <p className="wf-hero-purpose-eyebrow">{heroContent.eyebrow}</p>
          </BlurIn>
          <FadeUp>
            <h1 className="wf-hero-h1 wf-hero-h1--purpose">
              {heroContent.headline}
              {heroContent.headlineAccent ? (
                <span className="wf-hero-accent">{heroContent.headlineAccent}</span>
              ) : null}
            </h1>
          </FadeUp>
          <FadeUp index={1}>
            <p className="wf-hero-sub">{heroContent.subheadline}</p>
          </FadeUp>
          <FadeUp index={2}>
            <div className="wf-hero-actions">
              <motion.a
                className="wf-btn wf-btn-primary-hero"
                href={heroContent.ctaSecondary.href}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {heroContent.ctaSecondary.label}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={22} strokeWidth={2.5} className="ms-2" />
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>

      <FadeUp index={3}>
        <div className="wf-hero-scroll">
          <div className="wf-hero-scroll-line" />
        </div>
      </FadeUp>
    </section>
  )
}
