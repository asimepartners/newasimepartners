import { useEffect, useState, type RefObject } from 'react'
import { useInView } from 'motion/react'

type UseCountUpOptions = {
  value: string
  duration?: number
  enabled?: boolean
}

function parseStat(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { target: 0, suffix: value, isNumeric: false }
  return {
    target: Number(match[1]),
    suffix: match[2] ?? '',
    isNumeric: true,
  }
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  { value, duration = 1.4, enabled = true }: UseCountUpOptions,
) {
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const { target, suffix, isNumeric } = parseStat(value)
  const [display, setDisplay] = useState(isNumeric ? `0${suffix}` : value)

  useEffect(() => {
    if (!enabled || !inView || !isNumeric) {
      if (inView) setDisplay(value)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, enabled, inView, isNumeric, suffix, target, value])

  return display
}
