import { Helmet } from 'react-helmet-async'

import useI18n from '@/hooks/useI18n'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  image?: string
}

/**
 * Componente para otimização de SEO
 */
const SEO = ({ title, description, canonical, lang = 'pt-BR', meta = [], image }: SEOProps) => {
  const { t } = useI18n()

  // Use valores padrão se não forem fornecidos
  const seoTitle = title || t('seo.defaultTitle')
  const seoDescription = description || t('seo.defaultDescription')
  const seoImage = image || `${window.location.origin}/banner.png`
  const url = canonical || window.location.href

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      meta={[
        {
          name: 'description',
          content: seoDescription,
        },
        {
          property: 'og:title',
          content: seoTitle,
        },
        {
          property: 'og:description',
          content: seoDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:image',
          content: seoImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: seoTitle,
        },
        {
          name: 'twitter:description',
          content: seoDescription,
        },
        {
          name: 'twitter:image',
          content: seoImage,
        },
        ...meta,
      ]}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
    />
  )
}

export default SEO
