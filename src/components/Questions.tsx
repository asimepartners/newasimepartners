import { useState } from 'react'
import { faqItems } from '@/data/content'
import { AnimatedSection, FadeUp, motion } from './Motion'

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection id="questions" className="wf-qa-section">
      <div className="container">
        <FadeUp>
          <h2 className="wf-qa-title">Q&A</h2>
        </FadeUp>

        <div className="wf-qa-list mt-5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <FadeUp key={item.question} index={index}>
                <div className={`wf-qa-item${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="wf-qa-trigger"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="wf-qa-question">{item.question}</span>
                    <span className={`wf-qa-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M4 7.5l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <motion.div
                    id={`faq-panel-${index}`}
                    className="wf-qa-panel"
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="wf-qa-answer-wrap">
                      {item.answer.map((paragraph) => (
                        <p key={paragraph} className="wf-qa-answer">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}