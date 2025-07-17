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
	AlertCircle,
	Car,
	Users,
	Calendar,
	MessageSquare,
	Loader2
} from 'lucide-react'

// Schema de validação com Zod
const contactSchema = z.object({
	name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
	email: z.string().email('Email inválido'),
	phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
	origin: z.string().min(2, 'Local de origem é obrigatório'),
	destination: z.string().min(2, 'Destino é obrigatório'),
	date: z.string().min(1, 'Data é obrigatória'),
	time: z.string().min(1, 'Horário é obrigatório'),
	passengers: z.string().min(1, 'Número de passageiros é obrigatório'),
	vehicleType: z.string().min(1, 'Tipo de veículo é obrigatório'),
	message: z.string().optional()
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContatoPage() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactForm>({
		resolver: zodResolver(contactSchema)
	})

	const vehicleOptions = [
		{ value: 'sedan', label: 'Sedan (até 4 passageiros)' },
		{ value: 'suv', label: 'SUV (até 7 passageiros)' },
		{ value: 'van', label: 'Van (até 14 passageiros)' }
	]

	const onSubmit = async (data: ContactForm) => {
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			// Usar configuração centralizada do Formspree
			const formspreeUrl = config.formspree.url()
			
			const response = await fetch(formspreeUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					phone: data.phone,
					origin: data.origin,
					destination: data.destination,
					date: data.date,
					time: data.time,
					passengers: data.passengers,
					vehicleType: vehicleOptions.find(v => v.value === data.vehicleType)?.label,
					message: data.message || 'Nenhuma observação',
					_subject: `Nova solicitação de transfer: ${data.origin} → ${data.destination}`,
					_replyto: data.email,
					_format: 'plain'
				}),
			})

			if (response.ok) {
				setSubmitStatus('success')
				reset()
				
				// Também enviar para WhatsApp como backup
				const message = `
Olá! Gostaria de solicitar um orçamento:

👤 Nome: ${data.name}
📧 Email: ${data.email}
📱 Telefone: ${data.phone}
📍 Origem: ${data.origin}
🎯 Destino: ${data.destination}
📅 Data: ${data.date}
⏰ Horário: ${data.time}
👥 Passageiros: ${data.passengers}
🚗 Veículo: ${vehicleOptions.find(v => v.value === data.vehicleType)?.label}
${data.message ? `💬 Observações: ${data.message}` : ''}
				`.trim()

				// Abrir WhatsApp após 2 segundos
				setTimeout(() => {
					const url = getWhatsAppUrl(message)
					window.open(url, '_blank')
				}, 2000)
			} else {
				const errorData = await response.json()
				throw new Error(errorData.error || 'Erro ao enviar formulário')
			}
		} catch (error) {
			console.error('Erro no envio:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	const contactInfo = [
		{
			icon: Phone,
			title: 'Telefone / WhatsApp',
			value: config.contact.phone,
			link: `tel:+${config.contact.whatsapp}`
		},
		{
			icon: Mail,
			title: 'Email',
			value: config.contact.email,
			link: `mailto:${config.contact.email}`
		},
		{
			icon: MapPin,
			title: 'Localização',
			value: 'Porto Seguro, Bahia',
			link: '#'
		},
		{
			icon: Clock,
			title: 'Atendimento',
			value: '24 horas (Aeroporto)',
			link: '#'
		}
	]

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 text-white py-16 lg:py-24">
				<div className="absolute inset-0 bg-black/20"></div>
				
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
							Entre em <span className="text-orange-300">Contato</span>
						</h1>
						<p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
							Estamos prontos para tornar sua viagem inesquecível. 
							Solicite seu orçamento ou tire suas dúvidas conosco.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Contact Form */}
						<div className="lg:col-span-2">
							<Card className="hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<CardTitle className="font-poppins text-2xl flex items-center gap-3">
										<Send className="w-6 h-6 text-orange-600" />
										Solicitar Orçamento
									</CardTitle>
									<p className="text-gray-600">
										Preencha o formulário abaixo e receba um orçamento personalizado
									</p>
								</CardHeader>
								<CardContent>
									<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
										{/* Nome e Email */}
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<Label htmlFor="name">Nome Completo *</Label>
												<Input
													id="name"
													{...register('name')}
													placeholder="Seu nome completo"
													className={errors.name ? 'border-red-500' : ''}
												/>
												{errors.name && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.name.message}
													</p>
												)}
											</div>
											<div>
												<Label htmlFor="email">Email *</Label>
												<Input
													id="email"
													type="email"
													{...register('email')}
													placeholder="seu@email.com"
													className={errors.email ? 'border-red-500' : ''}
												/>
												{errors.email && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.email.message}
													</p>
												)}
											</div>
										</div>

										{/* Telefone */}
										<div>
											<Label htmlFor="phone">Telefone/WhatsApp *</Label>
											<Input
												id="phone"
												{...register('phone')}
												placeholder="(73) 99999-9999"
												className={errors.phone ? 'border-red-500' : ''}
											/>
											{errors.phone && (
												<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
													<AlertCircle className="w-4 h-4" />
													{errors.phone.message}
												</p>
											)}
										</div>

										{/* Origem e Destino */}
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<Label htmlFor="origin">Origem *</Label>
												<Input
													id="origin"
													{...register('origin')}
													placeholder="Aeroporto, Hotel, etc."
													className={errors.origin ? 'border-red-500' : ''}
												/>
												{errors.origin && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.origin.message}
													</p>
												)}
											</div>
											<div>
												<Label htmlFor="destination">Destino *</Label>
												<Input
													id="destination"
													{...register('destination')}
													placeholder="Trancoso, Arraial, etc."
													className={errors.destination ? 'border-red-500' : ''}
												/>
												{errors.destination && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.destination.message}
													</p>
												)}
											</div>
										</div>

										{/* Data e Hora */}
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<Label htmlFor="date">Data da Viagem *</Label>
												<Input
													id="date"
													type="date"
													{...register('date')}
													className={errors.date ? 'border-red-500' : ''}
												/>
												{errors.date && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.date.message}
													</p>
												)}
											</div>
											<div>
												<Label htmlFor="time">Horário *</Label>
												<Input
													id="time"
													type="time"
													{...register('time')}
													className={errors.time ? 'border-red-500' : ''}
												/>
												{errors.time && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.time.message}
													</p>
												)}
											</div>
										</div>

										{/* Passageiros e Veículo */}
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<Label htmlFor="passengers">Número de Passageiros *</Label>
												<select
													id="passengers"
													{...register('passengers')}
													className={`w-full px-3 py-2 border rounded-md ${errors.passengers ? 'border-red-500' : 'border-gray-300'}`}
												>
													<option value="">Selecione</option>
													{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => (
														<option key={num} value={num}>{num} passageiro{num > 1 ? 's' : ''}</option>
													))}
												</select>
												{errors.passengers && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.passengers.message}
													</p>
												)}
											</div>
											<div>
												<Label htmlFor="vehicleType">Tipo de Veículo *</Label>
												<select
													id="vehicleType"
													{...register('vehicleType')}
													className={`w-full px-3 py-2 border rounded-md ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'}`}
												>
													<option value="">Selecione</option>
													{vehicleOptions.map(option => (
														<option key={option.value} value={option.value}>
															{option.label}
														</option>
													))}
												</select>
												{errors.vehicleType && (
													<p className="text-red-500 text-sm mt-1 flex items-center gap-1">
														<AlertCircle className="w-4 h-4" />
														{errors.vehicleType.message}
													</p>
												)}
											</div>
										</div>

										{/* Mensagem */}
										<div>
											<Label htmlFor="message">Observações (opcional)</Label>
											<Textarea
												id="message"
												{...register('message')}
												placeholder="Alguma informação adicional, necessidades especiais, etc."
												rows={4}
											/>
										</div>

										{/* Status Messages */}
										{submitStatus === 'success' && (
											<div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
												<CheckCircle className="w-5 h-5 text-green-600" />
												<p className="text-green-800">
													Solicitação enviada com sucesso! Você será redirecionado para o WhatsApp.
												</p>
											</div>
										)}

										{submitStatus === 'error' && (
											<div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
												<AlertCircle className="w-5 h-5 text-red-600" />
												<p className="text-red-800">
													Erro ao enviar solicitação. Tente novamente ou entre em contato via WhatsApp.
												</p>
											</div>
										)}

										{/* Submit Button */}
										<Button 
											type="submit" 
											size="lg"
											disabled={isSubmitting}
											className="w-full bg-orange-600 hover:bg-orange-700 font-semibold"
										>
											{isSubmitting ? (
												<>
													<Loader2 className="w-5 h-5 mr-2 animate-spin" />
													Enviando...
												</>
											) : (
												<>
													<Send className="w-5 h-5 mr-2" />
													Solicitar Orçamento
												</>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>

						{/* Contact Information */}
						<div className="space-y-6">
							<Card className="hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<CardTitle className="font-poppins text-xl flex items-center gap-3">
										<MessageSquare className="w-5 h-5 text-orange-600" />
										Fale Conosco
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									{contactInfo.map((item, index) => (
										<div key={index} className="flex items-start gap-3">
											<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
												<item.icon className="w-5 h-5 text-orange-600" />
											</div>
											<div>
												<h4 className="font-semibold text-gray-900">{item.title}</h4>
												{item.link !== '#' ? (
													<a 
														href={item.link}
														className="text-orange-600 hover:text-orange-700 transition-colors"
													>
														{item.value}
													</a>
												) : (
													<p className="text-gray-600">{item.value}</p>
												)}
											</div>
										</div>
									))}
								</CardContent>
							</Card>

							{/* Quick Actions */}
							<Card className="hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<CardTitle className="font-poppins text-xl">Ações Rápidas</CardTitle>
								</CardHeader>
								<CardContent className="space-y-3">
									<Button 
										className="w-full bg-green-600 hover:bg-green-700"
										onClick={() => window.open(getWhatsAppUrl(), '_blank')}
									>
										<Phone className="w-4 h-4 mr-2" />
										WhatsApp Direto
									</Button>
									<Button 
										variant="outline"
										className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
										onClick={() => window.open(`tel:+${config.contact.whatsapp}`, '_self')}
									>
										<Phone className="w-4 h-4 mr-2" />
										Ligar Agora
									</Button>
									<Button 
										variant="outline"
										className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
										onClick={() => window.open(`mailto:${config.contact.email}`, '_self')}
									>
										<Mail className="w-4 h-4 mr-2" />
										Enviar Email
									</Button>
								</CardContent>
							</Card>

							{/* Business Hours */}
							<Card className="hover:shadow-lg transition-shadow duration-300">
								<CardHeader>
									<CardTitle className="font-poppins text-xl flex items-center gap-3">
										<Clock className="w-5 h-5 text-orange-600" />
										Horários
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-gray-600">Transfer Aeroporto:</span>
										<span className="font-semibold">24 horas</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Atendimento WhatsApp:</span>
										<span className="font-semibold">6h às 22h</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Transfers Locais:</span>
										<span className="font-semibold">5h às 23h</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Emergências:</span>
										<span className="font-semibold">24 horas</span>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section (Placeholder) */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
							Nossa Localização
						</h2>
						<p className="text-xl text-gray-600">
							Atendemos toda a região da Costa do Descobrimento
						</p>
					</div>

					<Card className="overflow-hidden">
						<div className="h-96 bg-gradient-to-br from-orange-100 to-teal-100 flex items-center justify-center">
							<div className="text-center">
								<MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
								<h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
									Porto Seguro, Bahia
								</h3>
								<p className="text-gray-600 mb-4">
									Costa do Descobrimento - Região Turística
								</p>
								<Button 
									className="bg-orange-600 hover:bg-orange-700"
									onClick={() => window.open('https://maps.google.com/?q=Porto+Seguro+Bahia', '_blank')}
								>
									<MapPin className="w-4 h-4 mr-2" />
									Ver no Google Maps
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
