#!/bin/bash

echo "Convertendo ícones SVG para PNG..."

cd public

# Lista de tamanhos
sizes=(16 32 57 60 72 76 114 120 144 152 180 192 512)

for size in "${sizes[@]}"; do
    if [ -f "icon-${size}.svg" ]; then
        echo "Convertendo icon-${size}.svg para PNG..."
        rsvg-convert -w $size -h $size "icon-${size}.svg" > "icon-${size}.png"
        
        if [ $? -eq 0 ]; then
            echo "✅ Criado: icon-${size}.png"
        else
            echo "❌ Erro ao criar: icon-${size}.png"
        fi
    else
        echo "⚠️ Arquivo não encontrado: icon-${size}.svg"
    fi
done

echo ""
echo "🎉 Conversão concluída!"
echo "Ícones PNG criados em public/"

cd .. 