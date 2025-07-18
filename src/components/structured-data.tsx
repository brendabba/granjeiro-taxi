interface StructuredDataProps {
	type: 'organization' | 'breadcrumb' | 'localBusiness' | 'service'
	data?: Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
	let structuredData

	switch (type) {
		case 'organization':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'Táxi Granjeiro',
				description: 'Empresa de transfer e taxi em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva',
				url: 'https://taxigranjeiro.com.br',
				logo: 'https://taxigranjeiro.com.br/icon-512.png',
				contactPoint: {
					'@type': 'ContactPoint',
					telephone: '+55-11-95315-6363',
					contactType: 'customer service',
					availableLanguage: 'Portuguese',
					areaServed: 'BR'
				},
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Porto Seguro',
					addressRegion: 'BA',
					addressCountry: 'BR'
				},
				sameAs: [
					'https://www.instagram.com/taxigranjeiro',
					'https://wa.me/5511953156363'
				]
			}
			break

		case 'localBusiness':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				'@id': 'https://taxigranjeiro.com.br',
				name: 'Táxi Granjeiro',
				image: 'https://taxigranjeiro.com.br/icon-512.png',
				description: 'Transfer seguro e pontual em Porto Seguro, Trancoso, Arraial d\'Ajuda e Caraíva',
				url: 'https://taxigranjeiro.com.br',
				telephone: '+55-11-95315-6363',
				priceRange: 'R$ 20 - R$ 300',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Porto Seguro',
					addressRegion: 'Bahia',
					addressCountry: 'BR'
				},
				geo: {
					'@type': 'GeoCoordinates',
					latitude: -16.4309,
					longitude: -39.0789
				},
				openingHoursSpecification: {
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday'
					],
					opens: '05:00',
					closes: '23:00'
				},
				serviceArea: {
					'@type': 'GeoCircle',
					geoMidpoint: {
						'@type': 'GeoCoordinates',
						latitude: -16.4309,
						longitude: -39.0789
					},
					geoRadius: '50000'
				}
			}
			break

		case 'service':
			structuredData = {
				'@context': 'https://schema.org',
				'@type': 'Service',
				name: 'Transfer e Taxi em Porto Seguro',
				description: 'Serviços de transfer para aeroporto, hotéis, praias e cidades da Costa do Descobrimento',
				provider: {
					'@type': 'Organization',
					name: 'Táxi Granjeiro'
				},
				areaServed: [
					'Porto Seguro',
					'Trancoso',
					'Arraial d\'Ajuda',
					'Caraíva',
					'Coroa Vermelha'
				],
				serviceType: 'Transportation Service'
			}
			break

		default:
			structuredData = data
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData)
			}}
		/>
	)
} 