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

export default function GuardasCorpoPage() {
  const types = [
    {
      title: 'Guarda-Corpo em Aço Inox',
      description: 'Guarda-corpos em aço inox para ambientes internos e externos com alta durabilidade.',
      features: [
        'Resistente à corrosão',
        'Fácil limpeza',
        'Design moderno',
        'Diversos modelos',
        'Alta durabilidade'
      ]
    },
    {
      title: 'Guarda-Corpo em Vidro',
      description: 'Guarda-corpos com vidro temperado para maior sofisticação e segurança.',
      features: [
        'Visual clean',
        'Vidro temperado',
        'Máxima transparência',
        'Elegância',
        'Segurança'
      ]
    },
    {
      title: 'Corrimãos',
      description: 'Corrimãos em diversos materiais para escadas e rampas.',
      features: [
        'Diversos materiais',
        'NBR 9050 (acessibilidade)',
        'Acabamento perfeito',
        'Instalação rápida',
        'Garantia total'
      ]
    },
    {
      title: 'Guarda-Corpo Industrial',
      description: 'Guarda-corpos robustos para ambientes industriais e plataformas.',
      features: [
        'Alta resistência',
        'Normas de segurança',
        'Pintura anticorrosiva',
        'Modular',
        'Fácil instalação'
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
              Guarda-Corpos e Corrimãos
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Guarda-corpos e corrimãos em aço inox, vidro e outros materiais para 
              escadas, varandas e áreas externas. Segurança e elegância para seu projeto.
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

      {/* Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de Guarda-Corpos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diversos modelos para atender seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para seu guarda-corpo?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento gratuito.
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
