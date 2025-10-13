import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Listar todos os produtos
export async function GET() {
  try {
    const products = await prisma.furnitureProduct.findMany({
      orderBy: { order: 'asc' }
    })
    
    // Parse JSON fields e transformar para formato correto
    const productsWithParsedData = products.map(product => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      category: product.category,
      shortDescription: product.shortDescription,
      fullDescription: product.fullDescription,
      standardSize: {
        width: product.standardWidth,
        height: product.standardHeight,
        depth: product.standardDepth,
        unit: product.sizeUnit
      },
      basePrice: product.basePrice,
      images: JSON.parse(product.images),
      features: JSON.parse(product.features),
      materials: JSON.parse(product.materials),
      colors: JSON.parse(product.colors),
      customizable: product.customizable,
      isActive: product.isActive,
      seoTitle: product.seoTitle,
      seoDescription: product.seoDescription
    }))
    
    return NextResponse.json(productsWithParsedData)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST - Criar novo produto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const product = await prisma.furnitureProduct.create({
      data: {
        name: body.name,
        slug: body.slug,
        category: body.category,
        shortDescription: body.shortDescription,
        fullDescription: body.fullDescription,
        standardWidth: body.standardWidth,
        standardHeight: body.standardHeight,
        standardDepth: body.standardDepth,
        sizeUnit: body.sizeUnit || 'cm',
        basePrice: body.basePrice,
        images: JSON.stringify(body.images || []),
        features: JSON.stringify(body.features || []),
        materials: JSON.stringify(body.materials || []),
        colors: JSON.stringify(body.colors || []),
        customizable: body.customizable ?? true,
        isActive: body.isActive ?? true,
        order: body.order ?? 0,
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription
      }
    })
    
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}

