# 🚀 INÍCIO RÁPIDO - Configure em 5 minutos!

## ✅ O QUE JÁ ESTÁ PRONTO

Tudo está implementado! Só falta configurar as credenciais.

---

## ⚡ CONFIGURAÇÃO MÍNIMA (Só E-mail)

### 1. Crie o arquivo `.env.local` na raiz do projeto

```env
EMAIL_USER=oficial.anferesquadrias@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo_aqui
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL="file:./prisma/dev.db"
```

### 2. Gere a senha de aplicativo do Gmail

1. Acesse: https://myaccount.google.com/security
2. Ative "Verificação em duas etapas"
3. Clique em "Senhas de app"
4. Gere uma senha para "E-mail"
5. Copie os 16 caracteres e cole em `EMAIL_PASS`

### 3. Reinicie o servidor

```bash
# Pressione Ctrl+C no terminal
# Depois:
npm run dev
```

### 4. Teste!

Acesse: http://localhost:3000/contato

✅ **PRONTO! E-mail funcionando!**

---

## 🔥 CONFIGURAÇÃO COMPLETA (E-mail + SMS)

### Adicione ao `.env.local`:

```env
# E-mail
EMAIL_USER=oficial.anferesquadrias@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo

# SMS
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1234567890
OWNER_PHONE_NUMBER=+5511940093757

# Outras
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL="file:./prisma/dev.db"
```

### Configure o Twilio:

1. **Crie conta:** https://www.twilio.com/try-twilio
2. **Pegue as credenciais** no dashboard
3. **Verifique o número** +5511940093757 como "Caller ID"

📖 **Instruções detalhadas:** `CONFIGURACAO-COMPLETA-EMAIL-SMS.md`

---

## 📱 O QUE VAI ACONTECER

Quando alguém enviar o formulário:

✅ **E-mail chega** em oficial.anferesquadrias@gmail.com  
✅ **SMS chega** em (11) 94009-3757 (se configurou Twilio)  
✅ **WhatsApp abre** automaticamente  
✅ **Mensagem salva** no banco de dados  

---

## 🎯 PÁGINAS ATUALIZADAS

### `/contato` - Página de Contato
- ✅ Mapa do Google integrado
- ✅ Dados atualizados (Instagram, Facebook, endereço)
- ✅ Inputs mais escuros e legíveis
- ✅ Máscara de telefone
- ✅ Envio por e-mail + SMS

### `/manutencao` - Página de Manutenção
- ✅ Mesmas funcionalidades

---

## 💡 DICA

**Comece só com o e-mail!**

Configure apenas `EMAIL_USER` e `EMAIL_PASS`. O SMS é opcional.

O sistema vai funcionar perfeitamente só com e-mail!

---

## 📞 CONTATOS CONFIGURADOS

- **Telefone:** (11) 94009-3757
- **E-mail:** oficial.anferesquadrias@gmail.com
- **Endereço:** Rua Arlindo Pascoal, 120 - São Miguel Pta - SP
- **Instagram:** @anfer.esquadrias
- **Facebook:** Anfer.Esquadrias

---

## ⚠️ PROBLEMAS?

1. **E-mail não envia?**
   - Verificação em 2 etapas ATIVA?
   - Senha de aplicativo correta (16 caracteres)?
   - Reiniciou o servidor?

2. **SMS não envia?**
   - Twilio configurado?
   - Número +5511940093757 verificado?
   - Tem crédito na conta? ($15 grátis ao cadastrar)

3. **Onde ver erros?**
   - No **terminal** onde o servidor está rodando
   - Vai mostrar: ✅ sucesso ou ❌ erro

---

## 🎉 É SÓ ISSO!

**Leia os guias completos para mais detalhes:**

- 📖 `CONFIGURACAO-COMPLETA-EMAIL-SMS.md` - Guia completo
- 📖 `RESUMO-ATUALIZACOES.md` - Resumo de tudo que foi feito

**Qualquer dúvida, consulte os guias!** 🚀

