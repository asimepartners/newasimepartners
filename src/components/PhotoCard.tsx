import type { ReactNode } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion } from './Motion'

type PhotoCardProps = {
  href?: string
  id?: string
  image: string
  imageAlt?: string
  category?: string
  meta?: string
  title: string
  description?: string
  cta?: string
  onClick?: () => void
  titleAs?: 'h2' | 'h3'
  mediaOverlay?: ReactNode
  className?: string
  openInNewTab?: boolean
}

export default function PhotoCard({
  href,
  id,
  image,
  imageAlt = '',
  category,
  meta,
  title,
  description,
  cta,
  onClick,
  titleAs = 'h3',
  mediaOverlay,
  className = '',
  openInNewTab = false,
}: PhotoCardProps) {
  const TitleTag = titleAs
  const content = (
    <>
      <div className="wf-photo-card-media">
        <img
          src={image}
          alt={imageAlt}
          className="wf-photo-card-img"
          loading="lazy"
          decoding="async"
        />
        {mediaOverlay}
      </div>
      <div className="wf-photo-card-body">
        {(category || meta) && (
          <div className="wf-photo-card-meta">
            {category ? <span className="wf-photo-card-category">{category}</span> : null}
            {meta ? <span className="wf-photo-card-meta-secondary">{meta}</span> : null}
          </div>
        )}
        <TitleTag className="wf-photo-card-title">{title}</TitleTag>
        {description ? <p className="wf-photo-card-desc">{description}</p> : null}
        {cta ? (
          <span className="wf-photo-card-cta">
            <span>{cta}</span>
            <span className="wf-photo-card-cta-icon" aria-hidden="true">
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2.5} />
            </span>
          </span>
        ) : null}
      </div>
    </>
  )

  const motionProps = {
    className: `wf-photo-card${className ? ` ${className}` : ''}`,
    whileHover: { y: -4 },
    transition: { type: 'spring' as const, stiffness: 320, damping: 26 },
  }

  if (onClick) {
    return (
      <motion.button type="button" id={id} onClick={onClick} {...motionProps}>
        {content}
      </motion.button>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        id={id}
        {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.article id={id} {...motionProps}>
      {content}
    </motion.article>
  )
}
