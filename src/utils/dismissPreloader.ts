export function dismissPreloader(minVisibleMs = 500) {
  const el = document.getElementById('wf-preloader')
  if (!el) return

  const started = performance.now()

  const hide = () => {
    const wait = Math.max(0, minVisibleMs - (performance.now() - started))
    window.setTimeout(() => {
      el.classList.add('is-done')
      window.setTimeout(() => el.remove(), 450)
    }, wait)
  }

  if (document.readyState === 'complete') {
    requestAnimationFrame(hide)
    return
  }

  window.addEventListener('load', hide, { once: true })
}
