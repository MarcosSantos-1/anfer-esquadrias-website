import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  Building,
  Wrench,
  Phone
} from 'lucide-react'

export default function SobrePage() {
  const values = [
    {
      icon: Shield,
      title: 'Qualidade',
      description: 'Comprometidos com a excelência em todos os nossos produtos e serviços, utilizando apenas materiais de primeira qualidade.'
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Priorizamos o relacionamento com nossos clientes, oferecendo um atendimento personalizado e eficiente.'
    },
    {
      icon: Award,
      title: 'Experiência',
      description: 'Mais de 15 anos de experiência no mercado, com centenas de projetos realizados com sucesso.'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Sempre em busca de novas tecnologias e soluções para atender melhor nossos clientes.'
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Fundação da ANFER',
      description: 'Início das atividades com foco em esquadrias metálicas e portões residenciais.'
    },
    {
      year: '2012',
      title: 'Expansão dos Serviços',
      description: 'Ampliação do portfólio para incluir guarda-corpos, corrimãos e grades de proteção.'
    },
    {
      year: '2015',
      title: 'Atendimento Industrial',
      description: 'Início do atendimento a indústrias e condomínios com serviços especializados.'
    },
    {
      year: '2020',
      title: 'Móveis Industriais',
      description: 'Lançamento da linha de móveis industriais personalizados sob medida.'
    },
    {
      year: '2023',
      title: 'Crescimento Contínuo',
      description: 'Consolidação como referência em esquadrias metálicas na Grande São Paulo.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre a ANFER
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Mais de 15 anos de experiência em esquadrias metálicas, 
              oferecendo soluções completas para residências, condomínios e indústrias.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A ANFER Esquadrias Metálicas foi fundada em 2008 com o objetivo de oferecer 
                soluções em esquadrias metálicas de alta qualidade para o mercado residencial 
                e industrial.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ao longo dos anos, expandimos nossos serviços e hoje atendemos uma ampla 
                gama de clientes, desde residências até grandes indústrias, sempre mantendo 
                nosso compromisso com a qualidade e a satisfação do cliente.
              </p>
              <p className="text-lg text-gray-600">
                Recentemente, lançamos nossa linha de móveis industriais personalizados, 
                combinando nossa experiência em metalurgia com design funcional e moderno.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Building className="h-24 w-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Números que Comprovam Nossa Excelência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que demonstram nosso compromisso com a qualidade e satisfação do cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfação do Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24h</div>
              <div className="text-gray-600">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marcos importantes da nossa história e crescimento
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="font-bold">{item.year}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais qualificados e experientes, comprometidos com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Técnicos Especializados
              </h3>
              <p className="text-gray-600">
                Equipe de técnicos altamente qualificados com anos de experiência em esquadrias metálicas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Soldadores Certificados
              </h3>
              <p className="text-gray-600">
                Soldadores certificados e experientes em diversos tipos de materiais e técnicas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Atendimento Especializado
              </h3>
              <p className="text-gray-600">
                Equipe de atendimento dedicada a oferecer a melhor experiência ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Conheça Nossos Serviços
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar em seu próximo projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale Conosco
            </a>
            <a 
              href="/servicos"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


