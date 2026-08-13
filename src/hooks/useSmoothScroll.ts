import { useEffect } from 'react'
import Lenis from 'lenis'

const NAV_OFFSET = 100

function waitForTarget(hash: string, timeoutMs = 2500): Promise<HTMLElement | null> {
  const existing = document.querySelector(hash)
  if (existing instanceof HTMLElement) return Promise.resolve(existing)

  return new Promise((resolve) => {
    const started = performance.now()

    const tryFind = () => {
      const el = document.querySelector(hash)
      if (el instanceof HTMLElement) {
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

async function scrollToHash(hash: string, lenis?: Lenis | null) {
  const target = await waitForTarget(hash)
  if (!target) return

  history.pushState(null, '', hash)

  if (lenis) {
    lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.05 })
    return
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse), (max-width: 991.98px)').matches
    // Skip Lenis on coarse pointers / small screens — native scroll feels snappier.
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
