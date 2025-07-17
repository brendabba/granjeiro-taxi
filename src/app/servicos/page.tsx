'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
	Plane, 
	MapPin, 
	Users,
	Car,
	Clock,
	Shield,
	CheckCircle,
	ArrowRight,
	Phone,
	Calendar,
	Luggage,
	Snowflake,
	Star,
	Heart
} from 'lucide-react'

export default function ServicosPage() {
	const services = [
		{
			icon: Plane,
			title: 'Transfer Aeroporto',
			description: 'Transporte direto do Aeroporto de Porto Seguro para seu destino',
			features: [
				'Motorista aguardando na chegada',
				'Monitoramento de voos',
				'Veículo Chevrolet Spin climatizado',
				'Até 6 passageiros + bagagens',
				'Água e Wi-Fi gratuitos'
			],
			routes: [
				'Aeroporto → Trancoso',
				'Aeroporto → Arraial d\'Ajuda', 
				'Aeroporto → Caraíva',
				'Aeroporto → Porto Seguro Centro'
			],
			priceFrom: 'R$ 100'
		},
		{
			icon: MapPin,
			title: 'City Tour',
			description: 'Conheça os principais pontos turísticos da região com nosso guia',
			features: [
				'Roteiro personalizado',
				'Guia local experiente',
				'Paradas para fotos',
				'Dicas de restaurantes e atrações',
				'Flexibilidade de horários'
			],
			routes: [
				'Centro Histórico de Porto Seguro',
				'Passarela do Descobrimento',
				'Coroa Vermelha',
				'Santa Cruz Cabrália'
			],
			priceFrom: 'R$ 200'
		},
		{
			icon: Users,
			title: 'Transfer Entre Destinos',
			description: 'Deslocamento confortável entre praias e vilarejos da região',
			features: [
				'Chevrolet Spin para até 6 pessoas',
				'Ar condicionado e música',
				'Motorista conhecedor da região',
				'Horários flexíveis',
				'Preços por veículo, não por pessoa'
			],
			routes: [
				'Trancoso ↔ Arraial d\'Ajuda',
				'Trancoso ↔ Caraíva',
				'Porto Seguro ↔ Qualquer destino',
				'Transfers noturnos disponíveis'
			],
			priceFrom: 'R$ 80'
		},
		{
			icon: Clock,
			title: 'Disponível 24h',
			description: 'Serviço de transfer disponível todos os dias, 24 horas',
			features: [
				'Emergências e urgências',
				'Transfers para hospitais',
				'Voos de madrugada',
				'Eventos e festas',
				'Sempre um Chevrolet Spin disponível'
			],
			routes: [
				'Emergências médicas',
				'Voos noturnos/madrugada',
				'Eventos especiais',
				'Qualquer horário, qualquer destino'
			],
			priceFrom: 'R$ 120'
		}
	]

	const differentials = [
		{
			icon: Car,
			title: 'Frota Chevrolet Spin',
			description: 'Veículos modernos, espaçosos e confortáveis para até 6 passageiros'
		},
		{
			icon: Shield,
			title: 'Motoristas Experientes',
			description: 'Profissionais qualificados com mais de 10 anos de experiência na região'
		},
		{
			icon: Star,
			title: 'Nota 4.9/5',
			description: 'Mais de 2.000 avaliações positivas de clientes satisfeitos'
		},
		{
			icon: Heart,
			title: 'Atendimento Familiar',
			description: 'Tratamento personalizado e caloroso típico da hospitalidade baiana'
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
							Transfer seguro, pontual e confortável com nossa frota exclusiva de 
							Chevrolet Spin para todos os seus destinos na Costa do Descobrimento.
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
							Nossos Serviços
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Transfer completo com Chevrolet Spin para todas as suas necessidades
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
							Nossa experiência e frota Chevrolet Spin fazem toda a diferença
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

			{/* Fleet Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
								Nossa Frota Chevrolet Spin
							</h2>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								Trabalhamos exclusivamente com Chevrolet Spin, o veículo ideal 
								para famílias e grupos de até 6 pessoas. Moderno, espaçoso e 
								sempre impecavelmente limpo.
							</p>
							
							<div className="space-y-4 mb-8">
								<div className="flex items-center gap-3">
									<Users className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Capacidade:</strong> Até 6 passageiros confortavelmente</span>
								</div>
								<div className="flex items-center gap-3">
									<Luggage className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Bagagem:</strong> Amplo porta-malas para todas as bagagens</span>
								</div>
								<div className="flex items-center gap-3">
									<Snowflake className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Conforto:</strong> Ar-condicionado digital e bancos reclináveis</span>
								</div>
								<div className="flex items-center gap-3">
									<Shield className="w-5 h-5 text-orange-600" />
									<span className="text-gray-700"><strong>Segurança:</strong> Airbags, ABS e revisões em dia</span>
								</div>
							</div>
							
							<Button 
								onClick={handleWhatsAppClick}
								size="lg"
								className="bg-orange-600 hover:bg-orange-700 font-semibold px-8 py-4"
							>
								<Phone className="w-5 h-5 mr-3" />
								Reservar Chevrolet Spin
							</Button>
						</div>
						
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl transform rotate-3"></div>
							<div className="relative bg-white rounded-2xl p-8 transform -rotate-3">
								<div className="text-center">
									<Car className="w-16 h-16 text-orange-600 mx-auto mb-4" />
									<h3 className="font-poppins font-bold text-2xl mb-4 text-gray-900">
										Chevrolet Spin Exclusivo
									</h3>
									<div className="space-y-3 text-gray-700">
										<p>✓ Modelo 2020 ou superior</p>
										<p>✓ Manutenção preventiva rigorosa</p>
										<p>✓ Limpeza e higienização após cada viagem</p>
										<p>✓ Seguro total e motorista habilitado</p>
										<p>✓ Wi-Fi e água cortesia</p>
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
						Pronto para Viajar com Conforto?
					</h2>
					<p className="text-xl text-orange-100 mb-8 leading-relaxed">
						Reserve já seu Chevrolet Spin e viaje com total segurança e conforto 
						pela Costa do Descobrimento. Atendimento personalizado e preços justos.
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