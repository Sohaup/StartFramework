import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
