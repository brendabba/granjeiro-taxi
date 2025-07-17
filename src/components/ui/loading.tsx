import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingProps {
	size?: 'sm' | 'md' | 'lg'
	className?: string
	text?: string
}

export function Loading({ size = 'md', className, text }: LoadingProps) {
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-8 h-8',
		lg: 'w-12 h-12'
	}

	return (
		<div className={cn('flex flex-col items-center justify-center', className)}>
			<div
				className={cn(
					'animate-spin rounded-full border-2 border-gray-300 border-t-orange-600',
					sizeClasses[size]
				)}
				role="status"
				aria-label="Carregando"
			/>
			{text && (
				<p className="mt-2 text-sm text-gray-600">{text}</p>
			)}
		</div>
	)
}

export function LoadingSkeleton({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'animate-pulse bg-gray-200 rounded-md',
				className
			)}
			role="status"
			aria-label="Carregando conteúdo"
		/>
	)
}

// Componente para lazy loading de outros componentes
export function LazyWrapper({ 
	children, 
	fallback, 
	className 
}: { 
	children: React.ReactNode
	fallback?: React.ReactNode
	className?: string 
}) {
	return (
		<div className={className}>
			<React.Suspense fallback={fallback || <Loading />}>
				{children}
			</React.Suspense>
		</div>
	)
} 