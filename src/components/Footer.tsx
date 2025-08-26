import { Link } from 'react-router'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />

            <p className="text-gray-400">O sistema mais completo para gestão pecuária do Brasil.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/recursos" className="hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/demonstracao" className="hover:text-white transition-colors">
                  Demonstração
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/central-de-ajuda" className="hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/treinamentos" className="hover:text-white transition-colors">
                  Treinamentos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/sobre-nos" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Horvatti Champ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
