import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { heroContent } from '@/data/content'
import { FadeUp, BlurIn, motion } from './Motion'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [phrases])

  if (prefersReducedMotion) {
    return <span className="wf-hero-type">{phrases.join(' · ')}</span>
  }

  return (
    <span className="wf-hero-type" aria-label={phrases.join(', ')}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="wf-hero-type-word"
          aria-hidden="true"
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="wf-hero wf-hero--advisory position-relative overflow-hidden" aria-label="Hero">
      <div className="wf-hero-media" aria-hidden="true">
        <motion.img
          src={heroContent.image}
          alt=""
          className="wf-hero-photo"
          decoding="async"
          fetchPriority="high"
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

          <FadeUp index={2}>
            <p className="wf-hero-typeline">
              <Typewriter phrases={heroContent.typingPhrases} />
            </p>
          </FadeUp>
        </div>

        <div className="wf-hero-bottom">
          <FadeUp index={3}>
            <a className="wf-hero-scroll-label" href="#advisory">
              {heroContent.scrollLabel}
              <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2} />
            </a>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
