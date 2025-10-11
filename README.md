# ANFER Esquadrias Metálicas - Site Institucional

Site institucional moderno e responsivo para a ANFER Esquadrias Metálicas, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

### Site Público
- **Página Inicial**: Hero section, serviços em destaque, depoimentos e estatísticas
- **Serviços**: Página completa com todas as categorias de serviços oferecidos
- **Móveis Industriais**: Página dedicada aos móveis industriais personalizados
- **Sobre Nós**: História da empresa, valores e equipe
- **Contato**: Formulário de contato e informações de contato
- **Manutenção**: Sistema de agendamento de manutenção

### Painel Administrativo
- **Dashboard**: Visão geral das estatísticas e funcionalidades
- **Gerenciamento de Serviços**: Adicionar, editar e organizar serviços
- **Galeria de Projetos**: Upload e gerenciamento de fotos de projetos
- **Mensagens**: Visualizar e responder mensagens de contato
- **Solicitações de Manutenção**: Gerenciar agendamentos
- **Usuários**: Gerenciar usuários do painel administrativo

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**: Framework React para desenvolvimento web
- **TypeScript**: Tipagem estática para JavaScript
- **Tailwind CSS**: Framework CSS utilitário
- **Prisma**: ORM para banco de dados
- **SQLite**: Banco de dados local
- **Lucide React**: Ícones modernos
- **Radix UI**: Componentes acessíveis

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🚀 Como Executar o Projeto

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Banco de Dados
```bash
npx prisma generate
npx prisma db push
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```

O site estará disponível em: http://localhost:3000

## 🔐 Acesso ao Painel Administrativo

Para acessar o painel administrativo, vá para: http://localhost:3000/admin

**Credenciais padrão:**
- E-mail: admin@anfer.com
- Senha: admin123

⚠️ **IMPORTANTE**: Altere essas credenciais em produção!

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas do Next.js
│   ├── admin/             # Painel administrativo
│   ├── contato/           # Página de contato
│   ├── manutencao/        # Agendamento de manutenção
│   ├── moveis-industriais/ # Móveis industriais
│   ├── servicos/          # Página de serviços
│   ├── sobre/             # Sobre a empresa
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   └── Footer.tsx         # Rodapé
└── lib/                   # Utilitários e configurações
```

## 🎨 Personalização

### Alterando Cores
As cores principais do site estão definidas no Tailwind CSS. Para alterar:
1. Edite o arquivo `tailwind.config.js`
2. Modifique as cores da paleta azul para suas cores preferidas

### Adicionando Conteúdo
1. **Serviços**: Use o painel administrativo para gerenciar serviços
2. **Projetos**: Adicione fotos e descrições de projetos realizados
3. **Informações da Empresa**: Atualize no painel administrativo

### Imagens
- Coloque as imagens na pasta `public/`
- Use formatos otimizados (WebP, JPEG)
- Mantenha tamanhos adequados para web

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Smartphone

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linter

# Banco de Dados
npx prisma studio    # Interface visual do banco
npx prisma generate  # Gera cliente Prisma
npx prisma db push   # Sincroniza schema com banco
```

## 🚀 Deploy

Para fazer deploy em produção:

1. **Vercel** (Recomendado):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**:
   - Conecte o repositório GitHub
   - Configure build command: `npm run build`
   - Configure publish directory: `.next`

3. **Outros provedores**:
   - Execute `npm run build`
   - Faça upload da pasta `.next` e `public`

## 📞 Suporte

Para dúvidas sobre o site ou necessidade de modificações, entre em contato com o desenvolvedor.

## 📄 Licença

Este projeto foi desenvolvido especificamente para a ANFER Esquadrias Metálicas.

---

**ANFER Esquadrias Metálicas** - Especialistas em esquadrias metálicas, portões, grades, guarda-corpos, elevadores e móveis industriais personalizados.