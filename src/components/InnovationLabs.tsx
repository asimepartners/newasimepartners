import { HugeiconsIcon } from '@hugeicons/react'
import { AiIdeaIcon, AiInnovation01Icon, AiNetworkIcon, Briefcase01Icon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import { globalHealthInnovationAreas, innovationLabsIntro } from '@/data/content'
import { AnimatedSection, FadeUp, SlideRight, StaggerParent, StaggerItem, motion } from './Motion'
import ConveyorBelt from './ConveyorBelt'

const innovationIcons: IconSvgElement[] = [
  AiInnovation01Icon,
  AiNetworkIcon,
  Briefcase01Icon,
  AiIdeaIcon,
]

const ghanaCardColors = ['red', 'gold', 'green', 'red'] as const

export default function InnovationLabs() {
  const [introText, ...serviceItems] = innovationLabsIntro.body
  const serviceCards = serviceItems.map((item) => {
    const separatorIndex = item.indexOf(':')

    if (separatorIndex === -1) {
      return {
        title: item,
        description: '',
      }
    }

    return {
      title: item.slice(0, separatorIndex).trim(),
      description: item.slice(separatorIndex + 1).trim(),
    }
  })

  return (
    <AnimatedSection id="work-with-us" className="wf-innovation-labs wf-section">
      <div className="container">
        <div className="wf-section-eyebrow-row">
          <span className="wf-eyebrow">Work With Us</span>
          <div className="wf-hr" />
        </div>

        <div className="row mt-5">
          <div className="col-lg-5">
            <SlideRight>
              <h2 className="wf-display">Partner & Apply</h2>
            </SlideRight>
          </div>
          <div className="col-lg-6 offset-lg-1 mt-4 mt-lg-0">
            <FadeUp>
              <p className="wf-prose wf-prose-light">{introText}</p>
            </FadeUp>
          </div>
        </div>

        <StaggerParent className="row g-4 mt-5 pt-lg-3">
          {globalHealthInnovationAreas.map((area, index) => (
            <StaggerItem key={`${area.title}-innovation`} index={index} className="col-md-6 col-lg-6">
              <motion.div
                className={`wf-card-minimal wf-ghana-card wf-ghana-card--${ghanaCardColors[index % ghanaCardColors.length]}`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className={`wf-card-icon wf-ghana-card-icon wf-ghana-card-icon--${ghanaCardColors[index % ghanaCardColors.length]}`}>
                  <HugeiconsIcon icon={innovationIcons[index]} size={28} strokeWidth={1.5} color="currentColor" />
                </span>
                <h3 className="wf-card-heading">{area.title}</h3>
                <p className="wf-card-body">{area.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

        <StaggerParent className="row g-4 mt-4">
          {serviceCards.map((card, index) => (
            <StaggerItem key={`${card.title}-service`} index={index} className="col-md-6 col-xl-3">
              <motion.div
                className={`wf-card-minimal wf-innovation-service-card wf-ghana-card wf-ghana-card--${ghanaCardColors[index % ghanaCardColors.length]}`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <h3 className="wf-card-heading wf-innovation-service-title">{card.title}</h3>
                <p className="wf-card-body wf-innovation-service-body">{card.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerParent>

        <ConveyorBelt embedded />
      </div>
    </AnimatedSection>
  )
}
