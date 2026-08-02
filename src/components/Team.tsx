import { HugeiconsIcon } from '@hugeicons/react'
import { Linkedin01Icon } from '@hugeicons/core-free-icons'
import { teamContent } from '@/data/content'
import { AnimatedSection, FadeUp, StaggerParent, StaggerItem, motion } from './Motion'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export default function Team() {
  return (
    <AnimatedSection id="team" className="wf-team">
      <div className="wf-team-inner">
        <FadeUp className="wf-team-head">
          <span className="wf-team-eyebrow">{teamContent.eyebrow}</span>
          <h2 className="wf-team-title">{teamContent.headline}</h2>
          <p className="wf-team-lead">{teamContent.lead}</p>
        </FadeUp>

        <StaggerParent className="wf-team-grid">
          {teamContent.members.map((member, index) => (
            <StaggerItem key={member.name} index={index}>
              <motion.article
                className="wf-team-card"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <div className="wf-team-avatar" aria-hidden={member.image ? undefined : true}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
                  ) : (
                    <span className="wf-team-monogram">{initials(member.name)}</span>
                  )}
                </div>

                <h3 className="wf-team-name">{member.name}</h3>
                <span className="wf-team-role">{member.role}</span>
                {member.bio ? <p className="wf-team-bio">{member.bio}</p> : null}

                {member.linkedin ? (
                  <a
                    className="wf-team-social"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <HugeiconsIcon icon={Linkedin01Icon} size={18} strokeWidth={2} />
                  </a>
                ) : null}
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerParent>
      </div>
    </AnimatedSection>
  )
}
