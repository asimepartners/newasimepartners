export {}

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void
    pJSDom?: unknown[]
  }
}
