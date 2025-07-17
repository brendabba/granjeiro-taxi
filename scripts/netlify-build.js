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

  // Instalar todas as dependências de forma limpa
  console.log('📦 Instalando dependências...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('✅ Dependências instaladas com sucesso!');

  // Executar setup para modo estático
  console.log('⚙️ Configurando modo estático...');
  execSync('npm run setup:static', { stdio: 'inherit' });

  // Executar build
  console.log('🔨 Executando build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Verificar se a pasta out foi criada
  if (!fs.existsSync(path.join(process.cwd(), 'out'))) {
    throw new Error('Pasta "out" não foi gerada! Build falhou.');
  }

  // Verificar conteúdo da pasta out
  const outFiles = fs.readdirSync(path.join(process.cwd(), 'out'));
  console.log(`📂 Build concluído! ${outFiles.length} arquivos gerados na pasta "out"`);

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
} 