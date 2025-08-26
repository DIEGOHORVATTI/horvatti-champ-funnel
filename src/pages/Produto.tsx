import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

import {
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Play,
  Database,
  MapPin,
  Calendar,
  Star,
  DollarSign,
  Package,
  MessageSquare,
  Dna,
  Leaf,
  TestTube,
  ClipboardList,
  FileText,
  GraduationCap,
  Recycle,
  Brain,
  ShoppingCart,
  Award,
  CloudRain,
  Search,
  Monitor,
  Cpu,
  Globe,
  Settings,
} from 'lucide-react'

export default function Produto() {
  const [activeCategory, setActiveCategory] = useState('gestao')

  const moduleCategories = [
    { id: 'gestao', name: 'Gestão Central', icon: Database },
    { id: 'operacional', name: 'Operacional', icon: Settings },
    { id: 'inteligencia', name: 'Inteligência & Analytics', icon: Brain },
    { id: 'comercial', name: 'Comercial & Marketplace', icon: ShoppingCart },
    { id: 'sustentabilidade', name: 'Sustentabilidade & Clima', icon: Leaf },
  ]

  const modules = {
    gestao: [
      {
        icon: BarChart3,
        name: 'Dashboard',
        description: 'Visão 360° do negócio com KPIs em tempo real',
        features: [
          'Métricas em tempo real',
          'Alertas inteligentes',
          'Dashboards personalizáveis',
          'Comparativos históricos',
        ],
      },
      {
        icon: Users,
        name: 'Cadastros',
        description: 'Gestão completa de animais, propriedades e pessoas',
        features: [
          'Cadastro completo de animais',
          'Múltiplas propriedades',
          'Gestão de equipe',
          'Histórico detalhado',
        ],
      },
      {
        icon: Calendar,
        name: 'Manejo',
        description: 'Planejamento e execução de atividades',
        features: [
          'Protocolos IATF',
          'Agenda inteligente',
          'Controle sanitário',
          'Protocolos personalizados',
        ],
      },
      {
        icon: Monitor,
        name: 'Monitoramento',
        description: 'Acompanhamento contínuo do rebanho',
        features: [
          'Monitoramento 24/7',
          'IoT integrado',
          'Sensores inteligentes',
          'Alertas automáticos',
        ],
      },
      {
        icon: Star,
        name: 'Nascimentos',
        description: 'Controle completo da reprodução',
        features: [
          'Registro de nascimentos',
          'Genealogia completa',
          'Controle de prenhez',
          'Estatísticas reprodutivas',
        ],
      },
      {
        icon: MapPin,
        name: 'Mapa',
        description: 'Geolocalização e rastreamento',
        features: [
          'GPS integrado',
          'Mapeamento de pastagens',
          'Localização de animais',
          'Rotas otimizadas',
        ],
      },
    ],
    operacional: [
      {
        icon: Award,
        name: 'Avaliações',
        description: 'Sistema de avaliação e qualificação',
        features: [
          'Avaliação de animais',
          'Scores de qualidade',
          'Certificações',
          'Relatórios de conformidade',
        ],
      },
      {
        icon: DollarSign,
        name: 'Financeiro',
        description: 'Gestão financeira completa',
        features: ['Fluxo de caixa', 'Custos por animal', 'ROI detalhado', 'Análise de margem'],
      },
      {
        icon: Package,
        name: 'Estoque',
        description: 'Controle de insumos e medicamentos',
        features: [
          'Controle de estoque',
          'Alerta de vencimento',
          'Gestão de fornecedores',
          'Rastreabilidade completa',
        ],
      },
      {
        icon: MessageSquare,
        name: 'Comunicação',
        description: 'Hub de comunicação integrado',
        features: [
          'Chat interno',
          'Notificações push',
          'Comunicação com técnicos',
          'Histórico de conversas',
        ],
      },
      {
        icon: TestTube,
        name: 'Laboratórios',
        description: 'Integração com laboratórios',
        features: [
          'Resultados automáticos',
          'Histórico de exames',
          'Integração API',
          'Laudos digitais',
        ],
      },
      {
        icon: ClipboardList,
        name: 'Ordens de Serviço',
        description: 'Gestão de serviços e manutenção',
        features: [
          'Ordens automáticas',
          'Controle de execução',
          'Custos por serviço',
          'Histórico completo',
        ],
      },
    ],
    inteligencia: [
      {
        icon: Brain,
        name: 'Business Intelligence',
        description: 'Inteligência artificial para decisões',
        features: [
          'IA preditiva',
          'Machine Learning',
          'Análises avançadas',
          'Insights automáticos',
        ],
      },
      {
        icon: FileText,
        name: 'Relatórios',
        description: 'Relatórios avançados e personalizáveis',
        features: ['200+ relatórios', 'Customização total', 'Automação', 'Múltiplos formatos'],
      },
      {
        icon: Dna,
        name: 'Genética',
        description: 'Gestão genética avançada',
        features: [
          'Genealogia completa',
          'Análises genéticas',
          'Seleção assistida',
          'Cruzamentos planejados',
        ],
      },
      {
        icon: TrendingUp,
        name: 'Oportunidades',
        description: 'Identificação de oportunidades de melhoria',
        features: ['Análise de gaps', 'Recomendações IA', 'Benchmarking', 'Planos de ação'],
      },
      {
        icon: CloudRain,
        name: 'Clima',
        description: 'Monitoramento climático integrado',
        features: [
          'Previsão do tempo',
          'Alertas climáticos',
          'Histórico meteorológico',
          'Planejamento sazonal',
        ],
      },
      {
        icon: Search,
        name: 'Prospecção de Leads',
        description: 'CRM integrado para crescimento',
        features: [
          'Gestão de leads',
          'Pipeline de vendas',
          'Automação de marketing',
          'Análise de conversão',
        ],
      },
    ],
    comercial: [
      {
        icon: ShoppingCart,
        name: 'Marketplace',
        description: 'Marketplace integrado de insumos',
        features: [
          'Compras online',
          'Múltiplos fornecedores',
          'Comparação de preços',
          'Entrega rastreada',
        ],
      },
      {
        icon: Award,
        name: 'Qualidade',
        description: 'Sistema de gestão da qualidade',
        features: [
          'Certificações ISO',
          'Auditorias internas',
          'Não conformidades',
          'Planos de melhoria',
        ],
      },
      {
        icon: GraduationCap,
        name: 'Treinamento',
        description: 'Plataforma de capacitação',
        features: ['Cursos online', 'Certificações', 'Avaliações', 'Trilhas de aprendizado'],
      },
      {
        icon: Globe,
        name: 'Conectividade',
        description: 'Integração com ecossistema',
        features: ['APIs abertas', 'Integrações', 'Sincronização', 'Dados em nuvem'],
      },
    ],
    sustentabilidade: [
      {
        icon: Leaf,
        name: 'Pastagens',
        description: 'Gestão inteligente de pastagens',
        features: [
          'Rotação otimizada',
          'Índices de qualidade',
          'Monitoramento por satélite',
          'Planejamento forrageiro',
        ],
      },
      {
        icon: Recycle,
        name: 'Sustentabilidade',
        description: 'Monitoramento de práticas sustentáveis',
        features: [
          'Pegada de carbono',
          'Indicadores ESG',
          'Certificações ambientais',
          'Relatórios de sustentabilidade',
        ],
      },
      {
        icon: CloudRain,
        name: 'Monitoramento Ambiental',
        description: 'Controle completo do ambiente',
        features: ['Qualidade da água', 'Solo e nutrientes', 'Biodiversidade', 'Impacto ambiental'],
      },
      {
        icon: Target,
        name: 'Metas ESG',
        description: 'Gestão de metas de sustentabilidade',
        features: ['ODS da ONU', 'Metas corporativas', 'Tracking de progresso', 'Relatórios ESG'],
      },
    ],
  }

  const stats = [
    { number: '25+', label: 'Módulos Integrados' },
    { number: '15K+', label: 'Fazendas Ativas' },
    { number: '3M+', label: 'Animais Gerenciados' },
    { number: '50+', label: 'Integrações Disponíveis' },
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Aumento da Produtividade',
      description: 'Até 45% de melhoria na taxa de prenhez',
      stats: '+45%',
    },
    {
      icon: TrendingUp,
      title: 'Redução de Custos',
      description: 'Economia de até 35% nos custos operacionais',
      stats: '-35%',
    },
    {
      icon: Zap,
      title: 'Economia de Tempo',
      description: 'Até 25 horas por semana economizadas',
      stats: '25h/sem',
    },
    {
      icon: Shield,
      title: 'ROI Comprovado',
      description: 'Retorno médio de 300% no primeiro ano',
      stats: '300%',
    },
  ]

  return (
    <PageLayout title="Produto">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-colors">
              <Cpu className="w-4 h-4 mr-2" />
              Plataforma Mais Avançada de 2025
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                25+ Módulos
              </span>{' '}
              Integrados em Uma Única Plataforma
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors">
              Do Dashboard Inteligente ao Marketplace, da Gestão Financeira à Sustentabilidade ESG -
              tudo integrado em uma plataforma revolucionária para o agronegócio moderno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center">
                Explorar Plataforma <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 px-8 py-4 rounded-xl hover:bg-emerald-600 dark:hover:bg-emerald-600/20 hover:text-white transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" /> Ver Demonstração Completa
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Plataforma Completa Para Cada Fase da Gestão Pecuária
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
                Uma solução verdadeiramente completa para fazendas de todos os tamanhos. Módulos
                perfeitamente integrados que cobrem cada aspecto da gestão pecuária moderna.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-lg text-gray-700 dark:text-gray-400">
                    Interface única para todos os módulos
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-lg text-gray-700 dark:text-gray-400">
                    Dados centralizados e sincronizados
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-lg text-gray-700 dark:text-gray-400">
                    Inteligência artificial integrada
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-lg text-gray-700 dark:text-gray-400">
                    Escalável para qualquer tamanho de operação
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6">
                <img
                  src="https://mocha-cdn.com/0198cdf6-4322-782f-b610-bb573a8c6e8f/image.png_4763.png"
                  alt="Dashboard Horvatti Champ 2025"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold">
                  Interface 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Módulos Completos Por Categoria
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Explore todos os módulos organizados por área de atuação
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200 dark:border-gray-700 transition-colors">
            {moduleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-4 font-semibold text-base transition-all duration-200 border-b-2 flex items-center ${
                  activeCategory === category.id
                    ? 'text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules[activeCategory as keyof typeof modules]?.map((module, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {module.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Resultados Extraordinários em 2025
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Dados reais dos nossos clientes que já adotaram a plataforma completa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-3 transition-colors">
                  {benefit.stats}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ecossistema Totalmente Integrado
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Todos os módulos trabalham em perfeita harmonia, compartilhando dados e insights para
              uma gestão verdadeiramente inteligente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dados Unificados</h3>
              <p className="text-emerald-100">
                Uma única fonte da verdade para todos os seus dados pecuários
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">IA Integrada</h3>
              <p className="text-emerald-100">
                Inteligência artificial permeando todos os módulos para insights automáticos
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conectividade Total</h3>
              <p className="text-emerald-100">
                Integração nativa com mais de 50 sistemas e equipamentos
              </p>
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
            Experimente a Revolução 2025
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Seja um dos primeiros a experimentar a plataforma mais avançada do agronegócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white dark:bg-gray-100 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 dark:hover:bg-gray-200 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center">
              Acessar Demonstração Completa <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
