import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { insightCards, insightsIntro } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

export default function Insights() {
  return (
    <AnimatedSection id="insights" className="wf-news2">
      <div className="wf-news2-inner">
        <FadeUp className="wf-news2-head">
          <h2 className="wf-news2-title">
            <span className="wf-news2-title-accent">{insightsIntro.headlineAccent}</span>{' '}
            {insightsIntro.headlineRest}
          </h2>
          <p className="wf-news2-sub">{insightsIntro.body}</p>
        </FadeUp>

        <StaggerParent className="wf-news2-grid">
          {insightCards.map((card, index) => (
            <StaggerItem key={card.title} index={index}>
              <motion.a
                href={card.href}
                className="wf-news2-card"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              >
                <div className="wf-news2-card-media">
                  <img src={card.image} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="wf-news2-card-body">
                  <div className="wf-news2-meta">
                    <time>{card.date}</time>
                    <span className="wf-news2-cat">{card.platform}</span>
                  </div>
                  <h3 className="wf-news2-card-title">{card.title}</h3>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerParent>

        <FadeUp className="wf-news2-foot" index={1}>
          <a
            href={insightsIntro.readMoreHref}
            target="_blank"
            rel="noreferrer"
            className="wf-news2-readmore"
          >
            {insightsIntro.readMoreLabel}
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.4} />
          </a>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
