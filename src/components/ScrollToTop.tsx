import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const lenis = (window as Window & { __lenis?: { on: (e: string, cb: () => void) => void; off: (e: string, cb: () => void) => void } }).__lenis
    lenis?.on('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      lenis?.off('scroll', onScroll)
    }
  }, [])

  const scrollUp = () => {
    const lenis = (window as Window & { __lenis?: { scrollTo: (target: number, opts?: object) => void } }).__lenis
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.15 })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`wf-scroll-top${visible ? ' is-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
    >
      <HugeiconsIcon icon={ArrowUp01Icon} size={22} strokeWidth={2.5} />
    </button>
  )
}
