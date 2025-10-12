import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Listar todos os testemunhos
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    )
  }
}

// POST - Criar novo testemunho
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Criando testemunho:', body)
    
    const testimonial = await prisma.testimonial.create({
      data: {
        clientName: body.clientName,
        company: body.company || null,
        clientImage: body.clientImage || null,
        rating: body.rating || 5,
        testimonial: body.testimonial,
        isActive: body.isActive ?? true,
        order: body.order ?? 0
      }
    })
    
    console.log('Testemunho criado:', testimonial)
    
    return NextResponse.json(testimonial, { status: 201 })
  } catch (error: any) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json(
      { error: 'Failed to create testimonial', details: error.message },
      { status: 500 }
    )
  }
}

