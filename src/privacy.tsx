import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { siteBrand } from '@/data/content'
import { privacyPolicy, type PrivacyBlock } from '@/data/privacyPolicy'
import { dismissPreloader } from '@/utils/dismissPreloader'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'

function PrivacyBlocks({ blocks }: { blocks: PrivacyBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'p') {
          return (
            <p key={index} className="wf-privacy-body">
              {block.text}
            </p>
          )
        }

        if (block.type === 'ul') {
          return (
            <ul key={index} className="wf-privacy-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <dl key={index} className="wf-privacy-definitions">
            {block.items.map((item) => (
              <div key={item.term} className="wf-privacy-definition">
                <dt>{item.term}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        )
      })}
    </>
  )
}

function PrivacyPage() {
  useEffect(() => {
    document.documentElement.classList.add('wf-privacy-root')
    document.body.classList.add('wf-privacy-root')
    return () => {
      document.documentElement.classList.remove('wf-privacy-root')
      document.body.classList.remove('wf-privacy-root')
    }
  }, [])

  return (
    <div className="wf-privacy-page">
      <main className="wf-privacy-main">
        <div className="wf-privacy-container">
          <div className="wf-privacy-topbar">
            <a href="/" className="wf-privacy-brand" aria-label={`${siteBrand.name} home`}>
              <img src="/Main.png" alt={siteBrand.name} className="wf-privacy-logo" />
            </a>
            <a href="/" className="wf-privacy-backlink">
              Back to home
            </a>
          </div>

          <article className="wf-privacy-content">
            <span className="wf-privacy-eyebrow">Legal</span>
            <h1 className="wf-privacy-title">{privacyPolicy.title}</h1>
            <p className="wf-privacy-updated">{privacyPolicy.updatedAt}</p>

            <div className="wf-privacy-layout">
              {privacyPolicy.sections.map((section) => (
                <section key={section.title} className="wf-privacy-section-block">
                  <h2 className="wf-privacy-section-title">{section.title}</h2>
                  <PrivacyBlocks blocks={section.blocks} />
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)

dismissPreloader()
