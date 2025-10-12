# 📧 Configuração de E-mail

## Como Configurar o Envio de E-mails

Para que o formulário de contato e manutenção enviem e-mails automaticamente, você precisa configurar as variáveis de ambiente.

### 1. Criar arquivo `.env.local`

Na raiz do projeto, crie um arquivo chamado `.env.local` e adicione:

```bash
# E-mail que enviará as mensagens
EMAIL_USER=oficial.anferesquadrias@gmail.com

# Senha de aplicativo do Gmail (NÃO use a senha da conta!)
EMAIL_PASS=sua_senha_de_aplicativo_aqui

# Base URL (opcional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Gerar Senha de Aplicativo do Gmail

**IMPORTANTE:** Não use a senha normal do Gmail! Use uma "Senha de Aplicativo":

#### Passo a Passo:

1. **Acesse:** https://myaccount.google.com/security

2. **Ative a Verificação em Duas Etapas:**
   - Role até "Como fazer login no Google"
   - Clique em "Verificação em duas etapas"
   - Siga as instruções para ativar

3. **Gere uma Senha de Aplicativo:**
   - Volte para: https://myaccount.google.com/security
   - Clique em "Senhas de app" (aparece após ativar a verificação em 2 etapas)
   - Selecione "E-mail" como o app
   - Selecione "Outro" como dispositivo e digite "ANFER Site"
   - Clique em "Gerar"
   - **Copie a senha de 16 caracteres** (sem espaços)

4. **Cole a senha no arquivo `.env.local`:**
   ```bash
   EMAIL_PASS=abcdefghijklmnop
   ```

### 3. Reiniciar o Servidor

Após configurar o `.env.local`, reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl+C)
# Inicie novamente
npm run dev
```

### 4. Testar o Envio

1. Acesse: http://localhost:3000/contato
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique:
   - ✅ E-mail chegou em oficial.anferesquadrias@gmail.com
   - ✅ WhatsApp abriu automaticamente
   - ✅ Mensagem foi salva no banco de dados (verificar em /admin > Mensagens)

---

## 📱 Como Funciona

Quando um cliente envia o formulário:

1. **E-mail é enviado para:** oficial.anferesquadrias@gmail.com
2. **WhatsApp abre automaticamente** com mensagem pré-formatada para: (11) 94009-3757
3. **Mensagem é salva** no banco de dados para consulta posterior no admin

---

## ⚠️ Problemas Comuns

### "Erro ao enviar mensagem"

**Solução:**
- Verifique se o arquivo `.env.local` está na raiz do projeto
- Confirme que a senha de aplicativo está correta (16 caracteres, sem espaços)
- Reinicie o servidor

### "Autenticação falhou"

**Solução:**
- Certifique-se de que a verificação em 2 etapas está ATIVA
- Gere uma NOVA senha de aplicativo
- Não use a senha normal da conta Gmail

### E-mail não chega

**Solução:**
- Verifique a pasta de SPAM
- Confirme que o e-mail oficial.anferesquadrias@gmail.com existe e está ativo
- Teste enviando um e-mail manual primeiro

---

## 🚀 Produção (Deploy)

Quando fizer deploy no Vercel, Netlify ou outro serviço:

1. Adicione as variáveis de ambiente no painel do serviço:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `NEXT_PUBLIC_BASE_URL` (URL do site em produção)

2. Faça um novo deploy para aplicar as variáveis

---

## 🔒 Segurança

- ❌ **NUNCA** commite o arquivo `.env.local` no Git
- ❌ **NUNCA** compartilhe a senha de aplicativo
- ✅ O arquivo `.env.local` já está no `.gitignore`
- ✅ Use sempre senha de aplicativo, nunca a senha principal

---

## 📞 Contatos Configurados

- **Telefone/WhatsApp:** (11) 94009-3757
- **E-mail:** oficial.anferesquadrias@gmail.com
- **Endereço:** Rua Arlindo Pascoal, 120 - São Miguel Pta - SP
- **Instagram:** https://www.instagram.com/anfer.esquadrias/
- **Facebook:** https://www.facebook.com/Anfer.Esquadrias/

---

**Qualquer dúvida, consulte este guia novamente!** 🎯

