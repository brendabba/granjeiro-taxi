# 🚀 Deploy Rápido - 3 Passos

## ✅ **Pré-requisitos**
Seu projeto já está configurado! Build gerado em `out/`

## 🎯 **Opção 1: Netlify (Mais Fácil)**

### Passo 1: Build
```bash
npm run build:static
```

### Passo 2: Upload
1. Acesse [netlify.com](https://netlify.com)
2. Arraste pasta `out/` para o painel
3. Aguarde alguns segundos

### Passo 3: Personalizar
- Mude o nome do site no painel
- Configure domínio próprio (opcional)
- ✅ **Pronto! Site online!**

---

## ⚡ **Opção 2: Vercel (Via GitHub)**

### Passo 1: GitHub
```bash
git add .
git commit -m "Deploy do site"
git push origin main
```

### Passo 2: Vercel
1. Acesse [vercel.com](https://vercel.com)
2. "Import Git Repository"
3. Conecte seu repositório

### Passo 3: Configurar
- Build Command: `npm run build:static`
- Output Directory: `out`
- ✅ **Deploy automático!**

---

## 🏗️ **Opção 3: GitHub Pages (100% Grátis)**

### Passo 1: Ativar Pages
1. Repositório → Settings → Pages
2. Source: "GitHub Actions"

### Passo 2: Commit Workflow
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages workflow"
git push origin main
```

### Passo 3: Aguardar
- Actions executará automaticamente
- Site disponível em: `https://usuario.github.io/repo`
- ✅ **Deploy automático a cada commit!**

---

## 🔧 **Configurações Opcionais**

### Domínio Próprio
- **Netlify/Vercel**: DNS → CNAME → `seu-site.netlify.app`
- **GitHub**: Settings → Pages → Custom domain

### Variáveis de Ambiente
Se usar `.env.local`:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project settings → Environment Variables
- **GitHub**: Settings → Secrets and variables

### Formspree
Após deploy, configure no Formspree:
- Dashboard → Settings → Allowed Domains
- Adicione: `seu-dominio.com`

---

## 🎉 **Resultado Final**

Após o deploy você terá:
- ✅ Site estático ultra-rápido
- ✅ SSL/HTTPS automático
- ✅ CDN global
- ✅ Formulário funcionando via Formspree
- ✅ SEO otimizado
- ✅ Performance 90+

**URLs de exemplo:**
- Netlify: `https://taxi-granjeiro.netlify.app`
- Vercel: `https://taxi-granjeiro.vercel.app`
- GitHub: `https://usuario.github.io/projeto-taxi` 