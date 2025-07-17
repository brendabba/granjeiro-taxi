# 📸 Guia de Imagens - Táxi Granjeiro

## 📂 Estrutura de Pastas
```
public/images/
├── destinations/     # Destinos turísticos (8-12 imagens)
├── hero/            # Banners/Hero sections (3-4 imagens)
├── fleet/           # Frota de veículos (3-4 imagens)
└── service/         # Equipe e serviços (2-3 imagens)
```

## 🎯 Imagens Recomendadas (15-25 total)

### 📍 **Destinos (8-12 imagens)**
```
public/images/destinations/
├── trancoso-quadrado.jpg        # Quadrado histórico de Trancoso
├── trancoso-praia.jpg           # Praia dos Nativos/Coqueiros
├── arraial-ajuda-centro.jpg     # Centro histórico de Arraial
├── arraial-ajuda-praia.jpg      # Praia do Mucugê
├── caraiva-vila.jpg             # Vila de Caraíva
├── caraiva-rio.jpg              # Rio Caraíva
├── porto-seguro-centro.jpg      # Centro histórico de Porto Seguro
├── coroa-vermelha.jpg           # Praia de Coroa Vermelha
├── santa-cruz-cabralia.jpg      # Santa Cruz Cabrália
├── espelho-praia.jpg            # Praia do Espelho
└── ponta-grande.jpg             # Ponta Grande
```

### 🏖️ **Hero/Banner (3-4 imagens)**
```
public/images/hero/
├── porto-seguro-aeroporto.jpg   # Vista aérea do aeroporto
├── trancoso-vista.jpg           # Vista panorâmica de Trancoso
├── costa-descobrimento.jpg      # Costa do Descobrimento
└── bahia-por-do-sol.jpg         # Pôr do sol na Bahia
```

### 🚗 **Frota Chevrolet Spin (3-4 imagens)**
```
public/images/fleet/
├── chevrolet-spin-exterior.jpg  # Chevrolet Spin externo
├── chevrolet-spin-interior.jpg  # Interior do Chevrolet Spin
├── chevrolet-spin-bagageiro.jpg # Porta-malas espaçoso
└── chevrolet-spin-familia.jpg   # Família usando o veículo
```

### 👥 **Serviço/Equipe (2-3 imagens)**
```
public/images/service/
├── motorista-uniforme.jpg       # Motorista uniformizado
├── atendimento-cliente.jpg      # Atendimento ao cliente
└── ajuda-bagagem.jpg            # Ajuda com bagagens
```

## 📐 Especificações Técnicas

### **Tamanhos Recomendados:**
- **Hero/Banner**: 1200x600px (2:1)
- **Destinos**: 600x400px (3:2)
- **Frota**: 400x300px (4:3)
- **Serviço**: 300x300px (1:1)

### **Formatos:**
- **Primário**: `.jpg` (melhor compressão para fotos)
- **Alternativo**: `.webp` (menor tamanho, suporte moderno)
- **PNG**: Apenas para logos/gráficos com transparência

### **Qualidade:**
- **Hero**: 85-90% (alta qualidade)
- **Destinos**: 80-85% (boa qualidade)
- **Outras**: 75-80% (qualidade padrão)

## 🔧 Como Usar no Código

### **1. Importar e usar:**
```tsx
import { OptimizedImage } from '@/components/ui/optimized-image'
import { getImageUrl, generateBlurDataURL } from '@/lib/images'

// Usar imagem local
<OptimizedImage
  src="/images/destinations/trancoso-quadrado.jpg"
  alt="Quadrado histórico de Trancoso"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL={generateBlurDataURL()}
/>

// Usar imagem com fallback
<OptimizedImage
  src={getImageUrl('destinations', 'trancoso', true)}
  alt="Trancoso"
  width={600}
  height={400}
/>
```

### **2. Para imagens de fundo:**
```tsx
<div className="relative h-96">
  <OptimizedImage
    src="/images/hero/costa-descobrimento.jpg"
    alt="Costa do Descobrimento"
    fill
    objectFit="cover"
    priority
  />
</div>
```

## 🌐 Fontes de Imagens Gratuitas

### **Recomendadas para turismo:**
1. **Unsplash** (https://unsplash.com)
   - Buscar: "bahia brazil", "trancoso", "arraial d'ajuda"
   - Qualidade profissional, uso gratuito

2. **Pexels** (https://pexels.com)
   - Boa variedade de imagens de viagem
   - Qualidade HD disponível

3. **Pixabay** (https://pixabay.com)
   - Imagens livres de direitos autorais
   - Boa para veículos e serviços

### **Palavras-chave para busca:**
- Brazil beach
- Bahia tourism
- Brazilian village
- Tropical destination
- Professional driver
- Clean car interior
- Airport transfer
- Beach paradise

## 🚀 Implementação Atual

O projeto já está configurado com:
- ✅ Componente `OptimizedImage` com lazy loading
- ✅ Sistema de fallback para imagens
- ✅ Placeholders automáticos
- ✅ URLs do Unsplash como desenvolvimento
- ✅ Estrutura de pastas criada

### **Para adicionar suas próprias imagens:**
1. Coloque as imagens nas pastas correspondentes em `public/images/`
2. Atualize os caminhos em `src/lib/images.ts`
3. Use `useStock = false` para imagens locais

## 📊 Performance

### **Otimizações aplicadas:**
- Lazy loading automático
- Compressão inteligente
- Placeholders blur
- Responsive images
- WebP quando suportado (Next.js)

### **Métricas esperadas:**
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- Redução de 40-60% no tamanho vs imagens não otimizadas

## 🎨 Dicas de Design

### **Para destinos:**
- Prefira fotos em golden hour (pôr/nascer do sol)
- Inclua elementos humanos para escala
- Mostre pontos icônicos reconhecíveis

### **Para frota (Chevrolet Spin):**
- Chevrolet Spin limpo e bem cuidado
- Boa iluminação destacando o espaço interno
- Ângulos que mostrem conforto para até 6 passageiros
- Destaque para o porta-malas espaçoso

### **Para equipe:**
- Poses naturais e profissionais
- Uniformes limpos
- Sorrisos genuínos

---

**💡 Dica:** Comece com 8-10 imagens essenciais e adicione mais conforme necessário. Qualidade > Quantidade! 