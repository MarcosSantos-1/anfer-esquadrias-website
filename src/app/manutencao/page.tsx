'use client'

import { useState } from 'react'
import PhoneInput from '@/components/PhoneInput'
import { 
  Wrench, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin,
  User,
  MessageSquare,
  Loader2
} from 'lucide-react'

export default function ManutencaoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    address: '',
    preferredDate: '',
    urgency: 'normal'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const maintenanceServices = [
    'Portões e Portas',
    'Guarda-Corpos',
    'Elevadores Industriais',
    'Móveis Industriais',
    'Soldas em Geral',
    'Placas Eletrônicas',
    'Fechaduras',
    'Outros'
  ]

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
          type: 'manutencao',
          subject: `Manutenção - ${formData.service}`,
          message: formData.description
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
        setError(data.error || 'Erro ao enviar solicitação. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setError('Erro ao enviar solicitação. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.')
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-center">
          <div className="mb-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Solicitação Enviada!
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sua solicitação de manutenção foi enviada com sucesso por e-mail. 
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
                service: '',
                description: '',
                address: '',
                preferredDate: '',
                urgency: 'normal'
              })
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            Nova Solicitação
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
              Agendar Manutenção
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Solicite uma manutenção preventiva ou corretiva para seus equipamentos. 
              Nossa equipe técnica está pronta para atender você com rapidez e qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5511940093757" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:text-yellow-300 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-semibold">(11) 94009-3757</span>
              </a>
              <a href="mailto:contato@anferesquadrias.com" className="flex items-center justify-center hover:text-yellow-300 transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                <span className="font-semibold">contato@anferesquadrias.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Solicitar Manutenção
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          Tipo de Serviço *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                        >
                          <option value="">Selecione o serviço</option>
                          {maintenanceServices.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          Urgência
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                        >
                          <option value="low">🔵 Baixa</option>
                          <option value="normal">🟢 Normal</option>
                          <option value="high">🟠 Alta</option>
                          <option value="urgent">🔴 Urgente</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Endereço para Atendimento
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                          placeholder="Endereço completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Data Preferencial
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Descrição do Problema *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none text-gray-900 font-medium"
                          placeholder="Descreva o problema ou serviço necessário..."
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
                          <Wrench className="mr-2 h-5 w-5" />
                          Solicitar Manutenção
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Informações Importantes
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Tempo de Resposta</p>
                        <p className="text-gray-700 text-sm">
                          Retornamos em até 24 horas úteis
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Orçamento Gratuito</p>
                        <p className="text-gray-700 text-sm">
                          Sem compromisso e sem custos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Emergências</p>
                        <p className="text-gray-700 text-sm">
                          Para emergências, ligue diretamente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contato Direto
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <a href="https://wa.me/5511940093757" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-semibold hover:text-red-600">
                        (11) 94009-3757
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                      <a href="mailto:contato@anferesquadrias.com" className="text-gray-900 font-semibold hover:text-red-600 break-all">
                      contato@anferesquadrias.com
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm mt-4 font-medium">
                    Horário de atendimento: Segunda a Sexta, 8h às 18h
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    💡 Dica
                  </h3>
                  <p className="text-gray-800 text-sm font-medium">
                    Quanto mais detalhes você fornecer sobre o problema, mais rápido e preciso será nosso atendimento!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
