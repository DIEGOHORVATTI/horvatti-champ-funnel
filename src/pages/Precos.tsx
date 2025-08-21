import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Check, ArrowRight, Star, Zap, Crown, HelpCircle } from 'lucide-react'

export default function Precos() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Iniciante',
      description: 'Perfeito para pequenas propriedades',
      icon: Zap,
      price: isAnnual ? 97 : 127,
      originalPrice: isAnnual ? null : 147,
      limit: 'Até 100 animais',
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
      name: 'Profissional',
      description: 'Ideal para médias propriedades',
      icon: Star,
      price: isAnnual ? 197 : 247,
      originalPrice: isAnnual ? null : 297,
      limit: 'Até 500 animais',
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
      name: 'Enterprise',
      description: 'Para grandes operações',
      icon: Crown,
      price: isAnnual ? 397 : 497,
      originalPrice: isAnnual ? null : 597,
      limit: 'Animais ilimitados',
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
      question: 'Posso cancelar a qualquer momento?',
      answer:
        'Sim, você pode cancelar sua assinatura a qualquer momento. Não há multas ou taxas de cancelamento.',
    },
    {
      question: 'Os dados ficam seguros?',
      answer:
        'Absolutamente. Utilizamos criptografia de nível bancário e fazemos backups automáticos diários dos seus dados.',
    },
    {
      question: 'Há desconto para pagamento anual?',
      answer: 'Sim! Pagando anualmente você economiza até 35% comparado ao plano mensal.',
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.',
    },
    {
      question: 'Há período de teste?',
      answer: 'Sim, oferecemos 30 dias gratuitos para você testar todas as funcionalidades.',
    },
    {
      question: 'O suporte está incluso?',
      answer:
        'Sim, todos os planos incluem suporte. Planos superiores têm suporte prioritário e 24/7.',
    },
  ]

  return (
    <PageLayout title="Preços">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Planos Que{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Cabem
              </span>{' '}
              No Seu Bolso
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para o tamanho da sua propriedade. Comece grátis por 30 dias.
            </p>

            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}
              >
                Mensal
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${
                  isAnnual ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                    isAnnual ? 'translate-x-6' : ''
                  }`}
                />
              </button>
              <span
                className={`ml-3 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}
              >
                Anual
              </span>
              {isAnnual && (
                <span className="ml-3 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Economize 35%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-emerald-600 to-green-600 text-white transform scale-105'
                    : 'bg-white border border-gray-200 hover:-translate-y-2'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Mais Popular
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
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span
                        className={`text-5xl font-bold ${
                          plan.popular ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        R${plan.price}
                      </span>
                      <span
                        className={`ml-2 ${plan.popular ? 'text-emerald-100' : 'text-gray-600'}`}
                      >
                        /mês
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div
                        className={`text-sm mt-1 ${
                          plan.popular ? 'text-emerald-200' : 'text-gray-500'
                        }`}
                      >
                        <span className="line-through">R${plan.originalPrice}/mês</span>
                      </div>
                    )}
                    <div
                      className={`text-sm mt-2 ${
                        plan.popular ? 'text-emerald-100' : 'text-gray-600'
                      }`}
                    >
                      {plan.limit}
                    </div>
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    Começar Teste Gratuito
                  </button>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-emerald-200' : 'text-emerald-600'
                        }`}
                      />
                      <span className={plan.popular ? 'text-emerald-100' : 'text-gray-700'}>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos e serviços
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Pronto Para Começar?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            30 dias grátis para testar. Sem cartão de crédito. Sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center">
              Começar Teste Gratuito <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg">
              Falar com Vendas
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
