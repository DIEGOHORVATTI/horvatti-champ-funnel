import { useTranslation } from 'react-i18next'

/**
 * Hook para facilitar o acesso às traduções
 * @returns {Object} Objeto com funções para tradução
 */
export const useI18n = () => {
  const { t, i18n } = useTranslation()

  /**
   * Traduz uma chave
   * @param {string} key - Chave de tradução
   * @param {Object} options - Opções de tradução (como interpolação)
   * @returns {string} Texto traduzido
   */
  const translate = (key: string, options?: Record<string, unknown>) => {
    return t(key, options)
  }

  /**
   * Muda o idioma da aplicação
   * @param {string} lng - Código do idioma (ex: 'pt-BR', 'en-US')
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  /**
   * Obtém o idioma atual
   * @returns {string} Código do idioma atual
   */
  const getCurrentLanguage = () => {
    return i18n.language
  }

  return {
    t: translate,
    changeLanguage,
    currentLanguage: getCurrentLanguage(),
  }
}

export default useI18n
