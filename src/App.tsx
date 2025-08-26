import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from '@/pages/Home'
import Produto from '@/pages/Produto'
import Recursos from '@/pages/Recursos'
import Precos from '@/pages/Precos'
import Demonstracao from '@/pages/Demonstracao'
import SobreNos from '@/pages/SobreNos'
import Treinamentos from '@/pages/Treinamentos'
import Blog from '@/pages/Blog'
import Suporte from '@/pages/Suporte'

import useScrollToTop from '@/hooks/useScrollToTop'
import { setTag, trackEvent } from '@/utils/clarity'

function AppContent() {
  useScrollToTop()

  const location = useLocation()

  // Track page views when route changes
  useEffect(() => {
    // Set a custom tag for the current page path
    setTag('page_path', location.pathname)
    // Send a custom page view event
    trackEvent('page_view')
  }, [location])

  // Inicialização do tema
  useEffect(() => {
    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme')

    // Verificar preferência do sistema se não tiver tema salvo
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/precos" element={<Precos />} />
      <Route path="/demonstracao" element={<Demonstracao />} />
      <Route path="/sobre-nos" element={<SobreNos />} />

      <Route path="/suporte" element={<Suporte />} />

      <Route path="/treinamentos" element={<Treinamentos />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}
