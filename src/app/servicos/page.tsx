import Link from 'next/link'
import { 
  Shield, 
  Building, 
  Home, 
  Wrench, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

export default function ServicosPage() {
  const serviceCategories = [
    {
      title: 'Portões e Acessos',
      description: 'Soluções completas em portões e sistemas de acesso',
      services: [
        'Portões Basculantes',
        'Portões Deslizantes',
        'Portas de Aço',
        'Portas de Enrolar',
        'Portas Automáticas'
      ],
      href: '/servicos/portoes',
      icon: Shield
    },
    {
      title: 'Guarda-Corpos e Corrimãos',
      description: 'Segurança e elegância para escadas e varandas',
      services: [
        'Guarda-Corpos em Aço Inox',
        'Guarda-Corpos em Vidro',
        'Corrimãos',
        'Guarda-Corpos Industriais'
      ],
      href: '/servicos/guardas-corpo',
      icon: Building
    },
    {
      title: 'Grades de Proteção',
      description: 'Proteção e segurança para janelas e aberturas',
      services: [
        'Grades para Janelas',
        'Grades Decorativas',
        'Grades de Segurança',
        'Grades Industriais'
      ],
      href: '/servicos/grades',
      icon: Home
    },
    {
      title: 'Serviços Industriais',
      description: 'Elevadores, portas ABS, instalações industriais e mais',
      services: [
        'Elevadores',
        'Portas ABS',
        'Portas Rápidas e Industriais',
        'Portas Seccionadas',
        'Instalações Industriais',
        'Concerto de Placas Eletrônicas'
      ],
      href: '/servicos/industriais',
      icon: Wrench
    },
    {
      title: 'Serviços Gerais',
      description: 'Serviços complementares de solda e instalação',
      services: [
        'Serviços de Solda em Geral',
        'Instalação de Fechaduras',
        'Manutenção Preventiva',
        'Reparos em Geral'
      ],
      href: '/servicos/gerais',
      icon: Wrench
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluções completas em esquadrias metálicas para residências, 
              condomínios e indústrias. Qualidade e excelência em cada projeto.
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
              Categorias de Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nossas principais categorias de serviços e encontre a solução ideal para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <category.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Serviços incluídos:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={category.href}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
                >
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              Nossa experiência e compromisso com a qualidade fazem a diferença em cada projeto
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
                Mão de Obra Especializada
              </h3>
              <p className="text-gray-600">
                Nossa equipe é altamente qualificada e experiente em todos os tipos de projetos.
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
            Pronto para começar seu projeto?
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
              Enviar E-mail
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


