#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs')
const { execSync } = require('child_process')

console.log('🌐 Configuração de Deploy Estático - Táxi Granjeiro\n')

// Function to enable static export
function enableStaticExport() {
  console.log('📝 Configurando para export estático...')
  
  let configContent = fs.readFileSync('next.config.js', 'utf-8')
  
  // Uncomment static export lines
  configContent = configContent
    .replace('  // output: \'export\',', '  output: \'export\',')
    .replace('  // trailingSlash: true,', '  trailingSlash: true,')
    .replace('  // images: {\n  //   unoptimized: true\n  // },', '  images: {\n    unoptimized: true\n  },')
  
  fs.writeFileSync('next.config.js', configContent)
  console.log('✅ Configuração estática ativada')
}

// Function to disable static export
function disableStaticExport() {
  console.log('📝 Configurando para modo híbrido...')
  
  let configContent = fs.readFileSync('next.config.js', 'utf-8')
  
  // Comment static export lines
  configContent = configContent
    .replace('  output: \'export\',', '  // output: \'export\',')
    .replace('  trailingSlash: true,', '  // trailingSlash: true,')
    .replace('  images: {\n    unoptimized: true\n  },', '  // images: {\n  //   unoptimized: true\n  // },')
  
  fs.writeFileSync('next.config.js', configContent)
  console.log('✅ Configuração híbrida ativada')
}

// Get command line argument
const mode = process.argv[2]

switch (mode) {
  case 'static':
    enableStaticExport()
    console.log('\n🏗️  Gerando build estático...')
    try {
      execSync('npm run build', { stdio: 'inherit' })
      console.log('\n✅ Build estático completo!')
      console.log('📁 Arquivos estáticos em: ./out/')
      console.log('\n🚀 Deploy options:')
      console.log('1. GitHub Pages: Upload ./out/ folder')
      console.log('2. Netlify: Drag & drop ./out/ folder')
      console.log('3. Vercel: vercel --prod')
      console.log('4. Any static hosting: Upload ./out/ content')
    } catch (error) {
      console.log('❌ Erro no build:', error.message)
    }
    break
    
  case 'hybrid':
    disableStaticExport()
    console.log('\n🏗️  Gerando build híbrido...')
    try {
      execSync('npm run build', { stdio: 'inherit' })
      console.log('\n✅ Build híbrido completo!')
      console.log('\n🚀 Deploy options:')
      console.log('1. Vercel: vercel --prod')
      console.log('2. Netlify: Connect git repository')
      console.log('3. Railway: railway up')
      console.log('4. Any Node.js hosting: npm run start')
    } catch (error) {
      console.log('❌ Erro no build:', error.message)
    }
    break
    
  default:
    console.log('🤔 Qual tipo de site você quer?')
    console.log('')
    console.log('📊 OPÇÕES:')
    console.log('')
    console.log('1️⃣  ESTÁTICO (100% estático)')
    console.log('   ⚡ Performance máxima')
    console.log('   💰 Hosting gratuito')
    console.log('   📝 Comando: node scripts/deploy-static.js static')
    console.log('')
    console.log('2️⃣  HÍBRIDO (Recomendado)')
    console.log('   ✅ Sitemap dinâmico')
    console.log('   📝 Comando: node scripts/deploy-static.js hybrid')
    console.log('')
    console.log('🔍 STATUS ATUAL:')
    
    const configContent = fs.readFileSync('next.config.js', 'utf-8')
    if (configContent.includes("output: 'export'")) {
      console.log('   📊 Modo: ESTÁTICO')
    } else {
      console.log('   📊 Modo: HÍBRIDO')
    }
    
    console.log('')
    console.log('📈 COMPARAÇÃO:')
    console.log('')
    console.log('| Recurso              | Estático | Híbrido |')
    console.log('|---------------------|----------|---------|')
    console.log('| Performance         | ⚡⚡⚡    | ⚡⚡     |')
    console.log('| Custo de hosting    | 💰 FREE  | 💰 LOW  |')
    console.log('| Sitemap dinâmico    | ❌       | ✅      |')
    console.log('| Formulário funciona | ✅       | ✅      |')
    console.log('| PWA                 | ✅       | ✅      |')
    console.log('| SEO                 | ✅       | ✅      |')
    console.log('')
}

console.log('')
console.log('💡 Dica: Para a maioria dos casos, HÍBRIDO é a melhor opção!')
console.log('   Você terá flexibilidade + performance + funcionalidades completas.') 