import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '@/components/PageLayout'
import useI18n from '@/hooks/useI18n'

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

import { HERD_SIZE_OPTIONS } from '@/constants/config'

export default function Home() {
  const { t } = useI18n()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentStep] = useState(1) // Removed setCurrentStep since we're now navigating directly
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    herdSize: '',
  })

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
      title: t('home.features.integratedModules'),
      description: t('home.features.integratedModulesDesc'),
    },
    {
      icon: Users,
      title: t('home.features.artificialIntelligence'),
      description: t('home.features.artificialIntelligenceDesc'),
    },
    {
      icon: TrendingUp,
      title: t('home.features.businessIntelligence'),
      description: t('home.features.businessIntelligenceDesc'),
    },
    {
      icon: Shield,
      title: t('home.features.completeEcosystem'),
      description: t('home.features.completeEcosystemDesc'),
    },
  ]

  const benefits = [
    t('home.benefits.increasePregnancyRate'),
    t('home.benefits.reduceOperationalCosts'),
    t('home.benefits.saveTime'),
    t('home.benefits.manageUnlimited'),
    t('home.benefits.integratedMarketplace'),
    t('home.benefits.realTimeBI'),
    t('home.benefits.esgSustainability'),
    t('home.benefits.leadProspecting'),
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
    <PageLayout title={t('seo.homeTitle')} description={t('seo.homeDescription')}>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-green-600/5 dark:from-emerald-600/10 dark:to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-colors">
              <Award className="w-4 h-4 mr-2" />
              {t('home.hero.badge')}
            </div>
            <h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t('home.hero.title')
                .split('Gestão')
                .map((part, index) =>
                  index === 0 ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index}>
                      <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        {' '}
                        Gestão{' '}
                      </span>
                      {part}
                    </span>
                  )
                )}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors">
              <strong>{t('home.hero.description').split('45%')[0]}</strong>
              <strong className="text-emerald-600 dark:text-emerald-400">45%</strong>.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('common.email')}
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
                      {t('common.getStarted')} <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 transition-colors">
                {t('common.freeDemo')} • {t('common.noCommitment')} • {t('common.support247')}
              </p>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-300 transition-colors">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>{t('common.quickSetup')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>{t('common.freeTrial')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span>{t('common.expertSupport')}</span>
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
              {t('home.features.title')
                .split('Diferença')
                .map((part, index) =>
                  index === 0 ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index}>
                      <span className="text-emerald-600 dark:text-emerald-400">Diferença</span>
                      {part}
                    </span>
                  )
                )}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              {t('home.features.subtitle')}
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
              {t('home.testimonials.title')}
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
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-10">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center"
            >
              {t('common.startNow')} <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg"
            >
              {t('common.learnMore')}
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
                {currentStep === 1 ? t('home.modal.almostThere') : t('home.modal.success')}
              </h3>

              {currentStep === 1 ? (
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                    {t('home.modal.fillData')}
                  </p>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (formData.name && formData.whatsapp && formData.herdSize) {
                        const params = new URLSearchParams({
                          name: formData.name,
                          whatsapp: formData.whatsapp,
                          herdSize: formData.herdSize,
                        })
                        navigate(`/demonstracao?${params.toString()}`)
                      }
                    }}
                  >
                    <input
                      type="text"
                      placeholder={t('common.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder={t('common.whatsapp')}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                      required
                    />
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent outline-none transition-colors"
                      value={formData.herdSize}
                      onChange={(e) => setFormData({ ...formData, herdSize: e.target.value })}
                      required
                    >
                      {HERD_SIZE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold"
                    >
                      {t('home.modal.accessDemo')} <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                    {t('home.modal.demoReleased')}
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {t('home.modal.demoTime')}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {t('home.modal.specializedConsulting')}
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      {t('home.modal.customSetup')}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // Fechar o modal e ir para a página de demonstração
                      setShowModal(false)
                      const params = new URLSearchParams({
                        name: formData.name,
                        whatsapp: formData.whatsapp,
                        herdSize: formData.herdSize,
                      })
                      navigate(`/demonstracao?${params.toString()}`)
                    }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 mt-4 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold"
                  >
                    {t('home.modal.goToDemo')} <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
