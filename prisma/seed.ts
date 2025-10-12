import { PrismaClient } from '@prisma/client'
import { services } from '../src/data/services'
import { furnitureProducts } from '../src/data/furniture'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar dados existentes
  await prisma.service.deleteMany()
  await prisma.furnitureProduct.deleteMany()
  await prisma.testimonial.deleteMany()

  console.log('✅ Dados antigos removidos')

  // Inserir serviços
  console.log('📝 Inserindo serviços...')
  for (const service of services) {
    await prisma.service.create({
      data: {
        title: service.title,
        slug: service.slug,
        category: service.category,
        description: service.description,
        fullDescription: service.fullDescription,
        images: JSON.stringify(service.images),
        features: JSON.stringify(service.features),
        seoTitle: service.seoTitle,
        seoDescription: service.seoDescription,
        isActive: true,
        order: 0
      }
    })
  }
  console.log(`✅ ${services.length} serviços inseridos`)

  // Inserir produtos de móveis
  console.log('🛋️  Inserindo móveis industriais...')
  for (const product of furnitureProducts) {
    await prisma.furnitureProduct.create({
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        shortDescription: product.shortDescription,
        fullDescription: product.fullDescription,
        standardWidth: product.standardSize.width,
        standardHeight: product.standardSize.height,
        standardDepth: product.standardSize.depth,
        sizeUnit: product.standardSize.unit,
        basePrice: product.basePrice,
        images: JSON.stringify(product.images),
        features: JSON.stringify(product.features),
        materials: JSON.stringify(product.materials),
        colors: JSON.stringify(product.colors),
        customizable: product.customizable,
        isActive: true,
        order: 0,
        seoTitle: product.seoTitle,
        seoDescription: product.seoDescription
      }
    })
  }
  console.log(`✅ ${furnitureProducts.length} produtos inseridos`)

  // Inserir testemunhos
  console.log('⭐ Inserindo testemunhos...')
  const defaultTestimonials = [
    {
      clientName: 'Maria Silva',
      company: 'Projeto Residencial',
      rating: 5,
      testimonial: 'Excelente trabalho! A equipe da ANFER foi muito profissional e o resultado superou nossas expectativas. Recomendo!'
    },
    {
      clientName: 'João Santos',
      company: 'Comercial',
      rating: 5,
      testimonial: 'Instalaram um portão automático em nossa empresa. Qualidade impecável e entrega no prazo. Muito satisfeitos!'
    },
    {
      clientName: 'Carlos Oliveira',
      company: 'Condomínio',
      rating: 5,
      testimonial: 'Precisávamos de guarda-corpos para nosso condomínio. O trabalho ficou perfeito, com ótimo acabamento. Parabéns!'
    },
    {
      clientName: 'Ana Paula',
      company: 'Residencial',
      rating: 5,
      testimonial: 'Contratei a ANFER para fazer grades de proteção. Além da qualidade, o atendimento foi excepcional!'
    }
  ]

  for (const testimonial of defaultTestimonials) {
    await prisma.testimonial.create({
      data: testimonial
    })
  }
  console.log(`✅ ${defaultTestimonials.length} testemunhos inseridos`)

  // Criar usuário admin
  console.log('👤 Criando usuário admin...')
  await prisma.user.upsert({
    where: { email: 'admin@anfer.com' },
    update: {},
    create: {
      email: 'admin@anfer.com',
      password: 'admin123', // Em produção, use hash!
      name: 'Administrador',
      role: 'ADMIN'
    }
  })
  console.log('✅ Usuário admin criado')

  console.log('🎉 Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

