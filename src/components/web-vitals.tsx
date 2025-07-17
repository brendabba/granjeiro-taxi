'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function sendToAnalytics(metric: Metric) {
  // Enviar métricas para o Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }
  
  // Log para desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }
}

export function WebVitals() {
  useEffect(() => {
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics) // INP substituiu FID como métrica principal
  }, [])

  return null
} 