'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Não mostrar Header e Footer em rotas admin
  const isAdminRoute = pathname?.startsWith('/admin')
  
  if (isAdminRoute) {
    return <>{children}</>
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

