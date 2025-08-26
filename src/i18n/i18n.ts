import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Importando os arquivos de tradução
import ptBR from './locales/pt-BR.json'

// Configuração do i18n
i18n
  // Detecta o idioma do usuário
  .use(LanguageDetector)
  // Passa o i18n para o react-i18next
  .use(initReactI18next)
  // Inicializa o i18n
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR,
      },
    },
    lng: 'pt-BR', // Idioma padrão
    fallbackLng: 'pt-BR', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz o escape
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
