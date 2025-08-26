import { useTranslation } from 'react-i18next'
import React from 'react'

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

  /**
   * Renderiza um texto com uma palavra destacada
   * @param {string} key - Chave de tradução
   * @param {string} highlightWord - Palavra a ser destacada
   * @returns {React.ReactNode[]} Array de elementos React
   */
  const renderHighlightedText = (key: string, highlightWord: string) => {
    const text = t(key)
    const words = text.split(' ')

    return words.map((word, i) => {
      if (word === highlightWord) {
        return (
          <React.Fragment key={i}>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              {word}
            </span>{' '}
          </React.Fragment>
        )
      }
      return <React.Fragment key={i}>{word} </React.Fragment>
    })
  }

  return {
    t: translate,
    changeLanguage,
    currentLanguage: getCurrentLanguage(),
    renderHighlightedText,
  }
}

export default useI18n
