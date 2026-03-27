import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginProvider } from './contex/LoginContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>
)
