import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lenis/dist/lenis.css'
import './styles/custom.css'
import './styles/theme-dark.css'
import './styles/typography.css'
import './styles/refine.css'
import App from './App'
import { dismissPreloader } from './utils/dismissPreloader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

dismissPreloader()

