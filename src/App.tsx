import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Awards from './components/Awards'
import ByTheNumbers from './components/ByTheNumbers'
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
const Geographies = lazy(() => import('./components/Geographies'))
const Team = lazy(() => import('./components/Team'))
const ApplyCta = lazy(() => import('./components/ApplyCta'))
const Footer = lazy(() => import('./components/Footer'))
const CookieBanner = lazy(() => import('./components/CookieBanner'))

function LazyBelowFold() {
  return (
    <Suspense fallback={null}>
      <OurPeople />
      <Team />
      <Geographies />
      <ApplyCta />
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
        <ByTheNumbers />
        <OurPlatform />
        <BusinessPillars />
        <AdvisoryDetail
          id="advisory"
          content={advisoryDetail}
          cta={{
            label: 'We advise companies in a wide variety of sectors',
            href: '/sectors.html',
            variant: 'button',
          }}
        />
        <AdvisoryDetail id="management" content={managementDetail} />
        <AdvisoryDetail
          id="technology"
          content={techDetail}
          cta={{
            label: 'Our engagements span early to mature project stages',
            href: '/stages.html',
            variant: 'button',
          }}
        />
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
