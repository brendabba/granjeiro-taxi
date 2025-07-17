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
	Phone, 
	Mail, 
	MapPin, 
	Clock, 
	Send,
	CheckCircle,
	Car,
	Users,
	Calendar,
	MessageSquare,
	ArrowRight
} from 'lucide-react'

// Schema de validação com Zod
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

export default function ContatoPage() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactForm>({
		resolver: zodResolver(contactSchema)
	})

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

	const popularRoutes = [
		{ from: 'Aeroporto de Porto Seguro', to: 'Trancoso' },
		        { from: 'Aeroporto de Porto Seguro', to: 'Arraial d\'Ajuda' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Caraíva' },
		{ from: 'Aeroporto de Porto Seguro', to: 'Centro de Porto Seguro' },
		{ from: 'Centro de Porto Seguro', to: 'Trancoso' },
		        { from: 'Trancoso', to: 'Arraial d\'Ajuda' }
	]

	const fillRoute = (from: string, to: string) => {
		const originInput = document.getElementById('origin') as HTMLInputElement
		const destinationInput = document.getElementById('destination') as HTMLInputElement
		
		if (originInput) originInput.value = from
		if (destinationInput) destinationInput.value = to
	}

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
			icon: Mail,
			title: 'Email',
			value: config.contact.email,
			description: 'Para dúvidas e informações',
			action: () => window.open(`mailto:${config.contact.email}`, '_blank')
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
						Solicite seu Transfer
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Preencha o formulário abaixo e seja redirecionado automaticamente para o WhatsApp 
						com todas as informações organizadas. Resposta garantida em poucos minutos!
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8 mb-16">
					{/* Formulário Principal */}
					<div className="lg:col-span-2">
						<Card className="shadow-xl">
							<CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
								<CardTitle className="text-2xl flex items-center">
									<MessageSquare className="w-6 h-6 mr-3" />
									Formulário de Solicitação
								</CardTitle>
								<p className="text-orange-100">
									Preencha os dados e seja redirecionado para o WhatsApp
								</p>
							</CardHeader>
							<CardContent className="p-8">
								<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									{/* Informações Pessoais */}
									<div className="grid md:grid-cols-2 gap-6">
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

									{/* Rotas Populares */}
									<div className="bg-gray-50 p-4 rounded-lg">
										<h3 className="font-semibold text-gray-800 mb-3">🔥 Rotas Populares (clique para preencher):</h3>
										<div className="grid sm:grid-cols-2 gap-2">
											{popularRoutes.map((route, index) => (
												<button
													key={index}
													type="button"
													onClick={() => fillRoute(route.from, route.to)}
													className="text-left text-sm bg-white p-2 rounded border hover:bg-orange-50 hover:border-orange-300 transition-colors"
												>
													{route.from} → {route.to}
												</button>
											))}
										</div>
									</div>

									{/* Origem e Destino */}
									<div className="grid md:grid-cols-2 gap-6">
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
									<div className="grid md:grid-cols-3 gap-6">
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
										className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105"
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
									<div className="bg-green-50 border border-green-200 rounded-lg p-4">
										<div className="flex items-start">
											<CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
											<div>
												<h4 className="font-semibold text-green-800">Como funciona:</h4>
												<p className="text-green-700 text-sm mt-1">
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

					{/* Informações de Contato */}
					<div className="space-y-6">
						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-xl text-gray-900">
									Outras Formas de Contato
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{contactInfo.map((item, index) => (
									<div
										key={index}
										onClick={item.action}
										className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
											item.title === 'WhatsApp' || item.title === 'Email'
												? 'bg-orange-50 hover:bg-orange-100 cursor-pointer border border-orange-200'
												: 'bg-gray-50 border border-gray-200'
										}`}
									>
										<item.icon className="w-6 h-6 text-orange-600 mt-1 mr-4" />
										<div className="flex-1">
											<h3 className="font-semibold text-gray-900">{item.title}</h3>
											<p className="text-gray-800 font-medium">{item.value}</p>
											<p className="text-sm text-gray-600">{item.description}</p>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Destaque WhatsApp */}
						<Card className="shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
							<CardContent className="p-6 text-center">
								<MessageSquare className="w-12 h-12 mx-auto mb-4" />
								<h3 className="font-bold text-xl mb-2">WhatsApp Direto</h3>
								<p className="text-green-100 mb-4">
									Precisa de algo rápido? Fale conosco agora mesmo!
								</p>
								<Button
									onClick={() => {
										const url = getWhatsAppUrl('Olá! Preciso de informações sobre transfer.')
										window.open(url, '_blank')
									}}
									className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
								>
									<Phone className="w-4 h-4 mr-2" />
									Conversar Agora
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
