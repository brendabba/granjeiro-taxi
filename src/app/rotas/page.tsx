'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
	MapPin, 
	Clock, 
	DollarSign, 
	Phone,
	Users,
	Luggage,
	Car,
	Route,
	Star,
	Info,
	ArrowRight,
	Navigation,
	Plane
} from 'lucide-react'

export default function RotasPage() {
	const mainRoutes = [
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Trancoso',
			distance: '65 km',
			duration: '45-50 min',
			sedan: 'R$ 120',
			suv: 'R$ 140',
			van: 'R$ 200',
			description: 'Vila charmosa com praias paradisíacas e centro histórico preservado',
			highlights: ['Quadrado histórico', 'Praia dos Coqueiros', 'Praia dos Nativos'],
			difficulty: 'Fácil',
			bestTime: 'Manhã e tarde'
		},
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Arraial d\'Ajuda',
			distance: '25 km',
			duration: '35-40 min',
			sedan: 'R$ 100',
			suv: 'R$ 120',
			van: 'R$ 160',
			description: 'Destino jovem e animado com vida noturna agitada e praias belíssimas',
			highlights: ['Rua do Mucugê', 'Praia de Pitinga', 'Eco Parque'],
			difficulty: 'Muito fácil',
			bestTime: 'Qualquer horário'
		},
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Caraíva',
			distance: '75 km',
			duration: '1h 20min',
			sedan: 'R$ 200',
			suv: 'R$ 230',
			van: 'R$ 300',
			description: 'Vila de pescadores rústica e preservada, sem carros nas ruas',
			highlights: ['Rio Caraíva', 'Praia virgem', 'Pôr do sol único'],
			difficulty: 'Moderada',
			bestTime: 'Manhã (melhor estrada)'
		},
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Coroa Vermelha',
			distance: '15 km',
			duration: '20-25 min',
			sedan: 'R$ 80',
			suv: 'R$ 100',
			van: 'R$ 130',
			description: 'Praia histórica onde foi celebrada a primeira missa do Brasil',
			highlights: ['Marco histórico', 'Artesanato indígena', 'Recifes de coral'],
			difficulty: 'Muito fácil',
			bestTime: 'Qualquer horário'
		},
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Centro de Porto Seguro',
			distance: '3 km',
			duration: '10-15 min',
			sedan: 'R$ 50',
			suv: 'R$ 60',
			van: 'R$ 80',
			description: 'Centro histórico com museus, igrejas e marcos do descobrimento',
			highlights: ['Centro histórico', 'Marco do descobrimento', 'Museus'],
			difficulty: 'Muito fácil',
			bestTime: 'Qualquer horário'
		},
		{
			from: 'Aeroporto de Porto Seguro',
			to: 'Praia do Espelho',
			distance: '55 km',
			duration: '50-60 min',
			sedan: 'R$ 150',
			suv: 'R$ 170',
			van: 'R$ 220',
			description: 'Uma das praias mais bonitas do Brasil com piscinas naturais',
			highlights: ['Piscinas naturais', 'Coqueirais', 'Águas cristalinas'],
			difficulty: 'Fácil',
			bestTime: 'Maré baixa (manhã)'
		}
	]

	const interCityRoutes = [
		{
			from: 'Trancoso',
			to: 'Arraial d\'Ajuda',
			distance: '12 km',
			duration: '15-20 min',
			price: 'R$ 60'
		},
		{
			from: 'Trancoso',
			to: 'Caraíva',
			distance: '18 km',
			duration: '25-30 min',
			price: 'R$ 80'
		},
		{
			from: 'Arraial d\'Ajuda',
			to: 'Caraíva',
			distance: '30 km',
			duration: '40-45 min',
			price: 'R$ 100'
		},
		{
			from: 'Trancoso',
			to: 'Praia do Espelho',
			distance: '15 km',
			duration: '20-25 min',
			price: 'R$ 70'
		}
	]

	const handleWhatsAppClick = (destination?: string) => {
		const whatsappNumber = '5511953156363'
		const message = destination 
			? `Olá! Gostaria de solicitar um orçamento para transfer para ${destination}.`
			: 'Olá! Gostaria de solicitar um orçamento para transfer.'
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
		window.open(url, '_blank')
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-16 lg:py-24">
				<div className="absolute inset-0 bg-black/20"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
							Rotas e <span className="text-yellow-300">Destinos</span>
						</h1>
						<p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
							Conectamos você aos principais destinos da Costa do Descobrimento 
							com preços transparentes e horários flexíveis. Conheça nossas rotas 
							e planeje sua viagem perfeita.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button 
								onClick={() => handleWhatsAppClick()}
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
							>
								<Phone className="w-5 h-5 mr-3" />
								Calcular Preço
							</Button>
							<Button 
								variant="outline"
								size="lg"
								className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
							>
								<Navigation className="w-5 h-5 mr-3" />
								Ver Mapa
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Main Routes from Airport */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<div className="flex items-center justify-center gap-3 mb-4">
							<Plane className="w-8 h-8 text-orange-600" />
							<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900">
								Saindo do Aeroporto
							</h2>
						</div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Rotas principais partindo do Aeroporto de Porto Seguro para os 
							destinos mais procurados da região. Preços por veículo (até os limites indicados).
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{mainRoutes.map((route, index) => (
							<Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
								<CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<CardTitle className="font-poppins text-xl text-gray-900 mb-2">
												{route.from} → {route.to}
											</CardTitle>
											<p className="text-gray-600 text-sm leading-relaxed">
												{route.description}
											</p>
										</div>
										<div className="text-right">
											<div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
												<Route className="w-4 h-4" />
												{route.distance}
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-600">
												<Clock className="w-4 h-4" />
												{route.duration}
											</div>
										</div>
									</div>
								</CardHeader>
								
								<CardContent className="p-6">
									{/* Highlights */}
									<div className="mb-6">
										<h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
											<Star className="w-4 h-4 text-orange-500" />
											Principais Atrações:
										</h4>
										<div className="flex flex-wrap gap-2">
											{route.highlights.map((highlight, idx) => (
												<span 
													key={idx}
													className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
												>
													{highlight}
												</span>
											))}
										</div>
									</div>

									{/* Vehicle Prices */}
									<div className="grid grid-cols-3 gap-4 mb-6">
										<div className="text-center p-3 bg-gray-50 rounded-lg">
											<Car className="w-5 h-5 text-gray-600 mx-auto mb-2" />
											<p className="text-xs text-gray-500 mb-1">Sedan (4 pax)</p>
											<p className="font-bold text-orange-600">{route.sedan}</p>
										</div>
										<div className="text-center p-3 bg-gray-50 rounded-lg">
											<Users className="w-5 h-5 text-gray-600 mx-auto mb-2" />
											<p className="text-xs text-gray-500 mb-1">SUV (7 pax)</p>
											<p className="font-bold text-orange-600">{route.suv}</p>
										</div>
										<div className="text-center p-3 bg-gray-50 rounded-lg">
											<Luggage className="w-5 h-5 text-gray-600 mx-auto mb-2" />
											<p className="text-xs text-gray-500 mb-1">Van (14 pax)</p>
											<p className="font-bold text-orange-600">{route.van}</p>
										</div>
									</div>

									{/* Route Info */}
									<div className="flex items-center justify-between mb-4 text-sm">
										<div className="flex items-center gap-2">
											<Info className="w-4 h-4 text-blue-500" />
											<span className="text-gray-600">Dificuldade: <strong>{route.difficulty}</strong></span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4 text-green-500" />
											<span className="text-gray-600">Melhor horário: <strong>{route.bestTime}</strong></span>
										</div>
									</div>

									<Button 
										onClick={() => handleWhatsAppClick(route.to)}
										className="w-full bg-orange-600 hover:bg-orange-700"
									>
										<Phone className="w-4 h-4 mr-2" />
										Solicitar Orçamento para {route.to}
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Inter-city Routes */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Transfers Entre Cidades
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Conectamos você entre os principais destinos turísticos da região. 
							Perfeito para quem quer conhecer múltiplas praias e vilas.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{interCityRoutes.map((route, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow duration-300">
								<CardContent className="p-6 text-center">
									<div className="mb-4">
										<ArrowRight className="w-8 h-8 text-orange-600 mx-auto mb-3" />
										<h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
											{route.from}
										</h3>
										<div className="text-orange-600 font-medium mb-2">para</div>
										<h3 className="font-poppins font-semibold text-lg text-gray-900">
											{route.to}
										</h3>
									</div>
									
									<div className="space-y-2 mb-4">
										<div className="flex items-center justify-center gap-2 text-sm text-gray-600">
											<Route className="w-4 h-4" />
											{route.distance}
										</div>
										<div className="flex items-center justify-center gap-2 text-sm text-gray-600">
											<Clock className="w-4 h-4" />
											{route.duration}
										</div>
									</div>
									
									<div className="mb-4">
										<p className="text-2xl font-bold text-orange-600">{route.price}</p>
										<p className="text-xs text-gray-500">Sedan (4 passageiros)</p>
									</div>
									
									<Button 
										onClick={() => handleWhatsAppClick(`${route.from} para ${route.to}`)}
										size="sm"
										className="w-full bg-orange-600 hover:bg-orange-700"
									>
										Reservar
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Info */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Informações Importantes
						</h2>
						<p className="text-xl text-gray-600">
							Tudo que você precisa saber sobre nossos transfers
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<DollarSign className="w-6 h-6 text-green-600" />
								</div>
								<CardTitle className="text-center font-poppins">Preços e Pagamento</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-3 text-gray-600">
								<p>• Preços por veículo, não por pessoa</p>
								<p>• Sem cobrança de bagagens extras</p>
								<p>• Pagamento: Dinheiro, PIX ou cartão</p>
								<p>• Desconto para grupos grandes</p>
								<p>• Sem taxas escondidas</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Clock className="w-6 h-6 text-blue-600" />
								</div>
								<CardTitle className="text-center font-poppins">Horários e Reservas</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-3 text-gray-600">
								<p>• Serviço 24 horas (aeroporto)</p>
								<p>• Reserva com 2h de antecedência</p>
								<p>• Monitoramento de voos</p>
								<p>• Tolerância de 15 min (grátis)</p>
								<p>• Reagendamento sem custo</p>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Users className="w-6 h-6 text-orange-600" />
								</div>
								<CardTitle className="text-center font-poppins">Capacidade dos Veículos</CardTitle>
							</CardHeader>
							<CardContent className="text-center space-y-3 text-gray-600">
								<p>• <strong>Sedan:</strong> 4 passageiros + 4 bagagens</p>
								<p>• <strong>SUV:</strong> 7 passageiros + 7 bagagens</p>
								<p>• <strong>Van:</strong> 14 passageiros + bagagens</p>
								<p>• Cadeirinha para bebês (grátis)</p>
								<p>• Todos com ar-condicionado</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Final */}
			<section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
						Pronto para Conhecer a Bahia?
					</h2>
					<p className="text-xl text-teal-100 mb-8 leading-relaxed">
						Entre em contato agora e garanta seu transfer. Nossa equipe vai ajudar 
						você a planejar a viagem perfeita pela Costa do Descobrimento.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							onClick={() => handleWhatsAppClick()}
							size="lg"
							className="bg-green-600 hover:bg-green-700 font-semibold px-8 py-4 text-lg"
						>
							<Phone className="w-5 h-5 mr-3" />
							Solicitar Orçamento
						</Button>
						<Button 
							variant="outline"
							size="lg"
							className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
						>
							Ver Todos os Serviços
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
} 