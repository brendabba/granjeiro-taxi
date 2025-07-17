'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
	ArrowRight
} from 'lucide-react'

export default function HomePage() {
	const benefits = [
		{
			icon: Shield,
			title: 'Segurança Garantida',
			description: 'Motoristas experientes, veículos com seguro total e monitoramento 24h'
		},
		{
			icon: Clock,
			title: 'Pontualidade',
			description: 'Nunca perca seu voo. Horários rigorosamente cumpridos'
		},
		{
			icon: Star,
			title: 'Nota 4.9/5',
			description: 'Mais de 2.000 avaliações positivas no Google'
		},
		{
			icon: Users,
			title: 'Conhecimento Local',
			description: 'Motoristas nativos da região com dicas exclusivas'
		}
	]

	const routes = [
		{
			from: 'Aeroporto',
			to: 'Trancoso',
			duration: '45 min',
			price: 'A partir de R$ 120',
			image: '/images/trancoso.jpg'
		},
		{
			from: 'Aeroporto',
			to: 'Arraial d\'Ajuda',
			duration: '35 min',
			price: 'A partir de R$ 100',
			image: '/images/arraial.jpg'
		},
		{
			from: 'Aeroporto',
			to: 'Caraíva',
			duration: '1h 30min',
			price: 'A partir de R$ 200',
			image: '/images/caraiva.jpg'
		}
	]

	const handleWhatsAppClick = () => {
		const whatsappNumber = '5573999999999'
		const message = 'Olá! Gostaria de fazer um orçamento para uma viagem.'
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
		window.open(url, '_blank')
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-20 lg:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="text-center lg:text-left">
							<h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
								Transfer Seguro e Pontual em{' '}
								<span className="text-yellow-300">Porto Seguro</span>
							</h1>
							<p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
								Conectamos você aos destinos mais incríveis da Costa do Descobrimento 
								com conforto, segurança e o melhor atendimento da região.
							</p>
							
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Button 
									onClick={handleWhatsAppClick}
									size="lg"
									className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
								>
									<Phone className="w-5 h-5 mr-3" />
									Agendar Agora no WhatsApp
								</Button>
								<Button 
									variant="outline"
									size="lg"
									className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
								>
									Ver Rotas e Preços
									<ArrowRight className="w-5 h-5 ml-3" />
								</Button>
							</div>

							<div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-orange-100">
								<div className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-400" />
									<span>Disponível 24h</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-green-400" />
									<span>Preços Transparentes</span>
								</div>
							</div>
						</div>

						<div className="relative lg:h-96">
							<div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl transform rotate-3"></div>
							<div className="relative bg-white rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
								<div className="text-center text-gray-900">
									<Car className="w-16 h-16 text-orange-600 mx-auto mb-4" />
									<h3 className="font-poppins font-bold text-2xl mb-4">
										Mais de 5.000 viagens realizadas
									</h3>
									<div className="flex justify-center items-center gap-1 mb-4">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
										))}
										<span className="ml-2 font-semibold">4.9/5</span>
									</div>
									<p className="text-gray-600">
										A confiança dos nossos clientes é nossa maior conquista
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Por que escolher o Táxi Granjeiro?
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Mais de 10 anos de experiência levando turistas e moradores aos 
							principais destinos da Costa do Descobrimento com total segurança.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{benefits.map((benefit, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<benefit.icon className="w-8 h-8 text-orange-600" />
									</div>
									<CardTitle className="font-poppins">{benefit.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{benefit.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Popular Routes Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Rotas Mais Populares
						</h2>
						<p className="text-xl text-gray-600">
							Conectamos você aos destinos mais procurados da região
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{routes.map((route, index) => (
							<Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
								<div className="relative h-48 bg-gradient-to-r from-orange-400 to-orange-600">
									<div className="absolute inset-0 bg-black/20"></div>
									<div className="absolute bottom-4 left-4 text-white">
										<MapPin className="w-5 h-5 inline mr-2" />
										<span className="font-semibold">{route.from} → {route.to}</span>
									</div>
								</div>
								<CardContent className="p-6">
									<div className="flex justify-between items-center mb-4">
										<span className="text-gray-600">Duração: {route.duration}</span>
										<span className="font-bold text-orange-600 text-lg">{route.price}</span>
									</div>
									<Button 
										onClick={handleWhatsAppClick}
										className="w-full bg-orange-600 hover:bg-orange-700"
									>
										Solicitar Orçamento
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-teal-primary to-teal-600 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<Heart className="w-16 h-16 text-orange-300 mx-auto mb-6" />
					<h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
						Pronto para sua próxima aventura?
					</h2>
					<p className="text-xl text-teal-100 mb-8 leading-relaxed">
						Entre em contato conosco e garante já o seu transfer. 
						Atendimento personalizado e preços especiais para grupos.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							onClick={handleWhatsAppClick}
							size="lg"
							className="bg-green-600 hover:bg-green-700 font-semibold px-8 py-4 text-lg"
						>
							<Phone className="w-5 h-5 mr-3" />
							Chamar no WhatsApp
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
