'use client'

import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { 
  Lock, Eye, EyeOff, AlertCircle, Settings, Wrench, MessageSquare,
  Image as ImageIcon, Plus, Edit, Trash2, CheckCircle, Save, X,
  Package, DollarSign, ShoppingCart, Upload, Tag, Info, Video,
  Palette, Ruler, List, Star, User
} from 'lucide-react'

// Interfaces omitidas por brevidade - já definidas anteriormente

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [activeTab, setActiveTab] = useState('dashboard')
  
  // States
  const [services, setServices] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [editingService, setEditingService] = useState<any>(null)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null)
  const [showProductModal, setShowProductModal] = useState(false)
  const [showTestimonialModal, setShowTestimonialModal] = useState(false)
  const [aboutData, setAboutData] = useState<any>({ videoUrl: '' })
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState<string[]>([])
  const [furnitureCategories, setFurnitureCategories] = useState<string[]>([])
  const [newCategory, setNewCategory] = useState('')
  const [newFurnitureCategory, setNewFurnitureCategory] = useState('')
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showFurnitureCategoryModal, setShowFurnitureCategoryModal] = useState(false)

  // Carregar dados
  const loadServices = async () => {
    try {
      const res = await fetch('/api/services')
      const data = await res.json()
      setServices(data)
      const categorySet = new Set<string>()
      data.forEach((s: any) => categorySet.add(s.category))
      setCategories(Array.from(categorySet))
    } catch (error) {
      toast.error('❌ Erro ao carregar serviços')
    }
  }

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/furniture')
      const data = await res.json()
      setProducts(data)
      
      // Extrair categorias de móveis
      const categorySet = new Set<string>()
      data.forEach((p: any) => categorySet.add(p.category))
      setFurnitureCategories(Array.from(categorySet))
    } catch (error) {
      toast.error('❌ Erro ao carregar produtos')
    }
  }

  const loadTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials')
      const data = await res.json()
      setTestimonials(data)
    } catch (error) {
      toast.error('❌ Erro ao carregar testemunhos')
    }
  }

  const loadAboutData = async () => {
    try {
      const res = await fetch('/api/about')
      if (res.ok) {
        const data = await res.json()
        setAboutData({ videoUrl: data.videoUrl || '' })
      }
    } catch (error) {
      console.error('Erro ao carregar About:', error)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadServices()
      loadProducts()
      loadTestimonials()
      loadAboutData()
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.email === 'admin@anfer.com' && loginData.password === 'admin123') {
      setIsAuthenticated(true)
      toast.success('✅ Login realizado!')
    } else {
      toast.error('❌ Credenciais inválidas')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setLoginData({ email: '', password: '' })
    setActiveTab('dashboard')
  }

  // CRUD Functions
  const handleSaveService = async () => {
    if (!editingService) return
    setLoading(true)
    try {
      const method = editingService.id.startsWith('new-') ? 'POST' : 'PUT'
      const url = method === 'POST' ? '/api/services' : `/api/services/${editingService.id}`
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingService)
      })
      if (res.ok) {
        toast.success('✅ Serviço salvo!')
        setEditingService(null)
        loadServices()
      } else {
        toast.error('❌ Erro ao salvar')
      }
    } catch (error) {
      toast.error('❌ Erro ao salvar')
    }
    setLoading(false)
  }

  const handleDeleteService = async (id: string) => {
    if (!confirm('Excluir serviço?')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('✅ Excluído!')
        loadServices()
      }
    } catch (error) {
      toast.error('❌ Erro')
    }
    setLoading(false)
  }

  const handleSaveProduct = async () => {
    if (!editingProduct) return
    setLoading(true)
    try {
      const method = editingProduct.id.startsWith('new-') ? 'POST' : 'PUT'
      const url = method === 'POST' ? '/api/furniture' : `/api/furniture/${editingProduct.id}`
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProduct)
      })
      if (res.ok) {
        toast.success('✅ Produto salvo!')
        setEditingProduct(null)
        setShowProductModal(false)
        loadProducts()
      }
    } catch (error) {
      toast.error('❌ Erro')
    }
    setLoading(false)
  }

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Excluir produto?')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/furniture/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('✅ Excluído!')
        loadProducts()
      }
    } catch (error) {
      toast.error('❌ Erro')
    }
    setLoading(false)
  }

  const handleSaveTestimonial = async () => {
    if (!editingTestimonial) return
    
    console.log('=== INICIANDO SALVAMENTO ===')
    console.log('Dados do testemunho:', editingTestimonial)
    setLoading(true)
    
    try {
      const method = editingTestimonial.id.startsWith('new-') ? 'POST' : 'PUT'
      const url = method === 'POST' ? '/api/testimonials' : `/api/testimonials/${editingTestimonial.id}`
      
      console.log('Method:', method)
      console.log('URL:', url)
      console.log('Body que será enviado:', JSON.stringify(editingTestimonial, null, 2))
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingTestimonial)
      })
      
      console.log('Response status:', res.status)
      console.log('Response ok:', res.ok)
      
      const responseText = await res.text()
      console.log('Response text:', responseText)
      
      let data
      try {
        data = JSON.parse(responseText)
      } catch (e) {
        console.error('Erro ao fazer parse do JSON:', e)
        console.error('Response não é JSON válido:', responseText)
        toast.error('❌ Erro: Resposta inválida do servidor')
        setLoading(false)
        return
      }
      
      if (res.ok) {
        console.log('=== SUCESSO ===')
        console.log('Testemunho salvo:', data)
        toast.success('✅ Testemunho salvo com sucesso!')
        setEditingTestimonial(null)
        setShowTestimonialModal(false)
        loadTestimonials()
      } else {
        console.error('=== ERRO NA RESPOSTA ===')
        console.error('Dados do erro:', data)
        toast.error(`❌ Erro: ${data.error || data.details || 'Desconhecido'}`)
      }
    } catch (error) {
      console.error('=== ERRO NA REQUISIÇÃO ===')
      console.error('Erro:', error)
      toast.error('❌ Erro ao salvar testemunho')
    }
    setLoading(false)
  }

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Excluir?')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('✅ Excluído!')
        loadTestimonials()
      }
    } catch (error) {
      toast.error('❌ Erro')
    }
    setLoading(false)
  }

  const handleSaveAbout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aboutData)
      })
      if (res.ok) {
        toast.success('✅ Página atualizada!')
      }
    } catch (error) {
      toast.error('❌ Erro')
    }
    setLoading(false)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'service' | 'product' | 'testimonial') => {
    const file = e.target.files?.[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    setLoading(true)
    const uploadToast = toast.loading('📤 Enviando...')
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (res.ok) {
        if (type === 'service' && editingService) {
          setEditingService({ ...editingService, images: [...editingService.images, data.url] })
        } else if (type === 'product' && editingProduct) {
          setEditingProduct({ ...editingProduct, images: [...editingProduct.images, data.url] })
        } else if (type === 'testimonial' && editingTestimonial) {
          setEditingTestimonial({ ...editingTestimonial, clientImage: data.url })
        }
        toast.update(uploadToast, { render: '✅ Enviado!', type: 'success', isLoading: false, autoClose: 3000 })
      } else {
        toast.update(uploadToast, { render: '❌ Erro', type: 'error', isLoading: false, autoClose: 3000 })
      }
    } catch (error) {
      toast.update(uploadToast, { render: '❌ Erro', type: 'error', isLoading: false, autoClose: 3000 })
    }
    setLoading(false)
  }

  const handleRemoveImage = (index: number, type: 'service' | 'product') => {
    if (type === 'service' && editingService) {
      setEditingService({ ...editingService, images: editingService.images.filter((_: any, i: number) => i !== index) })
    } else if (type === 'product' && editingProduct) {
      setEditingProduct({ ...editingProduct, images: editingProduct.images.filter((_: any, i: number) => i !== index) })
    }
    toast.info('🗑️ Imagem removida')
  }

  const addArrayItem = (field: string) => {
    if (!editingProduct) return
    setEditingProduct({ ...editingProduct, [field]: [...editingProduct[field], ''] })
  }

  const removeArrayItem = (field: string, index: number) => {
    if (!editingProduct) return
    setEditingProduct({ ...editingProduct, [field]: editingProduct[field].filter((_: any, i: number) => i !== index) })
  }

  const updateArrayItem = (field: string, index: number, value: string) => {
    if (!editingProduct) return
    const newArray = [...editingProduct[field]]
    newArray[index] = value
    setEditingProduct({ ...editingProduct, [field]: newArray })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex items-center justify-center p-4">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-4 rounded-xl inline-block mb-4 shadow-lg">
              <Settings className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Painel Administrativo</h1>
            <p className="text-gray-600 font-medium">ANFER Esquadrias Metálicas</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 text-gray-900"
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
            <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center">
              <Lock className="mr-2 h-5 w-5" />
              Entrar
            </button>
          </form>
          <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-semibold">Credenciais:</p>
                <p>admin@anfer.com / admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <Settings className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Painel Administrativo</h1>
                <p className="text-sm text-red-100">ANFER Esquadrias</p>
              </div>
            </div>
            <button onClick={handleLogout} className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-lg p-4 sticky top-4">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Settings },
                  { id: 'services', label: 'Serviços', icon: Wrench },
                  { id: 'furniture', label: 'Móveis', icon: ShoppingCart },
                  { id: 'testimonials', label: 'Testemunhos', icon: Star },
                  { id: 'categories', label: 'Categorias', icon: Tag },
                  { id: 'about', label: 'Sobre Nós', icon: Info },
                  { id: 'projects', label: 'Projetos', icon: ImageIcon },
                  { id: 'messages', label: 'Mensagens', icon: MessageSquare }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md transform scale-105'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Settings className="h-8 w-8 mr-3 text-red-600" />
                  Dashboard
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-lg">
                    <Wrench className="h-8 w-8 mb-3 opacity-80" />
                    <p className="text-sm mb-1">Serviços</p>
                    <p className="text-3xl font-bold">{services.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                    <Package className="h-8 w-8 mb-3 opacity-80" />
                    <p className="text-sm mb-1">Móveis</p>
                    <p className="text-3xl font-bold">{products.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-lg">
                    <Star className="h-8 w-8 mb-3 opacity-80" />
                    <p className="text-sm mb-1">Testemunhos</p>
                    <p className="text-3xl font-bold">{testimonials.length}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                    <Tag className="h-8 w-8 mb-3 opacity-80" />
                    <p className="text-sm mb-1">Categorias</p>
                    <p className="text-3xl font-bold">{categories.length}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Serviços */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <Wrench className="h-8 w-8 mr-3 text-red-600" />
                    Serviços
                  </h2>
                  <button 
                    onClick={() => setEditingService({
                      id: `new-${Date.now()}`,
                      title: '',
                      slug: '',
                      category: categories[0] || '',
                      description: '',
                      fullDescription: '',
                      images: [],
                      features: [''],
                      seoTitle: '',
                      seoDescription: '',
                      isActive: true,
                      order: 0
                    })}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Novo
                  </button>
                </div>

                {editingService ? (
                  <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-100">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                      <Edit className="h-6 w-6 mr-2 text-red-600" />
                      {editingService.id.startsWith('new-') ? 'Novo Serviço' : 'Editar Serviço'}
                    </h3>
                    
                    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-semibold mb-2 text-gray-900 flex items-center">
                            <Tag className="h-4 w-4 mr-1 text-blue-600" />
                            Título
                          </label>
                          <input 
                            type="text" 
                            value={editingService.title} 
                            onChange={(e) => setEditingService({...editingService, title: e.target.value})} 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" 
                            placeholder="Ex: Portão Basculante" 
                          />
                        </div>
                        <div>
                          <label className="font-semibold mb-2 text-gray-900 flex items-center">
                            <Tag className="h-4 w-4 mr-1 text-purple-600" />
                            Slug (URL)
                          </label>
                          <input 
                            type="text" 
                            value={editingService.slug} 
                            onChange={(e) => setEditingService({...editingService, slug: e.target.value})} 
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" 
                            placeholder="portao-basculante" 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold mb-2 text-gray-900 flex items-center">
                          <Tag className="h-4 w-4 mr-1 text-orange-600" />
                          Categoria
                        </label>
                        <select value={editingService.category} onChange={(e) => setEditingService({...editingService, category: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900">
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold mb-2 text-gray-900 flex items-center">
                          <List className="h-4 w-4 mr-1 text-green-600" />
                          Descrição Curta (Cards)
                        </label>
                        <textarea value={editingService.description} onChange={(e) => setEditingService({...editingService, description: e.target.value})} rows={2} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Descrição breve para os cards" />
                      </div>

                      <div>
                        <label className="font-semibold mb-2 text-gray-900 flex items-center">
                          <List className="h-4 w-4 mr-1 text-blue-600" />
                          Descrição Completa (Página)
                        </label>
                        <textarea value={editingService.fullDescription} onChange={(e) => setEditingService({...editingService, fullDescription: e.target.value})} rows={5} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Descrição detalhada" />
                      </div>

                      {/* Imagens */}
                      <div>
                        <label className="font-semibold mb-3 text-gray-900 flex items-center">
                          <ImageIcon className="h-4 w-4 mr-1 text-pink-600" />
                          Imagens (2+ para carrossel)
                        </label>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {editingService.images.map((img: string, idx: number) => (
                            <div key={idx} className="relative group">
                              <img src={img} alt={`Imagem ${idx + 1}`} className="w-full h-32 object-cover rounded-lg border-2 border-gray-200" />
                              <button
                                onClick={() => handleRemoveImage(idx, 'service')}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                              >
                                <X className="h-4 w-4" />
                              </button>
                              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                #{idx + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'service')} className="hidden" id="service-img-up" />
                          <label htmlFor="service-img-up" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center font-medium">
                            <Upload className="h-4 w-4 mr-2" />
                            Upload
                          </label>
                          <input
                            type="text"
                            placeholder="Ou cole URL e pressione Enter"
                            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-900"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                const url = (e.target as HTMLInputElement).value
                                if (url) {
                                  setEditingService({...editingService, images: [...editingService.images, url]})
                                  ;(e.target as HTMLInputElement).value = ''
                                  toast.success('✅ Imagem adicionada!')
                                }
                              }
                            }}
                          />
                        </div>
                      </div>

                      {/* Características */}
                      <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                        <label className="font-semibold mb-3 text-gray-900 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                          Características e Benefícios
                        </label>
                        {editingService.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex gap-2 mb-2">
                            <input
                              type="text"
                              value={feature}
                              onChange={(e) => {
                                const newFeatures = [...editingService.features]
                                newFeatures[idx] = e.target.value
                                setEditingService({...editingService, features: newFeatures})
                              }}
                              className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-900"
                              placeholder={`Característica ${idx + 1}`}
                            />
                            <button
                              onClick={() => {
                                const newFeatures = editingService.features.filter((_: any, i: number) => i !== idx)
                                setEditingService({...editingService, features: newFeatures})
                              }}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => setEditingService({...editingService, features: [...editingService.features, '']})}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center mt-2"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Adicionar Característica
                        </button>
                      </div>

                      {/* SEO */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                        <div>
                          <label className="font-semibold mb-2 text-gray-900">SEO Título</label>
                          <input type="text" value={editingService.seoTitle} onChange={(e) => setEditingService({...editingService, seoTitle: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                        </div>
                        <div>
                          <label className="font-semibold mb-2 text-gray-900">SEO Descrição</label>
                          <input type="text" value={editingService.seoDescription} onChange={(e) => setEditingService({...editingService, seoDescription: e.target.value})} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-4 border-t-2">
                        <button onClick={handleSaveService} disabled={loading} className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center shadow-lg">
                          <Save className="h-5 w-5 mr-2" />
                          {loading ? 'Salvando...' : 'Salvar Alterações'}
                        </button>
                        <button onClick={() => setEditingService(null)} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl flex items-center shadow-lg">
                          <X className="h-5 w-5 mr-2" />
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      {services.map((service) => (
                        <div key={service.id} className="border-2 border-gray-100 rounded-lg p-4 hover:border-red-300 transition-all">
                          <div className="flex justify-between items-start">
                            <div className="flex-1 flex gap-4">
                              {service.images && service.images.length > 0 && (
                                <img 
                                  src={service.images[0]} 
                                  alt={service.title}
                                  className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200"
                                />
                              )}
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 text-lg mb-1">{service.title}</h4>
                                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                                  {service.category}
                                </span>
                                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button onClick={() => setEditingService(service)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                                <Edit className="h-4 w-4 mr-1" />
                                Editar
                              </button>
                              <button onClick={() => handleDeleteService(service.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Móveis */}
            {activeTab === 'furniture' && (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <ShoppingCart className="h-8 w-8 mr-3 text-green-600" />
                    Móveis
                  </h2>
                  <button 
                    onClick={() => {
                      setEditingProduct({
                        id: `new-${Date.now()}`, name: '', slug: '', category: 'Bancadas',
                        shortDescription: '', fullDescription: '',
                        standardWidth: 150, standardHeight: 90, standardDepth: 60, sizeUnit: 'cm',
                        basePrice: 0, images: [], features: [''], materials: [''], colors: [''],
                        customizable: true, isActive: true, order: 0, seoTitle: '', seoDescription: ''
                      })
                      setShowProductModal(true)
                    }}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Novo
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div key={product.id} className="border-2 border-gray-100 rounded-lg p-4 hover:border-green-300 transition-all">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 flex gap-4">
                            {product.images && product.images.length > 0 && (
                              <img 
                                src={product.images[0]} 
                                alt={product.name}
                                className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200"
                              />
                            )}
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h4>
                              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                                {product.category}
                              </span>
                              <p className="text-green-700 font-bold text-lg">R$ {product.basePrice.toFixed(2)}</p>
                              <p className="text-xs text-gray-500">{product.standardWidth}x{product.standardHeight}x{product.standardDepth} {product.sizeUnit}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <button onClick={() => { setEditingProduct(product); setShowProductModal(true) }} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium">
                              <Edit className="h-4 w-4 mr-1" />
                              Editar
                            </button>
                            <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Testemunhos */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <Star className="h-8 w-8 mr-3 text-yellow-600" />
                    Testemunhos
                  </h2>
                  <button 
                    onClick={() => {
                  setEditingTestimonial({
                    id: `new-${Date.now()}`,
                    clientName: '',
                    company: '',
                    clientImage: null,
                    rating: 5,
                    testimonial: '',
                    isActive: true,
                    order: 0
                  })
                      setShowTestimonialModal(true)
                    }}
                    className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Novo
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((t) => (
                      <div key={t.id} className="border-2 border-gray-100 rounded-lg p-6">
                        <div className="flex gap-4 mb-4">
                          {t.clientImage ? (
                            <img src={t.clientImage} alt={t.clientName} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                              {t.clientName.charAt(0)}
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{t.clientName}</h4>
                            {t.company && (
                              <p className="text-sm text-gray-600">{t.company}</p>
                            )}
                            <div className="flex gap-0.5 mt-1">
                              {[1,2,3,4,5].map((s) => (
                                <Star key={s} className={`h-4 w-4 ${s <= t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 italic mb-4">"{t.testimonial}"</p>
                        <div className="flex gap-2">
                          <button onClick={() => { setEditingTestimonial(t); setShowTestimonialModal(true) }} className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center justify-center">
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </button>
                          <button onClick={() => handleDeleteTestimonial(t.id)} className="bg-red-600 text-white px-3 py-2 rounded-lg">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {testimonials.length === 0 && (
                      <div className="col-span-2 text-center py-12 bg-gray-50 rounded-lg">
                        <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-600">Nenhum testemunho cadastrado</p>
                        <p className="text-sm text-gray-500 mt-2">Clique em "Novo" para adicionar</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Categorias */}
            {activeTab === 'categories' && (
              <div className="space-y-8">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <Tag className="h-8 w-8 mr-3 text-purple-600" />
                    Categorias
                  </h2>
                </div>

                {/* Categorias de Serviços */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Wrench className="h-5 w-5 mr-2 text-red-600" />
                      Categorias de Serviços
                    </h3>
                    <button onClick={() => setShowCategoryModal(true)} className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center text-sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova
                    </button>
                  </div>

                  {showCategoryModal && (
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-4 border-2 border-red-200">
                      <h4 className="font-semibold mb-4 text-gray-900">Nova Categoria de Serviço</h4>
                      <div className="flex gap-2">
                        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Ex: Portões e Acessos" className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" />
                        <button onClick={() => {
                          if (newCategory && !categories.includes(newCategory)) {
                            setCategories([...categories, newCategory])
                            setNewCategory('')
                            setShowCategoryModal(false)
                            toast.success('✅ Categoria adicionada!')
                          }
                        }} className="bg-green-600 text-white px-6 py-3 rounded-lg">Adicionar</button>
                        <button onClick={() => { setShowCategoryModal(false); setNewCategory('') }} className="bg-gray-600 text-white px-6 py-3 rounded-lg">Cancelar</button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <div key={cat} className="border-2 border-gray-100 rounded-lg p-4 flex justify-between items-center hover:border-red-300 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="bg-red-100 p-2 rounded-lg">
                              <Tag className="h-5 w-5 text-red-600" />
                            </div>
                            <span className="font-semibold text-gray-900">{cat}</span>
                          </div>
                          <button onClick={() => {
                            if (confirm(`Remover "${cat}"?`)) {
                              setCategories(categories.filter(c => c !== cat))
                              toast.success('✅ Removida!')
                            }
                          }} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remover
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Categorias de Móveis */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2 text-green-600" />
                      Categorias de Móveis Industriais
                    </h3>
                    <button 
                      onClick={() => setShowFurnitureCategoryModal(true)} 
                      className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center text-sm"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Nova
                    </button>
                  </div>

                  {showFurnitureCategoryModal && (
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-4 border-2 border-green-200">
                      <h4 className="font-semibold mb-4 text-gray-900">Nova Categoria de Móvel</h4>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={newFurnitureCategory} 
                          onChange={(e) => setNewFurnitureCategory(e.target.value)} 
                          placeholder="Ex: Bancadas de Trabalho" 
                          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" 
                        />
                        <button onClick={() => {
                          if (newFurnitureCategory && !furnitureCategories.includes(newFurnitureCategory)) {
                            setFurnitureCategories([...furnitureCategories, newFurnitureCategory])
                            setNewFurnitureCategory('')
                            setShowFurnitureCategoryModal(false)
                            toast.success('✅ Categoria adicionada! Use ao criar/editar produtos.')
                          }
                        }} className="bg-green-600 text-white px-6 py-3 rounded-lg">Adicionar</button>
                        <button onClick={() => { setShowFurnitureCategoryModal(false); setNewFurnitureCategory('') }} className="bg-gray-600 text-white px-6 py-3 rounded-lg">Cancelar</button>
                      </div>
                    </div>
                  )}

                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-3">
                      {furnitureCategories.map((cat) => (
                        <div key={cat} className="border-2 border-gray-100 rounded-lg p-4 flex justify-between items-center hover:border-green-300 transition-all">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                              <Package className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="font-semibold text-gray-900">{cat}</span>
                            <span className="text-sm text-gray-500">
                              ({products.filter(p => p.category === cat).length} produtos)
                            </span>
                          </div>
                          <button onClick={() => {
                            if (confirm(`Remover categoria "${cat}"?`)) {
                              setFurnitureCategories(furnitureCategories.filter(c => c !== cat))
                              toast.success('✅ Categoria removida!')
                            }
                          }} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remover
                          </button>
                        </div>
                      ))}
                      {furnitureCategories.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          Nenhuma categoria de móveis ainda. Crie produtos para gerar categorias.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Sobre Nós */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Info className="h-8 w-8 mr-3 text-orange-600" />
                  Sobre Nós
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <label className="font-semibold mb-2 text-gray-900 flex items-center">
                        <Video className="h-5 w-5 mr-2 text-red-600" />
                        URL do Vídeo Institucional
                      </label>
                      <input
                        type="text"
                        value={aboutData.videoUrl}
                        onChange={(e) => setAboutData({...aboutData, videoUrl: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900"
                        placeholder="https://youtube.com/watch?v=..."
                      />
                      <p className="text-sm text-gray-500 mt-2">Cole link do YouTube ou vídeo</p>
                    </div>

                    {aboutData.videoUrl && (
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        {aboutData.videoUrl.includes('youtube') || aboutData.videoUrl.includes('youtu.be') ? (
                          <iframe src={aboutData.videoUrl.replace('watch?v=', 'embed/')} className="w-full h-full" allowFullScreen></iframe>
                        ) : (
                          <video src={aboutData.videoUrl} controls className="w-full h-full"></video>
                        )}
                      </div>
                    )}

                    <button onClick={handleSaveAbout} disabled={loading} className="w-full bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center">
                      <Save className="h-5 w-5 mr-2" />
                      Salvar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <ImageIcon className="h-8 w-8 mr-3 text-pink-600" />
                  Galeria de Projetos
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <ImageIcon className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Gerencie a galeria de projetos realizados</p>
                </div>
              </div>
            )}

            {/* Messages */}
            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <MessageSquare className="h-8 w-8 mr-3 text-yellow-600" />
                  Mensagens de Contato
                </h2>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <MessageSquare className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Mensagens enviadas pelo formulário de contato aparecerão aqui</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Produto */}
      {showProductModal && editingProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <ShoppingCart className="h-7 w-7 mr-2 text-green-600" />
              {editingProduct.id.startsWith('new-') ? 'Novo Produto' : 'Editar Produto'}
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center">
                    <Tag className="h-4 w-4 mr-1 text-blue-600" />
                    Nome do Produto
                  </label>
                  <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Ex: Bancada Simples" />
                </div>
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center">
                    <Tag className="h-4 w-4 mr-1 text-purple-600" />
                    Slug (URL)
                  </label>
                  <input type="text" value={editingProduct.slug} onChange={(e) => setEditingProduct({...editingProduct, slug: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="bancada-simples" />
                </div>
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center">
                    <Tag className="h-4 w-4 mr-1 text-orange-600" />
                    Categoria
                  </label>
                  <input type="text" value={editingProduct.category} onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Bancadas de Trabalho" />
                </div>
              </div>

              <div>
                <label className="font-semibold mb-2 text-gray-900 flex items-center">
                  <List className="h-4 w-4 mr-1 text-green-600" />
                  Descrição Curta (Cards)
                </label>
                <textarea value={editingProduct.shortDescription} onChange={(e) => setEditingProduct({...editingProduct, shortDescription: e.target.value})} rows={2} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Descrição breve" />
              </div>

              <div>
                <label className="font-semibold mb-2 text-gray-900 flex items-center">
                  <List className="h-4 w-4 mr-1 text-blue-600" />
                  Descrição Completa (Página)
                </label>
                <textarea value={editingProduct.fullDescription} onChange={(e) => setEditingProduct({...editingProduct, fullDescription: e.target.value})} rows={4} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900" placeholder="Descrição detalhada" />
              </div>
              
              <div className="grid grid-cols-4 gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
                    <Ruler className="h-4 w-4 mr-1 text-blue-600" />
                    Largura (cm)
                  </label>
                  <input type="number" value={editingProduct.standardWidth} onChange={(e) => setEditingProduct({...editingProduct, standardWidth: parseFloat(e.target.value)})} className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
                    <Ruler className="h-4 w-4 mr-1 text-blue-600" />
                    Altura (cm)
                  </label>
                  <input type="number" value={editingProduct.standardHeight} onChange={(e) => setEditingProduct({...editingProduct, standardHeight: parseFloat(e.target.value)})} className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
                    <Ruler className="h-4 w-4 mr-1 text-blue-600" />
                    Profundidade (cm)
                  </label>
                  <input type="number" value={editingProduct.standardDepth} onChange={(e) => setEditingProduct({...editingProduct, standardDepth: parseFloat(e.target.value)})} className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="font-semibold mb-2 text-gray-900 flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                    Preço (R$)
                  </label>
                  <input type="number" step="0.01" value={editingProduct.basePrice} onChange={(e) => setEditingProduct({...editingProduct, basePrice: parseFloat(e.target.value)})} className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" />
                </div>
              </div>

              <div>
                <label className="font-semibold mb-3 text-gray-900 flex items-center">
                  <ImageIcon className="h-4 w-4 mr-1 text-pink-600" />
                  Imagens do Produto
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {editingProduct.images.map((img: string, idx: number) => (
                    <div key={idx} className="relative group">
                      <img src={img} alt={`Imagem ${idx + 1}`} className="w-full h-32 object-cover rounded-lg border-2 border-gray-200" />
                      <button onClick={() => handleRemoveImage(idx, 'product')} className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                        <X className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        #{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'product')} className="hidden" id="product-img-up" />
                  <label htmlFor="product-img-up" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer flex items-center font-medium shadow-md">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </label>
                  <input type="text" placeholder="Ou cole URL e pressione Enter" className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500" onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const url = (e.target as HTMLInputElement).value
                      if (url) {
                        setEditingProduct({...editingProduct, images: [...editingProduct.images, url]})
                        ;(e.target as HTMLInputElement).value = ''
                        toast.success('✅ Imagem adicionada!')
                      }
                    }
                  }} />
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <label className="font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-600" />
                  Características e Especificações
                </label>
                {editingProduct.features.map((f: string, idx: number) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" value={f} onChange={(e) => updateArrayItem('features', idx, e.target.value)} className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" placeholder={`Característica ${idx + 1}`} />
                    <button onClick={() => removeArrayItem('features', idx)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"><X className="h-4 w-4" /></button>
                  </div>
                ))}
                <button onClick={() => addArrayItem('features')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"><Plus className="h-4 w-4 mr-2" />Adicionar</button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                <label className="font-semibold mb-3 text-gray-900 flex items-center">
                  <Package className="h-4 w-4 mr-1 text-gray-600" />
                  Materiais
                </label>
                {editingProduct.materials.map((m: string, idx: number) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" value={m} onChange={(e) => updateArrayItem('materials', idx, e.target.value)} className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" placeholder={`Material ${idx + 1}`} />
                    <button onClick={() => removeArrayItem('materials', idx)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"><X className="h-4 w-4" /></button>
                  </div>
                ))}
                <button onClick={() => addArrayItem('materials')} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center"><Plus className="h-4 w-4 mr-2" />Adicionar</button>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <label className="font-semibold mb-3 text-gray-900 flex items-center">
                  <Palette className="h-4 w-4 mr-1 text-purple-600" />
                  Cores Disponíveis
                </label>
                {editingProduct.colors.map((c: string, idx: number) => (
                  <div key={idx} className="flex gap-2 mb-2">
                    <input type="text" value={c} onChange={(e) => updateArrayItem('colors', idx, e.target.value)} className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-gray-900" placeholder={`Cor ${idx + 1}`} />
                    <button onClick={() => removeArrayItem('colors', idx)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"><X className="h-4 w-4" /></button>
                  </div>
                ))}
                <button onClick={() => addArrayItem('colors')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center"><Plus className="h-4 w-4 mr-2" />Adicionar</button>
              </div>

              <div className="flex gap-3 pt-6 border-t-2">
                <button onClick={handleSaveProduct} disabled={loading} className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center disabled:opacity-50 shadow-lg">
                  <Save className="h-5 w-5 mr-2" />
                  {loading ? 'Salvando...' : 'Salvar Produto'}
                </button>
                <button onClick={() => { setEditingProduct(null); setShowProductModal(false) }} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center shadow-lg">
                  <X className="h-5 w-5 mr-2" />
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Testemunho */}
      {showTestimonialModal && editingTestimonial && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Star className="h-7 w-7 mr-2 text-yellow-600" />
              {editingTestimonial.id.startsWith('new-') ? 'Novo Testemunho' : 'Editar Testemunho'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2 text-gray-900">Nome do Cliente</label>
                <input type="text" value={editingTestimonial.clientName} onChange={(e) => setEditingTestimonial({...editingTestimonial, clientName: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg text-gray-900" placeholder="Ex: João Silva" />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-900">Empresa / Cargo</label>
                <input type="text" value={editingTestimonial.company || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, company: e.target.value})} className="w-full px-4 py-3 border-2 rounded-lg text-gray-900" placeholder="Ex: Projeto Residencial" />
              </div>
              
              <div>
                <label className="block font-semibold mb-2 text-gray-900">Foto do Cliente</label>
                {editingTestimonial.clientImage && (
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <img src={editingTestimonial.clientImage} alt="Preview" className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400" />
                      <button onClick={() => setEditingTestimonial({...editingTestimonial, clientImage: null})} className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'testimonial')} className="hidden" id="test-img" />
                <label htmlFor="test-img" className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer inline-flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </label>
              </div>

              <div>
                <label className="block font-semibold mb-3 text-gray-900">Avaliação (Estrelas)</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map((s) => (
                    <button key={s} type="button" onClick={() => setEditingTestimonial({...editingTestimonial, rating: s})} className="p-2">
                      <Star className={`h-8 w-8 ${s <= editingTestimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-gray-900">Testemunho</label>
                <textarea value={editingTestimonial.testimonial} onChange={(e) => setEditingTestimonial({...editingTestimonial, testimonial: e.target.value})} rows={4} className="w-full px-4 py-3 border-2 rounded-lg text-gray-900" placeholder="O que o cliente disse sobre o serviço..." />
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={handleSaveTestimonial} disabled={loading} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center">
                  <Save className="h-5 w-5 mr-2" />
                  Salvar
                </button>
                <button onClick={() => { setEditingTestimonial(null); setShowTestimonialModal(false) }} className="bg-gray-600 text-white px-6 py-3 rounded-xl">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
