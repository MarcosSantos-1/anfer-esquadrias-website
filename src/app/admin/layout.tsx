import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - ANFER Esquadrias',
  description: 'Painel Administrativo',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Layout sem Header e Footer do site público
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

