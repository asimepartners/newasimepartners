import { geoContent } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

function Pin({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 32" width="100%" height="100%" aria-hidden="true">
      <path
        d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.4 18.6 0 12 0z"
        fill={color}
      />
      <circle cx="12" cy="12" r="4.6" fill="#fff" />
    </svg>
  )
}

export default function Geographies() {
  return (
    <AnimatedSection id="geographies" className="wf-geo">
      <div className="wf-geo-inner">
        <FadeUp className="wf-geo-head">
          <span className="wf-geo-eyebrow">{geoContent.eyebrow}</span>
          <h2 className="wf-geo-title">{geoContent.headline}</h2>
          <p className="wf-geo-lead">{geoContent.lead}</p>
        </FadeUp>

        <div className="wf-geo-map">
          <img
            className="wf-geo-map-img"
            src={geoContent.mapSrc}
            alt="Dotted world map showing Asime Partners locations"
            loading="lazy"
            decoding="async"
          />
          {geoContent.locations.map((loc, index) => (
            <motion.span
              key={loc.key}
              className={`wf-geo-pin${loc.size === 'sm' ? ' wf-geo-pin--sm' : ''}`}
              style={{ left: `${loc.left}%`, top: `${loc.top}%`, zIndex: loc.z ?? 1 }}
              initial={{ opacity: 0, y: -14, scale: 0.6 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.15 + index * 0.12 }}
            >
              <Pin color={loc.color} />
              <span className="wf-geo-pin-label" style={{ color: loc.color }}>
                {loc.label}
              </span>
            </motion.span>
          ))}
        </div>

        <StaggerParent className="wf-geo-legend">
          {geoContent.locations.map((loc) => (
            <StaggerItem key={loc.key} className="wf-geo-legend-item">
              <span className="wf-geo-legend-dot" style={{ background: loc.color }} />
              <span className="wf-geo-legend-label">{loc.label}</span>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
