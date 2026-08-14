import { useEffect } from 'react'
import Lenis from 'lenis'

const HASH_ALIASES: Record<string, string> = {
  '#advisory-detail': '#advisory',
  '#management-detail': '#management',
  '#tech-detail': '#technology',
  '#tech': '#technology',
}

function resolveHash(hash: string) {
  return HASH_ALIASES[hash] ?? hash
}

function getNavOffset() {
  const header = document.querySelector<HTMLElement>('.wf-nav-header')
  const height = header?.getBoundingClientRect().height ?? 96
  return Math.round(Math.max(height - 36, 48))
}

function findByHash(hash: string): HTMLElement | null {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) return null
  const el = document.getElementById(id)
  return el instanceof HTMLElement ? el : null
}

function waitForTarget(hash: string, timeoutMs = 2500): Promise<HTMLElement | null> {
  const existing = findByHash(hash)
  if (existing) return Promise.resolve(existing)

  window.dispatchEvent(new Event('asime:mount-deferred'))

  return new Promise((resolve) => {
    const started = performance.now()

    const tryFind = () => {
      const el = findByHash(hash)
      if (el) {
        resolve(el)
        return
      }
      if (performance.now() - started >= timeoutMs) {
        resolve(null)
        return
      }
      requestAnimationFrame(tryFind)
    }

    tryFind()
  })
}

function alignTarget(target: HTMLElement, lenis?: Lenis | null) {
  const offset = getNavOffset()

  if (lenis) {
    lenis.start()
    lenis.scrollTo(target, { offset: -offset, duration: 1.05 })
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

async function scrollToHash(hash: string, lenis?: Lenis | null) {
  const resolved = resolveHash(hash)
  const target = await waitForTarget(resolved)
  if (!target) return

  history.pushState(null, '', resolved)

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
  alignTarget(target, lenis)

  window.setTimeout(() => alignTarget(target, lenis), 180)
  window.setTimeout(() => alignTarget(target, lenis), 480)
}

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse), (max-width: 991.98px)').matches
    const useLenis = !reducedMotion && !coarsePointer

    let lenis: Lenis | null = null
    if (useLenis) {
      lenis = new Lenis({
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        syncTouch: false,
        autoRaf: true,
      })
      ;(window as Window & { __lenis?: Lenis }).__lenis = lenis
    }

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!anchor) return

      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || !url.hash || url.hash === '#') return

      event.preventDefault()
      document.body.style.overflow = ''
      lenis?.start()
      void scrollToHash(url.hash, lenis)
    }

    document.addEventListener('click', handleAnchorClick)

    if (window.location.hash && window.location.hash !== '#') {
      void scrollToHash(window.location.hash, lenis)
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (lenis) {
        const win = window as Window & { __lenis?: Lenis }
        if (win.__lenis === lenis) delete win.__lenis
        lenis.destroy()
      }
    }
  }, [])
}
