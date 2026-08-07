import { useEffect, useState } from 'react'

export default function FilmGrain() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse), (max-width: 991.98px)')
    const update = () => setEnabled(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (!enabled) return null
  return <div className="wf-film-grain" aria-hidden="true" />
}
