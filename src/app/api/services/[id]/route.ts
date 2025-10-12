import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Buscar serviço específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const service = await prisma.service.findUnique({
      where: { id }
    })
    
    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      )
    }
    
    const serviceWithParsedData = {
      ...service,
      images: JSON.parse(service.images),
      features: JSON.parse(service.features)
    }
    
    return NextResponse.json(serviceWithParsedData)
  } catch (error) {
    console.error('Error fetching service:', error)
    return NextResponse.json(
      { error: 'Failed to fetch service' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar serviço
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const service = await prisma.service.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        category: body.category,
        description: body.description,
        fullDescription: body.fullDescription,
        images: JSON.stringify(body.images || []),
        features: JSON.stringify(body.features || []),
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription,
        isActive: body.isActive,
        order: body.order
      }
    })
    
    return NextResponse.json(service)
  } catch (error) {
    console.error('Error updating service:', error)
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    )
  }
}

// DELETE - Excluir serviço
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.service.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting service:', error)
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    )
  }
}

