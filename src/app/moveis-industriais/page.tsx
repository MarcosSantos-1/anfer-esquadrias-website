import Link from 'next/link'
import { 
  Wrench, 
  Building, 
  Home, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react'

export default function MoveisIndustriaisPage() {
  const furnitureTypes = [
    {
      title: 'Estações de Trabalho',
      description: 'Estações de trabalho personalizadas para máxima produtividade',
      features: [
        'Design ergonômico',
        'Materiais resistentes',
        'Personalização completa',
        'Fácil montagem'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Armários Industriais',
      description: 'Armários robustos para armazenamento seguro de ferramentas e equipamentos',
      features: [
        'Portas com fechadura',
        'Prateleiras ajustáveis',
        'Materiais anti-ferrugem',
        'Diversos tamanhos'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Bancadas de Trabalho',
      description: 'Bancadas resistentes para atividades industriais e oficinas',
      features: [
        'Superfície anti-riscos',
        'Suporte para ferramentas',
        'Design modular',
        'Fácil limpeza'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Racks e Prateleiras',
      description: 'Sistemas de armazenamento para máxima organização',
      features: [
        'Alta resistência',
        'Montagem simples',
        'Diversos tamanhos',
        'Material galvanizado'
      ],
      image: '/api/placeholder/400/300'
    }
  ]

  const advantages = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Materiais de primeira qualidade e acabamento impecável'
    },
    {
      icon: Wrench,
      title: 'Sob Medida',
      description: 'Cada móvel é projetado especificamente para suas necessidades'
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
              <Link 
                href="/contato"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
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
                Nossos móveis são desenvolvidos para atender as necessidades específicas 
                de cada cliente, garantindo máxima funcionalidade, durabilidade e organização 
                do espaço de trabalho.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-gray-600">Móveis Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-gray-600">Personalizados</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <Building className="h-24 w-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de Móveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla variedade de móveis industriais para atender todas as suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {furnitureTypes.map((furniture, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Wrench className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {furniture.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {furniture.description}
                </p>
                <div className="space-y-2">
                  {furniture.features.map((feature, featureIndex) => (
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

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como desenvolvemos seus móveis industriais personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Consultoria
              </h3>
              <p className="text-gray-600">
                Analisamos suas necessidades e espaço disponível para o projeto ideal.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Projeto
              </h3>
              <p className="text-gray-600">
                Desenvolvemos o projeto personalizado com medidas e especificações exatas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fabricação
              </h3>
              <p className="text-gray-600">
                Fabricamos seus móveis com materiais de qualidade e acabamento impecável.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instalação
              </h3>
              <p className="text-gray-600">
                Realizamos a instalação e montagem no local com nossa equipe especializada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para seus móveis industriais?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito para seus móveis personalizados.
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


