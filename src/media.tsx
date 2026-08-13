import { StrictMode, useEffect, useId, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon, Linkedin01Icon, PlayIcon, YoutubeIcon } from '@hugeicons/core-free-icons'
import { mediaPage, mediaVideos, type MediaSocialChannel, type MediaVideo } from '@/data/media'

function SubstackIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  )
}

function SocialIcon({ icon }: { icon: MediaSocialChannel['icon'] }) {
  if (icon === 'linkedin') {
    return <HugeiconsIcon icon={Linkedin01Icon} size={22} strokeWidth={2} />
  }
  if (icon === 'youtube') {
    return <HugeiconsIcon icon={YoutubeIcon} size={22} strokeWidth={2} />
  }
  return <SubstackIcon size={20} />
}
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PhotoCard from '@/components/PhotoCard'
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
            <ul className="wf-media-socials" aria-label="Social media channels">
              {mediaPage.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="wf-media-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon icon={social.icon} />
                    <span className="wf-media-social-label">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="wf-media-inner">
          <ul className="wf-media-grid wf-photo-card-grid">
            {mediaVideos.map((video) => (
              <li key={video.id}>
                <PhotoCard
                  image={video.thumbnail}
                  title={video.title}
                  cta={mediaPage.watchLabel}
                  onClick={() => setActive(video)}
                  mediaOverlay={
                    <span className="wf-photo-card-play" aria-hidden="true">
                      <HugeiconsIcon icon={PlayIcon} size={28} strokeWidth={2} />
                    </span>
                  }
                />
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
