import { applyCta } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem } from './Motion'
import PhotoCard from './PhotoCard'

const workWithUsPaths: {
  label: string
  hint: string
  href: string
  image: string
  openInNewTab?: boolean
}[] = [
  {
    label: 'Contact Us',
    hint: 'Strategic collaboration',
    href: '/contact.html',
    image: '/images/more/partner.jpg',
  },
  {
    label: 'Apply as Tech Startup',
    hint: 'Venture & angel investment pathways',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfpzW1nZql7jUDlGI0vTgApR67ivszhv5C6rgzwesb9JspteA/viewform',
    image: '/images/more/startup.jpg',
    openInNewTab: true,
  },
  {
    label: 'Apply SME/MSME/SGB',
    hint: 'Growth capital & advisory support',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfR3MQGBpXJxTMy5wRbnE0CVNpitWWBoHebJ_WZ0mQr0tqAJw/viewform',
    image: '/images/more/SME.jpg',
    openInNewTab: true,
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
                    openInNewTab={path.openInNewTab}
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
