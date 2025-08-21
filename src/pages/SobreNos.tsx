import PageLayout from '@/components/PageLayout'
import { Users, Target, Heart, Shield, Zap } from 'lucide-react'

export default function SobreNos() {
  const stats = [
    { number: '10K+', label: 'Fazendas Atendidas' },
    { number: '2M+', label: 'Animais Gerenciados' },
    { number: '40%', label: 'Aumento Médio na Produtividade' },
    { number: '99.9%', label: 'Uptime do Sistema' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Paixão pelo Agronegócio',
      description:
        'Acreditamos no potencial transformador da tecnologia no campo e trabalhamos com dedicação para criar soluções que realmente fazem a diferença.',
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description:
        'Construímos tecnologia robusta e segura, garantindo que seus dados estejam sempre protegidos e disponíveis quando você precisar.',
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description:
        'Estamos sempre evoluindo nossos produtos com base no feedback dos clientes e nas mais recentes tecnologias disponíveis.',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description:
        'Cada funcionalidade é pensada para facilitar o dia a dia dos produtores, com interfaces intuitivas e suporte especializado.',
    },
  ]

  const team = [
    {
      name: 'Dr. Roberto Horvatti',
      role: 'CEO & Fundador',
      description:
        'Veterinário com 20 anos de experiência em reprodução bovina e especialista em tecnologia para agronegócio.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Ana Clara Santos',
      role: 'CTO',
      description:
        'Engenheira de Software com expertise em sistemas distribuídos e aplicações mobile para o setor rural.',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612e29f?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Head de Produto',
      description:
        'Zootecnista e especialista em IATF, responsável por traduzir as necessidades do campo em funcionalidades práticas.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Marina Costa',
      role: 'Head de Customer Success',
      description:
        'Especialista em relacionamento com clientes e treinamentos técnicos para maximizar o uso da plataforma.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },
  ]

  const timeline = [
    {
      year: '2018',
      title: 'Início da Jornada',
      description:
        'Fundação da empresa com foco em resolver os desafios reais da pecuária brasileira.',
    },
    {
      year: '2019',
      title: 'Primeiro Produto',
      description: 'Lançamento da primeira versão do sistema de gestão pecuária.',
    },
    {
      year: '2020',
      title: 'Expansão Nacional',
      description: 'Alcançamos mais de 1.000 fazendas em todo o Brasil.',
    },
    {
      year: '2021',
      title: 'App Mobile',
      description: 'Lançamento do aplicativo mobile para trabalho no campo.',
    },
    {
      year: '2022',
      title: 'Integrações',
      description: 'Desenvolvimento de integrações com equipamentos e laboratórios.',
    },
    {
      year: '2023',
      title: 'IA e Analytics',
      description: 'Implementação de inteligência artificial para análises preditivas.',
    },
    {
      year: '2024',
      title: 'Líder de Mercado',
      description: 'Reconhecidos como a solução #1 em gestão pecuária no Brasil.',
    },
  ]

  return (
    <PageLayout title="Sobre Nós">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Revolucionando a{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Pecuária
              </span>{' '}
              Brasileira
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Somos uma empresa brasileira apaixonada por tecnologia e agronegócio, dedicada a
              transformar a gestão pecuária através da inovação.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Nossa Missão
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Democratizar o acesso à tecnologia de ponta para pecuaristas de todos os portes,
                oferecendo ferramentas que aumentam a produtividade, reduzem custos e melhoram o
                bem-estar animal.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-12 h-12 text-emerald-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Visão</h3>
                  <p className="text-gray-600">
                    Ser a plataforma de gestão pecuária mais utilizada da América Latina.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop"
                alt="Fazenda"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">Os princípios que guiam tudo o que fazemos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais experientes unidos por uma paixão comum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600">
              Uma história de crescimento e inovação constante
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-emerald-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
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
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Junte-se aos milhares de produtores que já escolheram o Horvatti Champ
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg">
            Começar Agora
          </button>
        </div>
      </section>
    </PageLayout>
  )
}
