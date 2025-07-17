'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
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

// Schema de validação para o formulário
const contactSchema = z.object({
	name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
	phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
	origin: z.string().min(2, 'Local de origem é obrigatório'),
	destination: z.string().min(2, 'Destino é obrigatório'),
	date: z.string().min(1, 'Data é obrigatória'),
	time: z.string().min(1, 'Horário é obrigatório'),
	passengers: z.string().min(1, 'Número de passageiros é obrigatório'),
	message: z.string().optional()
})

type ContactForm = z.infer<typeof contactSchema>

export default function HomePage() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactForm>({
		resolver: zodResolver(contactSchema)
	})

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

	const onSubmit = async (data: ContactForm) => {
		setIsSubmitting(true)

		// Formatar mensagem para WhatsApp
		const message = `
🚖 *SOLICITAÇÃO DE TRANSFER*

👤 *Nome:* ${data.name}
📱 *Telefone:* ${data.phone}

📍 *Origem:* ${data.origin}
🎯 *Destino:* ${data.destination}

📅 *Data:* ${data.date}
⏰ *Horário:* ${data.time}
👥 *Passageiros:* ${data.passengers}

${data.message ? `💬 *Observações:* ${data.message}` : ''}

_Aguardo seu orçamento! 😊_
		`.trim()

		// Simular carregamento por 1 segundo para melhor UX
		setTimeout(() => {
			const url = getWhatsAppUrl(message)
			window.open(url, '_blank')
			setIsSubmitting(false)
			reset()
		}, 1000)
	}

	const fillRoute = (from: string, to: string) => {
		const originInput = document.getElementById('origin') as HTMLInputElement
		const destinationInput = document.getElementById('destination') as HTMLInputElement
		
		if (originInput) originInput.value = from
		if (destinationInput) destinationInput.value = to
	}

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
									onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
									className="gradient-yellow-custom hover:gradient-yellow-custom-hover text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 button-mobile"
								>
									<Calendar className="w-5 h-5 mr-3" />
									Solicitar Transfer
								</Button>
								<Button
									onClick={handleWhatsAppClick}
									className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 button-mobile"
								>
									<MessageSquare className="w-5 h-5 mr-3" />
									WhatsApp Direto
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
											fillRoute(route.from, route.to)
											document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
										}}
										className="w-full bg-yellow-custom bg-yellow-custom-hover text-black font-semibold button-mobile"
									>
										Solicitar Orçamento
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

			{/* Contact Form Section */}
			<section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4">
							🚖 Solicite: Táxi • Transfer • Passeio • Viagem
						</h2>
						<p className="text-xl text-gray-600">
							<span className="font-semibold text-yellow-custom">Serviço 24 horas:</span> Preencha o formulário 
							e seja redirecionado para o WhatsApp com sua solicitação organizada
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<Card className="shadow-xl">
							<CardHeader className="gradient-yellow-custom text-black">
								<CardTitle className="text-2xl flex items-center justify-center">
									<MessageSquare className="w-6 h-6 mr-3" />
									Formulário de Solicitação
								</CardTitle>
								<p className="text-gray-800 text-center font-medium">
									Táxi 24h • Transfer • Passeios • Viagens - Preencha e seja redirecionado ao WhatsApp
								</p>
							</CardHeader>
							<CardContent className="p-6 sm:p-8 form-mobile">
								{/* Rotas Populares */}
								<div className="bg-yellow-custom-50 p-6 rounded-lg mb-8">
									<h3 className="font-semibold text-gray-800 mb-4 text-center">🚖 Rotas Populares - Táxi/Transfer/Passeio (clique para preencher):</h3>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
										{popularRoutes.map((route, index) => (
											<button
												key={index}
												type="button"
												onClick={() => fillRoute(route.from, route.to)}
												className="text-left text-sm bg-white p-3 rounded border hover:bg-yellow-custom-light hover:border-yellow-custom transition-colors"
											>
												{route.from} → {route.to}
											</button>
										))}
									</div>
								</div>

								<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
									{/* Informações Pessoais */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
										<div>
											<Label htmlFor="name" className="text-gray-700 font-medium">
												Nome Completo *
											</Label>
											<Input
												id="name"
												{...register('name')}
												className="mt-2"
												placeholder="Seu nome completo"
											/>
											{errors.name && (
												<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
											)}
										</div>

										<div>
											<Label htmlFor="phone" className="text-gray-700 font-medium">
												WhatsApp / Telefone *
											</Label>
											<Input
												id="phone"
												{...register('phone')}
												className="mt-2"
												placeholder="(73) 99938-4732"
											/>
											{errors.phone && (
												<p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
											)}
										</div>
									</div>

									{/* Origem e Destino */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
										<div>
											<Label htmlFor="origin" className="text-gray-700 font-medium">
												Local de Origem *
											</Label>
											<Input
												id="origin"
												{...register('origin')}
												className="mt-2"
												placeholder="Ex: Aeroporto de Porto Seguro"
											/>
											{errors.origin && (
												<p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
											)}
										</div>

										<div>
											<Label htmlFor="destination" className="text-gray-700 font-medium">
												Destino *
											</Label>
											<Input
												id="destination"
												{...register('destination')}
												className="mt-2"
												placeholder="Ex: Trancoso"
											/>
											{errors.destination && (
												<p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
											)}
										</div>
									</div>

									{/* Data e Horário */}
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
										<div>
											<Label htmlFor="date" className="text-gray-700 font-medium">
												Data da Viagem *
											</Label>
											<Input
												id="date"
												type="date"
												{...register('date')}
												className="mt-2"
											/>
											{errors.date && (
												<p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
											)}
										</div>

										<div>
											<Label htmlFor="time" className="text-gray-700 font-medium">
												Horário *
											</Label>
											<Input
												id="time"
												type="time"
												{...register('time')}
												className="mt-2"
											/>
											{errors.time && (
												<p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
											)}
										</div>

										<div>
											<Label htmlFor="passengers" className="text-gray-700 font-medium">
												Passageiros *
											</Label>
											<select
												id="passengers"
												{...register('passengers')}
												className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
											>
												<option value="">Selecione</option>
												<option value="1">1 passageiro</option>
												<option value="2">2 passageiros</option>
												<option value="3">3 passageiros</option>
												<option value="4">4 passageiros</option>
												<option value="5">5 passageiros</option>
												<option value="6">6 passageiros</option>
												<option value="7+">7 ou mais</option>
											</select>
											{errors.passengers && (
												<p className="text-red-500 text-sm mt-1">{errors.passengers.message}</p>
											)}
										</div>
									</div>

									{/* Observações */}
									<div>
										<Label htmlFor="message" className="text-gray-700 font-medium">
											Observações (opcional)
										</Label>
										<Textarea
											id="message"
											{...register('message')}
											className="mt-2"
											placeholder="Informações adicionais sobre sua viagem..."
											rows={4}
										/>
									</div>

									{/* Botão de Envio */}
									<Button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105 button-mobile form-mobile"
									>
										{isSubmitting ? (
											<>
												<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
												Preparando WhatsApp...
											</>
										) : (
											<>
												<MessageSquare className="w-5 h-5 mr-3" />
												Enviar via WhatsApp
												<ArrowRight className="w-5 h-5 ml-3" />
											</>
										)}
									</Button>

									{/* Aviso */}
									<div className="bg-yellow-custom-50 border border-yellow-custom rounded-lg p-4">
										<div className="flex items-start">
											<CheckCircle className="w-5 h-5 text-yellow-custom mt-0.5 mr-3" />
											<div>
												<h4 className="font-semibold text-gray-800">Como funciona:</h4>
												<p className="text-gray-700 text-sm mt-1">
													Ao clicar em &quot;Enviar via WhatsApp&quot;, você será redirecionado automaticamente 
													para o WhatsApp com uma mensagem organizada contendo todos os dados preenchidos. 
													Basta enviar para receber seu orçamento!
												</p>
											</div>
										</div>
									</div>
								</form>
							</CardContent>
						</Card>
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
