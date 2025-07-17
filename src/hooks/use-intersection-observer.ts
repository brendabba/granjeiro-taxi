import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
	threshold?: number
	root?: Element | null
	rootMargin?: string
	freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
	threshold = 0,
	root = null,
	rootMargin = '0%',
	freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
	const [entry, setEntry] = useState<IntersectionObserverEntry>()
	const [isVisible, setIsVisible] = useState(false)
	const elementRef = useRef<Element | null>(null)

	const frozen = entry?.isIntersecting && freezeOnceVisible

	const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
		setEntry(entry)
		setIsVisible(entry.isIntersecting)
	}

	useEffect(() => {
		const node = elementRef?.current
		const hasIOSupport = !!window.IntersectionObserver

		if (!hasIOSupport || frozen || !node) return

		const observerParams = { threshold, root, rootMargin }
		const observer = new IntersectionObserver(updateEntry, observerParams)

		observer.observe(node)

		return () => observer.disconnect()
	}, [elementRef, threshold, root, rootMargin, frozen])

	return { elementRef, entry, isVisible }
}

// Hook específico para lazy loading de imagens
export function useLazyImage(src: string) {
	const [imageSrc, setImageSrc] = useState<string>()
	const [imageRef, setImageRef] = useState<HTMLImageElement>()
	const { isVisible, elementRef } = useIntersectionObserver({
		threshold: 0.1,
		freezeOnceVisible: true,
	})

	useEffect(() => {
		if (isVisible && !imageSrc) {
			setImageSrc(src)
		}
	}, [isVisible, src, imageSrc])

	return {
		imageSrc,
		imageRef: (node: HTMLImageElement) => {
			if (node !== null) {
				setImageRef(node)
				elementRef.current = node
			}
		},
		isLoaded: !!imageSrc,
	}
} 