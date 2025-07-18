'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { config, getWhatsAppUrl } from '@/lib/config'
import { 
	Phone, 
	MapPin, 
	Clock, 
	Car,
	Users,
	Calendar,
	MessageSquare,
	ArrowRight,
	Shield,
	Route,
	Compass
} from 'lucide-react'

export default function ContatoPage() {
	const popularRoutes = [
		{ from: 'Aeroporto de Porto Seguro', to: 'Trancoso' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Arraial d\'Ajuda' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Caraíva' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Centro de Porto Seguro' },
		{ from: 'Centro de Porto Seguro', to: 'Trancoso' },
		{ from: 'Trancoso', to: 'Arraial d\'Ajuda' }
	]

	const contactInfo = [
		{
			icon: Phone,
			title: 'WhatsApp',
			value: config.contact.phone,
			description: 'Resposta rápida garantida',
			action: () => {
				const url = getWhatsAppUrl('Olá! Gostaria de fazer um orçamento.')
				window.open(url, '_blank')
			}
		},
		{
			icon: MapPin,
			title: 'Localização',
			value: 'Porto Seguro, Bahia',
			description: 'Cobrimos toda a região',
			action: () => {}
		},
		{
			icon: Clock,
			title: 'Atendimento',
			value: '24 horas',
			description: 'Todos os dias da semana',
			action: () => {}
		}
	]

	return (
		<div className="min-h-screen bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
						Fale Conosco Direto no WhatsApp
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Clique em qualquer opção abaixo e seja redirecionado direto para o WhatsApp 
						com sua mensagem já formatada. Atendimento rápido e personalizado!
					</p>
				</div>

				{/* Rotas Populares */}
				<div className="mb-12">
					<Card className="shadow-xl">
						<CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
							<CardTitle className="text-2xl flex items-center">
								<Route className="w-6 h-6 mr-3" />
								Rotas Populares - Clique e Fale Conosco
							</CardTitle>
							<p className="text-orange-100">
								Selecione sua rota e fale direto conosco no WhatsApp
							</p>
						</CardHeader>
						<CardContent className="p-8">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{popularRoutes.map((route, index) => (
									<Button
										key={index}
										onClick={() => {
											const message = `Olá! Gostaria de um orçamento para:\n\n*Origem:* ${route.from}\n*Destino:* ${route.to}\n\nAguardo seu retorno!`
											const url = getWhatsAppUrl(message)
											window.open(url, '_blank')
										}}
										className="bg-gradient-to-r from-yellow-custom to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-black font-medium p-4 h-auto text-left justify-start transition-all duration-300 transform hover:scale-105"
									>
										<div className="flex flex-col w-full">
											<span className="text-sm font-semibold">{route.from}</span>
											<ArrowRight className="w-4 h-4 mx-auto my-1" />
											<span className="text-sm font-semibold">{route.to}</span>
										</div>
									</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Serviços */}
				<div className="mb-12">
					<Card className="shadow-xl">
						<CardHeader className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
							<CardTitle className="text-2xl flex items-center">
								<Car className="w-6 h-6 mr-3" />
								Nossos Serviços - Fale Direto Conosco
							</CardTitle>
							<p className="text-blue-100">
								Escolha o serviço e seja atendido imediatamente
							</p>
						</CardHeader>
						<CardContent className="p-8">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								<Button
									onClick={() => {
										const message = `*TÁXI 24 HORAS*\n\nOlá! Preciso de um táxi urgente.\n\nPor favor, me informe:\n• Disponibilidade\n• Tempo de chegada\n• Valor da corrida\n\nObrigado!`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Clock className="w-8 h-8 mb-3" />
									<span className="text-lg">Táxi 24 Horas</span>
									<span className="text-sm mt-1 opacity-90">Disponível agora</span>
								</Button>

								<Button
									onClick={() => {
										const message = `*TRANSFER AEROPORTO*\n\nOlá! Preciso de transfer para o aeroporto.\n\n*Data:* \n*Horário:* \n*Local de origem:* \n*Passageiros:* \n*Bagagens:* \n\nAguardo orçamento!`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Shield className="w-8 h-8 mb-3" />
									<span className="text-lg">Transfer Aeroporto</span>
									<span className="text-sm mt-1 opacity-90">Seguro e pontual</span>
								</Button>

								<Button
									onClick={() => {
										const message = `*PASSEIOS TURÍSTICOS*\n\nOlá! Gostaria de conhecer a região.\n\n*Pessoas:* \n*Data preferida:* \n*Destinos de interesse:* \n• Trancoso\n• Arraial d'Ajuda\n• Caraíva\n• Centro Histórico\n\nAguardo sugestões!`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Compass className="w-8 h-8 mb-3" />
									<span className="text-lg">Passeios</span>
									<span className="text-sm mt-1 opacity-90">Roteiros personalizados</span>
								</Button>

								<Button
									onClick={() => {
										const message = `*VIAGEM EM GRUPO*\n\nOlá! Temos um grupo e precisamos de transporte.\n\n*Quantidade de pessoas:* \n*Data da viagem:* \n*Origem:* \n*Destino:* \n*Horário:* \n\nPrecisamos de orçamento!`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Users className="w-8 h-8 mb-3" />
									<span className="text-lg">Grupos</span>
									<span className="text-sm mt-1 opacity-90">Vans e veículos grandes</span>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* WhatsApp Direto */}
				<div className="mb-12">
					<div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white text-center">
						<h3 className="font-poppins font-bold text-3xl mb-4">
							WhatsApp Direto - Fale Conosco Agora
						</h3>
						<p className="text-green-100 mb-6 max-w-2xl mx-auto text-lg">
							Prefere falar diretamente? Clique abaixo e seja atendido imediatamente por nossa equipe!
						</p>
						<Button 
							onClick={() => {
								const url = getWhatsAppUrl('Olá! Gostaria de fazer um orçamento.')
								window.open(url, '_blank')
							}}
							className="bg-white text-green-600 hover:bg-gray-100 font-bold text-xl px-12 py-4 transition-all duration-300 transform hover:scale-105"
						>
							<MessageSquare className="w-6 h-6 mr-3" />
							Conversar Agora no WhatsApp
							<ArrowRight className="w-6 h-6 ml-3" />
						</Button>
					</div>
				</div>

				{/* Informações de Contato */}
				<div className="grid md:grid-cols-3 gap-6">
					{contactInfo.map((info, index) => (
						<Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
							<CardContent className="p-6 text-center">
								<info.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
								<h3 className="font-semibold text-lg mb-2">{info.title}</h3>
								<p className="text-gray-600 font-medium mb-1">{info.value}</p>
								<p className="text-gray-500 text-sm mb-4">{info.description}</p>
								{info.action && info.title === 'WhatsApp' && (
									<Button 
										onClick={info.action}
										className="bg-green-500 hover:bg-green-600 text-white"
									>
										Conversar Agora
									</Button>
								)}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
