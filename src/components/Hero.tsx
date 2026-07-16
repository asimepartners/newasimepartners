import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { heroContent } from '@/data/content'
import { FadeUp, BlurIn, motion } from './Motion'

export default function Hero() {
  return (
    <section className="wf-hero wf-hero--advisory position-relative overflow-hidden" aria-label="Hero">
      <div className="wf-hero-media" aria-hidden="true">
        <motion.img
          src={heroContent.image}
          alt=""
          className="wf-hero-photo"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="wf-hero-overlay" />
      </div>

      <div className="wf-hero-inner">
        <div className="wf-hero-copy">
          <BlurIn>
            <h1 className="wf-hero-h1 wf-hero-h1--advisory">
              <span className="wf-hero-h1-line">{heroContent.headline}</span>
              {heroContent.headlineAccent ? (
                <>
                  {'\n'}
                  <span className="wf-hero-accent">{heroContent.headlineAccent}</span>
                </>
              ) : null}
            </h1>
          </BlurIn>

          <FadeUp index={1}>
            <p className="wf-hero-sub wf-hero-sub--advisory">{heroContent.subheadline}</p>
          </FadeUp>
        </div>

        <div className="wf-hero-bottom">
          <FadeUp index={3}>
            <a className="wf-hero-scroll-label" href="#advisory">
              {heroContent.scrollLabel}
              <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2} />
            </a>
          </FadeUp>

          <FadeUp index={4}>
            <p className="wf-hero-focus">{heroContent.focusAreas}</p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
