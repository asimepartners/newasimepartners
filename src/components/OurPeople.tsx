import { useEffect, useState } from 'react'
import { groupIntro, ourPeopleStatements } from '@/data/content'
import { AnimatePresence } from 'motion/react'
import { AnimatedSection, FadeUp, motion } from './Motion'

export default function OurPeople() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ourPeopleStatements.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const statement = ourPeopleStatements[index]

  return (
    <AnimatedSection id="our-people" className="wf-section wf-cb-people">
      <div className="container">
        <div className="row">
          <div className="col-lg-5" id="group">
            <FadeUp>
              <span className="wf-eyebrow">{groupIntro.eyebrow}</span>
              <h2 className="wf-display mt-3">{groupIntro.headline}</h2>
              {groupIntro.body.map((para, i) => (
                <p key={i} className="wf-prose mt-3">{para}</p>
              ))}
            </FadeUp>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
            <p className="wf-eyebrow mb-4">Our People</p>
            <div className="wf-cb-people-rotator" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={index}
                  className="wf-cb-people-statement"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {statement.lead}
                  <span className="wf-cb-people-accent">{statement.accent}</span>
                </motion.h3>
              </AnimatePresence>
              <div className="wf-cb-people-dots" role="tablist" aria-label="Mission statements">
                {ourPeopleStatements.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    className={`wf-cb-people-dot${i === index ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
