# 📧📱 Configuração Completa: E-mail + SMS

## 🎯 TUDO PRONTO! Agora só falta configurar

Todas as funcionalidades já estão implementadas no código. Agora você só precisa configurar as credenciais para ativar:

✅ **E-mail** - Envio via Gmail (oficial.anferesquadrias@gmail.com)  
✅ **SMS** - Envio via Twilio para (11) 94009-3757  
✅ **WhatsApp** - Abre automaticamente após envio  
✅ **Banco de Dados** - Salva todas as mensagens  

---

## 🚀 CONFIGURAÇÃO RÁPIDA (3 PASSOS)

### PASSO 1: Criar arquivo `.env.local`

Na **raiz do projeto** (mesma pasta do `package.json`), crie um arquivo chamado: **`.env.local`**

### PASSO 2: Copiar e colar este conteúdo

```env
# ============================================
# CONFIGURAÇÃO DE E-MAIL (Gmail)
# ============================================
EMAIL_USER=oficial.anferesquadrias@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo_aqui

# ============================================
# CONFIGURAÇÃO DE SMS (Twilio)
# ============================================
TWILIO_ACCOUNT_SID=seu_account_sid_aqui
TWILIO_AUTH_TOKEN=seu_auth_token_aqui
TWILIO_PHONE_NUMBER=+1234567890
OWNER_PHONE_NUMBER=+5511940093757

# ============================================
# OUTRAS CONFIGURAÇÕES
# ============================================
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL="file:./prisma/dev.db"
```

### PASSO 3: Configurar as credenciais

Continue lendo abaixo para obter as credenciais...

---

## 📧 PARTE 1: Configurar E-mail (Gmail)

### O que você precisa:
- Conta Gmail: **oficial.anferesquadrias@gmail.com**
- Uma senha de aplicativo (NÃO a senha normal!)

### Como configurar:

#### 1. Ativar Verificação em 2 Etapas

1. Acesse: https://myaccount.google.com/security
2. Procure por **"Verificação em duas etapas"**
3. Clique em **"Ativar"**
4. Siga as instruções (vai precisar do celular)

#### 2. Gerar Senha de Aplicativo

1. Volte para: https://myaccount.google.com/security
2. Procure por **"Senhas de app"** (só aparece depois da verificação em 2 etapas)
3. Clique em **"Senhas de app"**
4. Selecione:
   - **App:** E-mail
   - **Dispositivo:** Outro (digite "ANFER Site")
5. Clique em **"Gerar"**
6. **COPIE a senha de 16 caracteres** que aparece
   - Exemplo: `abcd efgh ijkl mnop`
   - Remova os espaços: `abcdefghijklmnop`

#### 3. Colar no `.env.local`

```env
EMAIL_USER=oficial.anferesquadrias@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

✅ **E-mail configurado!**

---

## 📱 PARTE 2: Configurar SMS (Twilio)

### O que é o Twilio?

O Twilio é um serviço profissional de envio de SMS. Quando alguém preencher o formulário, seu pai vai receber um SMS no celular (11) 94009-3757.

### Passo a passo:

#### 1. Criar Conta no Twilio (GRÁTIS para testar)

1. Acesse: https://www.twilio.com/try-twilio
2. Preencha o cadastro:
   - Nome
   - E-mail
   - Senha
3. Verifique seu e-mail
4. Verifique seu telefone brasileiro

#### 2. Obter Créditos Grátis

- Ao criar a conta, você ganha **$15 de crédito GRÁTIS**
- Cada SMS custa cerca de $0.01 (1 centavo de dólar)
- Com $15, você pode enviar **cerca de 1.500 SMS** para testar!

#### 3. Obter as Credenciais

Após fazer login no Twilio:

1. **Account SID** - Está na dashboard inicial
   - Exemplo: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   
2. **Auth Token** - Clique em "Show" ao lado do Account SID
   - Exemplo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   
3. **Phone Number** - Vá em "Get a Trial Phone Number"
   - Clique em "Get your first Twilio phone number"
   - Escolha um número (pode ser dos EUA mesmo)
   - Exemplo: `+15017122661`

#### 4. Configurar Número Brasileiro

⚠️ **IMPORTANTE:** No modo de teste, você só pode enviar SMS para números verificados!

1. No painel do Twilio, vá em: **Phone Numbers** > **Verified Caller IDs**
2. Clique em **"Add a new Caller ID"**
3. Adicione: **+5511940093757** (número do seu pai)
4. Você vai receber um código de verificação
5. Digite o código para verificar

#### 5. Colar no `.env.local`

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+15017122661
OWNER_PHONE_NUMBER=+5511940093757
```

✅ **SMS configurado!**

---

## 🔄 PARTE 3: Reiniciar o Servidor

Depois de configurar tudo:

1. **Pare o servidor** (pressione `Ctrl+C` no terminal)
2. **Inicie novamente:** `npm run dev`
3. Aguarde o servidor iniciar

---

## 🧪 PARTE 4: Testar

### Como testar:

1. Acesse: http://localhost:3000/contato
2. Preencha o formulário
3. Clique em **"Enviar Mensagem"**

### O que deve acontecer:

✅ **Mensagem de sucesso** aparece na tela  
✅ **E-mail chega** em: oficial.anferesquadrias@gmail.com  
✅ **SMS chega** no celular: (11) 94009-3757  
✅ **WhatsApp abre** automaticamente  
✅ **Mensagem é salva** no banco de dados  

### Se algo não funcionar:

Olhe no **terminal onde o servidor está rodando**. Você verá mensagens como:

```
✅ E-mail enviado com sucesso!
✅ SMS enviado com sucesso!
✅ Mensagem salva no banco de dados!
```

Ou, se houver erro:

```
⚠️ E-mail não configurado
❌ Erro ao enviar SMS: [detalhes do erro]
```

---

## 💰 CUSTOS

### E-mail (Gmail)
- ✅ **100% GRATUITO**
- Sem limite de mensagens

### SMS (Twilio)
- ✅ **$15 GRÁTIS** para começar (cerca de 1.500 SMS)
- Depois: **$0.01 por SMS** (1 centavo de dólar)
- **$0.30 por mês** pelo número de telefone
- Para 100 SMS/mês: **$1.30/mês** (~R$ 6,50/mês)

### Alternativa GRATUITA para SMS:

Se não quiser gastar com SMS, você pode:
1. Deixar apenas o e-mail configurado
2. O sistema vai funcionar normalmente, só não vai enviar SMS
3. Vai aparecer no log: "⚠️ SMS não configurado"

---

## 📱 Como funciona o SMS?

Quando um cliente envia o formulário, seu pai recebe um SMS assim:

```
🔧 ANFER - Nova Solicitação de Manutenção

Cliente: João Silva
Tel: (11) 98765-4321
Serviço: Portões e Portas
⚠️ URGENTE

Mensagem: O portão não está abrindo...

Verifique seu e-mail para detalhes completos.
```

Ou:

```
📧 ANFER - Nova Mensagem de Contato

Cliente: Maria Santos
Tel: (11) 91234-5678
Assunto: Solicitar Orçamento

Mensagem: Gostaria de um orçamento para...

Verifique seu e-mail para detalhes completos.
```

---

## ⚠️ PROBLEMAS COMUNS

### "Erro ao enviar e-mail"

**Causa:** Senha de aplicativo incorreta ou verificação em 2 etapas não ativada

**Solução:**
- Confirme que a verificação em 2 etapas está ATIVA
- Gere uma NOVA senha de aplicativo
- Copie EXATAMENTE os 16 caracteres (sem espaços)
- Reinicie o servidor

### "Erro ao enviar SMS"

**Causas possíveis:**

1. **Credenciais incorretas**
   - Verifique se o ACCOUNT_SID e AUTH_TOKEN estão corretos
   - Copie exatamente como aparecem no painel do Twilio

2. **Número não verificado** (modo trial)
   - No modo gratuito, você SÓ pode enviar para números verificados
   - Adicione +5511940093757 como "Verified Caller ID"

3. **Número de origem incorreto**
   - Verifique se o TWILIO_PHONE_NUMBER está correto
   - Deve incluir o código do país: +1...

### E-mail não chega

**Solução:**
- Verifique a pasta de **SPAM**
- Confirme que o e-mail oficial.anferesquadrias@gmail.com está ativo
- Verifique o terminal do servidor para ver se há erros

### SMS não chega

**Solução (modo trial):**
- O número +5511940093757 DEVE estar em "Verified Caller IDs"
- Verifique se você tem crédito disponível
- Veja o log do Twilio: https://console.twilio.com/monitor/logs/sms

---

## 🎛️ CONFIGURAÇÃO OPCIONAL

### Desativar SMS temporariamente

Se você quiser testar só o e-mail primeiro:

1. Não configure as variáveis do Twilio no `.env.local`
2. O sistema vai funcionar normalmente
3. Só não vai enviar SMS (vai aparecer no log: "⚠️ SMS não configurado")

### Configurar para produção

Quando fizer deploy do site (Vercel, por exemplo):

1. Acesse o painel do serviço
2. Adicione as variáveis de ambiente:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_PHONE_NUMBER`
   - `OWNER_PHONE_NUMBER`
   - `NEXT_PUBLIC_BASE_URL` (URL do site em produção)
3. Faça um novo deploy

---

## 🔒 SEGURANÇA

❌ **NUNCA** commite o arquivo `.env.local` no Git  
❌ **NUNCA** compartilhe suas senhas/tokens  
✅ O arquivo `.env.local` já está no `.gitignore`  
✅ Use sempre credenciais de aplicativo, não senhas principais  

---

## 📞 DADOS DE CONTATO DO SITE

- **Telefone/WhatsApp:** (11) 94009-3757
- **E-mail:** oficial.anferesquadrias@gmail.com
- **Endereço:** Rua Arlindo Pascoal, 120 - São Miguel Pta - SP
- **Instagram:** https://www.instagram.com/anfer.esquadrias/
- **Facebook:** https://www.facebook.com/Anfer.Esquadrias/

---

## ✅ CHECKLIST FINAL

### E-mail:
- [ ] Conta Gmail: oficial.anferesquadrias@gmail.com
- [ ] Verificação em 2 etapas ATIVA
- [ ] Senha de aplicativo gerada (16 caracteres)
- [ ] EMAIL_USER configurado no .env.local
- [ ] EMAIL_PASS configurado no .env.local

### SMS (opcional mas recomendado):
- [ ] Conta Twilio criada (https://www.twilio.com/try-twilio)
- [ ] Créditos grátis ($15) disponíveis
- [ ] Número Twilio obtido
- [ ] Número +5511940093757 verificado como "Caller ID"
- [ ] TWILIO_ACCOUNT_SID configurado no .env.local
- [ ] TWILIO_AUTH_TOKEN configurado no .env.local
- [ ] TWILIO_PHONE_NUMBER configurado no .env.local
- [ ] OWNER_PHONE_NUMBER configurado no .env.local

### Servidor:
- [ ] Arquivo .env.local criado na raiz do projeto
- [ ] Servidor reiniciado (Ctrl+C e npm run dev)
- [ ] Teste do formulário realizado
- [ ] E-mail recebido ✅
- [ ] SMS recebido ✅
- [ ] WhatsApp abriu automaticamente ✅

---

## 🆘 PRECISA DE AJUDA?

1. **Verifique o terminal** onde o servidor está rodando
2. **Leia as mensagens de erro** com atenção
3. **Consulte este guia** novamente
4. **Teste um canal por vez** (primeiro e-mail, depois SMS)

---

## 🎉 PRONTO!

Depois de configurar tudo:

- Cada mensagem do formulário vai gerar:
  - ✅ **1 E-mail** para oficial.anferesquadrias@gmail.com
  - ✅ **1 SMS** para (11) 94009-3757
  - ✅ **1 WhatsApp** abre automaticamente
  - ✅ **1 Registro** no banco de dados

**Seu sistema de mensagens está 100% profissional!** 🚀

---

**Qualquer dúvida, consulte este guia novamente!** 🎯

