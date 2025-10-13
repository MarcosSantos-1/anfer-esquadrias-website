import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LayoutWrapper from './LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANFER Esquadrias Metálicas - Portões, Grades e Equipamentos',
  description: 'Especialistas em esquadrias metálicas, portões, grades, guarda-corpos, portas de aço, elevadores e móveis industriais personalizados. Atendemos residências, condomínios e indústrias.',
  keywords: 'esquadrias metálicas, portões, grades, guarda-corpos, portas de aço, elevadores, móveis industriais, serralheria',
  icons: {
    icon: '/AnferLogo.svg',
    shortcut: '/AnferLogo.svg',
    apple: '/AnferLogo.svg',
  },
  openGraph: {
    title: 'ANFER Esquadrias Metálicas',
    description: 'Especialistas em esquadrias metálicas e equipamentos industriais',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LayoutWrapper header={<Header />} footer={<Footer />}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}