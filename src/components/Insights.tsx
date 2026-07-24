import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { insightCards, siteBrand } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Insights() {
  return (
    <AnimatedSection id="insights" className="wf-section wf-cb-insights">
      <div className="container">
        <div className="wf-cb-insights-head">
          <FadeUp>
            <h2 className="wf-cb-insights-title">Latest News and Insights</h2>
          </FadeUp>
          <FadeUp index={1}>
            <a
              href={siteBrand.linkedin}
              target="_blank"
              rel="noreferrer"
              className="wf-cb-insights-viewall"
            >
              View all
            </a>
          </FadeUp>
        </div>

        <StaggerParent className="wf-cb-insights-grid">
          {insightCards.map((card, i) => (
            <StaggerItem key={card.title} index={i} className="wf-cb-insights-col">
              <motion.article
                className="wf-cb-insight-card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              >
                <a href={card.href} className="wf-cb-insight-card-link">
                  <div className="wf-cb-insight-media">
                    <img src={card.image} alt="" className="wf-cb-insight-img" loading="lazy" decoding="async" />
                  </div>
                  <div className={`wf-cb-insight-banner wf-cb-insight-banner--${card.bannerTone}`}>
                    {card.platform}
                  </div>
                  <div className="wf-cb-insight-body">
                    <div className="wf-cb-insight-meta">
                      <time className="wf-cb-insight-date" dateTime={card.date}>
                        {card.date}
                      </time>
                      <span className="wf-cb-insight-type">{card.label}</span>
                    </div>
                    <h3 className="wf-cb-insight-title">{card.title}</h3>
                    <span className="wf-cb-insight-read">
                      Read More
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={22} strokeWidth={2.5} />
                    </span>
                  </div>
                </a>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
