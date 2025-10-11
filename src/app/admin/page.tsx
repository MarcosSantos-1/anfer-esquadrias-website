'use client'

import { useState } from 'react'
import { 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle,
  Settings,
  Users,
  Wrench,
  MessageSquare,
  Image,
  Plus,
  Edit,
  Trash2,
  CheckCircle
} from 'lucide-react'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a autenticação real
    if (loginData.email === 'admin@anfer.com' && loginData.password === 'admin123') {
      setIsAuthenticated(true)
    } else {
      alert('Credenciais inválidas')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setLoginData({ email: '', password: '' })
    setActiveTab('dashboard')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-red-600 text-white p-3 rounded-lg inline-block mb-4">
              <Settings className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Painel Administrativo
            </h1>
            <p className="text-gray-600">
              ANFER Esquadrias Metálicas
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Lock className="mr-2 h-5 w-5" />
              Entrar
            </button>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-medium">Credenciais padrão:</p>
                <p>E-mail: admin@anfer.com</p>
                <p>Senha: admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Painel Admin</h1>
                <p className="text-sm text-gray-600">ANFER Esquadrias Metálicas</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Settings },
                  { id: 'services', label: 'Serviços', icon: Wrench },
                  { id: 'projects', label: 'Projetos', icon: Image },
                  { id: 'messages', label: 'Mensagens', icon: MessageSquare },
                  { id: 'maintenance', label: 'Manutenções', icon: Wrench },
                  { id: 'users', label: 'Usuários', icon: Users }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-red-100 text-red-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-red-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-red-600 font-medium">Total de Serviços</p>
                          <p className="text-3xl font-bold text-red-700">25</p>
                        </div>
                        <Wrench className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-600 font-medium">Projetos Ativos</p>
                          <p className="text-3xl font-bold text-green-700">12</p>
                        </div>
                        <Image className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-600 font-medium">Mensagens</p>
                          <p className="text-3xl font-bold text-yellow-700">8</p>
                        </div>
                        <MessageSquare className="h-8 w-8 text-yellow-600" />
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-600 font-medium">Manutenções</p>
                          <p className="text-3xl font-bold text-purple-700">5</p>
                        </div>
                        <Wrench className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Funcionalidades Disponíveis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Gerenciar Serviços</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Visualizar Projetos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Responder Mensagens</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">Gerenciar Manutenções</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Serviços</h2>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Adicionar Serviço
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Gerenciamento de Serviços
                    </h3>
                    <p className="text-gray-600">
                      Aqui você pode adicionar, editar e gerenciar todos os serviços oferecidos pela empresa.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Projetos</h2>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Adicionar Projeto
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Galeria de Projetos
                    </h3>
                    <p className="text-gray-600">
                      Gerencie a galeria de projetos realizados, adicionando fotos e descrições.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'messages' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mensagens de Contato</h2>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mensagens Recebidas
                    </h3>
                    <p className="text-gray-600">
                      Visualize e responda às mensagens enviadas através do formulário de contato.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'maintenance' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicitações de Manutenção</h2>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Wrench className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Agendamentos de Manutenção
                    </h3>
                    <p className="text-gray-600">
                      Gerencie as solicitações de manutenção e acompanhe o status dos atendimentos.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'users' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Usuários</h2>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                      <Plus className="h-5 w-5 mr-2" />
                      Adicionar Usuário
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Gerenciamento de Usuários
                    </h3>
                    <p className="text-gray-600">
                      Gerencie os usuários com acesso ao painel administrativo.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


