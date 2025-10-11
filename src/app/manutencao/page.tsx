'use client'

import { useState } from 'react'
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
  MessageSquare
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

  const maintenanceServices = [
    'Portões e Portas',
    'Guarda-Corpos',
    'Elevadores',
    'Móveis Industriais',
    'Soldas em Geral',
    'Placas Eletrônicas',
    'Fechaduras',
    'Outros'
  ]

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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Solicitação Enviada!
          </h2>
          <p className="text-gray-600 mb-6">
            Sua solicitação de manutenção foi enviada com sucesso. 
            Nossa equipe entrará em contato em até 24 horas.
          </p>
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
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
            <p className="text-xl text-gray-200 mb-8">
              Solicite uma manutenção preventiva ou corretiva para seus equipamentos. 
              Nossa equipe técnica está pronta para atender você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>(11) 94009-3757</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>contato@anferesquadrias.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Solicitar Manutenção
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Serviço *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Urgência
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        >
                          <option value="low">Baixa</option>
                          <option value="normal">Normal</option>
                          <option value="high">Alta</option>
                          <option value="urgent">Urgente</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço para Atendimento
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Endereço completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data Preferencial
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição do Problema *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                          placeholder="Descreva o problema ou serviço necessário..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Wrench className="mr-2 h-5 w-5" />
                      Solicitar Manutenção
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
                        <p className="font-medium text-gray-900">Tempo de Resposta</p>
                        <p className="text-gray-600 text-sm">
                          Retornamos em até 24 horas úteis
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Orçamento Gratuito</p>
                        <p className="text-gray-600 text-sm">
                          Sem compromisso e sem custos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Emergências</p>
                        <p className="text-gray-600 text-sm">
                          Para emergências, ligue diretamente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contato Direto
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">(11) 94009-3757</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">contato@anferesquadrias.com</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    Horário de atendimento: Segunda a Sexta, 8h às 18h
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


