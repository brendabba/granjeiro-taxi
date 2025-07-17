'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getWhatsAppUrl } from '@/lib/config'

export function WhatsAppFloat() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Mostrar o botão após 2 segundos para não ser muito intrusivo
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	const handleWhatsAppClick = () => {
		const url = getWhatsAppUrl('Olá! Gostaria de fazer um orçamento para uma viagem.')
		window.open(url, '_blank')
	}

	if (!isVisible) return null

	return (
		<div className="fixed bottom-6 right-6 z-50">
			<button
				onClick={handleWhatsAppClick}
				className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
				aria-label="Falar no WhatsApp"
			>
				<MessageCircle className="w-6 h-6" />
				
				{/* Tooltip */}
				<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
					<div className="bg-gray-900 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
						Agende sua viagem
						<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-900"></div>
					</div>
				</div>
				
				{/* Pulse Animation Ring */}
				<div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
			</button>
		</div>
	)
} 