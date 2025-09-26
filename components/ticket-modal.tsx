'use client'

import { useState } from 'react'
import { X, Check, ChevronRight, Users } from 'lucide-react'
import { Button } from './ui/button'
import { openWhatsApp } from '../utils/whatsapp'
import { motion, AnimatePresence } from 'framer-motion'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  const [selectedTab, setSelectedTab] = useState<'ingressos' | 'pacotes'>('ingressos')

  const tickets = [
    {
      id: 'black',
      name: 'Ingresso BLACK',
      price: '12x de R$ 83,08',
      fullPrice: 'ou R$ 997 à vista',
      description: 'Acesso completo ao conteúdo do evento',
      features: [
        'Acesso ao setor posterior (cadeira e mesa)',
        'Mesa de frutas',
        'Acesso total ao conteúdo do evento',
      ],
      bgColor: 'from-gray-900 to-black',
      borderColor: 'border-gray-600',
      titleColor: 'text-gray-200'
    },
    {
      id: 'gold',
      name: 'Ingresso GOLD',
      price: '12x de R$ 249,75',
      fullPrice: 'ou R$ 2.997 à vista',
      description: 'Experiência completa com networking dirigido',
      features: [
        'Acesso ao setor central (cadeira e mesa)',
        'Mesa de frutas',
        'Acesso total ao conteúdo do evento',
        'Almoço incluído',
        'Networking Experience',
      ],
      bgColor: 'from-[#d8d8d8]/20 to-black',
      borderColor: 'border-[#d8d8d8]/50',
      titleColor: 'text-[#d8d8d8]'
    },
    {
      id: 'vip',
      name: 'Ingresso VIP',
      price: '12x de R$ 499,75',
      fullPrice: 'ou R$ 5.997 à vista',
      description: 'A experiência definitiva com acesso total e exclusivo',
      features: [
        'Acesso ao VIP Lounge (cadeira e mesa)',
        'Café da manhã incluído',
        'Almoço incluído',
        'Mesa gastronômica e serviço de garçom',
        'Acesso total ao conteúdo do evento',
        'Networking Experience com Lásaro do Carmo',
        'Happy hour exclusivo',
      ],
      bgColor: 'from-[#9a0008] to-black',
      borderColor: 'border-[#ec020d]',
      titleColor: 'text-[#ec020d]'
    }
  ]

  const packages = [
    {
      id: 'platinum',
      name: 'PACOTE PLATINUM',
      originalPrice: 'R$ 7.991',
      price: '12x de R$ 581,66',
      fullPrice: 'ou R$ 6.980 à vista',
      description: 'Leve seus stakeholders para a transformação',
      items: [
        '1 Ingresso VIP',
        '2 Ingressos GOLD',
        '2 Ingressos BLACK'
      ],
      total: '5 ingressos total',
      bgColor: 'from-cyan-600/20 to-slate-950',
      borderColor: 'border-cyan-600/50',
      titleColor: 'text-white',
      glowColor: 'cyan'
    },
    {
      id: 'diamond',
      name: 'PACOTE DIAMOND',
      originalPrice: 'R$ 16.979',
      price: '12x de R$ 990,83',
      fullPrice: 'ou R$ 11.890 à vista',
      description: 'Garanta que sua equipe e parceiros estejam na vanguarda da inovação',
      items: [
        '2 Ingressos VIP',
        '4 Ingressos GOLD',
        '3 Ingressos BLACK'
      ],
      total: '9 ingressos total',
      bgColor: 'from-blue-600/30 to-slate-950',
      borderColor: 'border-blue-600/50',
      titleColor: 'text-white',
      glowColor: 'blue'
    }
  ]

  const handleTicketSelect = (ticket: typeof tickets[0]) => {
    openWhatsApp(`Olá! Quero garantir meu ${ticket.name} para o IMR25. Podem me enviar mais detalhes?`)
    onClose()
  }

  const handlePackageSelect = (pkg: typeof packages[0]) => {
    openWhatsApp(`Olá! Tenho interesse no ${pkg.name} para o IMR25. Podem me enviar mais informações sobre esse pacote?`)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-16 bg-slate-950 rounded-2xl border border-gray-800 z-50 overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800">
                <h2 className="text-xl md:text-2xl font-semibold text-white">Escolha Sua Experiência</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-800">
                <button
                  onClick={() => setSelectedTab('ingressos')}
                  className={`flex-1 px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium transition-colors ${
                    selectedTab === 'ingressos'
                      ? 'bg-red-500/10 text-red-400 border-b-2 border-red-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Ingressos Individuais
                </button>
                <button
                  data-tab="pacotes"
                  onClick={() => setSelectedTab('pacotes')}
                  className={`flex-1 px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium transition-colors ${
                    selectedTab === 'pacotes'
                      ? 'bg-red-500/10 text-red-400 border-b-2 border-red-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Pacotes Exclusivos para Embaixadores
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {selectedTab === 'ingressos' ? (
                  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {tickets.map((ticket) => (
                      <motion.div
                        key={ticket.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`bg-gradient-to-tl ${ticket.bgColor} border ${ticket.borderColor} rounded-xl p-4 md:p-6 min-h-[400px] flex flex-col justify-between`}
                      >
                        <div className="flex-1">
                          <h3 className={`text-lg md:text-xl font-semibold mb-3 ${ticket.titleColor}`}>
                            {ticket.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{ticket.description}</p>

                          <div className="mb-6">
                            <div className="text-xl md:text-2xl font-bold text-white mb-2">{ticket.price}</div>
                            <div className="text-sm text-gray-400">{ticket.fullPrice}</div>
                          </div>

                          <div className="space-y-3 mb-8">
                          {ticket.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs md:text-sm text-gray-300 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                          </div>
                        </div>

                        <Button
                          onClick={() => handleTicketSelect(ticket)}
                          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 text-sm md:text-base"
                        >
                          Selecionar {ticket.name}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {packages.map((pkg, index) => (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="relative group"
                      >
                        {/* Neon Glow Background */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${pkg.bgColor} rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity ${pkg.glowColor === 'cyan' ? 'animate-pulse' : ''}`}></div>

                        {/* Futuristic Border Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.bgColor} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity blur-sm`}></div>

                        {/* Tech Frame */}
                        <div className="relative bg-slate-950/95 border border-gray-800/50 rounded-2xl p-6 md:p-8 min-h-[500px] flex flex-col justify-between backdrop-blur-sm">
                          {/* Corner Decorations */}
                          <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gray-600/30"></div>
                          <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gray-600/30"></div>
                          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gray-600/30"></div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gray-600/30"></div>

                          <div className="flex-1">
                            {/* Header */}
                            <div className="mb-6">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                PACOTE
                              </h3>
                              <h2 className={`text-3xl md:text-4xl font-black mb-4 ${pkg.glowColor === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}>
                                {pkg.name.replace('PACOTE ', '')}
                              </h2>
                            </div>

                            {/* Pricing */}
                            <div className="mb-6">
                              <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-sm text-gray-500 line-through">DE {pkg.originalPrice}</span>
                                <span className="text-sm text-gray-400">POR</span>
                              </div>
                              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{pkg.price}</div>
                              <div className="text-sm text-gray-400">{pkg.fullPrice}</div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                            {/* Items */}
                            <div className="space-y-3">
                              {pkg.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            onClick={() => handlePackageSelect(pkg)}
                            className={`w-full mt-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 ${
                              pkg.glowColor === 'cyan'
                                ? 'bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-600/50 hover:border-cyan-500'
                                : 'bg-blue-600/30 hover:bg-blue-600/50 border border-blue-600/50 hover:border-blue-500'
                            }`}
                          >
                            Selecionar Pacote
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TicketModal