import SmoothScroll from '@/components/SmoothScroll'
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import PageSkeleton, { PageLoadBoundary } from './components/PageSkeleton'
const App = lazy(() => import('./App'))
import { installAnalytics } from './institutional/analytics'
import './institutional/site.css'
createRoot(document.getElementById('root')!).render(<StrictMode><SmoothScroll><PageLoadBoundary><Suspense fallback={<PageSkeleton />}><App /></Suspense></PageLoadBoundary></SmoothScroll></StrictMode>)
installAnalytics()

import './institutional/buttons.css'

import './institutional/hero-layout.css'
