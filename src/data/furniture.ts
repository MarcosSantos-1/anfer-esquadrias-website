export interface FurnitureProduct {
  id: string
  name: string
  slug: string
  category: string
  shortDescription: string
  fullDescription: string
  standardSize: {
    width: number
    height: number
    depth: number
    unit: string
  }
  basePrice: number
  images: string[]
  features: string[]
  materials: string[]
  colors: string[]
  customizable: boolean
  seoTitle: string
  seoDescription: string
}

export const furnitureCategories = [
  {
    id: 'bancadas',
    name: 'Bancadas de Trabalho',
    slug: 'bancadas',
    description: 'Bancadas resistentes para atividades industriais e oficinas'
  },
  {
    id: 'armarios',
    name: 'Armários Industriais',
    slug: 'armarios',
    description: 'Armários robustos para armazenamento seguro'
  },
  {
    id: 'estacoes',
    name: 'Estações de Trabalho',
    slug: 'estacoes',
    description: 'Estações personalizadas para máxima produtividade'
  },
  {
    id: 'prateleiras',
    name: 'Racks e Prateleiras',
    slug: 'prateleiras',
    description: 'Sistemas de armazenamento para organização'
  },
  {
    id: 'carrinhos',
    name: 'Carrinhos e Plataformas',
    slug: 'carrinhos',
    description: 'Soluções para movimentação de materiais'
  }
]

export const furnitureProducts: FurnitureProduct[] = [
  // Bancadas de Trabalho
  {
    id: 'bancada-simples',
    name: 'Bancada de Trabalho Simples',
    slug: 'bancada-trabalho-simples',
    category: 'Bancadas de Trabalho',
    shortDescription: 'Bancada robusta com tampo em chapa de aço e estrutura reforçada.',
    fullDescription: 'Bancada de trabalho fabricada com estrutura em tubos de aço 50x30mm e tampo em chapa de aço #14 com reforços. Ideal para oficinas, indústrias e áreas de manutenção. Suporta cargas de até 500kg uniformemente distribuídos. Pintura eletrostática em epóxi para alta durabilidade. Pode ser personalizada com gavetas, prateleiras inferiores e painéis para ferramentas.',
    standardSize: {
      width: 150,
      height: 90,
      depth: 60,
      unit: 'cm'
    },
    basePrice: 890.00,
    images: ['/imgs/moveis/bancada-simples.jpg'],
    features: [
      'Estrutura em tubos de aço 50x30mm',
      'Tampo em chapa de aço #14',
      'Suporta até 500kg',
      'Pintura eletrostática',
      'Pés niveladores ajustáveis',
      'Montagem facilitada'
    ],
    materials: ['Aço carbono', 'Chapa de aço'],
    colors: ['Cinza', 'Azul', 'Verde', 'Preto'],
    customizable: true,
    seoTitle: 'Bancada de Trabalho Simples - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Bancada de trabalho robusta com estrutura em aço. Ideal para oficinas e indústrias. Orçamento gratuito!'
  },
  {
    id: 'bancada-gavetas',
    name: 'Bancada de Trabalho com Gavetas',
    slug: 'bancada-trabalho-gavetas',
    category: 'Bancadas de Trabalho',
    shortDescription: 'Bancada completa com 4 gavetas para organização de ferramentas.',
    fullDescription: 'Bancada de trabalho profissional com 4 gavetas em trilhos telescópicos de alta qualidade. Estrutura reforçada em tubos de aço, tampo em chapa #14 e gaveteiro lateral. Ideal para oficinas mecânicas, eletrônicas e áreas que necessitam organização de ferramentas. As gavetas possuem travas de segurança e suportam até 30kg cada. Personalização disponível com painel de ferramentas perfurado e tomadas elétricas.',
    standardSize: {
      width: 150,
      height: 90,
      depth: 60,
      unit: 'cm'
    },
    basePrice: 1490.00,
    images: ['/imgs/moveis/bancada-gavetas.jpg'],
    features: [
      'Estrutura reforçada em aço',
      '4 gavetas com trilhos telescópicos',
      'Tampo em chapa de aço #14',
      'Gavetas com trava de segurança',
      'Suporta até 500kg no tampo',
      'Capacidade 30kg por gaveta'
    ],
    materials: ['Aço carbono', 'Chapa de aço', 'Trilhos telescópicos'],
    colors: ['Cinza/Azul', 'Cinza/Verde', 'Cinza/Vermelho'],
    customizable: true,
    seoTitle: 'Bancada de Trabalho com Gavetas - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Bancada profissional com 4 gavetas. Ideal para oficinas e indústrias. Consulte!'
  },

  // Armários Industriais
  {
    id: 'armario-vestiario-2-portas',
    name: 'Armário Vestiário 2 Portas',
    slug: 'armario-vestiario-2-portas',
    category: 'Armários Industriais',
    shortDescription: 'Armário vestiário em aço com 2 portas e divisórias internas.',
    fullDescription: 'Armário vestiário fabricado em chapa de aço #22, ideal para empresas, indústrias e vestiários. Possui 2 portas com fechadura tipo pitão, divisórias internas, prateleira superior e porta-cadeado. Ventilação superior e inferior para circulação de ar. Pintura eletrostática em epóxi de alta resistência. Montagem fácil com parafusos e porcas. Pés niveladores para ajuste em pisos irregulares.',
    standardSize: {
      width: 60,
      height: 190,
      depth: 40,
      unit: 'cm'
    },
    basePrice: 620.00,
    images: ['/imgs/moveis/armario-vestiario.jpg'],
    features: [
      'Chapa de aço #22',
      '2 compartimentos com fechadura',
      'Prateleira superior',
      'Ventilação superior e inferior',
      'Porta-cadeado reforçado',
      'Pés niveladores'
    ],
    materials: ['Aço chapa #22'],
    colors: ['Cinza', 'Bege', 'Azul'],
    customizable: true,
    seoTitle: 'Armário Vestiário 2 Portas - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Armário vestiário em aço com 2 portas. Ideal para empresas e indústrias. Orçamento!'
  },
  {
    id: 'armario-ferramentas',
    name: 'Armário para Ferramentas',
    slug: 'armario-ferramentas',
    category: 'Armários Industriais',
    shortDescription: 'Armário alto com prateleiras ajustáveis para ferramentas e equipamentos.',
    fullDescription: 'Armário industrial de alta resistência para armazenamento de ferramentas, peças e equipamentos. Fabricado em chapa de aço #20 com reforços estruturais. Possui 4 prateleiras ajustáveis com capacidade de 50kg cada. Portas duplas com fechadura de segurança e 3 pontos de travamento. Ideal para oficinas, almoxarifados e áreas industriais. Pintura eletrostática para proteção contra corrosão. Pode ser personalizado com gavetas internas e divisórias.',
    standardSize: {
      width: 90,
      height: 200,
      depth: 50,
      unit: 'cm'
    },
    basePrice: 1290.00,
    images: ['/imgs/moveis/armario-ferramentas.jpg'],
    features: [
      'Chapa de aço #20 reforçada',
      '4 prateleiras ajustáveis',
      'Capacidade 50kg por prateleira',
      'Fechadura de segurança 3 pontos',
      'Portas duplas reforçadas',
      'Base com reforço estrutural'
    ],
    materials: ['Aço chapa #20'],
    colors: ['Cinza', 'Azul', 'Verde'],
    customizable: true,
    seoTitle: 'Armário para Ferramentas - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Armário industrial para ferramentas com prateleiras ajustáveis. Orçamento gratuito!'
  },

  // Estações de Trabalho
  {
    id: 'estacao-trabalho-escritorio',
    name: 'Estação de Trabalho para Escritório',
    slug: 'estacao-trabalho-escritorio',
    category: 'Estações de Trabalho',
    shortDescription: 'Mesa de trabalho industrial com suporte para computador e gavetas.',
    fullDescription: 'Estação de trabalho projetada para ambientes industriais e escritórios técnicos. Estrutura em tubo de aço 40x40mm com tampo em MDF revestido de 25mm. Inclui suporte para monitor, gavetas para documentos e porta-CPU. Design ergonômico com passagem de cabos integrada. Ideal para engenheiros, supervisores e áreas administrativas em ambientes industriais. Montagem simples e personalização disponível com mais gavetas e painéis laterais.',
    standardSize: {
      width: 120,
      height: 75,
      depth: 60,
      unit: 'cm'
    },
    basePrice: 790.00,
    images: ['/imgs/moveis/estacao-escritorio.jpg'],
    features: [
      'Estrutura em tubo de aço 40x40mm',
      'Tampo em MDF 25mm revestido',
      'Suporte para monitor ajustável',
      'Gavetas para documentos',
      'Porta-CPU integrado',
      'Sistema de passagem de cabos'
    ],
    materials: ['Aço tubular', 'MDF revestido'],
    colors: ['Cinza/Preto', 'Branco/Preto', 'Bege/Cinza'],
    customizable: true,
    seoTitle: 'Estação de Trabalho Escritório - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Estação de trabalho industrial para escritório. Design ergonômico. Orçamento!'
  },

  // Racks e Prateleiras
  {
    id: 'estante-aco-5-prateleiras',
    name: 'Estante de Aço 5 Prateleiras',
    slug: 'estante-aco-5-prateleiras',
    category: 'Racks e Prateleiras',
    shortDescription: 'Estante modular em aço para armazenamento geral.',
    fullDescription: 'Estante industrial modular fabricada em aço com 5 prateleiras ajustáveis. Estrutura em perfis de aço de alta resistência com pintura eletrostática. Cada prateleira suporta até 80kg uniformemente distribuídos. Sistema de montagem por encaixe sem parafusos, facilitando expansões futuras. Ideal para almoxarifados, depósitos, arquivos e áreas de armazenamento. Disponível em diversos tamanhos e configurações. Pode ser personalizada com painéis laterais e travamentos para maior estabilidade.',
    standardSize: {
      width: 90,
      height: 200,
      depth: 40,
      unit: 'cm'
    },
    basePrice: 490.00,
    images: ['/imgs/moveis/estante-aco.jpg'],
    features: [
      '5 prateleiras ajustáveis',
      'Capacidade 80kg por prateleira',
      'Montagem por encaixe',
      'Estrutura modular expansível',
      'Pintura eletrostática',
      'Pés niveladores'
    ],
    materials: ['Aço carbono', 'Perfis de aço'],
    colors: ['Cinza', 'Azul', 'Branco'],
    customizable: true,
    seoTitle: 'Estante de Aço 5 Prateleiras - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Estante industrial modular em aço. Ideal para almoxarifados. Orçamento gratuito!'
  },
  {
    id: 'porta-paletes',
    name: 'Estrutura Porta Paletes',
    slug: 'estrutura-porta-paletes',
    category: 'Racks e Prateleiras',
    shortDescription: 'Sistema de armazenagem vertical para paletes de alta capacidade.',
    fullDescription: 'Sistema de armazenagem porta-paletes fabricado em perfis de aço estrutural de alta resistência. Ideal para depósitos, centros de distribuição e áreas de armazenamento que utilizam paletes. Inclui colunas, travessas e travas de segurança. Capacidade de carga calculada por nível conforme dimensões. Pintura eletrostática em pó de alta durabilidade. Sistema modular permitindo expansão horizontal e vertical. Projeto personalizado conforme necessidade, altura do galpão e tipo de palete utilizado. Inclui protetores de coluna para áreas com movimentação de empilhadeiras.',
    standardSize: {
      width: 270,
      height: 300,
      depth: 100,
      unit: 'cm'
    },
    basePrice: 2490.00,
    images: ['/imgs/moveis/porta-paletes.jpg'],
    features: [
      'Perfis de aço estrutural',
      'Alta capacidade de carga',
      'Travas de segurança',
      'Sistema modular expansível',
      'Protetores de coluna inclusos',
      'Projeto dimensionado por engenheiro'
    ],
    materials: ['Aço estrutural', 'Perfis de alta resistência'],
    colors: ['Laranja/Azul', 'Vermelho/Azul', 'Verde/Amarelo'],
    customizable: true,
    seoTitle: 'Porta Paletes - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Sistema porta-paletes de alta capacidade. Projeto personalizado. Orçamento!'
  },

  // Carrinhos e Plataformas
  {
    id: 'carrinho-ferramentas',
    name: 'Carrinho para Ferramentas',
    slug: 'carrinho-ferramentas',
    category: 'Carrinhos e Plataformas',
    shortDescription: 'Carrinho móvel com gavetas para transporte de ferramentas.',
    fullDescription: 'Carrinho móvel para ferramentas fabricado em chapa de aço #18 com 3 gavetas em trilhos telescópicos. Possui rodízios industriais giratórios sendo 2 com freio. Tampo superior para apoio de ferramentas e peças. Estrutura reforçada suportando até 200kg. Ideal para oficinas mecânicas, manutenção industrial e áreas que necessitam mobilidade de ferramentas. Gavetas com travas de segurança impedindo abertura acidental durante movimentação. Pintura eletrostática de alta durabilidade. Pode ser personalizado com mais gavetas e painéis laterais.',
    standardSize: {
      width: 70,
      height: 90,
      depth: 45,
      unit: 'cm'
    },
    basePrice: 1190.00,
    images: ['/imgs/moveis/carrinho-ferramentas.jpg'],
    features: [
      'Chapa de aço #18',
      '3 gavetas com trilhos telescópicos',
      'Rodízios industriais com freio',
      'Suporta até 200kg',
      'Gavetas com trava de segurança',
      'Tampo superior reforçado'
    ],
    materials: ['Aço chapa #18', 'Rodízios industriais'],
    colors: ['Vermelho', 'Azul', 'Preto'],
    customizable: true,
    seoTitle: 'Carrinho para Ferramentas - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Carrinho móvel para ferramentas com gavetas. Ideal para oficinas. Orçamento!'
  },
  {
    id: 'plataforma-carga',
    name: 'Plataforma para Carga',
    slug: 'plataforma-carga',
    category: 'Carrinhos e Plataformas',
    shortDescription: 'Plataforma robusta com rodízios para movimentação de cargas pesadas.',
    fullDescription: 'Plataforma de carga fabricada em chapa de aço xadrez antiderrapante com estrutura em tubos de aço reforçados. Equipada com 4 rodízios industriais de alta capacidade, sendo 2 com freio. Ideal para movimentação de materiais pesados, caixas, equipamentos e cargas diversas em ambientes industriais. Estrutura calculada para suportar até 500kg. Pintura eletrostática para resistência à corrosão. Disponível em diversos tamanhos conforme necessidade. Pode ser personalizada com guias laterais e alças ergonômicas para facilitar movimentação.',
    standardSize: {
      width: 100,
      height: 20,
      depth: 60,
      unit: 'cm'
    },
    basePrice: 690.00,
    images: ['/imgs/moveis/plataforma-carga.jpg'],
    features: [
      'Chapa xadrez antiderrapante',
      'Estrutura em tubos de aço',
      'Suporta até 500kg',
      'Rodízios industriais reforçados',
      '2 rodízios com freio',
      'Resistente à corrosão'
    ],
    materials: ['Aço carbono', 'Chapa xadrez', 'Rodízios industriais'],
    colors: ['Cinza', 'Preto', 'Amarelo de segurança'],
    customizable: true,
    seoTitle: 'Plataforma para Carga - ANFER Móveis Industriais | São Paulo',
    seoDescription: 'Plataforma robusta para movimentação de cargas. Até 500kg. Orçamento!'
  }
]

