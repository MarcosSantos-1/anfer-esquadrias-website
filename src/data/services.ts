export interface Service {
  id: string
  title: string
  slug: string
  category: string
  description: string
  fullDescription: string
  images: string[]
  features: string[]
  seoTitle: string
  seoDescription: string
}

export const services: Service[] = [
  // Portões e Acessos
  {
    id: 'portao-basculante',
    title: 'Portão Basculante',
    slug: 'portao-basculante',
    category: 'Portões e Acessos',
    description: 'Portões que se abrem para cima, ideais para garagens e entradas de veículos.',
    fullDescription: 'Portões basculantes são a solução perfeita para quem busca praticidade e segurança. Com abertura vertical, economizam espaço e podem ser automatizados com controle remoto.',
    images: ['/imgs/portaoBasculante.png'],
    features: [
      'Abertura automática',
      'Controle remoto',
      'Sensor de segurança',
      'Instalação rápida',
      'Diversos materiais'
    ],
    seoTitle: 'Portão Basculante - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portão basculante com instalação profissional. Automação, controle remoto e máxima segurança. Orçamento gratuito!'
  },
  {
    id: 'portao-deslizante',
    title: 'Portão Deslizante',
    slug: 'portao-deslizante',
    category: 'Portões e Acessos',
    description: 'Portões que deslizam lateralmente, perfeitos para entradas largas.',
    fullDescription: 'Os portões deslizantes são ideais para grandes vãos. Com movimento lateral suave e silencioso, garantem durabilidade e praticidade no dia a dia.',
    images: ['/imgs/portaoDeslizante.png'],
    features: [
      'Economia de espaço',
      'Abertura suave',
      'Baixo ruído',
      'Alta durabilidade',
      'Automação completa'
    ],
    seoTitle: 'Portão Deslizante - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portão deslizante de alta qualidade. Instalação profissional, automação e garantia. Solicite um orçamento!'
  },
  {
    id: 'porta-aco',
    title: 'Porta de Aço',
    slug: 'porta-de-aco',
    category: 'Portões e Acessos',
    description: 'Portas de aço robustas para máxima segurança residencial e comercial.',
    fullDescription: 'Portas de aço fabricadas com materiais de primeira qualidade, oferecendo máxima proteção contra invasões e isolamento térmico e acústico.',
    images: ['/imgs/portadeAco.png'],
    features: [
      'Alta resistência',
      'Isolamento térmico',
      'Design moderno',
      'Fácil manutenção',
      'Diversas cores'
    ],
    seoTitle: 'Porta de Aço - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Porta de aço de alta segurança. Isolamento térmico e acústico. Instalação profissional. Orçamento gratuito!'
  },
  {
    id: 'porta-enrolar',
    title: 'Porta de Enrolar',
    slug: 'porta-de-enrolar',
    category: 'Portões e Acessos',
    description: 'Portas que se enrolam, ideais para comércios e indústrias.',
    fullDescription: 'Portas de enrolar fabricadas em aço galvanizado ou alumínio, perfeitas para estabelecimentos comerciais. Economia de espaço e alta durabilidade.',
    images: ['/imgs/portadeEnrolar.png'],
    features: [
      'Economia de espaço',
      'Abertura rápida',
      'Alta segurança',
      'Diversos materiais',
      'Manutenção simples'
    ],
    seoTitle: 'Porta de Enrolar - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Porta de enrolar para comércio e indústria. Alta qualidade e durabilidade. Instalação profissional!'
  },
  {
    id: 'portas-seccionadas',
    title: 'Portas Seccionadas',
    slug: 'portas-seccionadas',
    category: 'Portões e Acessos',
    description: 'Portas seccionadas para garagens e áreas industriais.',
    fullDescription: 'Portas seccionadas de alta qualidade com isolamento térmico e acústico. Abertura vertical que economiza espaço e proporciona segurança.',
    images: ['/imgs/Portasseccionadas.jpeg'],
    features: [
      'Economia de espaço',
      'Isolamento acústico',
      'Abertura vertical',
      'Diversos materiais',
      'Alta durabilidade'
    ],
    seoTitle: 'Portas Seccionadas - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portas seccionadas com isolamento térmico. Ideal para garagens e indústrias. Orçamento gratuito!'
  },
  {
    id: 'concerto-placas',
    title: 'Concerto de Placas Eletrônicas',
    slug: 'concerto-placas-eletronicas',
    category: 'Portões e Acessos',
    description: 'Manutenção e reparo de placas eletrônicas de portões automáticos.',
    fullDescription: 'Serviço especializado em diagnóstico e reparo de placas eletrônicas para portões e equipamentos automatizados.',
    images: ['/imgs/concertoPlacas.jpeg'],
    features: [
      'Diagnóstico completo',
      'Reparo especializado',
      'Peças originais',
      'Garantia do serviço',
      'Atendimento ágil'
    ],
    seoTitle: 'Concerto de Placas Eletrônicas - ANFER | São Paulo',
    seoDescription: 'Reparo de placas eletrônicas de portões. Diagnóstico rápido e garantia. Atendimento em São Paulo!'
  },

  // Guarda-Corpos e Estruturas
  {
    id: 'guarda-corpo',
    title: 'Guarda-Corpo',
    slug: 'guarda-corpo',
    category: 'Guarda-Corpos e Estruturas',
    description: 'Guarda-corpos em aço inox e outros materiais para escadas e varandas.',
    fullDescription: 'Guarda-corpos fabricados com materiais de alta qualidade, garantindo segurança e elegância para sua residência ou empresa.',
    images: ['/imgs/guradaCorpoResidencial.png', '/imgs/guardaCorpoIndustrial.png'],
    features: [
      'Diversos materiais',
      'Design personalizado',
      'Alta resistência',
      'Instalação profissional',
      'Normas de segurança'
    ],
    seoTitle: 'Guarda-Corpo - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Guarda-corpo em aço inox e outros materiais. Segurança e design para sua casa ou empresa. Orçamento grátis!'
  },
  {
    id: 'corrimao',
    title: 'Corrimão',
    slug: 'corrimao',
    category: 'Guarda-Corpos e Estruturas',
    description: 'Corrimãos em diversos materiais para escadas e rampas.',
    fullDescription: 'Corrimãos fabricados seguindo as normas de acessibilidade (NBR 9050), com acabamento perfeito e instalação profissional.',
    images: ['/imgs/corrimao.png'],
    features: [
      'NBR 9050',
      'Diversos materiais',
      'Acabamento perfeito',
      'Instalação rápida',
      'Acessibilidade'
    ],
    seoTitle: 'Corrimão - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Corrimão conforme NBR 9050. Materiais de qualidade e instalação profissional. Solicite orçamento!'
  },
  {
    id: 'mezanino',
    title: 'Mezanino',
    slug: 'mezanino',
    category: 'Guarda-Corpos e Estruturas',
    description: 'Estruturas metálicas para mezaninos industriais e comerciais.',
    fullDescription: 'Fabricação e instalação de mezaninos metálicos sob medida, maximizando o aproveitamento do espaço vertical.',
    images: ['/imgs/mezanino.png'],
    features: [
      'Projeto personalizado',
      'Alta capacidade de carga',
      'Instalação rápida',
      'Estrutura modular',
      'Garantia total'
    ],
    seoTitle: 'Mezanino Metálico - ANFER Esquadrias | São Paulo',
    seoDescription: 'Mezanino metálico sob medida para indústrias e comércios. Projeto, fabricação e instalação. Orçamento grátis!'
  },

  // Grades de Proteção
  {
    id: 'grades-janela',
    title: 'Grades para Janelas',
    slug: 'grades-para-janelas',
    category: 'Grades de Proteção',
    description: 'Grades de proteção resistentes para janelas residenciais e comerciais.',
    fullDescription: 'Grades de proteção fabricadas em ferro ou aço, com tratamento anticorrosivo e diversos modelos para proteção de janelas.',
    images: ['/imgs/gradesJanela.png', '/imgs/gradesProtecao.png'],
    features: [
      'Alta segurança',
      'Diversos modelos',
      'Instalação rápida',
      'Pintura anticorrosiva',
      'Garantia total'
    ],
    seoTitle: 'Grades para Janelas - ANFER Esquadrias | São Paulo',
    seoDescription: 'Grades de proteção para janelas. Alta segurança e diversos modelos. Instalação profissional. Orçamento grátis!'
  },
  {
    id: 'grades-decorativas',
    title: 'Grades Decorativas',
    slug: 'grades-decorativas',
    category: 'Grades de Proteção',
    description: 'Grades com design moderno que aliam segurança e estética.',
    fullDescription: 'Grades decorativas personalizadas que combinam proteção com design elegante, valorizando sua fachada.',
    images: ['/imgs/gradesProtecao.png'],
    features: [
      'Design personalizado',
      'Diversos acabamentos',
      'Elegância e segurança',
      'Materiais de qualidade',
      'Durabilidade'
    ],
    seoTitle: 'Grades Decorativas - ANFER Esquadrias | São Paulo',
    seoDescription: 'Grades decorativas personalizadas. Segurança com design elegante. Orçamento gratuito em São Paulo!'
  },
  {
    id: 'grades-seguranca',
    title: 'Grades de Segurança',
    slug: 'grades-de-seguranca',
    category: 'Grades de Proteção',
    description: 'Grades reforçadas para máxima proteção de seu imóvel.',
    fullDescription: 'Grades de segurança com materiais reforçados e tratamento anticorrosivo, garantindo máxima proteção.',
    images: ['/imgs/gradesProtecao.png'],
    features: [
      'Máxima resistência',
      'Materiais reforçados',
      'Fechaduras especiais',
      'Certificação',
      'Instalação profissional'
    ],
    seoTitle: 'Grades de Segurança - ANFER Esquadrias | São Paulo',
    seoDescription: 'Grades de segurança reforçadas. Máxima proteção para seu imóvel. Instalação profissional. Orçamento!'
  },

  // Serviços Industriais
  {
    id: 'elevadores',
    title: 'Elevadores',
    slug: 'elevadores',
    category: 'Serviços Industriais',
    description: 'Instalação e manutenção de elevadores residenciais e comerciais.',
    fullDescription: 'Serviços completos de instalação, manutenção e modernização de elevadores residenciais, comerciais e industriais.',
    images: ['/imgs/elevadorIndustrial.png'],
    features: [
      'Elevadores residenciais',
      'Elevadores comerciais',
      'Manutenção preventiva',
      'Modernização completa',
      'Suporte técnico'
    ],
    seoTitle: 'Elevadores - Instalação e Manutenção | ANFER São Paulo',
    seoDescription: 'Instalação e manutenção de elevadores. Atendimento residencial, comercial e industrial. Orçamento grátis!'
  },
  {
    id: 'portas-abs',
    title: 'Portas ABS',
    slug: 'portas-abs',
    category: 'Serviços Industriais',
    description: 'Portas de ABS de alta qualidade para diversos ambientes industriais.',
    fullDescription: 'Portas fabricadas em ABS de alta resistência, ideais para ambientes que exigem durabilidade e baixa manutenção.',
    images: ['/imgs/portasABS.png'],
    features: [
      'Alta resistência',
      'Diversos tamanhos',
      'Fácil instalação',
      'Baixa manutenção',
      'Design moderno'
    ],
    seoTitle: 'Portas ABS - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portas ABS industriais de alta qualidade. Resistência e durabilidade. Orçamento gratuito!'
  },
  {
    id: 'portas-rapidas',
    title: 'Portas Rápidas e Industriais',
    slug: 'portas-rapidas-industriais',
    category: 'Serviços Industriais',
    description: 'Portas rápidas para controle de temperatura e agilidade no acesso.',
    fullDescription: 'Portas rápidas de alta performance para ambientes industriais que necessitam de controle térmico e fluxo constante.',
    images: ['/imgs/portasRapidasIndustriais.png'],
    features: [
      'Alta velocidade',
      'Isolamento térmico',
      'Controle automático',
      'Durabilidade',
      'Segurança'
    ],
    seoTitle: 'Portas Rápidas Industriais - ANFER | São Paulo',
    seoDescription: 'Portas rápidas industriais com controle térmico. Alta performance e durabilidade. Orçamento!'
  },

  // Serviços Gerais
  {
    id: 'solda-geral',
    title: 'Serviços de Solda em Geral',
    slug: 'servicos-de-solda',
    category: 'Serviços Gerais',
    description: 'Soldagem profissional em diversos materiais e aplicações.',
    fullDescription: 'Serviços especializados de soldagem MIG/MAG, TIG e elétrica em diversos materiais metálicos.',
    images: ['/imgs/soldaEmGeral.png'],
    features: [
      'Solda MIG/MAG',
      'Solda TIG',
      'Solda elétrica',
      'Diversos materiais',
      'Certificação'
    ],
    seoTitle: 'Serviços de Solda - ANFER Esquadrias | São Paulo',
    seoDescription: 'Soldagem profissional MIG, TIG e elétrica. Diversos materiais. Atendimento em São Paulo!'
  },
  {
    id: 'fechaduras',
    title: 'Instalação de Fechaduras',
    slug: 'instalacao-fechaduras',
    category: 'Serviços Gerais',
    description: 'Instalação e manutenção de fechaduras para portões e portas.',
    fullDescription: 'Instalação profissional de fechaduras elétricas, mecânicas e trancas para portões e portas.',
    images: ['/imgs/fechaduras.jpeg'],
    features: [
      'Fechaduras elétricas',
      'Fechaduras mecânicas',
      'Trancas',
      'Instalação rápida',
      'Garantia'
    ],
    seoTitle: 'Instalação de Fechaduras - ANFER | São Paulo',
    seoDescription: 'Instalação de fechaduras elétricas e mecânicas. Atendimento rápido em São Paulo. Orçamento grátis!'
  }
]

export const serviceCategories = [
  {
    id: 'portoes-acessos',
    title: 'Portões e Acessos',
    slug: 'portoes',
    description: 'Soluções completas em portões e sistemas de acesso'
  },
  {
    id: 'guarda-corpos',
    title: 'Guarda-Corpos e Estruturas',
    slug: 'guardas-corpo',
    description: 'Segurança e estruturas metálicas'
  },
  {
    id: 'grades',
    title: 'Grades de Proteção',
    slug: 'grades',
    description: 'Proteção e segurança para janelas'
  },
  {
    id: 'industriais',
    title: 'Serviços Industriais',
    slug: 'industriais',
    description: 'Elevadores, portas e instalações industriais'
  },
  {
    id: 'gerais',
    title: 'Serviços Gerais',
    slug: 'gerais',
    description: 'Solda, fechaduras e manutenção'
  }
]
