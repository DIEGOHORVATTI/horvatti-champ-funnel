import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  ChevronDown,
  CheckCircle,
  HelpCircle,
  Headphones,
  Video,
  Users,
  Send,
  AlertCircle,
} from 'lucide-react'

export default function Suporte() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Chat Online',
      description: 'Resposta imediata durante horário comercial',
      available: 'Seg-Sex: 8h às 18h',
      action: 'Iniciar Chat',
      color: 'from-blue-600 to-blue-700',
      status: 'online',
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Suporte técnico especializado',
      available: '(11) 3456-7890',
      action: 'Ligar Agora',
      color: 'from-green-600 to-green-700',
      status: 'available',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Suporte técnico e comercial',
      available: 'suporte@horvattichamp.com',
      action: 'Enviar Email',
      color: 'from-purple-600 to-purple-700',
      status: '24h',
    },
    {
      icon: Video,
      title: 'Videoconferência',
      description: 'Suporte com compartilhamento de tela',
      available: 'Agendamento necessário',
      action: 'Agendar',
      color: 'from-red-600 to-red-700',
      status: 'scheduled',
    },
  ]

  const categories = [
    { id: 'todos', name: 'Todos', count: 48 },
    { id: 'primeiros-passos', name: 'Primeiros Passos', count: 12 },
    { id: 'configuracao', name: 'Configuração', count: 8 },
    { id: 'manejo', name: 'Manejo de Rebanho', count: 15 },
    { id: 'relatorios', name: 'Relatórios', count: 7 },
    { id: 'mobile', name: 'App Mobile', count: 6 },
  ]

  const faqs = [
    {
      category: 'primeiros-passos',
      question: 'Como faço para começar a usar o Horvatti Champ?',
      answer:
        'Após o cadastro, você receberá um email de boas-vindas com seu login. Recomendamos começar com o módulo de Cadastros para inserir os dados dos seus animais, depois partir para o módulo de Manejo para configurar seus protocolos.',
    },
    {
      category: 'primeiros-passos',
      question: 'Preciso de equipamentos especiais para usar o sistema?',
      answer:
        'Não é obrigatório, mas recomendamos chips para identificação dos animais e leitores para facilitar o trabalho. O sistema funciona perfeitamente apenas com identificação visual também.',
    },
    {
      category: 'configuracao',
      question: 'Como configuro protocolos IATF personalizados?',
      answer:
        "No módulo Manejo, acesse 'Protocolos' e clique em 'Novo Protocolo'. Você pode criar protocolos personalizados definindo cada etapa, medicamentos e intervalos conforme sua necessidade.",
    },
    {
      category: 'configuracao',
      question: 'Posso importar dados de outros sistemas?',
      answer:
        'Sim! Oferecemos importação via planilhas Excel/CSV. Nossa equipe também pode auxiliar na migração de outros sistemas. Entre em contato para agendar.',
    },
    {
      category: 'manejo',
      question: 'Como registrar nascimentos no sistema?',
      answer:
        "No módulo Nascimentos, clique em 'Registrar Nascimento'. Informe a mãe, data de nascimento e dados do bezerro. O sistema calculará automaticamente os indicadores reprodutivos.",
    },
    {
      category: 'manejo',
      question: 'Como funciona o controle de pesagem?',
      answer:
        "No módulo Manejo, acesse 'Pesagem'. Você pode registrar manualmente ou integrar com balanças eletrônicas. O sistema calcula automaticamente GPD e gráficos de crescimento.",
    },
    {
      category: 'relatorios',
      question: 'Quais relatórios estão disponíveis?',
      answer:
        'Temos mais de 200 relatórios: reprodutivos, financeiros, genealógicos, sanitários, nutricionais e muito mais. Todos podem ser personalizados e agendados para envio automático.',
    },
    {
      category: 'mobile',
      question: 'O app funciona offline?',
      answer:
        'Sim! O app mobile funciona offline e sincroniza automaticamente quando há conexão. Ideal para trabalho em campo onde a internet pode ser instável.',
    },
    {
      category: 'mobile',
      question: 'Como usar o scanner de chips?',
      answer:
        'No app, acesse qualquer módulo que precise identificar um animal e toque no ícone do scanner. Aproxime o dispositivo do chip e os dados serão carregados automaticamente.',
    },
  ]

  const stats = [
    { icon: Clock, number: '< 2h', label: 'Tempo Médio de Resposta' },
    { icon: CheckCircle, number: '98%', label: 'Taxa de Resolução' },
    { icon: Users, number: '24/7', label: 'Suporte Disponível' },
    { icon: Headphones, number: '15+', label: 'Especialistas Técnicos' },
  ]

  const filteredFaqs =
    selectedCategory === 'todos' ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

  const searchFilteredFaqs = filteredFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert('Ticket criado com sucesso! Em breve nossa equipe entrará em contato.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      priority: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <PageLayout title="Suporte">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Headphones className="w-4 h-4 mr-2" />
              Suporte Especializado 24/7
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Como Podemos{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Ajudar
              </span>{' '}
              Você?
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe de especialistas está pronta para resolver suas dúvidas e garantir que
              você aproveite ao máximo o Horvatti Champ.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Pesquise por dúvidas, tutoriais ou problemas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none shadow-lg"
                />
              </div>
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
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Canais de Atendimento
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o canal que melhor atende sua necessidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{channel.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{channel.available}</p>

                  <button
                    className={`w-full bg-gradient-to-r ${channel.color} text-white py-3 rounded-xl hover:shadow-lg transition-all duration-200 font-semibold`}
                  >
                    {channel.action}
                  </button>

                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        channel.status === 'online'
                          ? 'bg-green-400'
                          : channel.status === 'available'
                          ? 'bg-blue-400'
                          : channel.status === '24h'
                          ? 'bg-purple-400'
                          : 'bg-orange-400'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas para as dúvidas mais comuns dos nossos usuários
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {searchFilteredFaqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0" />
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-10">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {searchFilteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">Nenhuma resposta encontrada</p>
              <p className="text-gray-500">
                Tente usar palavras-chave diferentes ou entre em contato conosco.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Criar Ticket de Suporte
            </h2>
            <p className="text-xl text-gray-600">
              Não encontrou o que procurava? Abra um ticket e nossa equipe te ajudará
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Categoria*
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="tecnico">Problema Técnico</option>
                    <option value="duvida">Dúvida de Uso</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prioridade*
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                >
                  <option value="">Selecione a prioridade</option>
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                  <option value="urgente">Urgente</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Assunto*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Resumo do problema ou dúvida"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Descrição*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Descreva detalhadamente seu problema ou dúvida..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Criar Ticket
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <Clock className="w-16 h-16 text-white mx-auto mb-6" />
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Horários de Funcionamento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div>
                  <h3 className="font-bold text-lg mb-2">Suporte Técnico</h3>
                  <p className="text-emerald-100">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-emerald-100">Sábado: 8h às 12h</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Chat Online</h3>
                  <p className="text-emerald-100">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-emerald-100">Resposta imediata</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Support</h3>
                  <p className="text-emerald-100">24/7 - Resposta em até 2h</p>
                  <p className="text-emerald-100">suporte@horvattichamp.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
