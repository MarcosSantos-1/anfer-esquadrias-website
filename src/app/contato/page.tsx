'use client'

import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  CheckCircle,
  Facebook,
  Instagram
} from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: '(11) 94009-3757',
      description: 'Segunda a Sexta, 8h às 18h'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: 'contato@anferesquadrias.com',
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: 'São Paulo - SP',
      description: 'Atendemos toda a Grande São Paulo'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: '8h às 18h',
      description: 'Segunda a Sexta-feira'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mensagem Enviada!
          </h2>
          <p className="text-gray-600 mb-6">
            Sua mensagem foi enviada com sucesso. 
            Nossa equipe entrará em contato em breve.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
              })
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Nova Mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Estamos prontos para ajudar você com seu projeto. 
              Entre em contato conosco e solicite um orçamento gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Informações de Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a forma mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-red-600 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="(11) 94009-3757"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="manutencao">Agendar Manutenção</option>
                    <option value="duvidas">Tirar Dúvidas</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nossa Localização
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Atendemos toda a Grande São Paulo e região metropolitana.
                </p>
                <p className="text-gray-600">
                  Para projetos em outras regiões, entre em contato para verificar a disponibilidade.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4">
                  Acompanhe nossos projetos e novidades em tempo real.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contato Rápido
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">(11) 94009-3757</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">contato@anferesquadrias.com</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Para emergências ou atendimento imediato, ligue diretamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


