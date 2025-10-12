import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT - Atualizar testemunho
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    console.log('=== ATUALIZANDO TESTEMUNHO ===')
    console.log('ID:', id)
    console.log('Body recebido:', JSON.stringify(body, null, 2))
    
    // Validar dados obrigatórios
    if (!body.clientName || !body.testimonial) {
      console.error('Dados faltando:', { clientName: body.clientName, testimonial: body.testimonial })
      return NextResponse.json(
        { error: 'Nome e testemunho são obrigatórios' },
        { status: 400 }
      )
    }
    
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        clientName: body.clientName,
        company: body.company || null,
        clientImage: body.clientImage || null,
        rating: parseInt(body.rating) || 5,
        testimonial: body.testimonial,
        isActive: body.isActive ?? true,
        order: body.order ?? 0
      }
    })
    
    console.log('Testemunho atualizado com sucesso:', testimonial)
    
    return NextResponse.json(testimonial)
  } catch (error: any) {
    console.error('=== ERRO AO ATUALIZAR ===')
    console.error('Erro completo:', error)
    console.error('Message:', error.message)
    console.error('Stack:', error.stack)
    return NextResponse.json(
      { error: 'Failed to update testimonial', details: error.message, stack: error.stack },
      { status: 500 }
    )
  }
}

// DELETE - Excluir testemunho
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.testimonial.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    return NextResponse.json(
      { error: 'Failed to delete testimonial' },
      { status: 500 }
    )
  }
}

