import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/LogoAnfer.png" 
                alt="ANFER Logo" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <div>
                <span className="font-bold text-xl block">ANFER</span>
                <span className="text-sm text-gray-400">Esquadrias Metálicas</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especialistas em esquadrias metálicas, portões, grades e equipamentos industriais.
              Atendemos residências, condomínios e indústrias com qualidade e excelência.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Anfer.Esquadrias/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/anfer.esquadrias/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servico/portao-basculante" className="text-gray-300 hover:text-white transition-colors">
                  Portões
                </Link>
              </li>
              <li>
                <Link href="/servico/guarda-corpo" className="text-gray-300 hover:text-white transition-colors">
                  Guarda-Corpos
                </Link>
              </li>
              <li>
                <Link href="/servico/grades-para-janelas" className="text-gray-300 hover:text-white transition-colors">
                  Grades de Proteção
                </Link>
              </li>
              <li>
                <Link href="/servico/elevadores" className="text-gray-300 hover:text-white transition-colors">
                  Serviços Industriais
                </Link>
              </li>
              <li>
                <Link href="/moveis-industriais" className="text-gray-300 hover:text-white transition-colors">
                  Móveis Industriais
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="https://wa.me/5511940093757" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                <MessageCircle className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">(11) 94009-3757</span>
              </a>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">contato@anferesquadrias.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua Rio Meriti, 120<br/>São Miguel Pta - São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">Seg-Sáb: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos/todos" className="text-gray-300 hover:text-white transition-colors">
                  Todos os Serviços
                </Link>
              </li>
              <li>
                <Link href="/manutencao" className="text-gray-300 hover:text-white transition-colors">
                  Agendar Manutenção
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ANFER Esquadrias Metálicas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}


