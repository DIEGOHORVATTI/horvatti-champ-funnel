import { BrowserRouter as Router, Routes, Route } from 'react-router'
import HomePage from '@/pages/Home'
import Produto from '@/pages/Produto'
import Recursos from '@/pages/Recursos'
import Precos from '@/pages/Precos'
import Demonstracao from '@/pages/Demonstracao'
import SobreNos from '@/pages/SobreNos'
import PlaceholderPage from '@/pages/PlaceholderPage'
import Treinamentos from '@/pages/Treinamentos'
import Blog from '@/pages/Blog'
import Suporte from '@/pages/Suporte'
import useScrollToTop from '@/hooks/useScrollToTop'

function AppContent() {
  useScrollToTop()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/precos" element={<Precos />} />
      <Route path="/demonstracao" element={<Demonstracao />} />
      <Route path="/sobre-nos" element={<SobreNos />} />

      <Route path="/suporte" element={<Suporte />} />

      {/* Placeholder pages */}
      <Route
        path="/central-de-ajuda"
        element={
          <PlaceholderPage
            title="Central de Ajuda"
            description="Estamos preparando uma base de conhecimento completa com tutoriais e guias."
          />
        }
      />
      <Route
        path="/contato"
        element={
          <PlaceholderPage
            title="Contato"
            description="Entre em contato conosco através dos canais disponíveis abaixo."
            comingSoon={false}
          />
        }
      />
      <Route path="/treinamentos" element={<Treinamentos />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/carreiras"
        element={
          <PlaceholderPage
            title="Carreiras"
            description="Estamos sempre em busca de talentos. Oportunidades de trabalho serão publicadas em breve."
          />
        }
      />
    </Routes>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
