import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Check, ArrowRight, Star, Zap, Crown, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import useI18n from '@/hooks/useI18n'

export default function Precos() {
  const { t, renderHighlightedText } = useI18n()
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: t('pricing.plans.starter.name'),
      description: t('pricing.plans.starter.description'),
      icon: Zap,
      price: isAnnual ? 97 : 127,
      originalPrice: isAnnual ? null : 147,
      limit: t('pricing.plans.starter.limit'),
      popular: false,
      features: [
        'Dashboard básico',
        'Cadastro de animais',
        'Controle reprodutivo',
        'Relatórios básicos',
        'App mobile',
        'Suporte por email',
      ],
    },
    {
      name: t('pricing.plans.professional.name'),
      description: t('pricing.plans.professional.description'),
      icon: Star,
      price: isAnnual ? 197 : 247,
      originalPrice: isAnnual ? null : 297,
      limit: t('pricing.plans.professional.limit'),
      popular: true,
      features: [
        'Tudo do plano Iniciante',
        'Protocolos IATF avançados',
        'Análises detalhadas',
        'Múltiplas propriedades',
        'Integração com equipamentos',
        'Suporte prioritário',
        'Backup automático',
        'Relatórios personalizados',
      ],
    },
    {
      name: t('pricing.plans.enterprise.name'),
      description: t('pricing.plans.enterprise.description'),
      icon: Crown,
      price: isAnnual ? 397 : 497,
      originalPrice: isAnnual ? null : 597,
      limit: t('pricing.plans.enterprise.limit'),
      popular: false,
      features: [
        'Tudo do plano Profissional',
        'API personalizada',
        'Treinamento dedicado',
        'Consultor especializado',
        'Integrações customizadas',
        'Suporte 24/7',
        'SLA garantido',
        'Implementação assistida',
      ],
    },
  ]

  const faqs = [
    {
      question: t('pricing.faq.questions.cancel.question'),
      answer: t('pricing.faq.questions.cancel.answer'),
    },
    {
      question: t('pricing.faq.questions.security.question'),
      answer: t('pricing.faq.questions.security.answer'),
    },
    {
      question: t('pricing.faq.questions.discount.question'),
      answer: t('pricing.faq.questions.discount.answer'),
    },
    {
      question: t('pricing.faq.questions.change.question'),
      answer: t('pricing.faq.questions.change.answer'),
    },
    {
      question: t('pricing.faq.questions.trial.question'),
      answer: t('pricing.faq.questions.trial.answer'),
    },
    {
      question: t('pricing.faq.questions.support.question'),
      answer: t('pricing.faq.questions.support.answer'),
    },
  ]

  return (
    <PageLayout title={t('navigation.pricing')}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {renderHighlightedText('pricing.hero.title', 'Cabem')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors">
              {t('pricing.hero.subtitle')}
            </p>

            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${
                  !isAnnual
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-400'
                } transition-colors`}
              >
                {t('pricing.toggleMonthly')}
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                  isAnnual ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                    isAnnual ? 'translate-x-6' : ''
                  }`}
                />
              </button>
              <span
                className={`ml-3 ${
                  isAnnual
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-400'
                } transition-colors`}
              >
                {t('pricing.toggleAnnual')}
              </span>
              {isAnnual && (
                <span className="ml-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold transition-colors">
                  {t('pricing.saveText')}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-emerald-600 to-green-600 text-white transform scale-105'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      {t('pricing.popular')}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      plan.popular
                        ? 'bg-white/20'
                        : 'bg-gradient-to-br from-emerald-600 to-green-600'
                    }`}
                  >
                    <plan.icon
                      className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`}
                    />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                    } transition-colors`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mb-6 ${
                      plan.popular ? 'text-emerald-100' : 'text-gray-600 dark:text-gray-300'
                    } transition-colors`}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span
                        className={`text-5xl font-bold ${
                          plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                        } transition-colors`}
                      >
                        R${plan.price}
                      </span>
                      <span
                        className={`ml-2 ${
                          plan.popular ? 'text-emerald-100' : 'text-gray-600 dark:text-gray-300'
                        } transition-colors`}
                      >
                        {t('pricing.perMonth')}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div
                        className={`text-sm mt-1 ${
                          plan.popular ? 'text-emerald-200' : 'text-gray-500 dark:text-gray-400'
                        } transition-colors`}
                      >
                        <span className="line-through">
                          R${plan.originalPrice}
                          {t('pricing.perMonth')}
                        </span>
                      </div>
                    )}
                    <div
                      className={`text-sm mt-2 ${
                        plan.popular ? 'text-emerald-100' : 'text-gray-600 dark:text-gray-300'
                      } transition-colors`}
                    >
                      {plan.limit}
                    </div>
                  </div>

                  <Link
                    to="/demonstracao"
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 mb-8 inline-block text-center ${
                      plan.popular
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    {t('common.freeTrial')}
                  </Link>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.popular
                            ? 'text-emerald-200'
                            : 'text-emerald-600 dark:text-emerald-400'
                        } transition-colors`}
                      />
                      <span
                        className={`${
                          plan.popular ? 'text-emerald-100' : 'text-gray-700 dark:text-gray-300'
                        } transition-colors`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t('pricing.faq.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg transition-colors"
              >
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-4 flex-shrink-0 mt-1 transition-colors" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      {faq.answer}
                    </p>
                  </div>
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
            {t('pricing.cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-10">{t('pricing.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demonstracao"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center"
            >
              {t('pricing.cta.startFree')} <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demonstracao"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg inline-block text-center"
            >
              {t('pricing.cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
