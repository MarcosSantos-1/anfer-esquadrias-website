# 🚀 GUIA DE DEPLOY - ANFER SITE

## ✅ ARQUITETURA

- **Frontend + Backend:** Vercel (Next.js com API Routes)
- **Banco de Dados:** Neon (PostgreSQL gratuito)
- **E-mail:** Resend
- **SMS:** Twilio

---

## PASSO 1: Criar Banco de Dados (Neon)

1. **Acesse:** https://neon.tech
2. **Login** com GitHub
3. **Create Project:**
   - Name: `anfer-site`
   - Region: US East (Ohio)
4. **Copie a DATABASE_URL** (exemplo):
   ```
   postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

---

## PASSO 2: Commit e Push

```bash
git add .
git commit -m "Deploy to production"
git push
```

---

## PASSO 3: Deploy na Vercel

1. **Acesse:** https://vercel.com
2. **Import** seu repositório GitHub
3. **Framework:** Next.js (auto-detectado)

### Variáveis de Ambiente:

Na aba **Environment Variables**, adicione:

- `DATABASE_URL` = (sua URL do Neon)
- `RESEND_API_KEY` = (sua chave do Resend - você tem no .env.local)
- `EMAIL_USER` = oficial.anferesquadrias@gmail.com
- `TWILIO_ACCOUNT_SID` = (do seu .env.local)
- `TWILIO_AUTH_TOKEN` = (do seu .env.local)
- `TWILIO_PHONE_NUMBER` = +5511940093757
- `TWILIO_MESSAGING_SERVICE_SID` = (do seu .env.local)
- `OWNER_PHONE_NUMBER` = +5511940093757
- `NEXT_PUBLIC_BASE_URL` = https://seu-projeto.vercel.app

**IMPORTANTE:** Marque para Production, Preview e Development!

4. **Deploy** (aguarde 3-5 min)

---

## PASSO 4: Criar Tabelas no Banco

### Opção 1: SQL no Neon (RECOMENDADO)

1. Dashboard do Neon → **SQL Editor**
2. Cole e execute:

```sql
CREATE TABLE "users" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "role" TEXT DEFAULT 'ADMIN',
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "contact_messages" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "subject" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "status" TEXT DEFAULT 'NEW',
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "testimonials" (
  "id" TEXT PRIMARY KEY,
  "clientName" TEXT NOT NULL,
  "company" TEXT,
  "clientImage" TEXT,
  "rating" INTEGER DEFAULT 5,
  "testimonial" TEXT NOT NULL,
  "isActive" BOOLEAN DEFAULT true,
  "order" INTEGER DEFAULT 0,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

(Veja o arquivo completo no código se precisar de mais tabelas)

### Opção 2: Via CLI

```bash
npm i -g vercel
vercel login
vercel link
vercel env pull
npx prisma db push
```

---

## PASSO 5: Testar

- Acesse seu site na Vercel
- Teste o formulário de contato
- Verifique /admin

---

## 💰 CUSTOS

- Vercel: GRÁTIS
- Neon: GRÁTIS  
- Resend: GRÁTIS (100 emails/dia)
- Twilio: ~R$ 5/mês após $15 grátis

---

## ⚠️ PROBLEMAS COMUNS

### Build Failed
- Veja logs na Vercel
- Verifique todas as variáveis

### Database Error
- Execute o SQL no Neon
- Verifique DATABASE_URL

### Email não funciona
- Limite: 100/dia grátis
- Dashboard: https://resend.com/emails

### SMS não funciona
- Verifique número no Twilio
- Crédito disponível?

---

**PRONTO! Site no ar! 🎉**

