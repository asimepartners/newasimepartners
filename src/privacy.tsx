import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { privacyPolicy, type PrivacyBlock } from '@/data/privacyPolicy'
import { dismissPreloader } from '@/utils/dismissPreloader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './styles/custom.css'
import './styles/typography.css'
import './styles/theme-dark.css'
import './styles/refine.css'

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
      <Navbar variant="solid" />

      <main className="wf-privacy-main">
        <div className="wf-privacy-container">
          <article className="wf-privacy-content">
            <h1 className="wf-privacy-title">{privacyPolicy.title}</h1>

            <div className="wf-privacy-layout">
              {privacyPolicy.sections.map((section) => (
                <section key={section.title} className="wf-privacy-section-block">
                  <PrivacyBlocks blocks={section.blocks} />
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>

      <Footer />
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
