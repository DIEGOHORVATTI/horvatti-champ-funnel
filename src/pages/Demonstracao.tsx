import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'

import {
  Calendar,
  Phone,
  Mail,
  User,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  AlertCircle,
} from 'lucide-react'

import { HERD_SIZE_OPTIONS } from '@/constants/config'

export default function Demonstracao() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    animals: '',
    date: '',
    time: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Get parameters from URL
    const params = new URLSearchParams(location.search)
    const nameParam = params.get('name')
    const whatsappParam = params.get('whatsapp')
    const herdSizeParam = params.get('herdSize')

    // Update form if parameters exist
    if (nameParam || whatsappParam || herdSizeParam) {
      setFormData((prev) => ({
        ...prev,
        name: nameParam || prev.name,
        phone: whatsappParam || prev.phone,
        animals: herdSizeParam || prev.animals,
      }))
    }
  }, [location.search])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xrbagqkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          animals: formData.animals,
          date: formData.date,
          time: formData.time,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(result.error || 'Erro ao agendar demonstração')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  if (isSubmitted) {
    return (
      <PageLayout title="Demonstração Agendada">
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Demonstração Agendada!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors">
              Perfeito! Sua demonstração foi agendada com sucesso. Nossa equipe entrará em contato
              em breve para confirmar os detalhes.
            </p>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl mb-8 transition-colors">
              <div className="flex items-center justify-center space-x-8 text-sm text-emerald-800 dark:text-emerald-300 transition-colors">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  30 minutos
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Consultoria especializada
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Setup personalizado
                </div>
              </div>
            </div>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg">
              <Link to="/" className="text-white no-underline">
                Voltar ao Início
              </Link>
            </button>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Agendar Demonstração">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Information */}
            <div>
              <h1
                className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Veja o{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Horvatti Champ
                </span>{' '}
                em Ação
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed transition-colors">
                Agende uma demonstração personalizada e descubra como nossa plataforma pode
                transformar a gestão da sua fazenda.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
                    <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      30 Minutos de Demonstração
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Apresentação completa das funcionalidades principais e como elas se aplicam ao
                      seu negócio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
                    <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      Consultor Especializado
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Nossos especialistas conhecem profundamente a pecuária e podem responder suas
                      dúvidas específicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-colors">
                    <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      Setup Personalizado
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">
                      Orientação sobre como configurar o sistema para as necessidades específicas da
                      sua propriedade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-2xl transition-colors">
                <h3 className="font-bold text-emerald-900 dark:text-emerald-300 mb-3 transition-colors">
                  O que você verá na demonstração:
                </h3>
                <ul className="space-y-2 text-emerald-800 dark:text-emerald-400 transition-colors">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                    Dashboard em tempo real
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                    Gestão de protocolos IATF
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                    Relatórios e análises
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0" />
                    App mobile em funcionamento
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl transition-colors">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors">
                Agendar Demonstração
              </h2>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center mb-6 transition-colors">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                  <p className="text-red-800 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Fazenda/Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      placeholder="Nome da propriedade"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Tamanho do Rebanho
                  </label>
                  <select
                    value={formData.animals}
                    onChange={(e) => setFormData({ ...formData, animals: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    required
                  >
                    {HERD_SIZE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Data Preferida
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Horário
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                      required
                    >
                      <option value="">Selecione o horário</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Agendando...
                    </>
                  ) : (
                    <>
                      Agendar Demonstração <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-center transition-colors">
                  Demonstração gratuita • Sem compromisso • Consultoria especializada
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
