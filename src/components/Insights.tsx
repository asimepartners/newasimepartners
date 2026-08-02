import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { insightCards, siteBrand } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Insights() {
  const [featured, ...rest] = insightCards

  return (
    <AnimatedSection id="insights" className="wf-news2">
      <div className="wf-news2-inner">
        <FadeUp className="wf-news2-head">
          <div>
            <span className="wf-news2-eyebrow">Insights</span>
            <h2 className="wf-news2-title">Latest News &amp; Insights</h2>
          </div>
          <a
            href={siteBrand.linkedin}
            target="_blank"
            rel="noreferrer"
            className="wf-news2-viewall"
          >
            View all
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.5} />
          </a>
        </FadeUp>

        <StaggerParent className="wf-news2-grid">
          {featured ? (
            <StaggerItem index={0}>
              <motion.a
                href={featured.href}
                className="wf-news2-feature"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div className="wf-news2-feature-media">
                  <img src={featured.image} alt="" loading="lazy" decoding="async" />
                  <span className="wf-news2-chip">{featured.platform}</span>
                </div>
                <div className="wf-news2-feature-body">
                  <div className="wf-news2-meta">
                    <time dateTime={featured.date}>{featured.date}</time>
                    <span className="wf-news2-dot" aria-hidden="true" />
                    <span>{featured.label}</span>
                  </div>
                  <h3 className="wf-news2-feature-title">{featured.title}</h3>
                  <span className="wf-news2-read">
                    Read more
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} strokeWidth={2.5} />
                  </span>
                </div>
              </motion.a>
            </StaggerItem>
          ) : null}

          <div className="wf-news2-list">
            {rest.map((card, i) => (
              <StaggerItem key={card.title} index={i + 1}>
                <motion.a
                  href={card.href}
                  className="wf-news2-row"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                >
                  <div className="wf-news2-row-media">
                    <img src={card.image} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className="wf-news2-row-body">
                    <div className="wf-news2-meta">
                      <time dateTime={card.date}>{card.date}</time>
                      <span className="wf-news2-dot" aria-hidden="true" />
                      <span>{card.label}</span>
                    </div>
                    <h4 className="wf-news2-row-title">{card.title}</h4>
                    <span className="wf-news2-row-tag">{card.platform}</span>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </div>
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
