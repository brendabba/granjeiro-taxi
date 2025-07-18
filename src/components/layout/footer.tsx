'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Empresa */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">TG</span>
							</div>
							<span className="font-poppins font-bold text-lg">
								Táxi Granjeiro
							</span>
						</div>
						<p className="text-gray-300 text-sm mb-4">
							Transfer seguro e pontual em Porto Seguro, Trancoso, Arraial d&apos;Ajuda e Caraíva. 
							Sua viagem com conforto e segurança.
						</p>
						<div className="flex items-center space-x-2 text-sm text-gray-300">
							<Clock className="w-4 h-4" />
							<span>Disponível 24h</span>
						</div>
					</div>

					{/* Links Rápidos */}
					<div>
						<h3 className="font-poppins font-semibold text-lg mb-4">Links Rápidos</h3>
						<ul className="space-y-2">
							<li>
								<button 
									onClick={() => {
										const element = document.getElementById('servicos')
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' })
										} else {
											window.location.href = '/#servicos'
										}
									}}
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
								>
									Nossos Serviços
								</button>
							</li>
							<li>
								<button 
									onClick={() => {
										const element = document.getElementById('rotas')
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' })
										} else {
											window.location.href = '/#rotas'
										}
									}}
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
								>
									Principais Rotas
								</button>
							</li>
							<li>
								<button 
									onClick={() => {
										const element = document.getElementById('sobre')
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' })
										} else {
											window.location.href = '/#sobre'
										}
									}}
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
								>
									Sobre Nós
								</button>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Gostaria de solicitar um táxi."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									Solicitar Táxi
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de um orçamento para transfer."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									Orçamento Transfer
								</a>
							</li>
						</ul>
					</div>

					{/* Destinos */}
					<div>
						<h3 className="font-poppins font-semibold text-lg mb-4">Principais Destinos</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para o Aeroporto de Porto Seguro."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Aeroporto de Porto Seguro
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para Trancoso."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Trancoso
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para Arraial d'Ajuda."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Arraial d&apos;Ajuda
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para Caraíva."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Caraíva
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para Coroa Vermelha."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Coroa Vermelha
								</a>
							</li>
							<li>
								<a 
									href="https://wa.me/5511953156363?text=Olá! Preciso de transfer para o Centro de Porto Seguro."
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									• Centro de Porto Seguro
								</a>
							</li>
						</ul>
					</div>

					{/* Contato */}
					<div>
						<h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
						<div className="space-y-3">
							<div className="flex items-center space-x-3">
								<Phone className="w-4 h-4 text-orange-400" />
								<a 
									href="tel:+5511953156363"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									(11) 95315-6363
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="w-4 h-4 text-orange-400" />
								<a 
									href="mailto:contato@taxigranjeiro.com.br"
									className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
								>
									contato@taxigranjeiro.com.br
								</a>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
								<span className="text-gray-300 text-sm">
									Porto Seguro, Bahia<br />
									Costa do Descobrimento
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Linha divisória */}
				<div className="border-t border-gray-800 mt-8 pt-8">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<p className="text-gray-400 text-sm">
							© {currentYear} Táxi Granjeiro. Todos os direitos reservados.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link 
								href="/politica-privacidade" 
								className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
							>
								Política de Privacidade
							</Link>
							<Link 
								href="/termos-uso" 
								className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200"
							>
								Termos de Uso
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
} 