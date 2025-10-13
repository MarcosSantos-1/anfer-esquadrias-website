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
  // Layout sem Header e Footer - apenas conteúdo
  return <div className="admin-layout">{children}</div>
}

