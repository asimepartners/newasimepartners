import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Awards from './components/Awards'
import OurPlatform from './components/OurPlatform'
import BusinessPillars from './components/BusinessPillars'
import AdvisoryDetail from './components/AdvisoryDetail'
import ScrollProgress from './components/ScrollProgress'
import FilmGrain from './components/FilmGrain'
import ScrollToTop from './components/ScrollToTop'
import DeferredMount from './components/DeferredMount'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { advisoryDetail, managementDetail, techDetail } from './data/content'

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

function LazyBelowFold() {
  return (
    <Suspense fallback={null}>
      <OurPeople />
      <Team />
      <HighlightedWork />
      <ByTheNumbers />
      <Capabilities />
      <Geographies />
      <ApplyCta />
      <Insights />
    </Suspense>
  )
}

export default function App() {
  useSmoothScroll()

  return (
    <>
      <ScrollProgress />
      <FilmGrain />
      <Navbar />
      <main className="wf-main">
        <Hero />
        <Awards />
        <OurPlatform />
        <BusinessPillars />
        <AdvisoryDetail id="advisory-detail" content={advisoryDetail} />
        <AdvisoryDetail id="management-detail" content={managementDetail} />
        <AdvisoryDetail id="tech-detail" content={techDetail} />
        <DeferredMount>
          <LazyBelowFold />
        </DeferredMount>
      </main>
      <DeferredMount delayMs={400}>
        <Suspense fallback={null}>
          <Footer />
          <CookieBanner />
        </Suspense>
      </DeferredMount>
      <ScrollToTop />
    </>
  )
}
