import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Produto', href: '/produto' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Preços', href: '/precos' },
    { name: 'Demonstração', href: '/demonstracao' },
    { name: 'Suporte', href: '/suporte' },
    { name: 'Treinamentos', href: '/treinamentos' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="relative bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>HC</span>
            </div>
            <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Horvatti Champ</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? 'text-emerald-600 font-semibold'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/demonstracao"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold"
            >
              Começar Agora
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-emerald-100 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-emerald-600 font-semibold bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/demonstracao"
                onClick={() => setIsMenuOpen(false)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-center"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
