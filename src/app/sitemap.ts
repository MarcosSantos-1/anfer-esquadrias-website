import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { furnitureProducts } from '@/data/furniture'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anfer-esquadrias.vercel.app'
  
  // Páginas estáticas
  const routes = [
    '',
    '/sobre',
    '/contato',
    '/servicos',
    '/moveis-industriais',
    '/manutencao'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Páginas de serviços
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/servico/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Páginas de móveis
  const furniturePages = furnitureProducts.map((product) => ({
    url: `${baseUrl}/moveis-industriais/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...servicePages, ...furniturePages]
}

