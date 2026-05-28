import { useId } from 'react'
import { byTheNumbers, type ByTheNumbersIcon } from '@/data/content'
import { AnimatedSection, StaggerParent, StaggerItem, FadeUp } from './Motion'

/** Monochrome icon gradients — aligned with site palette */
const STAT_ICON_COLORS: Record<ByTheNumbersIcon, [string, string]> = {
  waves: ['#ffffff', '#737373'],
  orbit: ['#e5e5e5', '#525252'],
  star: ['#ffffff', '#737373'],
}

function StatGradient({ gradId, variant }: { gradId: string; variant: ByTheNumbersIcon }) {
  const [from, to] = STAT_ICON_COLORS[variant]
  return (
    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor={from} />
      <stop offset="100%" stopColor={to} />
    </linearGradient>
  )
}

function StatIcon({ variant, gradId }: { variant: ByTheNumbersIcon; gradId: string }) {
  const fill = `url(#${gradId})`

  if (variant === 'waves') {
    return (
      <svg viewBox="0 0 72 72" className="wf-cb-numbers-icon" aria-hidden>
        <defs>
          <StatGradient gradId={gradId} variant={variant} />
        </defs>
        <path d="M8 52 Q24 28 40 52" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" />
        <path d="M18 52 Q34 20 50 52" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" />
        <path d="M28 52 Q44 12 60 52" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" />
        <path d="M36 52 Q52 32 68 52" fill="none" stroke={fill} strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }

  if (variant === 'orbit') {
    return (
      <svg viewBox="0 0 72 72" className="wf-cb-numbers-icon" aria-hidden>
        <defs>
          <StatGradient gradId={gradId} variant={variant} />
        </defs>
        <circle cx="36" cy="36" r="10" fill={fill} />
        <path d="M36 8 A28 28 0 0 1 64 36 L36 36 Z" fill={fill} />
        <path d="M64 36 A28 28 0 0 1 36 64 L36 36 Z" fill={fill} opacity="0.85" />
        <path d="M36 64 A28 28 0 0 1 8 36 L36 36 Z" fill={fill} opacity="0.7" />
        <path d="M8 36 A28 28 0 0 1 36 8 L36 36 Z" fill={fill} opacity="0.55" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 72 72" className="wf-cb-numbers-icon" aria-hidden>
      <defs>
        <StatGradient gradId={gradId} variant={variant} />
      </defs>
      <circle cx="36" cy="36" r="28" fill="none" stroke={fill} strokeWidth="4" />
      <circle cx="36" cy="36" r="6" fill={fill} />
      <path
        d="M36 14 L40 32 L58 36 L40 40 L36 58 L32 40 L14 36 L32 32 Z"
        fill={fill}
      />
    </svg>
  )
}

export default function ByTheNumbers() {
  const baseId = useId()

  return (
    <AnimatedSection id="numbers" className="wf-section wf-cb-numbers">
      <div className="container">
        <FadeUp>
          <h2 className="wf-cb-numbers-heading">By The Numbers</h2>
        </FadeUp>
        <StaggerParent className="wf-cb-numbers-grid">
          {byTheNumbers.map((stat, index) => (
            <StaggerItem key={stat.value} index={index} className="wf-cb-numbers-cell">
              <StatIcon variant={stat.icon} gradId={`${baseId}-${stat.icon}-${index}`} />
              <span className="wf-cb-numbers-value">{stat.value}</span>
              <p className="wf-cb-numbers-caption">{stat.caption}</p>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
