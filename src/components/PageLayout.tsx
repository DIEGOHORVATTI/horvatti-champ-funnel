import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  useEffect(() => {
    const loadGoogleFonts = () => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };
    loadGoogleFonts();
  }, []);

  useEffect(() => {
    if (title) {
      document.title = `${title} - Horvatti Champ`;
    }
  }, [title]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
