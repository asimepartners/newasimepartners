import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessPillars from './components/BusinessPillars'
import OurPeople from './components/OurPeople'
import HighlightedWork from './components/HighlightedWork'
import OurVirtues from './components/OurVirtues'
import ByTheNumbers from './components/ByTheNumbers'
import Capabilities from './components/Capabilities'
import Geographies from './components/Geographies'
import Insights from './components/Insights'
import ApplyCta from './components/ApplyCta'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="wf-main">
        <Hero />
        <BusinessPillars />
        <OurPeople />
        <HighlightedWork />
        <OurVirtues />
        <ByTheNumbers />
        <Capabilities />
        <Geographies />
        <Insights />
        <ApplyCta />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
