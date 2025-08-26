import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

interface PageLayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  canonical?: string
  image?: string
}

export default function PageLayout({
  children,
  title,
  description,
  canonical,
  image,
}: PageLayoutProps) {
  useEffect(() => {
    const loadGoogleFonts = () => {
      const link = document.createElement('link')
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap'
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
    loadGoogleFonts()
  }, [])

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 transition-colors duration-200"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <SEO title={title} description={description} canonical={canonical} image={image} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
