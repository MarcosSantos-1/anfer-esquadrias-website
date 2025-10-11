import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MessageCircle, Mail, Wrench, CheckCircle, ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import ImageCarousel from '@/components/ImageCarousel'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Serviço não encontrado',
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/servicos"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Serviços
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5511940093757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento via WhatsApp
              </a>
              <Link 
                href="/manutencao"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Agendar Manutenção
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
              {/* Image Carousel */}
              <div className="mb-8">
                <ImageCarousel images={service.images} alt={service.title} />
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Sobre {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Características e Benefícios
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interessado neste serviço?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contato conosco e solicite um orçamento gratuito. 
                  Nossa equipe está pronta para atender você!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/5511940093757"
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
                <p className="text-red-600 font-medium">{service.category}</p>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Contato
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/5511940093757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 text-red-600" />
                    (11) 94009-3757
                  </a>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-2 text-red-600" />
                    contato@anferesquadrias.com
                  </div>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">
                    Serviços Relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/servico/${relatedService.slug}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {relatedService.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {relatedService.description.substring(0, 80)}...
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
