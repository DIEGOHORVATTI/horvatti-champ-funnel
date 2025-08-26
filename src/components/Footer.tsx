import { Link } from 'react-router'
import Logo from './Logo'
import useI18n from '@/hooks/useI18n'

export default function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />

            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/recursos" className="hover:text-white transition-colors">
                  {t('navigation.features')}
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-white transition-colors">
                  {t('navigation.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/demonstracao" className="hover:text-white transition-colors">
                  {t('navigation.demo')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.help')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/suporte" className="hover:text-white transition-colors">
                  {t('navigation.support')}
                </Link>
              </li>
              <li>
                <Link to="/treinamentos" className="hover:text-white transition-colors">
                  {t('navigation.training')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/sobre-nos" className="hover:text-white transition-colors">
                  {t('navigation.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  {t('navigation.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/company/digitro-tecnologia/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('navigation.careers')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Horvatti Champ. {t('common.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
