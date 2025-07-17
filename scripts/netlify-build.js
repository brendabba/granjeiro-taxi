#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build personalizado para Netlify...');

function runCommand(command, description) {
  console.log(`📦 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit', timeout: 300000 }); // 5 min timeout
    return true;
  } catch (error) {
    console.log(`❌ Erro em: ${description}`);
    console.log(`Comando: ${command}`);
    return false;
  }
}

try {
  // Verificar se package.json existe
  if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    throw new Error('package.json não encontrado!');
  }

  // Limpar cache do npm
  console.log('🧹 Limpando cache do npm...');
  try {
    execSync('npm cache clean --force', { stdio: 'ignore' });
  } catch (error) {
    console.log('⚠️ Não foi possível limpar o cache');
  }

  // Tentar npm ci primeiro, depois npm install como fallback
  let installed = false;
  
  if (fs.existsSync('package-lock.json')) {
    console.log('📦 Tentando npm ci...');
    installed = runCommand('npm ci --prefer-offline --no-audit', 'Instalação com npm ci');
  }
  
  if (!installed) {
    console.log('📦 Fallback para npm install...');
    installed = runCommand('npm install --prefer-offline --no-audit', 'Instalação com npm install');
  }
  
  if (!installed) {
    throw new Error('Falha na instalação de dependências');
  }

  console.log('✅ Dependências instaladas com sucesso!');

  // Executar setup para modo estático
  if (!runCommand('npm run setup:static', 'Configuração do modo estático')) {
    throw new Error('Falha na configuração estática');
  }

  // Executar build
  if (!runCommand('npm run build', 'Build do projeto')) {
    throw new Error('Falha no build');
  }

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