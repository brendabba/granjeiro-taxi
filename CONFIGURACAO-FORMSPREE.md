# 📋 Configuração do Formspree - Guia Passo a Passo

## 🎯 O que é o Formspree?

O Formspree é um serviço que permite receber formulários HTML diretamente em seu email, sem precisar de backend. É perfeito para sites estáticos.

## 🚀 Configuração Rápida

### 1. Criar Conta no Formspree

1. Acesse [https://formspree.io/](https://formspree.io/)
2. Clique em "Get Started"
3. Crie uma conta gratuita (permite 50 submissões/mês)
4. Confirme seu email

### 2. Criar Novo Formulário

1. No dashboard, clique em "New Form"
2. Escolha um nome (ex: "Contato Táxi Granjeiro") 
3. Copie o **endpoint** gerado (ex: `xdkoorpk`)

### 3. Configurar no Projeto

#### Opção A: Usar arquivo .env.local (Recomendado)
```bash
# Copiar arquivo exemplo
cp env.example .env.local

# Editar com suas informações
NEXT_PUBLIC_FORMSPREE_ENDPOINT=seu_endpoint_aqui
```

#### Opção B: Editar diretamente o config
Edite `src/lib/config.ts`:
```typescript
formspree: {
    endpoint: 'seu_endpoint_aqui', // Substituir xdkoorpk
    url: function() {
        return `https://formspree.io/f/${this.endpoint}`
    }
},
```

### 4. Configurar Domínio no Formspree

1. No dashboard do Formspree, clique no seu formulário
2. Vá em "Settings" → "Allowed Domains"
3. Adicione seus domínios:
   - `localhost:3000` (para testes)
   - `seu-dominio.com` (para produção)

### 5. Testar Formulário

1. Execute `npm run dev`
2. Acesse `http://localhost:3000/contato`
3. Preencha e envie o formulário
4. Verifique se chegou no painel do Formspree

---

## ⚙️ Configurações Avançadas

### Personalizar Email de Notificação

No dashboard do Formspree:
1. Clique no formulário → "Settings"
2. "Notification Email" → Configure o email que receberá as submissões

### Configurar Auto-Resposta

1. "Settings" → "Autoresponse"
2. Ative e personalize a mensagem automática
3. Use variáveis como `{{name}}` para personalizar

### Spam Protection

1. "Settings" → "Spam Protection"
2. Ative reCAPTCHA (opcional)
3. Configure filtros de spam

### Webhook (Para desenvolvedores)

1. "Settings" → "Webhooks"
2. Configure URL para receber notificações via API
3. Útil para integrar com outros sistemas

---

## 🔧 Customizações no Código

### Campos Personalizados

Edite `src/app/contato/page.tsx` para adicionar campos:

```typescript
// No schema Zod
newField: z.string().min(1, 'Campo obrigatório'),

// No JSX
<Input
    id="newField"
    {...register('newField')}
    placeholder="Novo campo"
/>

// No submit
body: JSON.stringify({
    // ... outros campos
    newField: data.newField,
}),
```

### Personalizar Subject do Email

O subject é definido no submit:
```javascript
_subject: `Nova solicitação: ${data.origin} → ${data.destination}`,
```

### Configurar Reply-To

Para responder diretamente ao cliente:
```javascript
_replyto: data.email,
```

---

## 💰 Planos do Formspree

| Plano | Submissões/mês | Preço | Recursos |
|-------|----------------|-------|----------|
| **Free** | 50 | Grátis | Básico |
| **Bronze** | 1.000 | $10/mês | Sem marca Formspree |
| **Silver** | 5.000 | $20/mês | Uploads de arquivo |
| **Gold** | 10.000 | $40/mês | Integrações avançadas |

---

## 🛠️ Troubleshooting

### ❌ Formulário não envia

**Problema:** Erro 403 ou 404
**Solução:**
1. Verifique o endpoint no `.env.local`
2. Confirme o domínio no painel Formspree
3. Verifique o console do navegador

### ❌ Email não chega

**Problema:** Submissão ok, mas sem email
**Solução:**
1. Verifique spam/lixeira
2. Confirme email no painel Formspree
3. Verifique configurações de notificação

### ❌ Erro de CORS

**Problema:** Blocked by CORS policy
**Solução:**
1. Adicione domínio no painel Formspree
2. Verifique se está usando HTTPS em produção

### ❌ Limite de submissões

**Problema:** Atingiu limite mensal
**Solução:**
1. Upgrade para plano pago
2. Aguarde reset mensal
3. Configure múltiplos formulários

---

## 📊 Alternativas ao Formspree

Se precisar de mais recursos:

1. **Netlify Forms** - Para sites no Netlify
2. **EmailJS** - Envio direto via JavaScript
3. **Vercel Edge Functions** - Para sites na Vercel
4. **SendGrid** - API completa de email
5. **ConvertKit** - Para marketing de email

---

## 📝 Exemplo de Configuração Completa

`.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=xdkoorpk
NEXT_PUBLIC_WHATSAPP_NUMBER=5573999999999
NEXT_PUBLIC_EMAIL=contato@taxigranjeiro.com.br
NEXT_PUBLIC_PHONE=(73) 99999-9999
NEXT_PUBLIC_SITE_URL=https://taxigranjeiro.com.br
```

Formspree Settings:
- ✅ Domínio configurado
- ✅ Email de notificação ativo
- ✅ Auto-resposta personalizada
- ✅ Proteção anti-spam ativa

---

## 🎉 Pronto!

Após seguir este guia, seu formulário estará:
- ✅ Enviando emails via Formspree
- ✅ Redirecionando para WhatsApp
- ✅ Validando dados com Zod
- ✅ Mostrando feedback ao usuário
- ✅ Funcionando em modo estático e dinâmico 