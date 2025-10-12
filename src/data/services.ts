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
    description: 'Portões com abertura vertical para cima, perfeitos para garagens residenciais e comerciais. Combinam praticidade, segurança e economia de espaço.',
    fullDescription: 'Os portões basculantes da ANFER são fabricados com materiais de primeira qualidade, oferecendo a solução ideal para quem busca praticidade e segurança. Com sistema de abertura vertical que economiza espaço lateral, são perfeitos para garagens e entradas de veículos. Podem ser automatizados com sistemas de controle remoto e sensores de segurança de última geração. Disponíveis em diversos materiais como aço galvanizado, alumínio e madeira, com acabamentos personalizados que combinam com o estilo da sua fachada. Nossa equipe técnica especializada realiza instalação profissional garantindo funcionamento suave e durabilidade prolongada.',
    images: ['/imgs/portaoBasculante.png'],
    features: [
      'Sistema de automação completo com controle remoto',
      'Sensores de segurança anti-esmagamento',
      'Estrutura reforçada e balanceada',
      'Instalação profissional e garantida',
      'Diversos materiais e acabamentos',
      'Manutenção preventiva disponível'
    ],
    seoTitle: 'Portão Basculante - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portão basculante com instalação profissional. Automação, controle remoto e máxima segurança. Orçamento gratuito!'
  },
  {
    id: 'portao-deslizante',
    title: 'Portão Deslizante',
    slug: 'portao-deslizante',
    category: 'Portões e Acessos',
    description: 'Portões com movimento lateral suave e silencioso, ideais para grandes vãos e espaços com limitação frontal. Solução elegante e prática.',
    fullDescription: 'Os portões deslizantes fabricados pela ANFER são a escolha perfeita para grandes vãos e propriedades que não dispõem de espaço frontal para abertura. Projetados com sistema de trilhos e rodízios de alta qualidade, proporcionam movimento lateral extremamente suave e silencioso. Fabricados em aço galvanizado, ferro ou alumínio, oferecem máxima durabilidade mesmo em uso intenso. O sistema de automação utiliza motores potentes e confiáveis, com controle remoto de longo alcance e possibilidade de integração com smartphones. Ideais para residências, condomínios, indústrias e estabelecimentos comerciais que necessitam de acesso rápido e seguro. Nossa equipe realiza projeto personalizado considerando as características do terreno e as necessidades específicas de cada cliente.',
    images: ['/imgs/portaoDeslizante.png'],
    features: [
      'Sistema de trilhos reforçados',
      'Automação com motor potente e silencioso',
      'Rodízios de alta durabilidade',
      'Baixíssimo ruído operacional',
      'Perfeito para grandes vãos',
      'Design moderno e personalizável'
    ],
    seoTitle: 'Portão Deslizante - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Portão deslizante de alta qualidade. Instalação profissional, automação e garantia. Solicite um orçamento!'
  },
  {
    id: 'porta-aco',
    title: 'Porta de Aço',
    slug: 'porta-de-aco',
    category: 'Portões e Acessos',
    description: 'Portas de aço de alta segurança com design moderno. Proteção máxima para sua residência ou estabelecimento comercial, com isolamento térmico e acústico superior.',
    fullDescription: 'As portas de aço ANFER são sinônimo de segurança e durabilidade. Fabricadas com chapa de aço de alta espessura e estrutura reforçada, oferecem proteção máxima contra tentativas de invasão. Equipadas com fechaduras multiponto de alta segurança, dobradiças anti-arrombamento e reforços internos estrategicamente posicionados. O isolamento térmico e acústico é proporcionado por preenchimento interno com poliuretano expandido, garantindo conforto térmico no ambiente e redução significativa de ruídos externos. Disponíveis em diversos modelos, desde linhas clássicas até designs modernos e minimalistas, com acabamento em pintura eletrostática em variadas cores e texturas, incluindo opções que imitam madeira. Perfeitas para residências, apartamentos, escritórios, lojas e estabelecimentos que exigem alto nível de segurança. Instalação profissional com ajustes precisos para vedação perfeita.',
    images: ['/imgs/portadeAco.png'],
    features: [
      'Chapa de aço reforçada de alta espessura',
      'Fechadura multiponto de segurança',
      'Isolamento térmico e acústico superior',
      'Design moderno e elegante',
      'Pintura eletrostática durável',
      'Dobradiças anti-arrombamento'
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
    description: 'Guarda-corpos elegantes e seguros em aço inox, vidro e ferro para escadas, varandas e mezaninos. Segurança com design sofisticado.',
    fullDescription: 'Os guarda-corpos ANFER combinam segurança obrigatória com design sofisticado, sendo perfeitos para residências, empresas, condomínios e áreas industriais. Fabricamos em diversos materiais incluindo aço inox 304 ou 316 com acabamento escovado ou polido, ferro com pintura eletrostática, e sistemas mistos com vidro temperado. Todos os projetos seguem rigorosamente as normas técnicas NBR 14718 garantindo altura adequada, resistência estrutural e espaçamento seguro entre elementos. Oferecemos modelos com tubos, cabos de aço, vidro temperado e designs personalizados que se adaptam perfeitamente ao estilo arquitetônico do ambiente. A instalação é realizada por equipe especializada com fixações robustas em concreto, alvenaria ou estruturas metálicas. Ideais para escadas internas e externas, varandas, sacadas, mezaninos, rampas de acesso e áreas industriais. Além da segurança, agregam valor estético e valorização ao imóvel.',
    images: ['/imgs/guradaCorpoResidencial.png', '/imgs/guardaCorpoIndustrial.png'],
    features: [
      'Aço inox 304/316 ou ferro de alta qualidade',
      'Conformidade com NBR 14718',
      'Design personalizado para cada projeto',
      'Modelos residenciais e industriais',
      'Instalação profissional certificada',
      'Garantia total de fabricação'
    ],
    seoTitle: 'Guarda-Corpo - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Guarda-corpo em aço inox e outros materiais. Segurança e design para sua casa ou empresa. Orçamento grátis!'
  },
  {
    id: 'corrimao',
    title: 'Corrimão',
    slug: 'corrimao',
    category: 'Guarda-Corpos e Estruturas',
    description: 'Corrimãos em aço inox, ferro e alumínio para escadas e rampas. Projetos acessíveis conforme NBR 9050, unindo funcionalidade e elegância.',
    fullDescription: 'Os corrimãos ANFER são projetados e fabricados em total conformidade com a NBR 9050, norma brasileira de acessibilidade, garantindo segurança e conforto para todos os usuários. Fabricamos em aço inox com acabamento escovado ou polido, ferro com pintura eletrostática em diversas cores, e alumínio anodizado. Os projetos consideram altura adequada, formato ergonômico, extensões nas extremidades e fixações resistentes conforme exigências técnicas e de acessibilidade. Ideais para escadas residenciais, comerciais e industriais, rampas de acesso, áreas públicas e ambientes que necessitam atender legislação de acessibilidade. Oferecemos corrimãos de parede fixados com suportes robustos, corrimãos para guarda-corpos e modelos duplos para atender diferentes alturas. A instalação é executada por profissionais especializados garantindo firmeza, alinhamento perfeito e acabamento impecável. Proporcionam apoio seguro e confiável para pessoas de todas as idades e mobilidades.',
    images: ['/imgs/corrimao.png'],
    features: [
      'Conformidade total com NBR 9050',
      'Materiais nobres: aço inox, ferro e alumínio',
      'Acabamento ergonômico e seguro',
      'Instalação profissional certificada',
      'Modelos para diversas aplicações',
      'Garantia de qualidade e durabilidade'
    ],
    seoTitle: 'Corrimão - ANFER Esquadrias Metálicas | São Paulo',
    seoDescription: 'Corrimão conforme NBR 9050. Materiais de qualidade e instalação profissional. Solicite orçamento!'
  },
  {
    id: 'mezanino',
    title: 'Mezanino',
    slug: 'mezanino',
    category: 'Guarda-Corpos e Estruturas',
    description: 'Estruturas metálicas robustas para mezaninos industriais e comerciais. Maximize seu espaço vertical com alta capacidade de carga e segurança.',
    fullDescription: 'Os mezaninos metálicos ANFER são a solução ideal para empresas que precisam otimizar o aproveitamento do espaço vertical sem realizar grandes obras de alvenaria. Projetamos e fabricamos estruturas personalizadas em perfis de aço estrutural, calculadas por engenheiros para suportar cargas específicas de cada aplicação, desde armazenamento de materiais leves até equipamentos pesados. Cada projeto inclui cálculo estrutural detalhado, considerando capacidade de carga, vãos livres, acessos, escadas, guarda-corpos e integração com a estrutura existente. As vigas e colunas são fabricadas em aço de alta resistência com tratamento anticorrosivo e pintura industrial. O piso pode ser executado em chapa de aço xadrez antiderrapante, painéis de madeira industrializada ou grelhas metálicas conforme necessidade. A montagem é modular permitindo expansões futuras e eventual desmontagem se necessário. Ideais para indústrias, depósitos, lojas, escritórios e estabelecimentos comerciais que necessitam ampliar área útil. Incluímos escadas de acesso, guarda-corpos conforme normas de segurança e todos os elementos necessários para utilização segura.',
    images: ['/imgs/mezanino.png'],
    features: [
      'Projeto estrutural personalizado por engenheiros',
      'Alta capacidade de carga calculada',
      'Estrutura modular expansível',
      'Instalação rápida sem grandes obras',
      'Inclui escadas e guarda-corpos',
      'Garantia estrutural total'
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
    description: 'Grades de proteção robustas para janelas, combinando segurança máxima com design elegante. Proteção para sua família sem comprometer a estética.',
    fullDescription: 'As grades para janelas da ANFER são projetadas para oferecer proteção máxima sem comprometer a estética da sua fachada. Fabricadas em ferro maciço ou aço tubular de alta resistência, passam por tratamento anticorrosivo completo antes de receber pintura eletrostática em diversas cores. Oferecemos modelos variados, desde designs clássicos com barras verticais até modelos decorativos com elementos artísticos que agregam valor estético à propriedade. Todos os modelos são soldados com técnicas profissionais garantindo juntas resistentes e acabamento impecável. A instalação é realizada com fixações robustas direto na alvenaria, utilizando buchas e parafusos de alta resistência. Perfeitas para residências, apartamentos, lojas, escritórios e qualquer ambiente que necessite de proteção confiável. Podem ser instaladas por dentro ou por fora das janelas, conforme preferência e necessidade do cliente. Proteção comprovada contra invasões mantendo ventilação e iluminação natural.',
    images: ['/imgs/gradesJanela.png', '/imgs/gradesProtecao.png'],
    features: [
      'Ferro maciço ou aço tubular reforçado',
      'Tratamento anticorrosivo completo',
      'Pintura eletrostática em diversas cores',
      'Modelos clássicos e decorativos',
      'Instalação com fixação robusta',
      'Garantia total de fabricação'
    ],
    seoTitle: 'Grades para Janelas - ANFER Esquadrias | São Paulo',
    seoDescription: 'Grades de proteção para janelas. Alta segurança e diversos modelos. Instalação profissional. Orçamento grátis!'
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
    title: 'Elevadores Industriais',
    slug: 'elevadores-industriais',
    category: 'Serviços Industriais',
    description: 'Instalação e manutenção de elevadores industriais, de carga e para materiais.',
    fullDescription: 'Serviços completos de instalação, manutenção e modernização de elevadores industriais, elevadores de carga e sistemas de transporte vertical para ambientes industriais e comerciais. Soluções robustas e eficientes para movimentação de materiais pesados.',
    images: ['/imgs/elevadorIndustrial.png'],
    features: [
      'Elevadores de carga',
      'Elevadores industriais',
      'Manutenção preventiva',
      'Modernização completa',
      'Suporte técnico especializado'
    ],
    seoTitle: 'Elevadores Industriais - Instalação e Manutenção | ANFER São Paulo',
    seoDescription: 'Instalação e manutenção de elevadores industriais e de carga. Atendimento especializado. Orçamento grátis!'
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
