import { byTheNumbers } from '@/data/content'
import { AnimatedSection, StaggerParent, StaggerItem, FadeUp } from './Motion'

export default function ByTheNumbers() {
  return (
    <AnimatedSection id="numbers" className="wf-numbers">
      <div className="wf-numbers-media" aria-hidden="true">
        <img
          src="/images/numbers-bg.png"
          alt=""
          className="wf-numbers-media-img"
          loading="lazy"
        />
        <div className="wf-numbers-media-overlay" />
      </div>

      <div className="wf-numbers-inner">
        <FadeUp className="wf-numbers-head">
          <span className="wf-numbers-eyebrow">Impact</span>
          <h2 className="wf-numbers-title">By The Numbers</h2>
          <p className="wf-numbers-sub">
            Scale across platforms, markets, and focus areas that define how we partner across Africa.
          </p>
        </FadeUp>

        <StaggerParent className="wf-numbers-grid">
          {byTheNumbers.map((stat, index) => (
            <StaggerItem key={stat.value} index={index} className="wf-numbers-item">
              <span className="wf-numbers-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="wf-numbers-value">{stat.value}</span>
              <p className="wf-numbers-caption">{stat.caption}</p>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
