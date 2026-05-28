import { useEffect, useId } from 'react'
import { heroParticlesNasa } from '@/config/heroParticles'

const PARTICLES_ID_PREFIX = 'hero-particles'

export default function HeroParticles() {
  const reactId = useId()
  const containerId = `${PARTICLES_ID_PREFIX}-${reactId.replace(/:/g, '')}`

  useEffect(() => {
    let cancelled = false

    const init = async () => {
      await import('particles.js/particles.js')
      if (cancelled || !window.particlesJS) return
      const el = document.getElementById(containerId)
      if (!el) return
      requestAnimationFrame(() => {
        if (cancelled) return
        window.particlesJS?.(containerId, structuredClone(heroParticlesNasa) as Record<string, unknown>)
      })
    }

    init()

    return () => {
      cancelled = true
      const el = document.getElementById(containerId)
      if (el) el.innerHTML = ''
      window.pJSDom = []
    }
  }, [containerId])

  return <div id={containerId} className="wf-hero-particles" aria-hidden="true" />
}
