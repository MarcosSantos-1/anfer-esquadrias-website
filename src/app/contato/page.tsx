'use client'

import { useState } from 'react'
import PhoneInput from '@/components/PhoneInput'
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
  Instagram,
  Loader2
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          type: 'contato'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        
        // Abrir WhatsApp automaticamente
        if (data.whatsappLink) {
          setTimeout(() => {
            window.open(data.whatsappLink, '_blank')
          }, 1500)
        }
      } else {
        setError(data.error || 'Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setError('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
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
      description: 'Segunda a Sábado, 8h às 18h'
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
      details: 'Rua Arlindo Pascoal, 120',
      description: 'São Miguel Pta - SP'
    },
    {
      icon: Clock,
      title: 'Horário',
      details: '8h às 18h',
      description: 'Segunda a Sábado'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center">
          <div className="mb-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Mensagem Enviada!
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sua mensagem foi enviada com sucesso por e-mail. 
              <br />
              <strong>Você será redirecionado para o WhatsApp</strong> para agilizar o atendimento.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-800">
              📧 <strong>E-mail enviado</strong> para: contato@anferesquadrias.com
              <br />
              💬 <strong>WhatsApp</strong> abrindo automaticamente...
              <br />
              ⏱️ Nossa equipe retorna em até <strong>24 horas</strong>
            </p>
          </div>

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
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
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
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                      <PhoneInput
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                        placeholder="(11) 94009-3757"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Assunto *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="manutencao">Agendar Manutenção</option>
                    <option value="duvidas">Tirar Dúvidas</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Mensagem *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none text-gray-900 font-medium"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nossa Localização
                </h3>
                <div className="rounded-lg overflow-hidden mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3841571524896!2d-46.45924890000001!3d-23.486496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce619fd7eb0a1b%3A0x45896f9e7c2ab587!2sR.%20Arlindo%20Pascoal%2C%2022%20-%20Vila%20Nova%20Uniao%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008072-090!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-semibold">Rua Arlindo Pascoal, 120</p>
                      <p className="text-gray-700">São Miguel Pta - SP</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/R.+Arl%C3%ADndo+Pascoal,+22+-+Vila+Nova+Uniao,+S%C3%A3o+Paulo+-+SP,+08072-090/@-23.486496,-46.4592489,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce619fd7eb0a1b:0x45896f9e7c2ab587!8m2!3d-23.4865009!4d-46.456674!16s%2Fg%2F11c4gwtv57?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Anfer.Esquadrias/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    title="Facebook ANFER"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/anfer.esquadrias/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
                    title="Instagram ANFER"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-700 mt-4 font-medium">
                  Acompanhe nossos projetos e novidades em tempo real.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contato Rápido
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <a href="https://wa.me/5511940093757" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-red-600">
                      (11) 94009-3757
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <a href="mailto:oficial.anferesquadrias@gmail.com" className="text-gray-900 font-semibold hover:text-red-600 break-all">
                    contato@anferesquadrias.com
                    </a>
                  </div>
                </div>
                <p className="text-gray-800 text-sm mt-4 font-medium">
                  Para emergências ou atendimento imediato, ligue diretamente.
                  <br />
                  Horário: Segunda a Sexta, 8h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}





