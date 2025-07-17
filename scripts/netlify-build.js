#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build personalizado para Netlify...');

try {
  // Verificar se package.json existe
  if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    throw new Error('package.json não encontrado!');
  }

  // Instalar todas as dependências
  console.log('📦 Instalando todas as dependências...');
  execSync('npm install', { stdio: 'inherit' });

  // Verificar se o Next.js está instalado localmente
  console.log('📦 Verificando instalação local do Next.js...');
  
  try {
    execSync('npm list next', { stdio: 'inherit' });
    console.log('✅ Next.js instalado localmente!');
  } catch (error) {
    console.log('❌ Reinstalando dependências...');
    execSync('npm install --force', { stdio: 'inherit' });
  }

  // Executar setup para modo estático
  console.log('⚙️ Configurando modo estático...');
  execSync('npm run setup:static', { stdio: 'inherit' });

  // Executar build usando o script npm
  console.log('🔨 Executando build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verificar se a pasta out foi criada
  if (!fs.existsSync(path.join(process.cwd(), 'out'))) {
    throw new Error('Pasta "out" não foi gerada! Build falhou.');
  }

  console.log('✅ Build concluído com sucesso!');
  console.log('📂 Arquivos gerados na pasta "out"');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
} 