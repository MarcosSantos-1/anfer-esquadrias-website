'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos/todos' },
    { name: 'Móveis Industriais', href: '/moveis-industriais' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Manutenção', href: '/manutencao' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/5511940093757" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-green-400 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>(11) 94009-3757</span>
            </a>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contato@anferesquadrias.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Rua Rio Meriti, 120 - São Miguel Pta - SP</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-red-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">ANFER</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-900">Esquadrias Metálicas</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


