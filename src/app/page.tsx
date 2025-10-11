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
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { services as allServices } from '@/data/services'

export default function HomePage() {
  // Agrupar serviços por categoria para exibir múltiplas imagens
  const featuredCategories = [
    {
      title: 'Portões',
      description: 'Portões basculantes, deslizantes, portas de aço e automáticas',
      images: [
        '/imgs/portaoBasculante.png',
        '/imgs/portaoDeslizante.png',
        '/imgs/portadeAco.png',
        '/imgs/portadeEnrolar.png'
      ],
      href: '/servicos/todos'
    },
    {
      title: 'Corrimãos',
      description: 'Guarda-corpos, corrimãos e estruturas metálicas',
      images: [
        '/imgs/corrimao.png',
        '/imgs/guradaCorpoResidencial.png',
        '/imgs/guardaCorpoIndustrial.png',
        '/imgs/mezanino.png'
      ],
      href: '/servicos/todos'
    },
    {
      title: 'Grades',
      description: 'Grades de proteção para janelas e segurança',
      images: [
        '/imgs/gradesJanela.png',
        '/imgs/gradesProtecao.png'
      ],
      href: '/servicos/todos'
    },
    {
      title: 'Outros Serviços',
      description: 'Serviços industriais, elevadores, soldas e muito mais',
      images: [
        '/imgs/elevadorIndustrial.png',
        '/imgs/portasABS.png',
        '/imgs/portasRapidasIndustriais.png',
        '/imgs/soldaEmGeral.png'
      ],
      href: '/servicos/todos'
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
      <section className="relative text-white py-32 md:py-40 overflow-hidden min-h-[600px] md:min-h-[700px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
        <Image
            src="/imgs/serralheria.jpg"
            alt="ANFER Esquadrias Metálicas"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                ANFER
                <span className="block text-blue-200">Esquadrias Metálicas</span>
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
            {featuredCategories.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Image Carousel */}
                <div className="aspect-video">
                  <ImageCarousel 
                    images={category.images} 
                    alt={category.title}
                    autoPlay={true}
                    interval={3500}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-red-600 font-medium">
                    Ver serviços
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-200 mb-4">
              Por que escolher a ANFER?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa experiência e compromisso com a qualidade fazem a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/heroImg.jpg"
            alt="ANFER Projetos"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 to-red-700/85"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito. 
            Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511940093757"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <Link 
              href="/manutencao"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
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

          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  )
}