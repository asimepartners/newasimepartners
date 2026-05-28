import { useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon, Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import { AnimatePresence, motion } from 'motion/react'
import { navGroups, siteBrand } from '@/data/content'
import { springSnappy } from './Motion'

const SCROLL_HIDE_THRESHOLD = 100

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      if (menuOpen) return

      const currentY = window.scrollY
      const scrollingDown = currentY > lastScrollY.current
      const scrollingUp = currentY < lastScrollY.current

      if (currentY <= SCROLL_HIDE_THRESHOLD) {
        setHidden(false)
      } else if (scrollingDown && currentY > SCROLL_HIDE_THRESHOLD) {
        setHidden(true)
      } else if (scrollingUp) {
        setHidden(false)
      }

      setOverHero(currentY < window.innerHeight * 0.85)
      lastScrollY.current = currentY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
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
        className={`wf-nav-header${hidden && !menuOpen ? ' is-hidden' : ''}`}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springSnappy}
      >
        <nav
          className={`navbar navbar-expand-lg fixed-top wf-nav wf-nav--transparent${overHero || menuOpen ? ' wf-nav--over-hero' : ' wf-nav--scrolled'}`}
        >
          <div className="container">
            <a className="navbar-brand wf-brand" href="#" onClick={closeMenu}>
              <img src={siteBrand.logoWordmark} alt={siteBrand.name} className="wf-brand-wordmark-img" />
            </a>

            <div className="wf-nav-actions d-flex align-items-center">
              <button
                type="button"
                className="wf-mega-trigger"
                aria-expanded={menuOpen}
                aria-controls="site-mega-menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="wf-mega-trigger-label">{menuOpen ? 'Close' : 'Menu'}</span>
                <HugeiconsIcon
                  icon={menuOpen ? Cancel01Icon : Menu01Icon}
                  size={22}
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
          <>
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
                <img src={siteBrand.logoWordmark} alt="" className="wf-mega-panel-logo" />
                <div className="wf-mega-panel-head-actions">
                  <a href="#apply" className="wf-mega-cta wf-mega-cta--primary" onClick={closeMenu}>
                    Apply Now
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2.5} />
                  </a>
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
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
