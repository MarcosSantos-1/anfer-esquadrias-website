# 📧 Configuração do Envio de E-mails - INSTRUÇÕES COMPLETAS

## ✅ STATUS DAS ATUALIZAÇÕES

### Página de Contato - ATUALIZADA ✅
- ✅ Instagram: https://www.instagram.com/anfer.esquadrias/
- ✅ Facebook: https://www.facebook.com/Anfer.Esquadrias/
- ✅ Endereço: Rua Arlindo Pascoal, 120 - São Miguel Pta - SP
- ✅ Mapa do Google integrado
- ✅ Inputs e textos com cores mais escuras
- ✅ Máscara de telefone implementada (formato: (11) 94009-3757)
- ✅ Envio de mensagem por email/WhatsApp configurado

### Página de Manutenção - JÁ ESTAVA FUNCIONANDO ✅
- ✅ Envio de email já implementado
- ✅ WhatsApp já integrado
- ✅ Máscara de telefone já aplicada

---

## 🚨 IMPORTANTE: Configure o Envio de E-mails

Para que os formulários funcionem corretamente, você precisa criar o arquivo `.env.local`:

### PASSO 1: Criar o arquivo `.env.local`

Na **raiz do projeto** (mesma pasta do package.json), crie um arquivo chamado: `.env.local`

### PASSO 2: Copie e cole este conteúdo no arquivo

```env
# E-mail que enviará as mensagens
EMAIL_USER=oficial.anferesquadrias@gmail.com

# Senha de aplicativo do Gmail (substitua "sua_senha_aqui")
EMAIL_PASS=sua_senha_de_16_caracteres_aqui

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Database
DATABASE_URL="file:./prisma/dev.db"
```

### PASSO 3: Gerar a Senha de Aplicativo do Gmail

⚠️ **NUNCA use a senha normal da conta Gmail!**

#### Como gerar:

1. **Acesse:** https://myaccount.google.com/security
   
2. **Ative a Verificação em 2 Etapas:**
   - Procure por "Como fazer login no Google"
   - Clique em "Verificação em duas etapas"
   - Siga as instruções para ativar (vai precisar do celular)

3. **Gere a Senha de Aplicativo:**
   - Volte para: https://myaccount.google.com/security
   - Procure por "Senhas de app" (só aparece depois de ativar a verificação em 2 etapas)
   - Clique em "Senhas de app"
   - Selecione "E-mail" como o app
   - Selecione "Outro" como dispositivo
   - Digite: **"ANFER Site"**
   - Clique em **"Gerar"**
   - **COPIE a senha de 16 caracteres** (pode ter espaços, mas você deve remover)
   
4. **Cole no arquivo `.env.local`:**
   
   Substitua `sua_senha_de_16_caracteres_aqui` pela senha que você copiou.
   
   Exemplo:
   ```env
   EMAIL_PASS=abcdefghijklmnop
   ```

### PASSO 4: Reiniciar o Servidor

Depois de criar/atualizar o `.env.local`:

1. Pare o servidor (pressione `Ctrl+C` no terminal)
2. Inicie novamente: `npm run dev`
3. Aguarde o servidor iniciar

### PASSO 5: Testar

1. Acesse: http://localhost:3000/contato
2. Preencha o formulário
3. Clique em "Enviar Mensagem"

**O que deve acontecer:**
- ✅ Mensagem de sucesso aparece
- ✅ WhatsApp abre automaticamente com a mensagem
- ✅ E-mail chega em: oficial.anferesquadrias@gmail.com

---

## 📱 Como Funciona Agora

### Formulário de Contato (/contato)
1. Cliente preenche o formulário
2. **E-mail é enviado** para: oficial.anferesquadrias@gmail.com
3. **WhatsApp abre automaticamente** com mensagem pré-formatada
4. **Número WhatsApp:** (11) 94009-3757
5. Mensagem é salva no banco de dados

### Formulário de Manutenção (/manutencao)
Funciona da mesma forma, mas com campos específicos de manutenção.

---

## ⚠️ Problemas Comuns

### "Erro ao enviar mensagem"

**Causa:** Arquivo `.env.local` não existe ou está incorreto

**Solução:**
- Verifique se o arquivo `.env.local` está na **raiz do projeto**
- Confirme que a senha está correta (16 caracteres, sem espaços)
- Reinicie o servidor

### "Invalid login" ou "Authentication failed"

**Causa:** Senha de aplicativo incorreta ou verificação em 2 etapas desativada

**Solução:**
- Certifique-se que a verificação em 2 etapas está **ATIVA**
- Gere uma **NOVA** senha de aplicativo
- **NÃO use** a senha normal da conta Gmail
- Copie a senha **EXATAMENTE** como foi gerada (16 caracteres)

### E-mail não chega

**Solução:**
- Verifique a **pasta de SPAM** do Gmail
- Confirme que o e-mail oficial.anferesquadrias@gmail.com existe e está ativo
- Verifique se o servidor está rodando sem erros no terminal

### WhatsApp não abre

**Causa:** Isso é normal se você estiver no computador sem WhatsApp instalado

**Solução:**
- No celular: vai abrir o app do WhatsApp
- No computador: vai abrir o WhatsApp Web ou pedir para instalar
- Isso não afeta o envio do email

---

## 🔒 Segurança

- ❌ **NUNCA** commite o arquivo `.env.local` no Git
- ❌ **NUNCA** compartilhe a senha de aplicativo
- ✅ O arquivo `.env.local` já está no `.gitignore`
- ✅ Use sempre senha de aplicativo, nunca a senha principal

---

## 📞 Dados de Contato Atualizados

### Contatos
- **Telefone/WhatsApp:** (11) 94009-3757
- **E-mail:** oficial.anferesquadrias@gmail.com

### Endereço
- **Rua Arlindo Pascoal, 120**
- **São Miguel Pta - SP**
- **[Ver no Google Maps](https://www.google.com/maps/place/R.+Arl%C3%ADndo+Pascoal,+22+-+Vila+Nova+Uniao,+S%C3%A3o+Paulo+-+SP,+08072-090/@-23.486496,-46.4592489,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce619fd7eb0a1b:0x45896f9e7c2ab587!8m2!3d-23.4865009!4d-46.456674!16s%2Fg%2F11c4gwtv57?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D)**

### Redes Sociais
- **Instagram:** https://www.instagram.com/anfer.esquadrias/
- **Facebook:** https://www.facebook.com/Anfer.Esquadrias/

### Horário de Atendimento
- **Segunda a Sexta:** 8h às 18h

---

## 🚀 Para Produção (Deploy)

Quando fizer deploy do site:

1. Acesse o painel do serviço (Vercel, Netlify, etc.)
2. Adicione as variáveis de ambiente:
   - `EMAIL_USER=oficial.anferesquadrias@gmail.com`
   - `EMAIL_PASS=sua_senha_de_16_caracteres`
   - `NEXT_PUBLIC_BASE_URL=https://seusite.com.br`
3. Faça um novo deploy

---

## ✅ Checklist Final

- [ ] Arquivo `.env.local` criado na raiz do projeto
- [ ] EMAIL_USER configurado
- [ ] EMAIL_PASS configurado com senha de aplicativo (16 caracteres)
- [ ] Verificação em 2 etapas ATIVA no Gmail
- [ ] Servidor reiniciado (Ctrl+C e npm run dev)
- [ ] Teste do formulário de contato realizado
- [ ] E-mail chegou em oficial.anferesquadrias@gmail.com
- [ ] WhatsApp abriu com a mensagem

---

**Se você seguiu todos os passos e ainda não funciona, verifique o terminal onde o servidor está rodando para ver mensagens de erro específicas.**

**Qualquer dúvida, consulte este guia novamente!** 🎯

