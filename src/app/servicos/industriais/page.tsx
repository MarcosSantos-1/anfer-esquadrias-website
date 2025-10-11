import Link from 'next/link'
import { 
  Building, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Wrench,
  Shield,
  Home
} from 'lucide-react'

export default function ServicosIndustriaisPage() {
  const services = [
    {
      title: 'Elevadores',
      description: 'Instalação, manutenção e modernização de elevadores residenciais e comerciais.',
      features: [
        'Elevadores residenciais',
        'Elevadores comerciais',
        'Manutenção preventiva',
        'Modernização completa',
        'Suporte técnico'
      ]
    },
    {
      title: 'Portas ABS',
      description: 'Portas de ABS de alta qualidade para diversos ambientes industriais.',
      features: [
        'Alta resistência',
        'Diversos tamanhos',
        'Fácil instalação',
        'Baixa manutenção',
        'Design moderno'
      ]
    },
    {
      title: 'Portas Rápidas e Industriais',
      description: 'Portas rápidas para controle de temperatura e agilidade no acesso.',
      features: [
        'Alta velocidade',
        'Isolamento térmico',
        'Controle automático',
        'Durabilidade',
        'Segurança'
      ]
    },
    {
      title: 'Portas Seccionadas',
      description: 'Portas seccionadas para garagens e áreas industriais.',
      features: [
        'Economia de espaço',
        'Isolamento acústico',
        'Abertura vertical',
        'Diversos materiais',
        'Alta durabilidade'
      ]
    },
    {
      title: 'Instalações Industriais',
      description: 'Serviços completos de instalação para ambientes industriais.',
      features: [
        'Estruturas metálicas',
        'Plataformas elevadas',
        'Escadas industriais',
        'Passarelas',
        'Corrimãos industriais'
      ]
    },
    {
      title: 'Concerto de Placas Eletrônicas',
      description: 'Manutenção e reparo de placas eletrônicas de portões e equipamentos.',
      features: [
        'Diagnóstico técnico',
        'Reparo especializado',
        'Peças de reposição',
        'Garantia do serviço',
        'Atendimento rápido'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Serviços Industriais
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Soluções completas para indústrias: elevadores, portas ABS, portas rápidas, 
              portas seccionadas, instalações industriais e muito mais. Atendemos com qualidade e excelência.
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
              Nossos Serviços Industriais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados para o setor industrial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
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
              Experiência e qualidade em soluções industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Equipamentos de Qualidade
              </h3>
              <p className="text-gray-600">
                Trabalhamos apenas com equipamentos de primeira qualidade e marcas renomadas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Equipe Especializada
              </h3>
              <p className="text-gray-600">
                Técnicos qualificados e experientes em instalações industriais.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Suporte Contínuo
              </h3>
              <p className="text-gray-600">
                Manutenção preventiva e corretiva para todos os nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Setores Atendidos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diversos setores industriais e comerciais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Indústrias', 'Condomínios', 'Comércio', 'Hospitais', 'Hotéis', 'Shoppings', 'Armazéns', 'Logística'].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <Building className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de serviços industriais?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito. 
            Nossa equipe está pronta para atender sua empresa.
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
