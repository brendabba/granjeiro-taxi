#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build personalizado para Netlify...');

try {
  // Verificar se o Next.js está instalado
  console.log('📦 Verificando instalação do Next.js...');
  
  try {
    execSync('npx next --version', { stdio: 'inherit' });
    console.log('✅ Next.js encontrado!');
  } catch (error) {
    console.log('❌ Next.js não encontrado, instalando dependências...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Verificar se node_modules existe
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    console.log('📦 Instalando dependências...');
    execSync('npm ci', { stdio: 'inherit' });
  }

  // Executar setup para modo estático
  console.log('⚙️ Configurando modo estático...');
  execSync('npm run setup:static', { stdio: 'inherit' });

  // Executar build do Next.js
  console.log('🔨 Executando build...');
  execSync('npx next build', { stdio: 'inherit' });

  console.log('✅ Build concluído com sucesso!');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
} 