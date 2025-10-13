'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LayoutWrapperProps {
  children: ReactNode
  header: ReactNode
  footer: ReactNode
}

export default function LayoutWrapper({ children, header, footer }: LayoutWrapperProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')
  
  if (isAdminRoute) {
    return <>{children}</>
  }
  
  return (
    <>
      {header}
      <main className="min-h-screen">
        {children}
      </main>
      {footer}
    </>
  )
}

