import { awardsContent } from '@/data/content'
import { AnimatedSection, FadeUp } from './Motion'

export default function Awards() {
  const track = [...awardsContent.items, ...awardsContent.items]

  return (
    <AnimatedSection className="wf-awards" aria-label={awardsContent.title}>
      <div className="wf-awards-inner">
        <FadeUp>
          <h2 className="wf-awards-title">{awardsContent.title}</h2>
        </FadeUp>

        <FadeUp index={1} className="wf-awards-marquee">
          <div className="wf-awards-track">
            <ul className="wf-awards-row" aria-hidden="false">
              {track.map((item, index) => (
                <li
                  key={`${item.name}-${index}`}
                  className="wf-awards-item"
                  aria-hidden={index >= awardsContent.items.length}
                >
                  <span className={`wf-awards-mark wf-awards-mark--${item.style}`}>
                    {item.mark}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
