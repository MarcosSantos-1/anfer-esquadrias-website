import Link from 'next/link'
import { 
  Wrench, 
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react'

export default function ServicosGeraisPage() {
  const services = [
    {
      title: 'Serviços de Solda em Geral',
      description: 'Soldagem profissional em diversos materiais e aplicações.',
      features: [
        'Solda MIG/MAG',
        'Solda TIG',
        'Solda elétrica',
        'Diversos materiais',
        'Certificação'
      ]
    },
    {
      title: 'Instalação de Fechaduras',
      description: 'Instalação e manutenção de fechaduras para portões e portas.',
      features: [
        'Fechaduras elétricas',
        'Fechaduras mecânicas',
        'Trancas',
        'Instalação rápida',
        'Garantia'
      ]
    },
    {
      title: 'Concerto de Placas Eletrônicas',
      description: 'Manutenção e reparo de placas eletrônicas de portões automáticos.',
      features: [
        'Diagnóstico completo',
        'Reparo especializado',
        'Peças originais',
        'Garantia do serviço',
        'Atendimento ágil'
      ]
    },
    {
      title: 'Manutenção Preventiva',
      description: 'Manutenção preventiva para todos os tipos de equipamentos.',
      features: [
        'Inspeção completa',
        'Lubrificação',
        'Ajustes',
        'Relatório técnico',
        'Agendamento regular'
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
              Serviços Gerais
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Serviços complementares de solda, instalação de fechaduras, 
              manutenção de placas eletrônicas e muito mais.
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serviços especializados para complementar suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="h-8 w-8 text-red-600" />
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
            Precisa de nossos serviços?
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
