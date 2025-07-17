import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloat } from '@/components/ui/whatsapp-float'
import { WebVitals } from '@/components/web-vitals'
import { StructuredData } from '@/components/structured-data'
import { PWAInstaller } from '@/components/pwa-installer'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
})

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Táxi Granjeiro - Táxi 24h • Transfer • Passeios em Porto Seguro',
	description: 'Táxi 24 horas, transfer seguro e passeios turísticos em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva. Motoristas experientes, serviço completo. Agende agora!',
	keywords: ['taxi 24h porto seguro', 'transfer trancoso', 'passeios porto seguro', 'taxi arraial ajuda', 'transfer aeroporto', 'city tour bahia', 'viagem costa descobrimento'],
	authors: [{ name: 'Táxi Granjeiro' }],
	creator: 'Táxi Granjeiro',
	publisher: 'Táxi Granjeiro',
	robots: 'index, follow',
	openGraph: {
		title: 'Táxi Granjeiro - Táxi 24h • Transfer • Passeios',
		description: 'Táxi 24 horas, transfer seguro e passeios turísticos em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva',
		url: 'https://taxigranjeiro.com.br',
		siteName: 'Táxi Granjeiro',
		locale: 'pt_BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Táxi Granjeiro - Táxi 24h • Transfer • Passeios',
		description: 'Táxi 24 horas, transfer seguro e passeios turísticos em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva',
	},

}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#FF6B35',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#fdde44" />
				<link rel="apple-touch-icon" href="/icon.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://wa.me" />
				<link rel="preload" href="/hero-pattern.svg" as="image" />
			</head>
			<body
				className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}
			>
				<Header />
				<main className="min-h-screen">
					{children}
				</main>
				<Footer />
				<WhatsAppFloat />
				<WebVitals />
				<PWAInstaller />
				<StructuredData type="organization" />
				<StructuredData type="localBusiness" />
			</body>
		</html>
	)
}
