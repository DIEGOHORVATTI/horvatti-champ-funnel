import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Tentar obter o tema do localStorage primeiro
    const savedTheme = localStorage.getItem('theme') as Theme | null

    // Se não tiver no localStorage, usar preferência do sistema
    if (savedTheme) {
      return savedTheme
    }

    // Verificar preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    // Padrão é light
    return 'light'
  })

  useEffect(() => {
    // Salvar tema no localStorage
    localStorage.setItem('theme', theme)

    // Aplicar classe 'dark' no HTML para ativar os estilos do modo escuro
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
