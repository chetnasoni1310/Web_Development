import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App2 from './App.jsx' <-- Yeh wale tab use karte hai jab hum export default app use krte 
import { App, App2 } from './App.jsx'    // <--Yeh tab use krte hai jab export function app(){} use krte hai 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
