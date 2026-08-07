import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessPillars from './components/BusinessPillars'
import ScrollProgress from './components/ScrollProgress'
import FilmGrain from './components/FilmGrain'
import ScrollToTop from './components/ScrollToTop'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { advisoryDetail, managementDetail, techDetail } from './data/content'

const AdvisoryDetail = lazy(() => import('./components/AdvisoryDetail'))
const OurPeople = lazy(() => import('./components/OurPeople'))
const HighlightedWork = lazy(() => import('./components/HighlightedWork'))
const ByTheNumbers = lazy(() => import('./components/ByTheNumbers'))
const Capabilities = lazy(() => import('./components/Capabilities'))
const Geographies = lazy(() => import('./components/Geographies'))
const Team = lazy(() => import('./components/Team'))
const Insights = lazy(() => import('./components/Insights'))
const ApplyCta = lazy(() => import('./components/ApplyCta'))
const Footer = lazy(() => import('./components/Footer'))
const CookieBanner = lazy(() => import('./components/CookieBanner'))

export default function App() {
  useSmoothScroll()

  return (
    <>
      <ScrollProgress />
      <FilmGrain />
      <Navbar />
      <main className="wf-main">
        <Hero />
        <BusinessPillars />
        <Suspense fallback={null}>
          <AdvisoryDetail id="advisory-detail" content={advisoryDetail} />
          <AdvisoryDetail id="management-detail" content={managementDetail} />
          <AdvisoryDetail id="tech-detail" content={techDetail} />
          <OurPeople />
          <Team />
          <HighlightedWork />
          <ByTheNumbers />
          <Capabilities />
          <Geographies />
          <ApplyCta />
          <Insights />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CookieBanner />
      </Suspense>
      <ScrollToTop />
    </>
  )
}
