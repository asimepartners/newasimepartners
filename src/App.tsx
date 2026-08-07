import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessPillars from './components/BusinessPillars'
import ScrollProgress from './components/ScrollProgress'
import FilmGrain from './components/FilmGrain'
import ScrollToTop from './components/ScrollToTop'
import DeferredMount from './components/DeferredMount'
import { useSmoothScroll } from './hooks/useSmoothScroll'

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

const DeferredDetails = lazy(async () => {
  const [{ default: AdvisoryDetail }, { advisoryDetail, managementDetail, techDetail }] =
    await Promise.all([import('./components/AdvisoryDetail'), import('./data/content')])

  return {
    default: function Details() {
      return (
        <>
          <AdvisoryDetail id="advisory-detail" content={advisoryDetail} />
          <AdvisoryDetail id="management-detail" content={managementDetail} />
          <AdvisoryDetail id="tech-detail" content={techDetail} />
        </>
      )
    },
  }
})

function LazyBelowFold() {
  return (
    <Suspense fallback={null}>
      <DeferredDetails />
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
        <BusinessPillars />
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
