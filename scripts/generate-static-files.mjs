#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

console.log('📄 Gerando arquivos estáticos para build...')

// Configuração do site
const baseUrl = 'https://taxigranjeiro.com.br'
const currentDate = new Date().toISOString()

// Sitemap estático
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/servicos/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/rotas/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/sobre/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contato/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`

// Robots.txt estático
const robotsContent = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

// Criar pasta public se não existir
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
	fs.mkdirSync(publicDir, { recursive: true })
}

// Escrever arquivos
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent)

console.log('✅ Arquivos estáticos gerados:')
console.log('   📄 public/sitemap.xml')
console.log('   📄 public/robots.txt')
console.log('💡 Estes arquivos serão usados quando em modo estático') 