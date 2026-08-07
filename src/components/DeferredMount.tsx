import { useEffect, useState, type ReactNode } from 'react'

/** Mounts children after first paint / idle to keep LCP free. */
export default function DeferredMount({
  children,
  delayMs = 0,
}: {
  children: ReactNode
  delayMs?: number
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const enable = () => setReady(true)

    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }).requestIdleCallback

    if (typeof ric === 'function') {
      idleId = ric(enable, { timeout: 1200 })
    } else {
      timeoutId = setTimeout(enable, Math.max(delayMs, 200))
    }

    return () => {
      const cic = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback
      if (idleId !== undefined && typeof cic === 'function') cic(idleId)
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [delayMs])

  if (!ready) return null
  return <>{children}</>
}
