'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Wrench, 
  Building, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Clock,
  Users,
  Search,
  SlidersHorizontal,
  DollarSign,
  Ruler
} from 'lucide-react'

interface FurnitureProduct {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  standardWidth: number
  standardHeight: number
  standardDepth: number
  sizeUnit: string
  basePrice: number
  images: string[]
  features: string[]
  customizable: boolean
}

export default function MoveisIndustriaisPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [products, setProducts] = useState<FurnitureProduct[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/furniture')
      const data = await res.json()
      setProducts(data.filter((p: FurnitureProduct) => p.isActive !== false))
      
      const uniqueCategories = [...new Set(data.map((p: FurnitureProduct) => p.category))]
      setCategories(uniqueCategories)
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const advantages = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Materiais de primeira qualidade e acabamento impecável'
    },
    {
      icon: Wrench,
      title: 'Sob Medida',
      description: 'Cada móvel pode ser personalizado para suas necessidades'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Prazos cumpridos com agilidade e pontualidade'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Equipe técnica experiente em móveis industriais'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando produtos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Móveis Industriais
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Móveis industriais personalizados sob medida para indústrias, oficinas e escritórios. 
              Qualidade, durabilidade e funcionalidade em cada projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Link>
              <a 
                href="https://wa.me/5511940093757?text=Olá! Gostaria de saber mais sobre móveis industriais."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Móveis Industriais de Qualidade
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A ANFER agora oferece móveis industriais personalizados sob medida, 
                combinando nossa experiência em metalurgia com design funcional e moderno.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Todos os nossos produtos possuem preços para tamanho padrão, mas podem ser 
                totalmente personalizados conforme suas necessidades. Os valores podem variar 
                de acordo com as dimensões e customizações escolhidas.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center bg-red-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-gray-600">Personalizáveis</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/imgs/furnitureImage.png" 
                  alt="Móveis Industriais ANFER"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent min-w-[200px] text-gray-900"
              >
                <option value="all">Todas as Categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira nossa linha completa de móveis industriais com preços e especificações
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum produto encontrado com os filtros aplicados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/moveis-industriais/${product.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                    {product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Wrench className="h-16 w-16 text-gray-400" />
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {product.category}
                    </div>
                    {product.customizable && (
                      <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Personalizável
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    {/* Price and Size */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center text-gray-700">
                        <DollarSign className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="font-bold text-green-600">{formatPrice(product.basePrice)}</span>
                        <span className="text-sm text-gray-500 ml-1">(tamanho padrão)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Ruler className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{product.standardWidth}x{product.standardHeight}x{product.standardDepth} {product.sizeUnit}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-red-600 font-semibold group-hover:underline">
                        Ver detalhes
                      </span>
                      <ArrowRight className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vantagens dos Nossos Móveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por que escolher os móveis industriais da ANFER?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-800 via-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ficou interessado?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito para seus móveis personalizados. 
            Todos os valores podem ser ajustados conforme tamanho e customizações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511940093757?text=Olá! Gostaria de solicitar um orçamento para móveis industriais."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <Link 
              href="/contato"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar E-mail
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
