import { useEffect } from 'react'
import Lenis from 'lenis'

const NAV_OFFSET = 100

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Skip Lenis on coarse pointers / small screens — native scroll feels snappier.
    if (window.matchMedia('(pointer: coarse), (max-width: 991.98px)').matches) return

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      syncTouch: false,
      autoRaf: true,
    })

    ;(window as Window & { __lenis?: Lenis }).__lenis = lenis

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href*="#"]')
      if (!anchor) return

      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || !url.hash || url.hash === '#') return

      const target = document.querySelector(url.hash)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -NAV_OFFSET, duration: 1.05 })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      const win = window as Window & { __lenis?: Lenis }
      if (win.__lenis === lenis) delete win.__lenis
      lenis.destroy()
    }
  }, [])
}
