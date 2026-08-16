import { useEffect, useState } from 'react'
import { motion, springGentle } from './Motion'

type CookieChoice = 'accepted' | 'necessary'

const STORAGE_KEY = 'jaza-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const savedChoice = window.localStorage.getItem(STORAGE_KEY)
      if (!savedChoice) {
        setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleConsent = (choice: CookieChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // no-op if storage is unavailable
    }
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="wf-cookie-shell" aria-live="polite">
      <motion.aside
        className="wf-cookie-banner"
        role="dialog"
        aria-label="Cookie preferences"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springGentle}
      >
        <div className="wf-cookie-copy">
          <span className="wf-cookie-eyebrow">Cookies</span>
          <h3 className="wf-cookie-title">We use cookies to improve your experience</h3>
          <p className="wf-cookie-text">
            We use essential cookies to make this site work and optional analytics cookies to understand how visitors use Asime Partners.
          </p>
        </div>

        <div className="wf-cookie-actions">
          <button
            type="button"
            className="wf-cookie-btn wf-cookie-btn-secondary"
            onClick={() => handleConsent('necessary')}
          >
            Necessary Only
          </button>
          <button
            type="button"
            className="wf-cookie-btn wf-cookie-btn-primary"
            onClick={() => handleConsent('accepted')}
          >
            Accept All
          </button>
        </div>
      </motion.aside>
    </div>
  )
}
