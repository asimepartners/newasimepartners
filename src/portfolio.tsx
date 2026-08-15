import { StrictMode, useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import {
  portfolioCompanies,
  portfolioPage,
  portfolioPlatformTags,
  portfolioSectorTags,
  type PlatformTag,
  type SectorTag,
} from '@/data/portfolio'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { motion } from '@/components/Motion'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

type FilterValue = string | null

function FilterDropdown({
  id,
  label,
  value,
  allLabel,
  options,
  onChange,
}: {
  id: string
  label: string
  value: FilterValue
  allLabel: string
  options: string[]
  onChange: (value: FilterValue) => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const displayValue = value ?? allLabel

  return (
    <div className={`wf-pf-dd${open ? ' is-open' : ''}`} ref={rootRef}>
      <span className="wf-pf-dd-label" id={`${id}-label`}>
        {label}
      </span>
      <button
        type="button"
        className="wf-pf-dd-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="wf-pf-dd-value">{displayValue}</span>
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} strokeWidth={2} className="wf-pf-dd-chevron" />
      </button>

      {open && (
        <ul className="wf-pf-dd-menu" role="listbox" aria-labelledby={`${id}-label`}>
          <li role="option" aria-selected={value === null}>
            <button
              type="button"
              className={`wf-pf-dd-option${value === null ? ' is-active' : ''}`}
              onClick={() => {
                onChange(null)
                setOpen(false)
              }}
            >
              {allLabel}
            </button>
          </li>
          {options.map((option) => (
            <li key={option} role="option" aria-selected={value === option}>
              <button
                type="button"
                className={`wf-pf-dd-option${value === option ? ' is-active' : ''}`}
                onClick={() => {
                  onChange(option)
                  setOpen(false)
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function PortfolioPage() {
  const [platform, setPlatform] = useState<PlatformTag | null>(null)
  const [sector, setSector] = useState<SectorTag | null>(null)

  useEffect(() => {
    document.documentElement.classList.add('wf-portfolio-root')
    document.body.classList.add('wf-portfolio-root')
    return () => {
      document.documentElement.classList.remove('wf-portfolio-root')
      document.body.classList.remove('wf-portfolio-root')
    }
  }, [])

  const filtered = useMemo(() => {
    return portfolioCompanies.filter((company) => {
      const platformOk = platform === null || company.platforms.includes(platform)
      const sectorOk = sector === null || company.sectors.includes(sector)
      return platformOk && sectorOk
    })
  }, [platform, sector])

  const hasFilters = platform !== null || sector !== null

  return (
    <div className="wf-pf-page">
      <Navbar variant="solid" />

      <main className="wf-pf-main">
        <section className="wf-pf-hero" aria-labelledby="portfolio-title">
          <div className="wf-pf-hero-media" aria-hidden="true">
            <img
              src={portfolioPage.heroImage}
              alt=""
              className="wf-pf-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-pf-hero-overlay" />
          </div>
          <div className="wf-pf-hero-inner">
            <h1 id="portfolio-title" className="wf-pf-title">
              {portfolioPage.title}
            </h1>
            <p className="wf-pf-body">{portfolioPage.body}</p>
          </div>
        </section>

        <div className="wf-pf-inner">
          <section className="wf-pf-filters" aria-label="Portfolio filters">
            <div className="wf-pf-filter-bar">
              <FilterDropdown
                id="platform-filter"
                label={portfolioPage.platformLabel}
                value={platform}
                allLabel={portfolioPage.allLabel}
                options={portfolioPlatformTags}
                onChange={(value) => setPlatform(value as PlatformTag | null)}
              />
              <FilterDropdown
                id="sector-filter"
                label={portfolioPage.sectorLabel}
                value={sector}
                allLabel={portfolioPage.allLabel}
                options={portfolioSectorTags}
                onChange={(value) => setSector(value as SectorTag | null)}
              />
              {hasFilters && (
                <button type="button" className="wf-pf-clear" onClick={() => {
                  setPlatform(null)
                  setSector(null)
                }}>
                  Clear
                </button>
              )}
            </div>
          </section>

          {filtered.length > 0 ? (
            <ul className="wf-pf-grid">
              {filtered.map((company, index) => (
                <motion.li
                  key={company.name}
                  className={`wf-pf-item${company.logoScale ? ` wf-pf-item--${company.logoScale}` : ''}`}
                  initial={{ opacity: 0, y: 36, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 8) * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="wf-pf-item-logo"
                    loading="lazy"
                    decoding="async"
                    title={company.name}
                  />
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="wf-pf-empty">{portfolioPage.emptyLabel}</p>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)

dismissPreloader()
