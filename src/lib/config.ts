// Configurações centralizadas do projeto
export const config = {
	// Formspree
	formspree: {
		endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'xdkoorpk',
		url: function() {
			return `https://formspree.io/f/${this.endpoint}`
		}
	},

	// Contato
	contact: {
		phone: '(73) 99938-4732',
		whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5573999384732',
		email: 'contato@portotaxi.com.br',
		address: 'Porto Seguro - BA'
	},

	// Site
	site: {
		name: 'Porto Táxi',
		description: 'Serviço de táxi 24 horas, transfer para aeroporto, passeios turísticos e viagens personalizadas em Porto Seguro e região.',
		url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portotaxi.netlify.app',
		locale: 'pt-BR',
	},

	// Google Analytics
	analytics: {
		gaId: process.env.NEXT_PUBLIC_GA_ID || ''
	},

	business: {
		hours: '24 horas',
		coverage: 'Porto Seguro e região'
	}
}

// Função para obter URL do WhatsApp com mensagem
export function getWhatsAppUrl(message: string = 'Olá! Gostaria de fazer um orçamento para uma viagem.') {
	return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`
} 