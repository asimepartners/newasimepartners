import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { heroContent } from '@/data/content'
import { FadeUp, motion } from './Motion'

const CYCLE_MS = 5200
const FADE_S = 0.7

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const slides = heroContent.slides ?? [heroContent.image]
  const phrases = heroContent.typingPhrases
  const cycleLength = Math.max(slides.length, phrases.length, 1)
  const [{ index, prevIndex }, setSlide] = useState({ index: 0, prevIndex: 0 })

  useEffect(() => {
    if (prefersReducedMotion || cycleLength < 2) return
    const timer = window.setInterval(() => {
      setSlide(({ index: current }) => ({
        prevIndex: current,
        index: (current + 1) % cycleLength,
      }))
    }, CYCLE_MS)
    return () => window.clearInterval(timer)
  }, [cycleLength])

  // Warm the next slide so transitions don't hitch.
  useEffect(() => {
    if (slides.length < 2) return
    const next = slides[(index + 1) % slides.length]
    const img = new Image()
    img.decoding = 'async'
    img.src = next
  }, [index, slides])

  const goTo = (next: number) => {
    setSlide(({ index: current }) => ({
      prevIndex: current,
      index: next,
    }))
  }

  const phrase = phrases[index % phrases.length]
  const activeSlide = index % slides.length
  const prevSlide = prevIndex % slides.length

  return (
    <section className="wf-hero wf-hero--advisory position-relative overflow-hidden" aria-label="Hero">
      <div className="wf-hero-media" aria-hidden="true">
        {slides.map((src, i) => {
          const active = i === activeSlide
          const prev = i === prevSlide && i !== activeSlide
          return (
            <img
              key={src}
              src={src}
              alt=""
              className={`wf-hero-photo${active ? ' is-active' : ''}${prev ? ' is-prev' : ''}`}
              decoding={i === 0 ? 'sync' : 'async'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          )
        })}
        <div className="wf-hero-overlay" />

        {slides.length > 1 && !prefersReducedMotion ? (
          <div className="wf-hero-slider-dots">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`wf-hero-slider-dot${i === activeSlide ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
                tabIndex={-1}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="wf-hero-inner">
        <div className="wf-hero-copy">
          <FadeUp>
            <h1 className="wf-hero-h1 wf-hero-h1--advisory">
              <span className="wf-hero-h1-line">{heroContent.headline}</span>
              {heroContent.headlineAccent ? (
                <>
                  {'\n'}
                  <span className="wf-hero-accent">{heroContent.headlineAccent}</span>
                </>
              ) : null}
            </h1>
          </FadeUp>

          <FadeUp index={1}>
            <p className="wf-hero-sub wf-hero-sub--advisory">
              {heroContent.subheadlineLines.map((line) => (
                <span key={line} className="wf-hero-sub-line">
                  {line}
                </span>
              ))}
            </p>
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
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
