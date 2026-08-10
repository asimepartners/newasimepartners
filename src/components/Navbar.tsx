import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { AnimatePresence, motion } from 'motion/react'
import { navGroups, primaryNavLinks, siteBrand } from '@/data/content'
import { springSnappy } from './Motion'
import Magnetic from './Magnetic'

type NavbarProps = {
  /** `solid` keeps the scrolled dark bar (for inner pages like portfolio). */
  variant?: 'home' | 'solid'
}

function resolveHref(href: string, variant: NavbarProps['variant']) {
  if (variant !== 'solid') return href
  if (href.startsWith('#')) return `/${href}`
  return href
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const [overHero, setOverHero] = useState(variant === 'home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (variant === 'solid') {
      setOverHero(false)
      return
    }

    const onScroll = () => {
      setOverHero(window.scrollY < window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const lenis = (window as Window & { __lenis?: { stop: () => void; start: () => void } }).__lenis
    if (menuOpen) lenis?.stop()
    else lenis?.start()
    return () => {
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const transparent = variant === 'home' && (overHero || menuOpen)
  const homeHref = variant === 'solid' ? '/' : '#'

  return (
    <>
      <motion.header
        className="wf-nav-header"
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springSnappy}
      >
        <nav
          className={`wf-nav${transparent ? ' wf-nav--over-hero' : ' wf-nav--scrolled'}`}
          aria-label="Primary"
        >
          <div className="wf-nav-bar">
            <a className="wf-brand" href={homeHref} onClick={closeMenu}>
              <img
                src="/asime-logo-white.png"
                alt={siteBrand.name}
                className="wf-brand-wordmark-img"
              />
            </a>

            <ul className="wf-nav-links">
              {primaryNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={resolveHref(link.href, variant)}
                    className="wf-nav-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="wf-nav-actions">
              <Magnetic strength={0.28}>
                <button
                  type="button"
                  className="wf-mega-trigger"
                  aria-expanded={menuOpen}
                  aria-controls="site-mega-menu"
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <span className="wf-mega-trigger-label">
                    {menuOpen ? 'Close' : 'Menu'}
                  </span>
                  <HugeiconsIcon
                    icon={menuOpen ? Cancel01Icon : Menu01Icon}
                    size={22}
                    strokeWidth={2}
                    color="currentColor"
                  />
                </button>
              </Magnetic>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.aside
            id="site-mega-menu"
            className="wf-mega-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wf-mega-panel-head">
              <img src="/asime-logo-white.png" alt="" className="wf-mega-panel-logo" />
              <div className="wf-mega-panel-head-actions">
                <button type="button" className="wf-mega-close" onClick={closeMenu} aria-label="Close menu">
                  <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="wf-mega-panel-body">
              {navGroups.map((group) => (
                <div key={group.label} className="wf-mega-group">
                  <a
                    href={resolveHref(group.href, variant)}
                    className="wf-mega-group-title"
                    onClick={closeMenu}
                  >
                    {group.label}
                  </a>
                  <ul className="wf-mega-group-links">
                    {group.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={resolveHref(child.href, variant)}
                          className="wf-mega-link"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="wf-mega-panel-foot">
              <a href={`mailto:${siteBrand.email}`} className="wf-mega-email" onClick={closeMenu}>
                {siteBrand.email}
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  )
}
