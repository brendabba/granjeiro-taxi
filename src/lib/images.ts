// Configuração de imagens para o projeto
export const images = {
  // Destinos principais
  destinations: {
    trancoso: '/images/destinations/trancoso-quadrado.jpg',
    trancoso_praia: '/images/destinations/trancoso-praia.jpg',
    arraial: '/images/destinations/arraial-ajuda-praia.jpg',
    arraial_centro: '/images/destinations/arraial-ajuda-centro.jpeg',
    caraiva: '/images/destinations/caraiva-vila.jpg',
    caraiva_rio: '/images/destinations/caraiva-rio.jpeg',
    porto: '/images/destinations/porto-seguro-centro.jpg',
    coroa: '/images/destinations/coroa-vermelha.jpeg',
    santa: '/images/destinations/santa-cruz-cabralia.jpg',
    ponta_grande: '/images/destinations/ponta-grande.jpeg',
    espelho: '/images/destinations/espelho-praia.jpeg'
  },
  
  // Hero/Banner images
  hero: {
    main: '/images/hero/porto-seguro-aeroporto.jpg',
    trancoso: '/images/hero/trancoso-vista.jpeg',
    costa: '/images/hero/costa-descobrimento.jpeg',
    bahia: '/images/hero/bahia-por-do-sol.jpeg'
  },
  
  // Frota - Chevrolet Spin
  fleet: {
    spin_exterior: '/images/fleet/chevrolet-spin-exterior.jpeg',
    spin_interior: '/images/fleet/chevrolet-spin-interior.jpeg',
    spin_bagageiro: '/images/fleet/chevrolet-spin-bagageiro.jpeg',
    spin_familia: '/images/fleet/chevrolet-spin-familia.jpeg'
  },
  
  // Equipe e serviço
  service: {
    driver: '/images/service/motorista-uniforme.jpeg',
    atendimento: '/images/service/atendimento-cliente.jpeg',
    bagagem: '/images/service/ajuda-bagagem.jpeg'
  },
  
  // Placeholders para desenvolvimento
  placeholder: {
    destination: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlc3Rpbm88L3RleHQ+PC9zdmc+',
    hero: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5IZXJvIEltYWdlPC90ZXh0Pjwvc3ZnPg==',
    fleet: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2JiYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoZXZyb2xldCBTcGluPC90ZXh0Pjwvc3ZnPg=='
  }
}

// URLs de imagens gratuitas para usar como placeholder/desenvolvimento
export const stockImages = {
  destinations: {
    trancoso: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&q=80',
    arraial: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=600&h=400&fit=crop&q=80',
    caraiva: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&q=80',
    porto: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80',
    bahia: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&h=400&fit=crop&q=80'
  },
  
  hero: {
    beach: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop&q=85',
    airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop&q=85',
    bahia: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=600&fit=crop&q=85'
  },
  
  fleet: {
    spin_exterior: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=500&h=300&fit=crop&q=80',
    spin_interior: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop&q=80',
    spin_familia: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop&q=80'
  },
  
  service: {
    driver: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
    customer: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&q=80'
  }
}

// Função para obter imagem com fallback
export function getImageUrl(type: keyof typeof images, key: string, useStock = false) {
  if (useStock) {
    const stockCategory = stockImages[type as keyof typeof stockImages] as Record<string, string>
    return stockCategory?.[key] || images.placeholder.destination
  }
  const imageCategory = images[type] as Record<string, string>
  return imageCategory?.[key] || images.placeholder.destination
}

// Gerar blurDataURL para placeholders
export function generateBlurDataURL(width = 10, height = 6) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
} 