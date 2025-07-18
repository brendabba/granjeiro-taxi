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
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				
				{/* PWA Configuration */}
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#fdde44" />
				<meta name="msapplication-TileColor" content="#fdde44" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				
				{/* iOS PWA Configuration */}
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Táxi Granjeiro" />
				
				{/* Standard Favicon */}
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
				
				{/* Apple Touch Icons */}
				<link rel="apple-touch-icon" sizes="180x180" href="/icon-180.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/icon-152.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/icon-144.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/icon-120.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/icon-114.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/icon-76.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/icon-72.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/icon-60.png" />
				<link rel="apple-touch-icon" sizes="57x57" href="/icon-57.png" />
				
				{/* Android Chrome Icons */}
				<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
				<link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
				
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
