import { useRef } from 'react'
import { byTheNumbers } from '@/data/content'
import { useCountUp } from '@/hooks/useCountUp'
import { AnimatedSection, StaggerParent, StaggerItem, FadeUp } from './Motion'

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const display = useCountUp(ref, { value })
  return (
    <span ref={ref} className="wf-numbers-value">
      {display}
    </span>
  )
}

export default function ByTheNumbers() {
  return (
    <AnimatedSection id="numbers" className="wf-numbers">
      <div className="wf-numbers-media" aria-hidden="true">
        <img
          src="/images/numbers-bg.jpg"
          alt=""
          className="wf-numbers-media-img"
          loading="lazy"
          decoding="async"
        />
        <div className="wf-numbers-media-overlay" />
      </div>

      <div className="wf-numbers-inner">
        <FadeUp className="wf-numbers-head">
          <span className="wf-numbers-eyebrow">Impact</span>
          <h2 className="wf-numbers-title">By The Numbers</h2>
          <p className="wf-numbers-sub">
            Scale across platforms, markets, and focus areas that define how we partner across Africa
          </p>
        </FadeUp>

        <StaggerParent className="wf-numbers-grid">
          {byTheNumbers.map((stat, index) => (
            <StaggerItem key={stat.value} index={index} className="wf-numbers-item">
              <StatValue value={stat.value} />
              <p className="wf-numbers-caption">{stat.caption}</p>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
