import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { AnimatePresence, motion } from 'motion/react'
import { navGroups, siteBrand } from '@/data/content'
import { springSnappy } from './Motion'

export default function Navbar() {
  const [overHero, setOverHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setOverHero(window.scrollY < window.innerHeight * 0.85)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <>
      <motion.header
        className="wf-nav-header"
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springSnappy}
      >
        <nav
          className={`wf-nav${overHero || menuOpen ? ' wf-nav--over-hero' : ' wf-nav--scrolled'}`}
        >
          <div className="wf-nav-pill">
            <a className="wf-brand" href="#" onClick={closeMenu}>
              <img src={siteBrand.logoWordmark} alt={siteBrand.name} className="wf-brand-wordmark-img" />
            </a>

            <div className="wf-nav-actions">
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
                  size={24}
                  strokeWidth={2}
                  color="currentColor"
                />
              </button>
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
              <img src={siteBrand.logo} alt="" className="wf-mega-panel-logo" />
              <div className="wf-mega-panel-head-actions">
                <button type="button" className="wf-mega-close" onClick={closeMenu} aria-label="Close menu">
                  <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="wf-mega-panel-body">
              {navGroups.map((group) => (
                <div key={group.label} className="wf-mega-group">
                  <a href={group.href} className="wf-mega-group-title" onClick={closeMenu}>
                    {group.label}
                  </a>
                  <ul className="wf-mega-group-links">
                    {group.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="wf-mega-link" onClick={closeMenu}>
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
