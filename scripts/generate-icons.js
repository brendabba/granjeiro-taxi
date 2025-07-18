import fs from 'fs'
import path from 'path'

// Função para criar PNG base64 do ícone TG em diferentes tamanhos
function generateIconPNG(size) {
	const canvas = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" fill="none">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fdde44;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f1c40f;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#34495e;stop-opacity:1" />
    </linearGradient>
    <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="1" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background Circle -->
  <circle cx="${size/2}" cy="${size/2}" r="${(size/2) - 6}" fill="url(#bgGradient)" stroke="#e67e22" stroke-width="4"/>
  
  <!-- Letter T -->
  <text x="${size * 0.39}" y="${size * 0.65}" font-family="Arial Black, sans-serif" font-size="${size * 0.4}" font-weight="900" 
        fill="url(#textGradient)" text-anchor="middle" filter="url(#textShadow)">T</text>
  
  <!-- Letter G -->
  <text x="${size * 0.61}" y="${size * 0.65}" font-family="Arial Black, sans-serif" font-size="${size * 0.4}" font-weight="900" 
        fill="url(#textGradient)" text-anchor="middle" filter="url(#textShadow)">G</text>
  
  <!-- Small Taxi Icon Above -->
  <rect x="${size * 0.35}" y="${size * 0.2}" width="${size * 0.3}" height="${size * 0.08}" rx="${size * 0.02}" fill="#2c3e50"/>
  <rect x="${size * 0.37}" y="${size * 0.22}" width="${size * 0.08}" height="${size * 0.04}" rx="${size * 0.01}" fill="#87ceeb" opacity="0.8"/>
  <rect x="${size * 0.46}" y="${size * 0.22}" width="${size * 0.08}" height="${size * 0.04}" rx="${size * 0.01}" fill="#87ceeb" opacity="0.8"/>
  <rect x="${size * 0.55}" y="${size * 0.22}" width="${size * 0.08}" height="${size * 0.04}" rx="${size * 0.01}" fill="#87ceeb" opacity="0.8"/>
  <circle cx="${size * 0.41}" cy="${size * 0.29}" r="${size * 0.02}" fill="#bdc3c7"/>
  <circle cx="${size * 0.59}" cy="${size * 0.29}" r="${size * 0.02}" fill="#bdc3c7"/>
</svg>`
	
	return canvas
}

// Tamanhos dos ícones necessários
const iconSizes = [16, 32, 57, 60, 72, 76, 114, 120, 144, 152, 180, 192, 512]

console.log('Gerando ícones PNG...')

iconSizes.forEach(size => {
	const svgContent = generateIconPNG(size)
	const filename = `public/icon-${size}.png`
	
	// Para converter SVG para PNG, vamos salvar como SVG otimizado primeiro
	// e depois usar uma ferramenta externa ou criar uma versão simplificada
	const svgFilename = `public/icon-${size}.svg`
	fs.writeFileSync(svgFilename, svgContent)
	console.log(`Criado: icon-${size}.svg`)
})

console.log('✅ Ícones SVG gerados! Para PNG, use: brew install librsvg && rsvg-convert -w SIZE -h SIZE icon-SIZE.svg > icon-SIZE.png') 