#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

console.log('🔧 Configurando projeto para deploy dinâmico...')

// Ler o next.config.js atual
const configPath = path.join(process.cwd(), 'next.config.js')
let configContent = fs.readFileSync(configPath, 'utf8')

// Verificar se já está configurado para dinâmico
if (configContent.includes('// output: \'export\'') || !configContent.includes('output: \'export\'')) {
	console.log('✅ Projeto já configurado para build dinâmico')
	process.exit(0)
}

// Comentar configurações estáticas
configContent = configContent.replace(
	/  \/\/ Static export configuration \(ENABLED\)\n  output: 'export',\n  trailingSlash: true,\n  images: \{\n    unoptimized: true\n  \},/,
	`  // Static export configuration (uncomment for fully static site)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // },`
)

// Descomentar otimizações de imagem
configContent = configContent.replace(
	/  \/\/ Image optimization \(disabled for static export\)\n  \/\/ images: \{[\s\S]*?  \/\/ \},/,
	`  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },`
)

// Salvar nova configuração
fs.writeFileSync(configPath, configContent)

console.log('✅ Configuração dinâmica ativada!')
console.log('📁 Build será gerado em: .next/')
console.log('🚀 Para fazer build: npm run build')
console.log('📝 Para voltar ao modo estático: npm run setup:static')
console.log('')
console.log('✨ RECURSOS DO MODE DINÂMICO:')
console.log('   - Sitemap.xml dinâmico (auto-gerado)')
console.log('   - Robots.txt dinâmico (auto-gerado)')
console.log('   - API routes funcionais')
console.log('   - Otimizações de imagem automáticas')
console.log('   - Server-side rendering') 