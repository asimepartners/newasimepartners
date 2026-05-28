import { francoSection } from '@/data/content'
import { AnimatedSection, FadeUp, SlideLeft, StaggerParent, ScaleIn } from './Motion'

export default function Francophone() {
  return (
    <AnimatedSection id="where-we-work" className="wf-band-blue position-relative overflow-hidden">
      {/* Background circle */}
      <div className="wf-franco-bg-circle" aria-hidden="true" />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center text-lg-start">
            <FadeUp>
              <div className="wf-franco-stat">
                <span className="wf-franco-num">{francoSection.stat}</span>
                <span className="wf-franco-label">{francoSection.statLabel}</span>
              </div>
            </FadeUp>
          </div>
          <div className="col-lg-7 offset-lg-1 mt-4 mt-lg-0">
            <SlideLeft>
              <h2 className="wf-display text-white">{francoSection.headline}</h2>
            </SlideLeft>
            {francoSection.body.map((para, i) => (
              <FadeUp key={i} index={i + 1}>
                <p className="wf-prose-on-blue mt-3">{para}</p>
              </FadeUp>
            ))}
          </div>
        </div>

        <StaggerParent className="d-flex flex-wrap gap-2 mt-5">
          {francoSection.countries.map((c) => (
            <ScaleIn key={c}>
              <span className="wf-country-pill">{c}</span>
            </ScaleIn>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
