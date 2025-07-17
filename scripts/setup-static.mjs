#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

console.log('🔧 Configurando projeto para deploy estático...')

// Ler o next.config.js atual
const configPath = path.join(process.cwd(), 'next.config.js')
let configContent = fs.readFileSync(configPath, 'utf8')

// Verificar se já está configurado para estático
if (configContent.includes('output: \'export\'') && !configContent.includes('// output: \'export\'')) {
	console.log('✅ Projeto já configurado para build estático')
	process.exit(0)
}

// Descomentar configurações estáticas
configContent = configContent.replace(
	/  \/\/ Static export configuration \(uncomment for fully static site\)\n  \/\/ output: 'export',\n  \/\/ trailingSlash: true,\n  \/\/ images: \{\n  \/\/   unoptimized: true\n  \/\/ \},/,
	`  // Static export configuration (ENABLED)
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },`
)

// Comentar otimizações de imagem que não funcionam com export
configContent = configContent.replace(
	/  \/\/ Image optimization\n  images: \{[\s\S]*?\},/,
	`  // Image optimization (disabled for static export)
  // images: {
  //   formats: ['image/webp', 'image/avif'],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   minimumCacheTTL: 60,
  // },`
)

// Salvar nova configuração
fs.writeFileSync(configPath, configContent)

console.log('✅ Configuração estática ativada!')
console.log('📁 Build será gerado em: out/')
console.log('🚀 Para fazer build: npm run build')
console.log('📝 Para voltar ao modo dinâmico: npm run setup:dynamic')
console.log('')
console.log('⚠️  LIMITAÇÕES DO MODE ESTÁTICO:')
console.log('   - Sitemap.xml será fixo (não dinâmico)')
console.log('   - Robots.txt será fixo (não dinâmico)')
console.log('   - Não há API routes')
console.log('   - Formulários só via Formspree/serviços externos') 