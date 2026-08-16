import { awardsContent } from '@/data/content'
import { AnimatedSection, FadeUp } from './Motion'

type AwardItem = {
  name: string
  logo: string
}

type AwardsProps = {
  title?: string
  items?: readonly AwardItem[]
}

export default function Awards({
  title = awardsContent.title,
  items = awardsContent.items,
}: AwardsProps) {
  const list = [...items]
  const track = [...list, ...list]

  return (
    <AnimatedSection className="wf-awards" aria-label={title}>
      <div className="wf-awards-inner">
        <FadeUp>
          <h2 className="wf-awards-title">{title}</h2>
        </FadeUp>

        <FadeUp index={1} className="wf-awards-banner">
          <div className="wf-awards-marquee">
            <div className="wf-awards-track">
              <ul className="wf-awards-row" aria-hidden="false">
                {track.map((item, index) => (
                  <li
                    key={`${item.name}-${index}`}
                    className="wf-awards-item"
                    aria-hidden={index >= list.length}
                  >
                    <img
                      src={item.logo}
                      alt={index >= list.length ? '' : item.name}
                      className="wf-awards-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </AnimatedSection>
  )
}
