import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@netapp/bxp-design-system-react/dist/index.css"
import "@netapp/bxp-style/css/reset.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
