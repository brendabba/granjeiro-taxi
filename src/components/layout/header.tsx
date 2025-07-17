'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { getWhatsAppUrl } from '@/lib/config'

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navigation = [
		{ name: 'Início', href: '#inicio' },
		{ name: 'Rotas', href: '#rotas' },
		{ name: 'Serviços', href: '#servicos' },
		{ name: 'Sobre Nós', href: '#sobre' },
		{ name: 'Contato', href: '#contato' },
	]

	const handleNavClick = (href: string) => {
		setIsMenuOpen(false)
		
		if (href.startsWith('#')) {
			const element = document.getElementById(href.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	const handleWhatsAppClick = () => {
		const url = getWhatsAppUrl('Olá! Gostaria de fazer um orçamento para uma viagem.')
		window.open(url, '_blank')
	}

	return (
		<header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
											<div className="flex-shrink-0">
							<Link href="/" className="flex items-center space-x-2">
								<div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
									<span className="text-black font-bold text-lg">TG</span>
								</div>
							<span className="font-poppins font-bold text-xl text-gray-900">
								Táxi Granjeiro
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<button
								key={item.name}
								onClick={() => handleNavClick(item.href)}
								className="text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
							>
								{item.name}
							</button>
						))}
					</nav>

					{/* Desktop CTA Button */}
					<div className="hidden md:flex items-center space-x-4">
						<Button
							onClick={handleWhatsAppClick}
							className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-lg transition-colors duration-200"
						>
							<Phone className="w-4 h-4 mr-2" />
							Agendar Viagem
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavClick(item.href)}
									className="block w-full text-left px-3 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-colors duration-200"
								>
									{item.name}
								</button>
							))}
							<div className="pt-4">
								<Button
									onClick={handleWhatsAppClick}
									className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg transition-colors duration-200"
								>
									<Phone className="w-4 h-4 mr-2" />
									Agendar Viagem
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	)
} 