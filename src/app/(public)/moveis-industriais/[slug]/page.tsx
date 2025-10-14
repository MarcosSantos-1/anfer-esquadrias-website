import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MessageCircle, Mail, ArrowLeft, CheckCircle, Ruler, DollarSign, Palette, Package, Settings } from 'lucide-react'
import ImageCarousel from '@/components/ImageCarousel'
import { furnitureProducts, FurnitureProduct } from '@/data/furniture'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getProduct(slug: string): Promise<FurnitureProduct | null> {
  try {
    // Tentar buscar do banco primeiro (runtime)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/furniture`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    
    if (res.ok) {
      const products = await res.json()
      const product = products.find((p: FurnitureProduct) => p.slug === slug)
      if (product) return product
    }
  } catch (error) {
    console.log('Fallback para dados estáticos')
  }
  
  // Fallback para dados estáticos
  const product = furnitureProducts.find((p) => p.slug === slug)
  return product || null
}

async function getAllProducts(): Promise<FurnitureProduct[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/furniture`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    
    if (res.ok) {
      return res.json()
    }
  } catch (error) {
    console.log('Fallback para dados estáticos')
  }
  
  return furnitureProducts
}

export async function generateStaticParams() {
  // Para build, usar dados estáticos
  return furnitureProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: 'website',
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const allProducts = await getAllProducts()
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const whatsappMessage = encodeURIComponent(
    `Olá! Estou interessado em *${product.name}*. Gostaria de solicitar um orçamento${product.customizable ? ' personalizado' : ''}.`
  )
  const whatsappLink = `https://wa.me/5511940093757?text=${whatsappMessage}`

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/moveis-industriais"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Móveis Industriais
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              {product.shortDescription}
            </p>

            {/* Price Badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-gray-200 text-sm mb-1">A partir de</p>
                  <p className="text-4xl font-bold text-green-300">{formatPrice(product.basePrice)}</p>
                  <p className="text-gray-300 text-sm mt-1">Tamanho padrão: {product.standardSize.width}x{product.standardSize.height}x{product.standardSize.depth} {product.standardSize.unit}</p>
                </div>
                {product.customizable && (
                  <div className="border-l border-white/20 pl-4">
                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      Personalizável
                    </div>
                    <p className="text-gray-300 text-sm">
                      Valor varia conforme<br/>dimensões escolhidas
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento via WhatsApp
              </a>
              <Link 
                href="/contato"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Carousel ou Imagem Única */}
              <div className="mb-8">
                {product.images.length > 1 ? (
                  <ImageCarousel images={product.images} alt={product.name} />
                ) : product.images.length === 1 ? (
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden bg-gray-200 aspect-video flex items-center justify-center">
                    <Package className="h-32 w-32 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sobre {product.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                  {product.fullDescription}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Características e Especificações
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
                  {/* Dimensions */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Ruler className="h-5 w-5 mr-2 text-blue-600" />
                      Dimensões Padrão
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Largura: {product.standardSize.width} {product.standardSize.unit}</li>
                      <li>• Altura: {product.standardSize.height} {product.standardSize.unit}</li>
                      <li>• Profundidade: {product.standardSize.depth} {product.standardSize.unit}</li>
                    </ul>
                  </div>

                  {/* Materials */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-gray-600" />
                      Materiais
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      {product.materials.map((material, idx) => (
                        <li key={idx}>• {material}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Palette className="h-5 w-5 mr-2 text-purple-600" />
                      Cores Disponíveis
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      {product.colors.map((color, idx) => (
                        <li key={idx}>• {color}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                      Preço Base
                    </h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">
                      {formatPrice(product.basePrice)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Tamanho padrão. Valor pode variar com personalização.
                    </p>
                  </div>
                </div>
              </div>

              {/* Customization Note */}
              {product.customizable && (
                <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="h-6 w-6 mr-2 text-blue-600" />
                    Personalização Disponível
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Este produto pode ser totalmente personalizado conforme suas necessidades específicas:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dimensões ajustáveis para seu espaço</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cores e acabamentos personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Adição de gavetas, prateleiras e acessórios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reforços especiais para cargas maiores</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">
                    * O valor final será calculado de acordo com as especificações escolhidas. 
                    Entre em contato para um orçamento personalizado.
                  </p>
                </div>
              )}

              {/* Call to Action */}
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interessado neste produto?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco e solicite um orçamento{product.customizable ? ' personalizado' : ''}. 
                  Nossa equipe está pronta para atender você!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                  <Link 
                    href="/contato"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar E-mail
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Category */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Categoria
                </h3>
                <p className="text-red-600 font-medium">{product.category}</p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Contato
                </h3>
                <div className="space-y-3">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 text-red-600" />
                    (11) 94009-3757
                  </a>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-2 text-red-600" />
                    contato@anferesquadrias.com.br
                  </div>
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    Produtos Relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedProducts.map((relatedProduct) => (
                      <Link
                        key={relatedProduct.id}
                        href={`/moveis-industriais/${relatedProduct.slug}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {relatedProduct.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {relatedProduct.shortDescription.substring(0, 60)}...
                        </p>
                        <p className="text-green-600 font-bold">
                          {formatPrice(relatedProduct.basePrice)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
