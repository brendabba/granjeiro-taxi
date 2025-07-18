'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Smartphone, X, Plus } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean
}

export function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registrado:', registration)
        })
        .catch((error) => {
          console.error('❌ Erro ao registrar Service Worker:', error)
        })
    }

    // Detectar plataforma
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent)
    const isAndroidDevice = /android/.test(userAgent)
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches
    const isInWebAppiOS = (window.navigator as NavigatorWithStandalone).standalone === true

    setIsIOS(isIOSDevice)
    setIsAndroid(isAndroidDevice)
    setIsInstalled(isInStandaloneMode || isInWebAppiOS)

    // Listener para evento de instalação (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      const promptEvent = e as BeforeInstallPromptEvent
      setDeferredPrompt(promptEvent)
      
      // Mostrar prompt após 3 segundos se não estiver instalado
      setTimeout(() => {
        if (!isInstalled) {
          setShowInstallPrompt(true)
        }
      }, 3000)
    }

    // Listener para instalação bem-sucedida
    const handleAppInstalled = () => {
      console.log('🎉 PWA instalado com sucesso!')
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
      setIsInstalled(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    // Mostrar prompt iOS após delay se não estiver instalado
    if (isIOSDevice && !isInWebAppiOS) {
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 5000)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [isInstalled])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Android/Chrome - usar prompt nativo
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('✅ Usuário aceitou instalar o PWA')
      } else {
        console.log('❌ Usuário recusou instalar o PWA')
      }
      
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleClosePrompt = () => {
    setShowInstallPrompt(false)
    // Mostrar novamente após 24 horas
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString())
  }

  // Verificar se já foi dispensado recentemente
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-prompt-dismissed')
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const now = Date.now()
      const twentyFourHours = 24 * 60 * 60 * 1000
      
      if (now - dismissedTime < twentyFourHours) {
        setShowInstallPrompt(false)
      }
    }
  }, [])

  // Não mostrar se já estiver instalado
  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
      <div className="bg-gradient-to-r from-yellow-custom to-yellow-500 rounded-xl shadow-2xl border-2 border-yellow-600 p-4 animate-slide-up">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3 shadow-md">
              <Smartphone className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-black text-sm">
                Instalar Táxi Granjeiro
              </h3>
              <p className="text-xs text-gray-800">
                Acesso rápido na tela inicial
              </p>
            </div>
          </div>
          <button
            onClick={handleClosePrompt}
            className="text-gray-700 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-800">
            <Download className="w-3 h-3 mr-2" />
            <span>Funciona offline</span>
          </div>
          <div className="flex items-center text-xs text-gray-800">
            <Plus className="w-3 h-3 mr-2" />
            <span>Acesso direto aos serviços</span>
          </div>
        </div>

        {/* Instruções específicas por plataforma */}
        {isIOS ? (
          <div className="space-y-3">
                         <p className="text-xs text-gray-800 bg-black/10 rounded-lg p-2">
               📱 <strong>iPhone/iPad:</strong><br />
               1. Toque no botão <strong>Compartilhar</strong> ⬆️<br />
               2. Role para baixo<br />
               3. Toque <strong>&quot;Adicionar à Tela Inicial&quot;</strong>
             </p>
            <Button
              onClick={handleClosePrompt}
              className="w-full bg-white text-black hover:bg-gray-100 font-semibold"
            >
              Entendi!
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {deferredPrompt ? (
              <Button
                onClick={handleInstallClick}
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold flex items-center justify-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Instalar App
              </Button>
            ) : (
              <div className="space-y-2">
                                 <p className="text-xs text-gray-800 bg-black/10 rounded-lg p-2">
                   📱 <strong>Android:</strong><br />
                   Menu (⋮) → &quot;Instalar app&quot; ou &quot;Adicionar à tela inicial&quot;
                 </p>
                <Button
                  onClick={handleClosePrompt}
                  className="w-full bg-white text-black hover:bg-gray-100 font-semibold"
                >
                  Entendi!
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 