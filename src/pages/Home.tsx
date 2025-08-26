import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

import {
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  CheckCircle,
  Star,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Play,
  X,
} from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowModal(true)
      setEmail('')
    }, 1500)
  }

  const features = [
    {
      icon: BarChart3,
      title: '25+ Módulos Integrados',
      description:
        'Dashboard, BI, Marketplace, Sustentabilidade, Clima, Genética, Financeiro, Estoque, Laboratórios e muito mais em uma plataforma única.',
    },
    {
      icon: Users,
      title: 'Inteligência Artificial',
      description:
        'IA integrada em todos os módulos para insights automáticos, previsões precisas e recomendações inteligentes.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description:
        'Analytics avançados, machine learning e relatórios preditivos para decisões estratégicas baseadas em dados.',
    },
    {
      icon: Shield,
      title: 'Ecossistema Completo',
      description:
        'Do campo ao escritório, da sustentabilidade ao marketplace - tudo integrado em uma única solução robusta.',
    },
  ]

  const benefits = [
    'Aumente a taxa de prenhez em até 45% com IA preditiva',
    'Reduza custos operacionais em 35% com otimização automática',
    'Economize 25 horas por semana com automação completa',
    'Gerencie operações ilimitadas com escalabilidade total',
    'Marketplace integrado com 500+ fornecedores',
    'Business Intelligence com insights em tempo real',
    'Sustentabilidade ESG com monitoramento automático',
    'Prospecção de leads e CRM integrado',
  ]

  const testimonials = [
    {
      name: 'João Silva Santos',
      role: 'Fazenda São João - SP',
      content:
        'Desde que implementamos o Horvatti Champ, nossa taxa de prenhez aumentou 40%. A plataforma revolucionou nossa gestão.',
      rating: 5,
      animals: '450 animais',
    },
    {
      name: 'Maria Oliveira',
      role: 'Pecuária Moderna Ltda',
      content:
        'Excelente sistema! Consigo acompanhar todos os protocolos IATF e ter controle total da reprodução do rebanho.',
      rating: 5,
      animals: '800 animais',
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Inseminador Certificado',
      content:
        'Como técnico, o sistema me conecta com fazendas que precisam dos meus serviços. Uma verdadeira revolução no setor.',
      rating: 5,
      animals: '15 fazendas atendidas',
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 dark:from-emerald-600/10 dark:to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-colors">
              <Award className="w-4 h-4 mr-2" />
              Plataforma #1 em Gestão Pecuária - Edição 2025
            </div>
            <h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Revolucione a
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                {' '}
                Gestão{' '}
              </span>
              da Sua Fazenda
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors">
              <strong>25+ módulos integrados</strong> em uma única plataforma: Dashboard BI,
              Marketplace, Sustentabilidade ESG, Clima, Genética, Prospecção de Leads e muito mais.
              Aumente sua produtividade em até{' '}
              <strong className="text-emerald-600 dark:text-emerald-400">45%</strong>.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none text-lg transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold text-lg disabled:opacity-50 flex items-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Começar <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 transition-colors">
                Demonstração gratuita • Sem compromisso • Suporte 24/7
              </p>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-300 transition-colors">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>Setup em 15 minutos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>Teste grátis por 14 dias</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Recursos Que Fazem a{' '}
              <span className="text-emerald-600 dark:text-emerald-400">Diferença</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Tecnologia avançada desenvolvida especificamente para o agronegócio brasileiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border border-emerald-100 dark:border-emerald-800/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="beneficios"
        className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Revolução <span className="text-emerald-300">2025</span>
              </h2>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
                A plataforma mais avançada do agronegócio mundial. Mais de 15.000 fazendas já
                adotaram nossa tecnologia revolucionária:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-300 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="mt-10 bg-white text-emerald-900 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center"
              >
                Ver Demonstração <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="https://mocha-cdn.com/0198cdf6-4322-782f-b610-bb573a8c6e8f/image.png_7802.png"
                  alt="Dashboard Horvatti Champ"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 bg-emerald-400 text-emerald-900 px-4 py-2 rounded-lg font-semibold">
                  Interface Intuitiva
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              O Que Nossos <span className="text-emerald-600 dark:text-emerald-400">Clientes</span>{' '}
              Dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Histórias reais de produtores que transformaram seus negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="border-t dark:border-gray-700 pt-4 transition-colors">
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm transition-colors">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">
                    {testimonial.animals}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Pronto Para Revolucionar Sua Fazenda?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Junte-se a milhares de produtores que já transformaram suas propriedades com nossa
            tecnologia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center"
            >
              Começar Teste Gratuito <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg"
            >
              Agendar Demonstração
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full p-8 relative transition-colors">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                {currentStep === 1 ? 'Quase Lá!' : 'Sucesso!'}
              </h3>

              {currentStep === 1 ? (
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                    Preencha alguns dados para acessar sua demonstração gratuita:
                  </p>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                    />
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors">
                      <option>Tamanho do rebanho</option>
                      <option>Até 100 animais</option>
                      <option>101-500 animais</option>
                      <option>501-1000 animais</option>
                      <option>Mais de 1000 animais</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold"
                    >
                      Acessar Demonstração <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                    Demonstração liberada! Nossa equipe entrará em contato em até 2 horas para
                    agendar sua apresentação personalizada.
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Demonstração de 30 minutos
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
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
