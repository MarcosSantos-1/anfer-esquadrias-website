import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Buscar produto específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const product = await prisma.furnitureProduct.findUnique({
      where: { id }
    })
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }
    
    const productWithParsedData = {
      ...product,
      images: JSON.parse(product.images),
      features: JSON.parse(product.features),
      materials: JSON.parse(product.materials),
      colors: JSON.parse(product.colors)
    }
    
    return NextResponse.json(productWithParsedData)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar produto
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const product = await prisma.furnitureProduct.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        category: body.category,
        shortDescription: body.shortDescription,
        fullDescription: body.fullDescription,
        standardWidth: body.standardWidth,
        standardHeight: body.standardHeight,
        standardDepth: body.standardDepth,
        sizeUnit: body.sizeUnit,
        basePrice: body.basePrice,
        images: JSON.stringify(body.images || []),
        features: JSON.stringify(body.features || []),
        materials: JSON.stringify(body.materials || []),
        colors: JSON.stringify(body.colors || []),
        customizable: body.customizable,
        isActive: body.isActive,
        order: body.order,
        seoTitle: body.seoTitle,
        seoDescription: body.seoDescription
      }
    })
    
    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE - Excluir produto
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.furnitureProduct.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}

