import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'
import { Buffer } from 'buffer'

// Necessário para a biblioteca qrcode-pix funcionar corretamente
// Adiciona o Buffer global para a biblioteca qrcode-pix
declare global {
  interface Window {
    Buffer: typeof Buffer
  }
}

if (!window.Buffer) {
  window.Buffer = Buffer
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
