import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessPillars from './components/BusinessPillars'

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
  return (
    <>
      <Navbar />
      <main className="wf-main">
        <Hero />
        <BusinessPillars />
        <Suspense fallback={null}>
          <OurPeople />
          <HighlightedWork />
          <ByTheNumbers />
          <Capabilities />
          <Geographies />
          <Team />
          <ApplyCta />
          <Insights />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CookieBanner />
      </Suspense>
    </>
  )
}
