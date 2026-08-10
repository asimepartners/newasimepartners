import { StrictMode, useEffect, useId, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon, PlayIcon } from '@hugeicons/core-free-icons'
import { mediaPage, mediaVideos, type MediaVideo } from '@/data/media'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

function VideoModal({
  video,
  onClose,
}: {
  video: MediaVideo
  onClose: () => void
}) {
  const titleId = useId()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="wf-media-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button type="button" className="wf-media-modal-backdrop" aria-label="Close video" onClick={onClose} />
      <div className="wf-media-modal-panel">
        <div className="wf-media-modal-bar">
          <h2 id={titleId} className="wf-media-modal-title">
            {video.title}
          </h2>
          <button type="button" className="wf-media-modal-close" aria-label="Close" onClick={onClose}>
            <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={2} />
          </button>
        </div>
        <div className="wf-media-modal-frame">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <a
          href={video.href}
          className="wf-media-modal-yt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  )
}

function MediaPage() {
  const [active, setActive] = useState<MediaVideo | null>(null)

  useEffect(() => {
    document.documentElement.classList.add('wf-media-root')
    document.body.classList.add('wf-media-root')
    return () => {
      document.documentElement.classList.remove('wf-media-root')
      document.body.classList.remove('wf-media-root')
    }
  }, [])

  return (
    <div className="wf-media-page">
      <Navbar variant="solid" />

      <main className="wf-media-main">
        <section className="wf-media-hero" aria-labelledby="media-title">
          <div className="wf-media-hero-media" aria-hidden="true">
            <img
              src={mediaPage.heroImage}
              alt=""
              className="wf-media-hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="wf-media-hero-overlay" />
          </div>
          <div className="wf-media-hero-inner">
            <h1 id="media-title" className="wf-media-title">
              {mediaPage.title}
            </h1>
            <p className="wf-media-body">{mediaPage.body}</p>
            <a
              href={mediaPage.channelHref}
              className="wf-media-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              {mediaPage.channelLabel}
            </a>
          </div>
        </section>

        <div className="wf-media-inner">
          <ul className="wf-media-grid">
            {mediaVideos.map((video) => (
              <li key={video.id}>
                <button
                  type="button"
                  className="wf-media-card"
                  onClick={() => setActive(video)}
                >
                  <span className="wf-media-card-thumb">
                    <img
                      src={video.thumbnail}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="wf-media-card-play" aria-hidden="true">
                      <HugeiconsIcon icon={PlayIcon} size={28} strokeWidth={2} />
                    </span>
                  </span>
                  <span className="wf-media-card-copy">
                    <span className="wf-media-card-title">{video.title}</span>
                    <span className="wf-media-card-watch">{mediaPage.watchLabel}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
      <Footer />
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaPage />
  </StrictMode>,
)

dismissPreloader()
