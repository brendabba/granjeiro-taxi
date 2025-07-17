'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
	Heart, 
	Shield, 
	Clock, 
	Users, 
	Star, 
	Phone,
	Award,
	MapPin,
	Calendar,
	Car,
	Target,
	Eye,
	CheckCircle,
	Quote
} from 'lucide-react'

export default function SobrePage() {
	const values = [
		{
			icon: Shield,
			title: 'Segurança',
			description: 'Priorizamos sempre a segurança dos nossos passageiros com veículos revisados e motoristas experientes.'
		},
		{
			icon: Clock,
			title: 'Pontualidade',
			description: 'Cumprimos rigorosamente os horários acordados. Sua viagem começa no tempo certo.'
		},
		{
			icon: Heart,
			title: 'Hospitalidade',
			description: 'Recebemos cada cliente como família, oferecendo o melhor da hospitalidade baiana.'
		},
		{
			icon: Star,
			title: 'Excelência',
			description: 'Buscamos constantemente a melhoria dos nossos serviços para superar expectativas.'
		}
	]

	const timeline = [
		{
			year: '2013',
			title: 'Início da Jornada',
			description: 'Fundação da Táxi Granjeiro com apenas um veículo e muita determinação.'
		},
		{
			year: '2016',
			title: 'Expansão da Frota',
			description: 'Crescimento para 5 veículos, atendendo mais turistas na região.'
		},
		{
			year: '2019',
			title: 'Reconhecimento',
			description: 'Primeira empresa de transfer a receber certificação de qualidade na região.'
		},
		{
			year: '2021',
			title: 'Era Digital',
			description: 'Implementação de tecnologia para agendamentos e acompanhamento de viagens.'
		},
		{
			year: '2024',
			title: 'Liderança Regional',
			description: 'Mais de 5.000 viagens realizadas e nota 4.9/5 nas avaliações dos clientes.'
		}
	]

	const team = [
		{
			name: 'João Granjeiro',
			role: 'Fundador e Diretor',
			experience: '15 anos',
			description: 'Natural de Porto Seguro, apaixonado pela região e pelo turismo baiano.'
		},
		{
			name: 'Maria Santos',
			role: 'Coordenadora de Operações',
			experience: '8 anos',
			description: 'Responsável pela qualidade do atendimento e satisfação dos clientes.'
		},
		{
			name: 'Carlos Silva',
			role: 'Motorista Sênior',
			experience: '12 anos',
			description: 'Especialista nas rotas da região, conhece cada praia e trilha.'
		},
		{
			name: 'Ana Oliveira',
			role: 'Atendimento ao Cliente',
			experience: '5 anos',
			description: 'Sempre disponível para ajudar com agendamentos e informações.'
		}
	]

	const achievements = [
		{
			icon: Users,
			number: '5.000+',
			title: 'Viagens Realizadas',
			description: 'Clientes satisfeitos em mais de 5 mil transfers'
		},
		{
			icon: Star,
			number: '4.9/5',
			title: 'Avaliação Média',
			description: 'Baseada em mais de 2.000 avaliações reais'
		},
		{
			icon: Calendar,
			number: '11 anos',
			title: 'No Mercado',
			description: 'Mais de uma década servindo a região'
		},
		{
			icon: Award,
			number: '15+',
			title: 'Prêmios Recebidos',
			description: 'Reconhecimento da qualidade dos nossos serviços'
		}
	]

	const handleWhatsAppClick = () => {
		const whatsappNumber = '5573999384732'
		const message = 'Olá! Gostaria de conhecer mais sobre a Táxi Granjeiro e solicitar um orçamento.'
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
							Sobre a <span className="text-yellow-300">Táxi Granjeiro</span>
						</h1>
						<p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
							Mais de 11 anos conectando pessoas aos destinos mais incríveis da 
							Costa do Descobrimento. Nossa história é feita de confiança, 
							segurança e amor pela Bahia.
						</p>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button 
								onClick={handleWhatsAppClick}
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300"
							>
								<Phone className="w-5 h-5 mr-3" />
								Falar Conosco
							</Button>
							<Button 
								variant="outline"
								size="lg"
								className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
							>
								<Car className="w-5 h-5 mr-3" />
								Conhecer Serviços
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Mission, Vision, Values */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Mission */}
						<Card className="text-center hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Target className="w-8 h-8 text-orange-600" />
								</div>
								<CardTitle className="font-poppins text-2xl">Nossa Missão</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 leading-relaxed">
									Proporcionar experiências de viagem seguras, confortáveis e memoráveis, 
									conectando nossos clientes aos destinos mais belos da Bahia com 
									excelência no atendimento e conhecimento local especializado.
								</p>
							</CardContent>
						</Card>

						{/* Vision */}
						<Card className="text-center hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Eye className="w-8 h-8 text-teal-600" />
								</div>
								<CardTitle className="font-poppins text-2xl">Nossa Visão</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 leading-relaxed">
									Ser reconhecida como a principal empresa de transfer da Costa do 
									Descobrimento, sendo referência em qualidade, segurança e 
									hospitalidade, contribuindo para o desenvolvimento do turismo regional.
								</p>
							</CardContent>
						</Card>

						{/* Values */}
						<Card className="text-center hover:shadow-lg transition-shadow duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Heart className="w-8 h-8 text-green-600" />
								</div>
								<CardTitle className="font-poppins text-2xl">Nossos Valores</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 leading-relaxed">
									Pautamos nossas ações na segurança, pontualidade, hospitalidade 
									e excelência. Cada viagem é uma oportunidade de criar momentos 
									especiais e superar as expectativas dos nossos clientes.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
								Nossa História
							</h2>
							<div className="space-y-6 text-gray-600 leading-relaxed">
								<p>
									A <strong>Táxi Granjeiro</strong> nasceu em 2013 do sonho de João Granjeiro, 
									um porto-segurense apaixonado por sua terra natal. Observando a crescente 
									demanda por transporte de qualidade na região turística, João decidiu 
									criar uma empresa que oferecesse mais do que simples transfers.
								</p>
								<p>
									Com apenas um veículo e muito conhecimento local, começamos atendendo 
									turistas no aeroporto. A diferença estava no atendimento personalizado, 
									nas dicas valiosas sobre a região e na pontualidade que rapidamente 
									nos tornou referência.
								</p>
								<p>
									Hoje, com uma frota moderna e uma equipe dedicada, já realizamos mais 
									de 5.000 viagens, sempre mantendo os valores que nos trouxeram até aqui: 
									<strong>segurança, confiança e amor pela Bahia</strong>.
								</p>
							</div>
							
							<div className="mt-8">
								<Button 
									onClick={handleWhatsAppClick}
									size="lg"
									className="bg-orange-600 hover:bg-orange-700 font-semibold px-8 py-4"
								>
									<Phone className="w-5 h-5 mr-3" />
									Fazer Parte da História
								</Button>
							</div>
						</div>
						
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl transform rotate-3"></div>
							<div className="relative bg-white rounded-2xl p-8 transform -rotate-3">
								<div className="text-center">
									<Quote className="w-12 h-12 text-orange-600 mx-auto mb-4" />
									<blockquote className="text-lg text-gray-700 italic mb-4">
										"Nossa missão sempre foi mostrar as belezas da nossa terra 
										com o carinho e cuidado que ela merece. Cada cliente que 
										transportamos leva um pouco da Bahia no coração."
									</blockquote>
									<cite className="font-semibold text-orange-600">
										João Granjeiro, Fundador
									</cite>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Nossa Trajetória
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Acompanhe os principais marcos da nossa jornada ao longo dos anos
						</p>
					</div>

					<div className="space-y-8">
						{timeline.map((item, index) => (
							<div key={index} className="flex items-start gap-8">
								<div className="flex-shrink-0">
									<div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
										{item.year}
									</div>
								</div>
								<Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
									<CardHeader>
										<CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-gray-600">{item.description}</p>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Values Detail */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Nossos Pilares
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Os valores que guiam cada decisão e cada viagem que realizamos
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
								<CardHeader>
									<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<value.icon className="w-8 h-8 text-orange-600" />
									</div>
									<CardTitle className="font-poppins">{value.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">{value.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Nossa Equipe
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Profissionais dedicados que fazem a diferença em cada viagem
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{team.map((member, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-white font-bold text-2xl">
											{member.name.split(' ').map(n => n[0]).join('')}
										</span>
									</div>
									<CardTitle className="font-poppins">{member.name}</CardTitle>
									<p className="text-orange-600 font-medium">{member.role}</p>
									<p className="text-sm text-gray-500">{member.experience} de experiência</p>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-sm">{member.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Nossos Números
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Resultados que demonstram nossa dedicação e qualidade
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{achievements.map((achievement, index) => (
							<Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
								<CardContent className="p-8">
									<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<achievement.icon className="w-8 h-8 text-orange-600" />
									</div>
									<h3 className="font-poppins font-bold text-3xl text-orange-600 mb-2">
										{achievement.number}
									</h3>
									<h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
									<p className="text-gray-600 text-sm">{achievement.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Final */}
			<section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
						Faça Parte da Nossa História
					</h2>
					<p className="text-xl text-teal-100 mb-8 leading-relaxed">
						Junte-se aos milhares de clientes que já confiaram na Táxi Granjeiro 
						para tornar suas viagens inesquecíveis. Estamos prontos para cuidar 
						da sua próxima aventura na Bahia.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							onClick={handleWhatsAppClick}
							size="lg"
							className="bg-green-600 hover:bg-green-700 font-semibold px-8 py-4 text-lg"
						>
							<Phone className="w-5 h-5 mr-3" />
							Agendar Transfer
						</Button>
						<Button 
							variant="outline"
							size="lg"
							className="border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-teal-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
						>
							Conhecer Serviços
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
} 