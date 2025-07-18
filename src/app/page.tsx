'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { config, getWhatsAppUrl } from '@/lib/config'
import { 
	Shield, 
	Clock, 
	Star, 
	MapPin, 
	Phone, 
	Users,
	Car,
	Heart,
	CheckCircle,
	ArrowRight,
	MessageSquare,
	Send,
	Calendar,
	Award,
	Zap,
	Wifi,
	CreditCard,
	HeadphonesIcon
} from 'lucide-react'

export default function HomePage() {

	const benefits = [
		{
			icon: Clock,
			title: 'Táxi 24 Horas',
			description: 'Disponível 24h por dia, 7 dias por semana para todas suas necessidades'
		},
		{
			icon: Shield,
			title: 'Transfer Seguro',
			description: 'Motoristas experientes, Chevrolet Spin com seguro total e monitoramento'
		},
		{
			icon: Star,
			title: 'Passeios Personalizados',
			description: 'City tours e passeios sob medida pelos destinos mais belos da região'
		},
		{
			icon: Car,
			title: 'Viagens Confortáveis',
			description: 'Frota Chevrolet Spin moderna para até 6 passageiros com ar condicionado'
		}
	]

	const routes = [
		{
			from: 'Aeroporto',
			to: 'Trancoso',
			duration: '45 min',
			price: 'A partir de R$ 120',
			image: '/images/destinations/trancoso-quadrado.jpg',
			description: 'Quadrado histórico e praias paradisíacas'
		},
		{
			from: 'Aeroporto',
			to: 'Arraial d\'Ajuda',
			duration: '35 min',
			price: 'A partir de R$ 100',
			image: '/images/destinations/arraial-ajuda-praia.jpg',
			description: 'Centro histórico e praias deslumbrantes'
		},
		{
			from: 'Aeroporto',
			to: 'Caraíva',
			duration: '1h 30min',
			price: 'A partir de R$ 200',
			image: '/images/destinations/caraiva-vila.jpg',
			description: 'Vila rústica e natureza preservada'
		}
	]

	const services = [
		{
			icon: Clock,
			title: 'Táxi 24 Horas',
			description: 'Serviço de táxi disponível 24h por dia, 7 dias por semana',
			features: ['Disponível 24h/7d', 'Atendimento imediato', 'Corridas urbanas']
		},
		{
			icon: MapPin,
			title: 'Transfer Aeroporto',
			description: 'Transfer seguro entre aeroporto e destinos turísticos',
			features: ['Monitoramento de voos', 'Espera gratuita', 'Transfer direto']
		},
		{
			icon: Star,
			title: 'Passeios Turísticos',
			description: 'City tours e passeios personalizados pela região',
			features: ['Guia local especializado', 'Roteiros sob medida', 'Paradas fotográficas']
		},
		{
			icon: Car,
			title: 'Viagens Personalizadas',
			description: 'Viagens de longa distância e roteiros especiais',
			features: ['Múltiplos destinos', 'Flexibilidade total', 'Conforto garantido']
		}
	]

	const popularRoutes = [
		{ from: 'Aeroporto de Porto Seguro', to: 'Trancoso' },
		        { from: 'Aeroporto de Porto Seguro', to: 'Arraial d\'Ajuda' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Caraíva' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Centro de Porto Seguro' },
		{ from: 'Centro de Porto Seguro', to: 'Trancoso' },
		        { from: 'Trancoso', to: 'Arraial d\'Ajuda' }
	]

	const aboutFeatures = [
		{
			icon: Clock,
			title: 'Táxi 24 Horas Disponível',
			description: 'Serviço de táxi disponível 24h por dia, 7 dias por semana'
		},
		{
			icon: Award,
			title: '8+ Anos de Experiência',
			description: 'Especialistas em transfer, passeios e turismo na região'
		},
		{
			icon: Car,
			title: 'Frota Chevrolet Spin',
			description: 'Veículos modernos, climatizados e com seguro total'
		},
		{
			icon: HeadphonesIcon,
			title: 'Guias Locais Experientes',
			description: 'Conhecemos cada canto da Costa do Descobrimento'
		}
	]



	const handleWhatsAppClick = () => {
		const whatsappNumber = '5573999384732'
		const message = 'Olá! Gostaria de fazer um orçamento para uma viagem.'
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
		window.open(url, '_blank')
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section id="inicio" className="relative text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
				{/* Hero Background Image */}
				<div className="absolute inset-0 z-0">
					<img
						src="/images/hero/costa-descobrimento.jpeg"
						alt="Porto Seguro - Costa do Descobrimento"
						className="w-full h-full object-cover"
					/>
				</div>
				
				{/* Overlay para contraste do texto */}
				<div className="absolute inset-0 bg-black/40 z-10"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div className="text-center lg:text-left">
							<h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6">
								Táxi 24h • Transfer • Passeios em{' '}
								<span className="text-yellow-custom-light">Porto Seguro</span>
							</h1>
							<p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
								<span className="font-bold text-yellow-custom-light">Táxi 24 horas</span>, transfers seguros e{' '}
								<span className="font-semibold text-yellow-custom-lighter">passeios personalizados</span>{' '}
								pela Costa do Descobrimento. Sua viagem com total comodidade!
							</p>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
								<Button 
									onClick={handleWhatsAppClick}
									className="gradient-yellow-custom hover:gradient-yellow-custom-hover text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 button-mobile"
								>
									<MessageSquare className="w-5 h-5 mr-3" />
									Solicitar Transfer
								</Button>
								<Button 
									onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
									className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 button-mobile"
								>
									<Calendar className="w-5 h-5 mr-3" />
									Ver Mais Opções
								</Button>
							</div>
						</div>

						{/* Stats Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
							{benefits.map((benefit, index) => (
								<Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
									<CardContent className="p-4 sm:p-6 text-center">
										<benefit.icon className="w-10 h-10 mx-auto mb-3 text-yellow-custom-light" />
										<h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
										<p className="text-sm text-gray-200">{benefit.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Popular Routes Section */}
			<section id="rotas" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
							🚖 Transfer • Táxi • Passeios
						</h2>
						<p className="text-xl text-gray-600">
							<span className="font-semibold text-yellow-custom">Táxi 24h</span>, transfers e passeios personalizados 
							para os destinos mais procurados da Costa do Descobrimento
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{routes.map((route, index) => (
							<Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
								<div className="relative h-48">
									<img
										src={route.image}
										alt={`${route.to} - Destino turístico`}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									<div className="absolute bottom-4 left-4 text-white z-10">
										<MapPin className="w-5 h-5 inline mr-2" />
										<span className="font-semibold">{route.from} → {route.to}</span>
									</div>
								</div>
								<CardContent className="p-6">
									<h3 className="font-poppins font-bold text-xl mb-2">{route.to}</h3>
									<p className="text-gray-600 mb-4">{route.description}</p>
									<div className="flex justify-between items-center mb-4">
										<div className="flex items-center text-gray-500">
											<Clock className="w-4 h-4 mr-2" />
											<span className="text-sm">{route.duration}</span>
										</div>
										<div className="font-bold text-orange-600 text-lg">
											{route.price}
										</div>
									</div>
									<Button 
										onClick={() => {
											const message = `🚖 Olá! Gostaria de um orçamento para:\n\n📍 *Origem:* ${route.from}\n🎯 *Destino:* ${route.to}\n\nAguardo seu retorno! 😊`
											const url = getWhatsAppUrl(message)
											window.open(url, '_blank')
										}}
										className="w-full bg-yellow-custom bg-yellow-custom-hover text-black font-semibold button-mobile"
									>
										Solicitar via WhatsApp
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
							🌟 Táxi 24h • Transfer • Passeios • Viagens
						</h2>
						<p className="text-xl text-gray-600">
							<span className="font-bold text-yellow-custom">Serviço completo 24 horas:</span> táxi urbano, 
							transfers aeroporto, passeios turísticos e viagens personalizadas
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						{services.map((service, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
								<CardContent className="p-6 sm:p-8">
									<service.icon className="w-12 h-12 text-yellow-custom mx-auto mb-4" />
									<h3 className="font-bold text-xl mb-3">{service.title}</h3>
									<p className="text-gray-600 mb-4">{service.description}</p>
									<ul className="text-sm text-gray-500 space-y-1">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-center justify-center">
												<CheckCircle className="w-4 h-4 text-yellow-custom mr-2" />
												{feature}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6">
								🚖 Por que escolher a Táxi Granjeiro?
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								<span className="font-bold text-yellow-custom">Táxi 24 horas</span>, empresa local especializada em 
								transfer, passeios e turismo na Costa do Descobrimento. Sua viagem com total segurança e comodidade!
							</p>
							
							<div className="space-y-6">
								{aboutFeatures.map((feature, index) => (
									<div key={index} className="flex items-start">
										<feature.icon className="w-8 h-8 text-yellow-custom mt-1 mr-4" />
										<div>
											<h3 className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</h3>
											<p className="text-gray-600">{feature.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
							<img
								src="/images/fleet/chevrolet-spin-interior.jpeg"
								alt="Interior do Chevrolet Spin"
								className="rounded-lg shadow-lg"
							/>
							<img
								src="/images/fleet/chevrolet-spin-exterior.jpeg"
								alt="Exterior do Chevrolet Spin"
								className="rounded-lg shadow-lg mt-8"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section - Simplified */}
			<section id="contato" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
							Fale Conosco Direto no WhatsApp
						</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Escolha uma opção abaixo e seja redirecionado direto para o WhatsApp com sua mensagem pré-formatada
						</p>
					</div>

					<div className="max-w-6xl mx-auto space-y-12">
						{/* Rotas Populares */}
						<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
							<h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6 text-center">
								🚖 Rotas Populares - Clique e Fale Conosco
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{popularRoutes.map((route, index) => (
									<Button
										key={index}
										onClick={() => {
											const message = `🚖 Olá! Gostaria de um orçamento para:\n\n📍 *Origem:* ${route.from}\n🎯 *Destino:* ${route.to}\n\nAguardo seu retorno! 😊`
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
						</div>

						{/* Serviços */}
						<div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
							<h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6 text-center">
								🔥 Nossos Serviços - Fale Direto com a Gente
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								<Button
									onClick={() => {
										const message = `🚖 *TÁXI 24 HORAS*\n\nOlá! Preciso de um táxi urgente.\n\nPor favor, me informe:\n• Disponibilidade\n• Tempo de chegada\n• Valor da corrida\n\nObrigado! 😊`
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
										const message = `✈️ *TRANSFER AEROPORTO*\n\nOlá! Preciso de transfer para o aeroporto.\n\n📅 *Data:* \n⏰ *Horário:* \n📍 *Local de origem:* \n👥 *Passageiros:* \n🧳 *Bagagens:* \n\nAguardo orçamento! 😊`
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
										const message = `🏖️ *PASSEIOS TURÍSTICOS*\n\nOlá! Gostaria de fazer um passeio turístico.\n\n🎯 *Destinos de interesse:* \n📅 *Data preferencial:* \n👥 *Número de pessoas:* \n⏰ *Duração desejada:* \n\nQuero conhecer essa região linda! 😊`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Star className="w-8 h-8 mb-3" />
									<span className="text-lg">Passeios Turísticos</span>
									<span className="text-sm mt-1 opacity-90">Conheça a região</span>
								</Button>

								<Button
									onClick={() => {
										const message = `🛣️ *VIAGENS PERSONALIZADAS*\n\nOlá! Gostaria de fazer uma viagem personalizada.\n\n📍 *Origem:* \n🎯 *Destino:* \n📅 *Data:* \n👥 *Passageiros:* \n⏰ *Duração da viagem:* \n💼 *Observações:* \n\nQuero uma viagem especial! 😊`
										const url = getWhatsAppUrl(message)
										window.open(url, '_blank')
									}}
									className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold p-6 h-auto flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
								>
									<Car className="w-8 h-8 mb-3" />
									<span className="text-lg">Viagens Especiais</span>
									<span className="text-sm mt-1 opacity-90">Personalizadas</span>
								</Button>
							</div>
						</div>

						{/* WhatsApp Direto */}
						<div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
							<h3 className="font-poppins font-bold text-2xl mb-4">
								💬 WhatsApp Direto - Fale Conosco Agora
							</h3>
							<p className="text-green-100 mb-6 max-w-2xl mx-auto">
								Prefere falar diretamente? Clique abaixo e seja atendido imediatamente por nossa equipe!
							</p>
						<Button 
							onClick={handleWhatsAppClick}
								className="bg-white text-green-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105"
						>
								<MessageSquare className="w-6 h-6 mr-3" />
								Conversar Agora no WhatsApp
								<ArrowRight className="w-6 h-6 ml-3" />
						</Button>
						</div>
					</div>
				</div>
			</section>

								{/* Footer/Contact Section */}
			<section className="py-12 sm:py-16 bg-gray-800 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
						<div>
							<Phone className="w-8 h-8 mx-auto mb-4 text-yellow-custom" />
							<h3 className="font-semibold text-lg mb-2">WhatsApp - Táxi 24h</h3>
							<p className="text-gray-300 mb-4">{config.contact.phone}</p>
						<Button 
								onClick={handleWhatsAppClick}
								className="bg-green-600 hover:bg-green-700"
						>
								Conversar Agora
						</Button>
						</div>
						
						<div>
							<MapPin className="w-8 h-8 mx-auto mb-4 text-yellow-custom" />
							<h3 className="font-semibold text-lg mb-2">Nossa Base</h3>
							<p className="text-gray-300">Porto Seguro, Bahia</p>
							<p className="text-gray-300">Costa do Descobrimento</p>
						</div>
						
						<div>
							<Clock className="w-8 h-8 mx-auto mb-4 text-yellow-custom" />
							<h3 className="font-semibold text-lg mb-2">Funcionamento</h3>
							<p className="text-gray-300">🚖 Táxi: 24 horas por dia</p>
							<p className="text-gray-300">📱 WhatsApp: 6h às 22h</p>
						</div>
					</div>
					
					<div className="text-center mt-12 pt-8 border-t border-gray-700">
						<p className="text-gray-400">
							© 2024 Táxi Granjeiro. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
