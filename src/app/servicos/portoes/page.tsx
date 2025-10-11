import Link from 'next/link'
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Wrench,
  Home,
  Building
} from 'lucide-react'

export default function PortoesPage() {
  const portaoTypes = [
    {
      title: 'Portões Basculantes',
      description: 'Portões que se abrem para cima, ideais para garagens e entradas de veículos.',
      features: [
        'Abertura automática',
        'Controle remoto',
        'Sensor de segurança',
        'Instalação rápida'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Portões Deslizantes',
      description: 'Portões que deslizam lateralmente, perfeitos para entradas largas.',
      features: [
        'Economia de espaço',
        'Abertura suave',
        'Baixo ruído',
        'Alta durabilidade'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Portas de Aço',
      description: 'Portas de aço robustas para máxima segurança residencial e comercial.',
      features: [
        'Alta resistência',
        'Isolamento térmico',
        'Design moderno',
        'Fácil manutenção'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Portas de Enrolar',
      description: 'Portas que se enrolam, ideais para comércios e indústrias.',
      features: [
        'Economia de espaço',
        'Abertura rápida',
        'Alta segurança',
        'Diversos materiais'
      ],
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Portões e Acessos
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluções completas em portões e sistemas de acesso para residências, 
              condomínios e indústrias. Segurança, praticidade e qualidade garantidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Link>
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de Portões
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla variedade de portões para atender todas as suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portaoTypes.map((portao, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {portao.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {portao.description}
                </p>
                <div className="space-y-2 mb-6">
                  {portao.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a ANFER?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa experiência em portões garante qualidade e segurança para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Materiais de Qualidade
              </h3>
              <p className="text-gray-600">
                Utilizamos apenas materiais de primeira qualidade, garantindo durabilidade e resistência.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instalação Profissional
              </h3>
              <p className="text-gray-600">
                Nossa equipe técnica é especializada em instalação e manutenção de portões.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Garantia Total
              </h3>
              <p className="text-gray-600">
                Oferecemos garantia completa em todos os nossos produtos e serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para seu novo portão?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito. 
            Nossa equipe está pronta para ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contato"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Link>
            <Link 
              href="/contato"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


