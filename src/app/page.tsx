import Link from 'next/link'
import Image from 'next/image'
import { 
  Shield, 
  Wrench, 
  Home, 
  Building, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react'
import ImageCarousel from '@/components/ImageCarousel'
import { services as allServices } from '@/data/services'

export default function HomePage() {
  // Selecionar alguns serviços em destaque para a home
  const featuredServices = [
    {
      ...allServices.find(s => s.slug === 'portao-basculante')!,
      categoryTitle: 'Portões e Acessos'
    },
    {
      ...allServices.find(s => s.slug === 'guarda-corpo')!,
      categoryTitle: 'Guarda-Corpos e Estruturas'
    },
    {
      ...allServices.find(s => s.slug === 'grades-para-janelas')!,
      categoryTitle: 'Grades de Proteção'
    },
    {
      ...allServices.find(s => s.slug === 'elevadores')!,
      categoryTitle: 'Serviços Industriais'
    }
  ]

  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Materiais de primeira qualidade e acabamento impecável'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Prazos cumpridos com agilidade e pontualidade'
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Equipe técnica experiente e qualificada'
    },
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description: 'Garantia completa em todos os nossos produtos'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/heroImg.jpg"
            alt="ANFER Esquadrias Metálicas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 to-red-700/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                ANFER
                <span className="block text-red-200">Esquadrias Metálicas</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Especialistas em esquadrias metálicas, portões, grades, guarda-corpos, 
                serviços industriais e móveis personalizados. Atendemos residências, 
                condomínios e indústrias com qualidade e excelência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contato"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/servicos"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Projetos Realizados</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Anos de Experiência</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">Clientes Satisfeitos</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm">Funcionários</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em esquadrias metálicas para residências, 
              condomínios e indústrias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Link 
                key={index}
                href={`/servico/${service.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Image Carousel */}
                <div className="aspect-video">
                  <ImageCarousel 
                    images={service.images} 
                    alt={service.title}
                    autoPlay={true}
                    interval={4000}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-red-600 font-semibold mb-2 uppercase">
                    {service.categoryTitle}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-600 font-medium">
                    Ver detalhes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a ANFER?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa experiência e compromisso com a qualidade fazem a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito. 
            Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511940093757"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <Link 
              href="/manutencao"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Agendar Manutenção
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos de quem confia na qualidade ANFER
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Excelente trabalho! A equipe da ANFER foi muito profissional e o resultado superou nossas expectativas. Recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Cliente Satisfeito</div>
                    <div className="text-gray-500">Projeto Residencial</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}