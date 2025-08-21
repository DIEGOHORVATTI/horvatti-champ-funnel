import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import Produto from "@/react-app/pages/Produto";
import Recursos from "@/react-app/pages/Recursos";
import Precos from "@/react-app/pages/Precos";
import Demonstracao from "@/react-app/pages/Demonstracao";
import SobreNos from "@/react-app/pages/SobreNos";
import PlaceholderPage from "@/react-app/pages/PlaceholderPage";
import Treinamentos from "@/react-app/pages/Treinamentos";
import Blog from "@/react-app/pages/Blog";
import Suporte from "@/react-app/pages/Suporte";
import useScrollToTop from "@/react-app/hooks/useScrollToTop";

function AppContent() {
  useScrollToTop();
  
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
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
