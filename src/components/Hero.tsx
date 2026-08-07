import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { heroContent } from '@/data/content'
import { FadeUp, BlurIn, motion } from './Motion'

const CYCLE_MS = 3200
const FADE_S = 0.7

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const slides = heroContent.slides ?? [heroContent.image]
  const phrases = heroContent.typingPhrases
  const cycleLength = Math.max(slides.length, phrases.length, 1)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion || cycleLength < 2) return
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % cycleLength)
    }, CYCLE_MS)
    return () => window.clearInterval(timer)
  }, [cycleLength])

  const slideSrc = slides[index % slides.length]
  const phrase = phrases[index % phrases.length]

  return (
    <section className="wf-hero wf-hero--advisory position-relative overflow-hidden" aria-label="Hero">
      <div className="wf-hero-media" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.img
            key={slideSrc}
            src={slideSrc}
            alt=""
            className="wf-hero-photo"
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            initial={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.04 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.01 }}
            transition={{
              opacity: { duration: FADE_S, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: CYCLE_MS / 1000, ease: 'linear' },
            }}
          />
        </AnimatePresence>
        <div className="wf-hero-overlay" />

        {slides.length > 1 && !prefersReducedMotion ? (
          <div className="wf-hero-slider-dots">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`wf-hero-slider-dot${i === index % slides.length ? ' is-active' : ''}`}
                onClick={() => setIndex(i)}
                tabIndex={-1}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        ) : null}
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
              {prefersReducedMotion ? (
                <span className="wf-hero-type">{phrases.join(' · ')}</span>
              ) : (
                <span className="wf-hero-type" aria-label={phrases.join(', ')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={phrase}
                      className="wf-hero-type-word"
                      aria-hidden="true"
                      initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
                      transition={{ duration: FADE_S, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {phrase}
                    </motion.span>
                  </AnimatePresence>
                </span>
              )}
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
