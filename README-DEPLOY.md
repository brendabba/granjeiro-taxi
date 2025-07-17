# 📋 Guia de Configuração e Deploy

## 🔧 Configuração do Formspree

### 1. Criar conta no Formspree
1. Acesse [https://formspree.io/](https://formspree.io/)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint fornecido (ex: `xdkoorpk`)

### 2. Configurar variáveis de ambiente
1. Copie o arquivo `env.example` para `.env.local`:
```bash
cp env.example .env.local
```

2. Edite `.env.local` com suas informações:
```env
# Formspree Configuration
NEXT_PUBLIC_FORMSPREE_ENDPOINT=seu_endpoint_aqui

# Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=5573999999999
NEXT_PUBLIC_EMAIL=contato@taxigranjeiro.com.br
NEXT_PUBLIC_PHONE=(73) 99999-9999

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://taxigranjeiro.com.br
NEXT_PUBLIC_SITE_NAME=Táxi Granjeiro

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Testar formulário
1. Execute `npm run dev`
2. Acesse `http://localhost:3000/contato`
3. Preencha e envie o formulário
4. Verifique se chegou no painel do Formspree

---

## 🚀 Opções de Deploy

### 📊 Comparação: Estático vs Dinâmico

| Recurso | Estático | Dinâmico |
|---------|----------|----------|
| **Hospedagem** | Gratuita (Netlify, Vercel, GitHub Pages) | Paga (Vercel, Netlify Functions) |
| **Performance** | Máxima (CDN global) | Alta (SSR) |
| **Sitemap.xml** | Fixo (gerado no build) | Dinâmico (auto-atualizado) |
| **Robots.txt** | Fixo | Dinâmico |
| **API Routes** | ❌ Não funciona | ✅ Funciona |
| **Formulários** | Só externos (Formspree) | Externos + API própria |
| **Otimização de Imagens** | Básica | Avançada (Next.js) |
| **Facilidade** | Deploy simples | Configuração necessária |

---

## 🔄 Configuração de Build

### Build Estático (Recomendado para sites simples)
```bash
# Configurar para estático
npm run setup:static

# Build estático
npm run build:static

# Resultado: pasta 'out/' com arquivos estáticos
```

**Vantagens:**
- Hospedagem gratuita
- Performance máxima
- Simples de deployar
- CDN global automático

**Desvantagens:**
- Sitemap/robots fixos
- Sem API routes
- Só formulários externos

### Build Dinâmico (Para recursos avançados)
```bash
# Configurar para dinâmico
npm run setup:dynamic

# Build dinâmico
npm run build:dynamic

# Resultado: pasta '.next/' com aplicação completa
```

**Vantagens:**
- Sitemap/robots dinâmicos
- API routes funcionais
- Otimizações avançadas
- SSR completo

**Desvantagens:**
- Hospedagem paga
- Configuração mais complexa

---

## 🌐 Opções de Hospedagem

### Para Build Estático (out/)
1. **Netlify** (Recomendado)
   - Arraste a pasta `out/` no painel
   - Ou conecte ao GitHub
   - SSL automático

2. **Vercel** 
   ```bash
   npx vercel --prod
   ```

3. **GitHub Pages**
   - Suba pasta `out/` para branch `gh-pages`
   - Configure no Settings do repositório

4. **Firebase Hosting**
   ```bash
   firebase deploy
   ```

### Para Build Dinâmico (.next/)
1. **Vercel** (Recomendado para Next.js)
   ```bash
   npx vercel --prod
   ```

2. **Netlify Functions**
   - Instale adapter Next.js
   - Configure netlify.toml

---

## 🔍 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev                 # Servidor local

# Configuração
npm run setup:static       # Configura para build estático
npm run setup:dynamic      # Configura para build dinâmico

# Build
npm run build:static       # Build estático completo
npm run build:dynamic      # Build dinâmico completo
npm run build              # Build no modo atual

# Produção
npm run start              # Servidor de produção (só modo dinâmico)
```

---

## 🔄 Alternar Entre Modos

### De Dinâmico → Estático
```bash
npm run setup:static
npm run build
```

### De Estático → Dinâmico
```bash
npm run setup:dynamic
npm run build
```

---

## 📝 Notas Importantes

1. **Formspree Grátis**: Até 50 submissions/mês
2. **Domínio**: Configure no Formspree após deploy
3. **Analytics**: Configure Google Analytics no .env.local
4. **SEO**: Modo dinâmico tem SEO superior (sitemap dinâmico)
5. **Performance**: Modo estático é mais rápido
6. **Custo**: Estático é gratuito, dinâmico pode ter custos

---

## 🆘 Troubleshooting

### Formspree não funciona
1. Verifique o endpoint no `.env.local`
2. Verifique se o domínio está configurado no Formspree
3. Veja o console do navegador para erros

### Build estático falha
1. Verifique se não há API routes no código
2. Execute `npm run setup:static` novamente
3. Limpe cache: `rm -rf .next out`

### Deploy não funciona
1. Verifique as variáveis de ambiente na hospedagem
2. Para estático: envie pasta `out/`
3. Para dinâmico: configure variáveis no painel da hospedagem 