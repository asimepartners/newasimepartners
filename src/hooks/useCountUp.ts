import { useEffect, useState, type RefObject } from 'react'
import { useInView } from 'motion/react'

type UseCountUpOptions = {
  value: string
  duration?: number
  enabled?: boolean
}

function parseStat(value: string) {
  const match = value.match(/^(\$?)(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', target: 0, suffix: value, decimals: 0, grouped: false, isNumeric: false }
  const raw = match[2]
  const grouped = raw.includes(',')
  const decimals = !grouped && raw.includes('.') ? raw.split('.')[1].length : 0
  return {
    prefix: match[1] ?? '',
    target: Number(raw.replace(/,/g, '')),
    suffix: match[3] ?? '',
    decimals,
    grouped,
    isNumeric: true,
  }
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  { value, duration = 1.4, enabled = true }: UseCountUpOptions,
) {
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const { prefix, target, suffix, decimals, grouped, isNumeric } = parseStat(value)
  const [display, setDisplay] = useState(isNumeric ? `${prefix}0${suffix}` : value)

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
      const raw = target * eased
      const current = decimals
        ? raw.toFixed(decimals)
        : grouped
          ? Math.round(raw).toLocaleString('en-US')
          : String(Math.round(raw))
      setDisplay(`${prefix}${current}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [decimals, duration, enabled, grouped, inView, isNumeric, prefix, suffix, target, value])

  return display
}
