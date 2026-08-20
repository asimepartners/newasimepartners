import { HugeiconsIcon } from '@hugeicons/react'
import {
  AnalyticsUpIcon,
  Rocket01Icon,
  BankIcon,
  UserGroupIcon,
  Leaf01Icon,
  Mosque01Icon,
  Exchange01Icon,
  SecurityCheckIcon,
  Calculator01Icon,
  Globe02Icon,
  Briefcase01Icon,
  ArrowReloadHorizontalIcon,
  SparklesIcon,
  AiBrain01Icon,
  UserStar01Icon,
  ChartIncreaseIcon,
  FlowConnectionIcon,
  ArrowRight01Icon,
  ArrowDown01Icon,
} from '@hugeicons/core-free-icons'
import type { ServiceDetail } from '@/data/content'
import { FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

const ICONS: Record<string, typeof AnalyticsUpIcon> = {
  overview: ChartIncreaseIcon,
  advisory: AnalyticsUpIcon,
  venture: Rocket01Icon,
  credit: BankIcon,
  angel: UserGroupIcon,
  impact: Leaf01Icon,
  islamic: Mosque01Icon,
  manda: Exchange01Icon,
  diligence: SecurityCheckIcon,
  modelling: Calculator01Icon,
  francophone: Globe02Icon,
  fund: Globe02Icon,
  cfo: Briefcase01Icon,
  prepost: ArrowReloadHorizontalIcon,
  risk: SecurityCheckIcon,
  raise: UserGroupIcon,
  workflow: FlowConnectionIcon,
  'ai-sme': SparklesIcon,
  'ai-systems': AiBrain01Icon,
  'ai-talent': UserStar01Icon,
}

export default function AdvisoryDetail({
  id,
  content,
  cta,
}: {
  id: string
  content: ServiceDetail
  cta?: { label: string; href: string; text?: string; variant?: 'button' | 'link' }
}) {
  return (
    <section id={id} className="wf-adv">
      <div className="wf-adv-inner">
        <FadeUp className="wf-adv-head">
          <span className="wf-adv-eyebrow">{content.eyebrow}</span>
          <h2 className="wf-adv-title">{content.headline}</h2>
          {content.intro ? <p className="wf-adv-intro-text">{content.intro}</p> : null}
        </FadeUp>

        <StaggerParent className="wf-adv-grid">
          {content.items.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <motion.article
                className="wf-adv-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <span className="wf-adv-card-icon" aria-hidden="true">
                  <HugeiconsIcon icon={ICONS[item.icon] ?? AnalyticsUpIcon} size={26} strokeWidth={1.8} />
                </span>
                <h3 className="wf-adv-card-title">{item.title}</h3>
                <p className="wf-adv-card-body">{item.body}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerParent>

        {cta ? (
          <FadeUp className="wf-adv-foot" index={1}>
            {cta.text ? <p className="wf-adv-foot-text">{cta.text}</p> : null}
            <a
              href={cta.href}
              className={
                cta.variant === 'link'
                  ? 'wf-about-cta'
                  : 'wf-platform-cta wf-adv-section-cta'
              }
            >
              {cta.label}
              {cta.variant === 'link' ? (
                <span className="wf-about-cta-arrow" aria-hidden="true">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2.4} />
                </span>
              ) : (
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.4} />
              )}
            </a>
          </FadeUp>
        ) : null}
      </div>
    </section>
  )
}
