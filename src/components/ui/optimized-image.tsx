'use client'

import { useState, useRef, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { LoadingSkeleton } from '@/components/ui/loading'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0YzRjRGNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE0cHgiIGZpbGw9IiM5Q0EzQUYiPkNhcnJlZ2FuZG8uLi48L3RleHQ+PC9zdmc+'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(placeholder)
  const [isVisible, setIsVisible] = useState(priority)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!priority && divRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(divRef.current)
      
      return () => observer.disconnect()
    }
  }, [priority])

  // Load image when it becomes visible or if it has priority
  useEffect(() => {
    if ((isVisible || priority) && !isLoaded && !hasError) {
      const img = new Image()
      
      img.onload = () => {
        setCurrentSrc(src)
        setIsLoaded(true)
      }
      
      img.onerror = () => {
        setHasError(true)
      }
      
      img.src = src
    }
  }, [isVisible, priority, src, isLoaded, hasError])

  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isLoaded && !hasError && (
        <LoadingSkeleton className="absolute inset-0 w-full h-full" />
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          Erro ao carregar imagem
        </div>
      )}
    </div>
  )
} 