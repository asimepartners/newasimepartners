export function dismissPreloader(minVisibleMs = 280) {
  const el = document.getElementById('wf-preloader')
  if (!el) return

  const started = performance.now()
  let done = false

  const hide = () => {
    if (done) return
    done = true
    const wait = Math.max(0, minVisibleMs - (performance.now() - started))
    window.setTimeout(() => {
      el.classList.add('is-done')
      window.setTimeout(() => el.remove(), 320)
    }, wait)
  }

  // Prefer first meaningful paint over waiting for every asset.
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    requestAnimationFrame(() => requestAnimationFrame(hide))
  } else {
    document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(hide), { once: true })
  }

  // Hard cap so a stuck asset never traps the preloader.
  window.setTimeout(hide, 900)
}
