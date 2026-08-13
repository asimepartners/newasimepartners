import { applyCta, siteBrand } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

const workWithUsPaths: {
  label: string
  hint: string
  href: string
  image: string
}[] = [
  {
    label: 'Partner With Us',
    hint: 'Co-investments & strategic collaboration',
    href: '#work-with-us',
    image: '/images/more/partner.jpg',
  },
  {
    label: 'Apply to Chale Fund',
    hint: 'Impact capital for qualifying ventures',
    href: `mailto:${siteBrand.email}?subject=Chale%20Fund%20Application`,
    image: '/images/more/apply.jpeg',
  },
  {
    label: 'Apply as Tech Startup',
    hint: 'Venture & angel investment pathways',
    href: `mailto:${siteBrand.email}?subject=Tech%20Startup%20Application`,
    image: '/images/more/startup.jpg',
  },
  {
    label: 'Apply SME/MSME/SGB',
    hint: 'Growth capital & advisory support',
    href: `mailto:${siteBrand.email}?subject=SME%2FMSME%2FSGB%20Application`,
    image: '/images/more/SME.jpg',
  },
]

export default function ApplyCta() {
  return (
    <AnimatedSection id="apply" className="wf-section-cta wf-section-cta--full">
      <div className="wf-wwu-card">
        <div className="wf-wwu-shell">
          <div className="wf-wwu-inner">
            <FadeUp className="wf-wwu-header">
              <span className="wf-wwu-eyebrow">{applyCta.eyebrow}</span>
              <h2 className="wf-display wf-wwu-title">{applyCta.headline}</h2>
              <p className="wf-prose wf-wwu-prose">{applyCta.body}</p>
            </FadeUp>

            <StaggerParent className="wf-wwu-paths wf-wwu-paths--full wf-photo-card-grid">
              {workWithUsPaths.map((path, index) => (
                <StaggerItem key={path.label} index={index}>
                  <PhotoCard
                    href={path.href}
                    image={path.image}
                    category={String(index + 1).padStart(2, '0')}
                    title={path.label}
                    description={path.hint}
                    cta="Learn more"
                  />
                </StaggerItem>
              ))}
            </StaggerParent>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
