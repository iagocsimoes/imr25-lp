'use client'

import { useState } from 'react'
import { X, ChevronRight, Users } from 'lucide-react'
import { Button } from './ui/button'
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

  const ticketLinks: Record<string, string> = {
    black: 'https://clkdmg.site/pay/blackimr',
    gold: 'https://clkdmg.site/pay/goldimr',
    vip: 'https://clkdmg.site/pay/imrvip'
  }

  const packageLinks: Record<string, string> = {
    platinum: 'https://clkdmg.site/pay/pacote-platinum',
    diamond: 'https://clkdmg.site/pay/pacote-diamond'
  }

  const handleTicketSelect = (ticket: typeof tickets[0]) => {
    const link = ticketLinks[ticket.id]
    if (link) {
      window.open(link, '_blank')
      onClose()
    }
  }

  const handlePackageSelect = (pkg: typeof packages[0]) => {
    const link = packageLinks[pkg.id]
    if (link) {
      window.open(link, '_blank')
      onClose()
    }
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
              <div className="flex-1 overflow-y-auto p-4 md:p-6 h-full">
                {selectedTab === 'ingressos' ? (
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
                    {tickets.map((ticket, index) => {
                      const isBlack = ticket.id === 'black';
                      const isGold = ticket.id === 'gold';
                      const isVIP = ticket.id === 'vip';

                      return (
                        <motion.div
                          key={ticket.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex flex-col h-full"
                        >
                          <div className="relative h-full group flex flex-col">
                            {/* Neon Glow Background */}
                            <div className={`absolute -inset-4 rounded-3xl blur-xl transition-opacity ${
                              isBlack ? 'bg-gradient-to-r from-gray-600/30 via-gray-500/40 to-gray-600/30 opacity-60 group-hover:opacity-80' :
                              isGold ? 'bg-gradient-to-r from-yellow-600/40 via-yellow-500/50 to-yellow-600/40 opacity-70 group-hover:opacity-90' :
                              'bg-gradient-to-r from-[#ec020d]/50 via-[#ec020d]/70 to-[#ec020d]/50 opacity-80 group-hover:opacity-100 animate-pulse'
                            }`}></div>

                            {/* Futuristic Border */}
                            <div className={`absolute inset-0 rounded-2xl ${
                              isBlack ? 'bg-gradient-to-r from-gray-600/20 via-gray-700/30 to-gray-600/20' :
                              isGold ? 'bg-gradient-to-r from-yellow-600/20 via-yellow-500/30 to-yellow-600/20' :
                              'bg-gradient-to-r from-[#ec020d]/40 via-[#ec020d]/60 to-[#ec020d]/40'
                            }`}></div>

                            {/* Tech Frame Lines */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${
                              isBlack ? 'via-gray-500/50' :
                              isGold ? 'via-yellow-500/50' :
                              'via-[#ec020d]'
                            } to-transparent`}></div>
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${
                              isBlack ? 'via-gray-500/50' :
                              isGold ? 'via-yellow-500/50' :
                              'via-[#ec020d]'
                            } to-transparent`}></div>

                            {/* Card Content */}
                            <div className={`relative bg-slate-950/95 rounded-2xl p-6 m-[1px] h-full backdrop-blur-sm border flex flex-col ${
                              isBlack ? 'border-gray-800/50' :
                              isGold ? 'border-yellow-900/30' :
                              'border-[#ec020d]/50'
                            }`}>
                              {/* Tech Corner Decorations */}
                              <div className={`absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 ${
                                isBlack ? 'border-gray-600/30' :
                                isGold ? 'border-yellow-600/30' :
                                'border-[#ec020d]/50'
                              }`}></div>
                              <div className={`absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 ${
                                isBlack ? 'border-gray-600/30' :
                                isGold ? 'border-yellow-600/30' :
                                'border-[#ec020d]/50'
                              }`}></div>
                              <div className={`absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 ${
                                isBlack ? 'border-gray-600/30' :
                                isGold ? 'border-yellow-600/30' :
                                'border-[#ec020d]/50'
                              }`}></div>
                              <div className={`absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 ${
                                isBlack ? 'border-gray-600/30' :
                                isGold ? 'border-yellow-600/30' :
                                'border-[#ec020d]/50'
                              }`}></div>

                              {/* VIP Badge */}
                              {isVIP && (
                                <div className="absolute top-6 right-6 text-xs font-bold text-[#ec020d] tracking-wider">
                                  ESPAÇO DISRUPTION
                                </div>
                              )}

                              <div className="flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-6 text-white">
                                  INGRESSO<br />
                                  <span className={`text-4xl font-black ${
                                    isVIP ? 'text-[#ec020d]' : 'text-white'
                                  }`}>
                                    {ticket.id.toUpperCase()}
                                  </span>
                                </h3>

                                <div className="space-y-2 mb-6">
                                  <div className="text-2xl font-bold text-white">
                                    {ticket.price}
                                  </div>
                                  <div className="text-gray-400">
                                    {ticket.fullPrice}
                                  </div>
                                </div>

                                <div className={`h-px bg-gradient-to-r from-transparent ${
                                  isBlack ? 'via-gray-700' :
                                  isGold ? 'via-yellow-700/50' :
                                  'via-[#ec020d]/50'
                                } to-transparent my-6`}></div>

                                <div className="space-y-4 flex-grow">
                                  {ticket.features.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                      <div className={`w-1 h-1 rounded-full mt-2 ${
                                        isBlack ? 'bg-gray-400' :
                                        isGold ? 'bg-yellow-400' :
                                        'bg-[#ec020d]'
                                      }`}></div>
                                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <Button
                                onClick={() => handleTicketSelect(ticket)}
                                className={`w-full rounded-lg py-3 transition-all duration-300 mt-6 ${
                                  isBlack ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600' :
                                  isGold ? 'bg-yellow-900/30 hover:bg-yellow-900/50 border border-yellow-800/50 hover:border-yellow-700/50' :
                                  'bg-gradient-to-r from-[#ec020d]/80 to-[#9a0008]/80 hover:from-[#ec020d] hover:to-[#9a0008] border border-[#ec020d]/50 hover:border-[#ec020d] shadow-lg hover:shadow-[#ec020d]/25'
                                } text-white`}
                              >
                                Garantir Ingresso {ticket.id.toUpperCase()}
                                <ChevronRight className="w-5 h-5 ml-2" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 h-full">
                    {packages.map((pkg, index) => (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="relative group flex flex-col h-full"
                      >
                        {/* Neon Glow Background */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${pkg.bgColor} rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity ${pkg.glowColor === 'cyan' ? 'animate-pulse' : ''}`}></div>

                        {/* Futuristic Border Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.bgColor} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity blur-sm`}></div>

                        {/* Tech Frame */}
                        <div className="relative bg-slate-950/95 border border-gray-800/50 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between backdrop-blur-sm">
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