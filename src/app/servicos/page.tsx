'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
	Plane, 
	MapPin, 
	Clock, 
	Users, 
	Shield, 
	Star, 
	Phone,
	Car,
	Heart,
	Luggage,
	Route,
	Calendar,
	CheckCircle,
	ArrowRight,
	Baby,
	Wifi,
	Snowflake
} from 'lucide-react'

export default function ServicosPage() {
	const services = [
		{
			icon: Plane,
			title: 'Transfer Aeroporto',
			description: 'Transporte seguro e pontual do/para o Aeroporto de Porto Seguro',
			features: [
				'Monitoramento de voos',
				'Motorista aguarda em caso de atraso',
				'Veículos com ar-condicionado',
				'Serviço 24 horas',
				'Bagageiro amplo'
			],
			routes: [
				'Aeroporto ↔ Trancoso',
				'Aeroporto ↔ Arraial d\'Ajuda', 
				'Aeroporto ↔ Caraíva',
				'Aeroporto ↔ Coroa Vermelha',
				'Aeroporto ↔ Porto Seguro Centro'
			],
			priceFrom: 'R$ 80',
			highlight: true
		},
		{
			icon: Route,
			title: 'Passeios e City Tour',
			description: 'Conheça os melhores pontos turísticos da região com guia local',
			features: [
				'Motorista guia experiente',
				'Roteiros personalizados',
				'Paradas para fotos',
				'Dicas de restaurantes e praias',
				'Flexibilidade de horários'
			],
			routes: [
				'City Tour Porto Seguro',
				'Praia do Espelho',
				'Centro Histórico',
				'Aldeia Indígena',
				'Praia de Pitinga'
			],
			priceFrom: 'R$ 150',
			highlight: false
		},
		{
			icon: Heart,
			title: 'Transfer para Eventos',
			description: 'Transporte especial para casamentos, formaturas e eventos',
			features: [
				'Planejamento antecipado',
				'Veículos decorados (opcional)',
				'Horários flexíveis',
				'Acompanhamento completo',
				'Desconto para grupos'
			],
			routes: [
				'Hotéis → Local do evento',
				'Aeroporto → Cerimônia',
				'Igreja → Festa',
				'Pousadas → Recepção',
				'Retorno pós-evento'
			],
			priceFrom: 'R$ 120',
			highlight: false
		},
		{
			icon: Users,
			title: 'Transfer para Grupos',
			description: 'Transporte confortável para grupos de até 14 pessoas',
			features: [
				'Vans espaçosas',
				'Ar-condicionado potente',
				'Som ambiente',
				'Carregador USB',
				'Preços especiais'
			],
			routes: [
				'Transfers coletivos',
				'Excursões familiares', 
				'Grupos de amigos',
				'Turismo corporativo',
				'Eventos empresariais'
			],
			priceFrom: 'R$ 200',
			highlight: false
		}
	]

	const differentials = [
		{
			icon: Shield,
			title: 'Segurança Total',
			description: 'Veículos com seguro completo, motoristas habilitados e monitoramento 24h'
		},
		{
			icon: Clock,
			title: 'Pontualidade',
			description: 'Horários rigorosamente cumpridos. Nunca perca seu voo ou compromisso'
		},
		{
			icon: Star,
			title: 'Experiência Local',
			description: 'Motoristas nativos com conhecimento profundo da região e suas belezas'
		},
		{
			icon: Baby,
			title: 'Família Completa',
			description: 'Cadeirinhas para bebês e crianças disponíveis sem custo adicional'
		},
		{
			icon: Wifi,
			title: 'Conforto Premium',
			description: 'Wi-Fi, carregadores USB, água gelada e ar-condicionado em todos os veículos'
		},
		{
			icon: Snowflake,
			title: 'Preços Transparentes',
			description: 'Sem taxas escondidas. Pagamento em dinheiro, PIX ou cartão'
		}
	]

	const handleWhatsAppClick = () => {
		const whatsappNumber = '5573999999999'
		const message = 'Olá! Gostaria de solicitar um orçamento para transfer.'
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
		window.open(url, '_blank')
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-teal-primary via-teal-600 to-teal-700 text-white py-16 lg:py-24">
				<div className="absolute inset-0 bg-black/20"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
							Nossos <span className="text-orange-300">Serviços</span>
						</h1>
						<p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
							Transfer seguro, pontual e confortável para todos os seus destinos na 
							Costa do Descobrimento. Mais de 10 anos conectando pessoas aos 
							lugares mais incríveis da Bahia.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button 
								onClick={handleWhatsAppClick}
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
							>
								<Phone className="w-5 h-5 mr-3" />
								Solicitar Orçamento
							</Button>
							<Button 
								variant="outline"
								size="lg"
								className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
							>
								<Calendar className="w-5 h-5 mr-3" />
								Agendar Transfer
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Tipos de Transfer
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Oferecemos diferentes modalidades de transporte para atender 
							todas as suas necessidades de viagem na região.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<Card 
								key={index} 
								className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
									service.highlight ? 'ring-2 ring-orange-500 transform scale-105' : ''
								}`}
							>
								{service.highlight && (
									<div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
										Mais Popular
									</div>
								)}
								
								<CardHeader className="pb-4">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
											<service.icon className="w-6 h-6 text-orange-600" />
										</div>
										<div>
											<CardTitle className="font-poppins text-xl">{service.title}</CardTitle>
											<p className="text-gray-600 text-sm">{service.description}</p>
										</div>
									</div>
								</CardHeader>
								
								<CardContent className="space-y-6">
									{/* Features */}
									<div>
										<h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
										<ul className="space-y-2">
											{service.features.map((feature, idx) => (
												<li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
													<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									
									{/* Routes */}
									<div>
										<h4 className="font-semibold text-gray-900 mb-3">Principais Rotas:</h4>
										<ul className="space-y-1">
											{service.routes.map((route, idx) => (
												<li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
													<ArrowRight className="w-3 h-3 text-orange-500" />
													{route}
												</li>
											))}
										</ul>
									</div>
									
									{/* Price and CTA */}
									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<div>
											<p className="text-sm text-gray-500">A partir de</p>
											<p className="text-2xl font-bold text-orange-600">{service.priceFrom}</p>
										</div>
										<Button 
											onClick={handleWhatsAppClick}
											className="bg-orange-600 hover:bg-orange-700"
										>
											Solicitar Orçamento
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Differentials */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Por que Escolher a Táxi Granjeiro?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Nossa experiência de mais de 10 anos nos tornou referência em 
							transfer na região. Veja nossos diferenciais:
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{differentials.map((item, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<item.icon className="w-8 h-8 text-orange-600" />
									</div>
									<CardTitle className="font-poppins">{item.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{item.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Fleet Info */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
								Nossa Frota
							</h2>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								Veículos modernos, confortáveis e sempre limpos para garantir 
								que sua viagem seja perfeita do início ao fim.
							</p>
							
							<div className="space-y-4 mb-8">
								<div className="flex items-center gap-3">
									<Car className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Sedans:</strong> Até 4 passageiros + bagagens</span>
								</div>
								<div className="flex items-center gap-3">
									<Users className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>SUVs:</strong> Até 7 passageiros + bagagens</span>
								</div>
								<div className="flex items-center gap-3">
									<Luggage className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Vans:</strong> Até 14 passageiros + bagagens</span>
								</div>
								<div className="flex items-center gap-3">
									<Snowflake className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Todos:</strong> Ar-condicionado e Wi-Fi</span>
								</div>
							</div>
							
							<Button 
								onClick={handleWhatsAppClick}
								size="lg"
								className="bg-orange-600 hover:bg-orange-700 font-semibold px-8 py-4"
							>
								<Phone className="w-5 h-5 mr-3" />
								Reservar Agora
							</Button>
						</div>
						
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl transform rotate-3"></div>
							<div className="relative bg-white rounded-2xl p-8 transform -rotate-3">
								<div className="text-center">
									<Shield className="w-16 h-16 text-orange-600 mx-auto mb-4" />
									<h3 className="font-poppins font-bold text-2xl mb-4 text-gray-900">
										100% Seguro e Confiável
									</h3>
									<div className="space-y-3 text-gray-700">
										<p>✓ Motoristas habilitados e experientes</p>
										<p>✓ Veículos com seguro total</p>
										<p>✓ Licenciamento em dia</p>
										<p>✓ Monitoramento 24 horas</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Final */}
			<section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
						Pronto para Viajar com Segurança?
					</h2>
					<p className="text-xl text-orange-100 mb-8 leading-relaxed">
						Entre em contato agora e garanta seu transfer. Atendimento personalizado, 
						preços justos e a experiência que você merece.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							onClick={handleWhatsAppClick}
							size="lg"
							className="bg-green-600 hover:bg-green-700 font-semibold px-8 py-4 text-lg"
						>
							<Phone className="w-5 h-5 mr-3" />
							WhatsApp (73) 99999-9999
						</Button>
						<Button 
							variant="outline"
							size="lg"
							className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
						>
							Ver Todas as Rotas
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
} 