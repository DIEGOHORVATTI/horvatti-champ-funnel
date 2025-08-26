import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Link } from 'react-router-dom'
import useI18n from '@/hooks/useI18n'
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  BookOpen,
  Filter,
  Star,
} from 'lucide-react'

export default function Blog() {
  const { t } = useI18n()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(t('common.all'))

  const categories = [
    t('common.all'),
    t('blog.categories.iatf'),
    t('blog.categories.reproduction'),
    t('blog.categories.technology'),
    t('blog.categories.management'),
    t('blog.categories.nutrition'),
    t('blog.categories.health'),
    t('blog.categories.market'),
  ]

  const featuredPost = {
    id: 1,
    title: 'Revolução na IATF: Como a Tecnologia Está Transformando a Reprodução Bovina',
    excerpt:
      'Descubra as últimas inovações em protocolos de inseminação artificial em tempo fixo e como elas podem aumentar sua taxa de prenhez em até 40%.',
    author: 'Dr. Carlos Mendes',
    date: '15 de Agosto, 2025',
    readTime: '8 min',
    category: 'IATF',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    featured: true,
  }

  const posts = [
    {
      id: 2,
      title: '5 Indicadores Que Todo Pecuarista Deveria Acompanhar',
      excerpt: 'Métricas essenciais para maximizar a produtividade e rentabilidade do seu rebanho.',
      author: 'Ana Silva',
      date: '12 de Agosto, 2025',
      readTime: '5 min',
      category: 'Gestão',
      image:
        'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Nutrição de Precisão: Alimentando o Futuro da Pecuária',
      excerpt: 'Como a alimentação personalizada por animal pode revolucionar seus resultados.',
      author: 'Prof. João Santos',
      date: '10 de Agosto, 2025',
      readTime: '6 min',
      category: 'Nutrição',
      image:
        'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Protocolos de Bem-Estar Animal na Era Digital',
      excerpt:
        'Tecnologias que garantem o conforto e a saúde dos animais aumentando a produtividade.',
      author: 'Dra. Maria Oliveira',
      date: '8 de Agosto, 2025',
      readTime: '7 min',
      category: 'Sanidade',
      image:
        'https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Análise de Mercado: Tendências da Carne Bovina em 2025',
      excerpt: 'Perspectivas e oportunidades para o setor pecuário brasileiro no mercado atual.',
      author: 'Roberto Lima',
      date: '5 de Agosto, 2025',
      readTime: '4 min',
      category: 'Mercado',
      image:
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Implementação de Sistemas de Gestão: Guia Prático',
      excerpt: 'Passo a passo para digitalizar sua fazenda e otimizar todos os processos.',
      author: 'Tech Team Horvatti',
      date: '3 de Agosto, 2025',
      readTime: '10 min',
      category: 'Tecnologia',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Reprodução Assistida: Novas Técnicas e Resultados',
      excerpt: 'Avanços científicos que estão revolucionando os índices reprodutivos do gado.',
      author: 'Dr. Pedro Alves',
      date: '1 de Agosto, 2025',
      readTime: '9 min',
      category: 'Reprodução',
      image:
        'https://images.unsplash.com/photo-1582213782179-e0007faf3228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === t('common.all') || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularPosts = [
    {
      title: '10 Erros Comuns na IATF',
      views: `12.5k ${t('common.views')}`,
    },
    {
      title: 'Calculadora de Custos Pecuários',
      views: `9.8k ${t('common.views')}`,
    },
    {
      title: 'Genética Bovina: Guia Completo',
      views: `8.2k ${t('common.views')}`,
    },
    {
      title: 'Manejo Reprodutivo Eficiente',
      views: `7.1k ${t('common.views')}`,
    },
  ]

  return (
    <PageLayout title={t('seo.blogTitle')} description={t('seo.blogDescription')}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {t('blog.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed transition-colors">
              {t('blog.subtitle')}
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-4 rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-lg bg-white dark:bg-gray-700 dark:text-white min-w-[200px] transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
              {t('blog.featuredArticle')}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center bg-emerald-500/30 text-emerald-100 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Tag className="w-4 h-4 mr-1" />
                  {featuredPost.category}
                </div>
                <h3
                  className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {featuredPost.title}
                </h3>
                <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-emerald-200 text-sm mb-8">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to="/demonstracao"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 font-semibold inline-flex items-center"
                >
                  {t('blog.readArticle')} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-emerald-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {selectedCategory === t('common.all')
                  ? t('blog.latestArticles')
                  : t('blog.articlesAbout', { category: selectedCategory })}
              </h2>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:shadow-emerald-900/10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm transition-colors">
                            <User className="w-4 h-4 mr-1" />
                            <span className="mr-3">{post.author}</span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-3">{post.date}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <Link
                            to="/demonstracao"
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium inline-flex items-center transition-colors"
                          >
                            {t('blog.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg inline-flex items-center">
                  {t('blog.loadMoreArticles')} <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg dark:shadow-emerald-900/10 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center transition-colors">
                  <BookOpen className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                  {t('blog.categories.title')}
                </h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg dark:shadow-emerald-900/10 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center transition-colors">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                  {t('blog.popularArticles')}
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                        {post.views}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">{t('blog.weeklyNewsletter')}</h3>
                <p className="text-emerald-100 mb-4">{t('blog.newsletterText')}</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={t('blog.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-gray-900 outline-none focus:ring-2 focus:ring-emerald-300 dark:bg-white"
                  />
                  <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                    {t('blog.subscribe')}
                  </button>
                </div>
              </div>
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
            {t('blog.cta.title')}
          </h2>
          <p className="text-xl text-emerald-100 mb-10">{t('blog.cta.subtitle')}</p>
          <Link
            to="/demonstracao"
            className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-200 font-semibold text-lg inline-flex items-center"
          >
            {t('blog.cta.button')} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
