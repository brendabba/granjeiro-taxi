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
		whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5573999999999',
		email: process.env.NEXT_PUBLIC_EMAIL || 'contato@taxigranjeiro.com.br',
		phone: process.env.NEXT_PUBLIC_PHONE || '(73) 99999-9999'
	},

	// Site
	site: {
		url: process.env.NEXT_PUBLIC_SITE_URL || 'https://taxigranjeiro.com.br',
		name: process.env.NEXT_PUBLIC_SITE_NAME || 'Táxi Granjeiro',
		description: 'Táxi 24h, transfer seguro e passeios turísticos em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva'
	},

	// Google Analytics
	analytics: {
		gaId: process.env.NEXT_PUBLIC_GA_ID || ''
	}
}

// Função para obter URL do WhatsApp com mensagem
export function getWhatsAppUrl(message: string = 'Olá! Gostaria de fazer um orçamento para uma viagem.') {
	return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`
} 