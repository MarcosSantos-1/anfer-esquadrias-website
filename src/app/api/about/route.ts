import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Buscar dados da página Sobre
export async function GET() {
  try {
    const about = await prisma.companyInfo.findFirst()
    
    if (!about) {
      // Retornar dados padrão se não houver no banco
      return NextResponse.json({
        id: 'default',
        title: 'Sobre a ANFER',
        description: 'Somos uma empresa especializada em esquadrias metálicas, com vasta experiência no mercado.',
        mission: 'Fornecer soluções em esquadrias metálicas com excelência',
        vision: 'Ser referência no mercado de esquadrias metálicas',
        values: 'Qualidade | Comprometimento | Transparência',
        videoUrl: null,
        teamMembers: []
      })
    }

    // Parse teamMembers se existir
    const teamMembers = about.aboutText ? JSON.parse(about.aboutText) : []
    
    return NextResponse.json({
      id: about.id,
      title: about.name || 'Sobre a ANFER',
      description: about.description || '',
      mission: about.address || '',
      vision: about.phone || '',
      values: about.email || '',
      videoUrl: about.heroImage || null,
      teamMembers
    })
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return NextResponse.json(
      { error: 'Failed to fetch about data' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar dados da página Sobre
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Buscar registro existente ou criar novo
    let about = await prisma.companyInfo.findFirst()
    
    if (!about) {
      // Criar novo registro
      about = await prisma.companyInfo.create({
        data: {
          name: body.title || 'ANFER',
          description: body.description || '',
          address: body.mission || '',
          phone: body.vision || '',
          email: body.values || '',
          heroImage: body.videoUrl || null,
          aboutText: JSON.stringify(body.teamMembers || [])
        }
      })
    } else {
      // Atualizar registro existente
      about = await prisma.companyInfo.update({
        where: { id: about.id },
        data: {
          name: body.title,
          description: body.description,
          address: body.mission,
          phone: body.vision,
          email: body.values,
          heroImage: body.videoUrl,
          aboutText: JSON.stringify(body.teamMembers)
        }
      })
    }
    
    return NextResponse.json({ success: true, data: about })
  } catch (error) {
    console.error('Erro ao atualizar dados:', error)
    return NextResponse.json(
      { error: 'Failed to update about data' },
      { status: 500 }
    )
  }
}

