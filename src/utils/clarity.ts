import Clarity from '@microsoft/clarity'

/**
 * Verifica se o ambiente atual é de produção
 * @returns boolean indicando se é ambiente de produção
 */
const isProduction = (): boolean => {
  if (typeof window === 'undefined') return false

  return (
    window.location.hostname !== 'localhost' &&
    !window.location.hostname.includes('127.0.0.1') &&
    !window.location.hostname.includes('.local')
  )
}

/**
 * Initialize Microsoft Clarity analytics
 * ProjectID: g4z4in807y
 * Clarity só será inicializado em ambiente de produção
 */
export const initClarity = (): void => {
  if (typeof window !== 'undefined') {
    try {
      // Verifica se estamos em produção
      if (!isProduction()) {
        console.log('Microsoft Clarity não inicializado: ambiente de desenvolvimento')
        return
      }

      // Initialize Clarity with your project ID
      Clarity.init('g4z4in807y')

      // Log success
      console.log('Microsoft Clarity inicializado com sucesso em ambiente de produção')

      // Set consent (you may want to integrate this with your cookie consent system)
      Clarity.consent(true)
    } catch (error) {
      console.error('Falha ao inicializar Microsoft Clarity:', error)
    }
  }
}

/**
 * Track custom events
 * @param eventName The name of the event to track
 */
export const trackEvent = (eventName: string): void => {
  if (typeof window !== 'undefined' && isProduction()) {
    try {
      Clarity.event(eventName)
    } catch (error) {
      console.error(`Falha ao rastrear evento ${eventName}:`, error)
    }
  }
}

/**
 * Set custom tags for the current session
 * @param key The key for the tag
 * @param value The value(s) for the tag
 */
export const setTag = (key: string, value: string | string[]): void => {
  if (typeof window !== 'undefined' && isProduction()) {
    try {
      Clarity.setTag(key, value)
    } catch (error) {
      console.error(`Falha ao definir tag ${key}:`, error)
    }
  }
}

/**
 * Identify a user
 * @param userId The unique identifier for the user
 * @param sessionId Optional custom session identifier
 * @param pageId Optional custom page identifier
 * @param friendlyName Optional friendly name for the user
 */
export const identifyUser = (
  userId: string,
  sessionId?: string,
  pageId?: string,
  friendlyName?: string
): void => {
  if (typeof window !== 'undefined' && isProduction()) {
    try {
      Clarity.identify(userId, sessionId, pageId, friendlyName)
    } catch (error) {
      console.error('Falha ao identificar usuário:', error)
    }
  }
}
