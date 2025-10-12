import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Listar todos os serviços
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { order: 'asc' }
    })
    
    // Parse JSON fields
    const servicesWithParsedData = services.map(service => ({
      ...service,
      images: JSON.parse(service.images),
      features: JSON.parse(service.features)
    }))
    
    return NextResponse.json(servicesWithParsedData)
  } catch (error) {
    console.error('Error fetching services:', error)
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}

// POST - Criar novo serviço
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const service = await prisma.service.create({
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
        isActive: body.isActive ?? true,
        order: body.order ?? 0
      }
    })
    
    return NextResponse.json(service, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    )
  }
}

