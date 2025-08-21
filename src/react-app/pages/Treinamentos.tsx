import { useState } from 'react';
import PageLayout from '@/react-app/components/PageLayout';
import { 
  GraduationCap, 
  Monitor, 
  Users, 
  Calendar,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
  Download
} from 'lucide-react';

export default function Treinamentos() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [showModal, setShowModal] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState<any>(null);

  const categories = [
    { id: 'todos', name: 'Todos os Cursos' },
    { id: 'basico', name: 'Básico' },
    { id: 'avancado', name: 'Avançado' },
    { id: 'especializado', name: 'Especializado' },
    { id: 'certificacao', name: 'Certificação' }
  ];

  const trainings = [
    {
      id: 1,
      title: "Introdução ao Horvatti Champ",
      category: "basico",
      duration: "4 horas",
      format: "Online",
      level: "Iniciante",
      description: "Aprenda os fundamentos do sistema e configure sua primeira fazenda",
      features: [
        "Navegação pela interface",
        "Cadastro de animais",
        "Primeiros protocolos IATF",
        "Relatórios básicos"
      ],
      participants: 1250,
      rating: 4.8,
      price: "Gratuito",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Gestão Avançada de Rebanho",
      category: "avancado",
      duration: "8 horas",
      format: "Híbrido",
      level: "Intermediário",
      description: "Técnicas avançadas para otimização da produtividade",
      features: [
        "Protocolos IATF complexos",
        "Análise de indicadores",
        "Gestão de múltiplas propriedades",
        "Integração com equipamentos"
      ],
      participants: 890,
      rating: 4.9,
      price: "R$ 297",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Análise de Dados e Relatórios",
      category: "especializado",
      duration: "6 horas",
      format: "Online",
      level: "Avançado",
      description: "Transforme dados em insights estratégicos para sua fazenda",
      features: [
        "Dashboard customizado",
        "Métricas de performance",
        "Análise preditiva",
        "Relatórios personalizados"
      ],
      participants: 560,
      rating: 4.7,
      price: "R$ 197",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Certificação Profissional",
      category: "certificacao",
      duration: "16 horas",
      format: "Presencial",
      level: "Todos os níveis",
      description: "Torne-se um especialista certificado em gestão pecuária digital",
      features: [
        "Certificado reconhecido",
        "Exame prático",
        "Material completo",
        "Acompanhamento pós-curso"
      ],
      participants: 320,
      rating: 5.0,
      price: "R$ 597",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "App Mobile no Campo",
      category: "basico",
      duration: "3 horas",
      format: "Online",
      level: "Iniciante",
      description: "Domine o uso do aplicativo mobile para trabalho no campo",
      features: [
        "Navegação offline",
        "Scanner de chips",
        "Sincronização de dados",
        "Dicas de campo"
      ],
      participants: 980,
      rating: 4.6,
      price: "R$ 97",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Implementação Empresarial",
      category: "especializado",
      duration: "12 horas",
      format: "Presencial",
      level: "Avançado",
      description: "Consultoria para implementação em grandes operações",
      features: [
        "Consultoria personalizada",
        "Treinamento de equipe",
        "Configuração avançada",
        "Suporte dedicado"
      ],
      participants: 150,
      rating: 4.9,
      price: "Sob consulta",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop"
    }
  ];

  const filteredTrainings = selectedCategory === 'todos' 
    ? trainings 
    : trainings.filter(training => training.category === selectedCategory);

  const stats = [
    { icon: Users, number: "15K+", label: "Alunos Treinados" },
    { icon: Award, number: "2.5K+", label: "Certificados Emitidos" },
    { icon: Star, number: "4.8", label: "Avaliação Média" },
    { icon: Trophy, number: "95%", label: "Taxa de Aprovação" }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Instrutores Especialistas",
      description: "Aprenda com veterinários e zootecnistas com mais de 15 anos de experiência"
    },
    {
      icon: Monitor,
      title: "Múltiplas Modalidades",
      description: "Escolha entre cursos online, presenciais ou híbridos conforme sua disponibilidade"
    },
    {
      icon: Calendar,
      title: "Flexibilidade Total",
      description: "Acesso vitalício aos materiais e cronograma flexível para sua rotina"
    },
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Certificados validados por instituições renomadas do agronegócio"
    }
  ];

  const testimonials = [
    {
      name: "Dr. João Pereira",
      role: "Fazenda Santa Clara",
      content: "O treinamento avançado me ajudou a aumentar a eficiência da IATF em 35%. Recomendo a todos os colegas.",
      rating: 5,
      course: "Gestão Avançada de Rebanho"
    },
    {
      name: "Maria Santos",
      role: "Pecuária Moderna",
      content: "Certificação completa que transformou nossa gestão. A equipe toda passou pelo treinamento.",
      rating: 5,
      course: "Certificação Profissional"
    },
    {
      name: "Carlos Oliveira",
      role: "Fazenda São José",
      content: "Curso online prático e objetivo. Em poucas horas já estava usando o sistema com confiança.",
      rating: 5,
      course: "Introdução ao Horvatti Champ"
    }
  ];

  const handleEnrollment = (training: any) => {
    setSelectedTraining(training);
    setShowModal(true);
  };

  return (
    <PageLayout title="Treinamentos">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              Educação Especializada em Tecnologia Pecuária
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Maximize Seus <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Resultados</span> com Treinamento Profissional
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Aprenda com especialistas e domine todas as funcionalidades do Horvatti Champ para revolucionar sua gestão pecuária.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center"
              >
                Explorar Cursos <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" /> Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Por Que Escolher Nossos Treinamentos?
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para acelerar seu aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nossos Cursos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Escolha o treinamento ideal para seu nível de experiência
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainings.map((training) => (
              <div key={training.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={training.image} 
                    alt={training.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      training.format === 'Online' ? 'bg-blue-100 text-blue-800' :
                      training.format === 'Presencial' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {training.format}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      {training.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{training.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{training.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {training.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {training.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {training.participants} alunos
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {training.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600">{training.price}</div>
                    <button 
                      onClick={() => handleEnrollment(training)}
                      className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors font-semibold"
                    >
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              O Que Nossos Alunos Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação através do conhecimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.course}</p>
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
            Pronto Para Se Tornar um Especialista?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Comece hoje mesmo com nosso curso introdutório gratuito
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center justify-center"
            >
              Começar Curso Gratuito <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold text-lg">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <CheckCircle className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedTraining ? `Inscrição - ${selectedTraining.title}` : "Explorar Cursos"}
              </h3>
              
              <p className="text-gray-600 mb-6">
                Preencha seus dados para {selectedTraining ? "se inscrever no curso" : "receber mais informações sobre nossos treinamentos"}:
              </p>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none">
                  <option>Nível de experiência</option>
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold"
                >
                  {selectedTraining ? "Confirmar Inscrição" : "Receber Informações"} <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
