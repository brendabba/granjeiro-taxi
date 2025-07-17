'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { getImageUrl, generateBlurDataURL } from '@/lib/images'
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
			description: 'Motoristas experientes, Chevrolet Spin com seguro total e monitoramento 24h'
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
			icon: Car,
			title: 'Frota Chevrolet Spin',
			description: 'Veículos modernos para até 6 passageiros com todo conforto'
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
			to: 'Arraial d&apos;Ajuda',
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

	const handleWhatsAppClick = () => {
		const whatsappNumber = '5573999999999'
		const message = 'Olá! Gostaria de fazer um orçamento para uma viagem.'
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
		window.open(url, '_blank')
	}

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative text-white py-20 lg:py-32 overflow-hidden">
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
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="text-center lg:text-left">
							<h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
								Transfer Seguro e Pontual em{' '}
								<span className="text-yellow-300">Porto Seguro</span>
							</h1>
							<p className="text-xl md:text-2xl text-orange-100 mb-6 leading-relaxed">
								Conectamos você aos destinos mais incríveis da Costa do Descobrimento 
								com nossa frota exclusiva de <strong>Chevrolet Spin</strong>.
							</p>
							<p className="text-lg text-orange-200 mb-8">
								Conforto, segurança e o melhor atendimento da região com veículos para até 6 passageiros.
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
							principais destinos da Costa do Descobrimento com nossa frota Chevrolet Spin.
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
							Conectamos você aos destinos mais procurados da região com nosso Chevrolet Spin
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
										<p className="text-sm mt-1 opacity-90">{route.description}</p>
									</div>
								</div>
								<CardContent className="p-6">
									<div className="flex justify-between items-center mb-4">
										<span className="text-gray-600">Duração: {route.duration}</span>
										<span className="font-bold text-orange-600 text-lg">{route.price}</span>
									</div>
									<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
										<Car className="w-4 h-4" />
										<span>Chevrolet Spin - Até 6 passageiros</span>
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
						Entre em contato conosco e garanta já o seu transfer com nosso Chevrolet Spin. 
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
