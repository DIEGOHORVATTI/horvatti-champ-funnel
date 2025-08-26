import { useState, Fragment, useEffect, useCallback } from 'react'

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

import { X, CreditCard, Landmark, QrCode, ChevronRight, Copy, ArrowLeft } from 'lucide-react'
import { QrCodePix } from 'qrcode-pix'

export type PlanType = {
  name: string
  description: string
  price: number
  originalPrice: number | null
  limit: string
}

type CheckoutModalProps = {
  isOpen: boolean
  onClose: () => void
  plan: PlanType | null
  isAnnual: boolean
}

// Etapas do checkout
type CheckoutStep = 'payment-method' | 'credit-card' | 'pix' | 'bank-slip'

export default function CheckoutModal({ isOpen, onClose, plan, isAnnual }: CheckoutModalProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>('pix')
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('payment-method')
  const [copySuccess, setCopySuccess] = useState('')
  const [pixQrCode, setPixQrCode] = useState<string>('')
  const [pixCode, setPixCode] = useState<string>('')
  const [bankSlipQrCode, setBankSlipQrCode] = useState<string>('')
  const [bankSlipCode, setBankSlipCode] = useState<string>(
    '34191.79001 01043.510047 91020.150008 9 94690000017832'
  )

  // Gera um QR code para qualquer texto
  const generateQRCode = async (text: string): Promise<string> => {
    try {
      // Usando API pública para gerar QR code
      const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        text
      )}`
      return apiUrl
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error)
      return ''
    }
  }

  // Gera QR code para o boleto
  const generateBankSlipQRCode = useCallback(async () => {
    if (!plan) return

    try {
      // Gera um código de barras fictício baseado no plano e data
      const barcode = `34191.79001 01043.510047 91020.150008 9 ${Math.floor(plan.price * 100)
        .toString()
        .padStart(11, '0')}`
      setBankSlipCode(barcode)

      // Gera o QR code para o código de barras
      const qrCodeUrl = await generateQRCode(barcode)
      setBankSlipQrCode(qrCodeUrl)
    } catch (error) {
      console.error('Erro ao gerar QR Code do boleto:', error)
    }
  }, [plan])

  const generatePixQrCode = useCallback(async () => {
    if (!plan) return

    try {
      const qrCodePix = QrCodePix({
        version: '01',
        key: 'pixaharvattichamp@horvatti.com.br', // Chave PIX
        name: 'Horvatti Champ',
        city: 'São Paulo',
        transactionId: `champ-${Date.now()}`, // ID único para cada transação
        message: `Plano ${plan.name}`,
        value: plan.price,
      })

      const rawPixStr = qrCodePix.payload()
      const qrCodeBase64 = await qrCodePix.base64()

      setPixCode(rawPixStr)
      setPixQrCode(qrCodeBase64)
    } catch (error) {
      console.error('Erro ao gerar QR Code PIX:', error)
    }
  }, [plan])

  useEffect(() => {
    if (currentStep === 'pix' && plan) {
      generatePixQrCode()
    } else if (currentStep === 'bank-slip' && plan) {
      generateBankSlipQRCode()
    }
  }, [currentStep, plan, generatePixQrCode, generateBankSlipQRCode])

  // Reset quando o modal for aberto
  useEffect(() => {
    if (isOpen) {
      setCurrentStep('payment-method')
      setSelectedPaymentMethod('pix')
    }
  }, [isOpen])

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess('Copiado!')
        setTimeout(() => setCopySuccess(''), 3000)
      },
      () => {
        setCopySuccess('Falha ao copiar')
      }
    )
  }

  const handleMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId)
    setCurrentStep(methodId as CheckoutStep)
  }

  const handleBackToMethods = () => {
    setCurrentStep('payment-method')
  }

  const handleCheckout = () => {
    if (currentStep === 'payment-method') {
      if (!selectedPaymentMethod) return
      setCurrentStep(selectedPaymentMethod as CheckoutStep)
      return
    }

    setIsProcessing(true)

    // Simulação de processamento de pagamento
    setTimeout(() => {
      setIsProcessing(false)
      onClose()
      // Aqui você poderia redirecionar para uma página de sucesso ou mostrar um outro modal
      alert('Pagamento processado com sucesso! Seu período de teste gratuito foi iniciado.')
    }, 2000)
  }

  const paymentMethods = [
    {
      id: 'pix',
      name: 'PIX',
      description: 'Pagamento instantâneo',
      icon: QrCode,
    },
    {
      id: 'credit-card',
      name: 'Cartão de Crédito',
      description: 'Pague com Elo, Visa, Mastercard, etc.',
      icon: CreditCard,
    },
    {
      id: 'bank-slip',
      name: 'Boleto Bancário',
      description: 'Pagamento em até 3 dias úteis',
      icon: Landmark,
    },
  ]

  if (!plan) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:max-w-xl">
                <div className="flex items-center justify-between mb-6">
                  <DialogTitle as="h3" className="text-lg font-bold leading-6 text-gray-900">
                    Finalizar Checkout
                  </DialogTitle>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mb-6 bg-green-100 p-4 rounded-xl">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Resumo do Plano</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                      <p className="text-sm text-gray-600 mt-1">{plan.limit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-gray-900">R${plan.price}/mês</p>
                      {plan.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
                          R${plan.originalPrice}/mês
                        </p>
                      )}
                      <p className="text-sm text-emerald-600 font-medium">
                        {isAnnual ? 'Cobrança anual' : 'Cobrança mensal'}
                      </p>
                    </div>
                  </div>
                </div>

                {currentStep === 'payment-method' && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Método de Pagamento</h4>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          className={`flex items-center border rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === method.id
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-600 hover:bg-emerald-50'
                          }`}
                          onClick={() => handleMethodSelect(method.id)}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                              selectedPaymentMethod === method.id ? 'bg-emerald-600' : 'bg-gray-100'
                            }`}
                          >
                            <method.icon
                              className={`w-5 h-5 ${
                                selectedPaymentMethod === method.id ? 'text-white' : 'text-gray-600'
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{method.name}</h4>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 ${
                              selectedPaymentMethod === method.id
                                ? 'text-emerald-600'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 'credit-card' && (
                  <div className="mb-6">
                    <button
                      onClick={handleBackToMethods}
                      className="flex items-center text-emerald-600 mb-4 hover:text-emerald-700"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Voltar aos métodos de pagamento
                    </button>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Cartão de Crédito</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Número do Cartão
                        </label>
                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Validade
                          </label>
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nome no Cartão
                        </label>
                        <input
                          type="text"
                          placeholder="Nome completo"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Parcelas
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600">
                          <option>1x de R${plan?.price} (sem juros)</option>
                          <option>2x de R${(plan?.price || 0) / 2} (sem juros)</option>
                          <option>3x de R${(plan?.price || 0) / 3} (sem juros)</option>
                        </select>
                      </div>
                    </form>
                  </div>
                )}

                {currentStep === 'pix' && (
                  <div className="mb-6">
                    <button
                      onClick={handleBackToMethods}
                      className="flex items-center text-emerald-600 mb-4 hover:text-emerald-700"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Voltar aos métodos de pagamento
                    </button>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Pagamento via PIX</h4>
                    <div className="text-center mb-4">
                      <p className="text-gray-600 mb-2">
                        Valor: <span className="font-bold">R$ {plan?.price}</span>
                      </p>
                      <p className="text-gray-600 mb-4">
                        Vencimento:{' '}
                        {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')} às
                        12h
                      </p>
                      <div className="p-4 bg-gray-100 rounded-lg mb-4">
                        {pixQrCode ? (
                          <img
                            src={pixQrCode}
                            alt="QR Code PIX"
                            className="w-48 h-48 mx-auto mb-0"
                          />
                        ) : (
                          <div className="w-48 h-48 mx-auto flex items-center justify-center">
                            <p className="text-gray-500">Gerando QR Code...</p>
                          </div>
                        )}
                      </div>
                      <div className="border border-gray-300 rounded-lg p-3 mb-4">
                        <p className="text-gray-700 font-mono text-sm mb-2 overflow-auto">
                          {pixCode || 'Gerando código PIX...'}
                        </p>
                        <button
                          className="flex items-center justify-center w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                          onClick={() => handleCopyToClipboard(pixCode)}
                          disabled={!pixCode}
                        >
                          <Copy className="w-4 h-4 mr-2" /> Copiar código
                        </button>
                        {copySuccess && (
                          <p className="text-emerald-600 text-xs mt-1">{copySuccess}</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>Após o pagamento, seu plano será ativado automaticamente.</p>
                        <p className="mt-1 text-xs">O QR Code expira em 24 horas</p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 'bank-slip' && (
                  <div className="mb-6">
                    <button
                      onClick={handleBackToMethods}
                      className="flex items-center text-emerald-600 mb-4 hover:text-emerald-700"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Voltar aos métodos de pagamento
                    </button>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Boleto Bancário</h4>
                    <div className="text-center mb-4">
                      <p className="text-gray-600 mb-2">
                        Valor: <span className="font-bold">R$ {plan?.price}</span>
                      </p>
                      <p className="text-gray-600 mb-4">
                        Vencimento:{' '}
                        {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
                      </p>

                      {/* QR Code do Boleto */}
                      <div className="p-4 bg-gray-100 rounded-lg mb-4">
                        {bankSlipQrCode ? (
                          <img
                            src={bankSlipQrCode}
                            alt="QR Code Boleto"
                            className="w-48 h-48 mx-auto mb-0"
                          />
                        ) : (
                          <div className="w-48 h-48 mx-auto flex items-center justify-center">
                            <p className="text-gray-500">Gerando QR Code...</p>
                          </div>
                        )}
                      </div>

                      <div className="border border-gray-300 rounded-lg p-3 mb-4">
                        <p className="text-gray-700 font-mono text-sm mb-2 overflow-auto">
                          {bankSlipCode}
                        </p>
                        <button
                          className="flex items-center justify-center w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                          onClick={() => handleCopyToClipboard(bankSlipCode)}
                          disabled={!bankSlipCode}
                        >
                          <Copy className="w-4 h-4 mr-2" /> Copiar código de barras
                        </button>
                        {copySuccess && (
                          <p className="text-emerald-600 text-xs mt-1">{copySuccess}</p>
                        )}
                      </div>

                      <button className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg mb-4">
                        Baixar boleto em PDF
                      </button>

                      <div className="text-sm text-gray-600">
                        <p>Após o pagamento, o boleto leva até 3 dias úteis para ser compensado.</p>
                        <p className="mt-1 text-xs">O boleto expira em 3 dias</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-4">
                    Ao confirmar, você concorda com nossos{' '}
                    <a href="#" className="text-emerald-600 hover:underline">
                      Termos de Serviço
                    </a>{' '}
                    e{' '}
                    <a href="#" className="text-emerald-600 hover:underline">
                      Política de Privacidade
                    </a>
                    .
                  </p>
                  {currentStep === 'payment-method' ? (
                    <button
                      type="button"
                      className={`w-full py-3 px-4 rounded-xl text-white font-medium ${
                        !selectedPaymentMethod || isProcessing
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                      onClick={handleCheckout}
                      disabled={!selectedPaymentMethod || isProcessing}
                    >
                      {isProcessing ? 'Processando...' : 'Continuar para pagamento'}
                    </button>
                  ) : currentStep === 'credit-card' ? (
                    <button
                      type="button"
                      className={`w-full py-3 px-4 rounded-xl text-white font-medium ${
                        isProcessing
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                      onClick={handleCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processando...' : 'Pagar e iniciar teste gratuito'}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full py-3 px-4 rounded-xl text-emerald-600 font-medium border-2 border-emerald-600 hover:bg-emerald-50"
                      onClick={onClose}
                    >
                      Fechar
                    </button>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
