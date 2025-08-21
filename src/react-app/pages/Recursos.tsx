import PageLayout from '@/react-app/components/PageLayout';
import { 
  BarChart3, 
  Users, 
  Smartphone,
  Calendar,
  MapPin,
  Database,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Package,
  MessageSquare,
  Dna,
  Leaf,
  TestTube,
  ClipboardList,
  Lightbulb,
  FileText,
  GraduationCap,
  Recycle,
  Brain,
  ShoppingCart,
  Award,
  CloudRain,
  Search,
  Monitor,
  Star,
  Settings
} from 'lucide-react';

export default function Recursos() {
  const coreModules = [
    {
      icon: BarChart3,
      title: "Dashboard & BI",
      description: "Business Intelligence com IA integrada",
      features: [
        "Dashboard em tempo real com IA preditiva",
        "Machine Learning para insights automáticos",
        "KPIs personalizáveis por módulo",
        "Alertas inteligentes contextuais"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Integrado",
      description: "Marketplace completo de insumos e serviços",
      features: [
        "500+ fornecedores homologados",
        "Comparação automática de preços",
        "Gestão de pedidos e entregas",
        "Histórico de compras e análises"
      ]
    },
    {
      icon: Leaf,
      title: "Sustentabilidade ESG",
      description: "Gestão completa de práticas sustentáveis",
      features: [
        "Monitoramento de pegada de carbono",
        "Relatórios ESG automatizados",
        "Certificações ambientais",
        "Metas ODS integradas"
      ]
    },
    {
      icon: Search,
      title: "Prospecção & CRM",
      description: "Sistema completo de prospecção de leads",
      features: [
        "CRM integrado ao sistema",
        "Automação de marketing rural",
        "Pipeline de vendas inteligente",
        "Análise de conversão avançada"
      ]
    },
    {
      icon: CloudRain,
      title: "Monitoramento Climático",
      description: "Central meteorológica integrada",
      features: [
        "Previsão do tempo hyperlocal",
        "Alertas climáticos automáticos",
        "Histórico meteorológico completo",
        "Planejamento sazonal inteligente"
      ]
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA permeando todos os módulos",
      features: [
        "Predições de prenhez com 95% precisão",
        "Otimização automática de recursos",
        "Recomendações personalizadas",
        "Análises preditivas avançadas"
      ]
    }
  ];

  const allModules = [
    { icon: BarChart3, title: "Dashboard", description: "Visão 360° em tempo real" },
    { icon: Users, title: "Cadastros", description: "Gestão completa de dados" },
    { icon: Calendar, title: "Manejo", description: "Protocolos e atividades" },
    { icon: Monitor, title: "Monitoramento", description: "Acompanhamento 24/7" },
    { icon: Star, title: "Nascimentos", description: "Controle reprodutivo total" },
    { icon: MapPin, title: "Mapa", description: "Geolocalização avançada" },
    { icon: Award, title: "Avaliações", description: "Sistema de qualificação" },
    { icon: DollarSign, title: "Financeiro", description: "Gestão financeira completa" },
    { icon: Package, title: "Estoque", description: "Controle de insumos" },
    { icon: MessageSquare, title: "Comunicação", description: "Hub de comunicação" },
    { icon: Dna, title: "Genética", description: "Gestão genética avançada" },
    { icon: Leaf, title: "Pastagens", description: "Gestão inteligente" },
    { icon: TestTube, title: "Laboratórios", description: "Integração completa" },
    { icon: ClipboardList, title: "Ordens de Serviço", description: "Gestão de manutenção" },
    { icon: Lightbulb, title: "Oportunidades", description: "Insights de melhoria" },
    { icon: FileText, title: "Relatórios", description: "200+ relatórios" },
    { icon: GraduationCap, title: "Treinamento", description: "Capacitação integrada" },
    { icon: Recycle, title: "Sustentabilidade", description: "Práticas ESG" },
    { icon: Brain, title: "Business Intelligence", description: "IA e Analytics" },
    { icon: ShoppingCart, title: "Marketplace", description: "E-commerce integrado" },
    { icon: Award, title: "Qualidade", description: "Gestão da qualidade" },
    { icon: CloudRain, title: "Clima", description: "Monitoramento climático" },
    { icon: Search, title: "Prospecção de Leads", description: "CRM completo" },
    { icon: Smartphone, title: "App Mobile", description: "Acesso total mobile" },
    { icon: Settings, title: "Integrações", description: "50+ integrações" }
  ];

  const integrations = [
    {
      name: "Balanças Eletrônicas",
      description: "Integração direta com balanças para pesagem automática"
    },
    {
      name: "Leitores de Chip",
      description: "Compatível com os principais leitores do mercado"
    },
    {
      name: "Sistemas de Ordenha",
      description: "Conexão com equipamentos de ordenha robotizada"
    },
    {
      name: "Laboratórios",
      description: "Recebimento automático de resultados de exames"
    }
  ];

  return (
    <PageLayout title="Recursos">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Database className="w-4 h-4 mr-2" />
              Plataforma Completa 2025
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">25+ Módulos</span> em Uma Única Plataforma
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A revolução da gestão pecuária chegou: Dashboard BI, Marketplace, Sustentabilidade ESG, Prospecção de Leads, Clima e muito mais integrados.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Módulos Revolucionários 2025
            </h2>
            <p className="text-xl text-gray-600">
              Os 6 pilares tecnológicos que transformam sua gestão pecuária
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coreModules.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Modules Grid */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Todos os 25+ Módulos Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Descubra a amplitude completa da nossa plataforma integrada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {allModules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Integrações Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Conecte o Horvatti Champ com seus equipamentos existentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center p-6 border border-emerald-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-3 h-3 bg-emerald-600 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-gray-600">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Teste Todos os Recursos Gratuitamente
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            30 dias de acesso completo, sem compromisso
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center">
            Começar Teste Gratuito <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </PageLayout>
  );
}
