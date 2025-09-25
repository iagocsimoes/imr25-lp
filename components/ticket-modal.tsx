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
      name: 'Ingresso Black',
      price: '12x de R$ 83,08',
      fullPrice: 'ou R$ 997 à vista',
      description: 'Ideal para: O empresário focado no conteúdo essencial e na energia do evento.',
      features: [
        'Acesso: Lugar no setor posterior do evento, com cadeira e mesa',
        'Conteúdo: Acesso total a todas as palestras',
        'Alimentação: Inclui acesso a uma mesa de frutas',
      ],
      bgColor: 'from-gray-900 to-black',
      borderColor: 'border-gray-600',
      titleColor: 'text-gray-200'
    },
    {
      id: 'gold',
      name: 'Ingresso Gold',
      price: '12x de R$ 249,75',
      fullPrice: 'ou R$ 2.997 à vista',
      description: 'Ideal para: Quem busca, além do conteúdo, conexões estratégicas e maior conforto.',
      features: [
        'Acesso: Assento privilegiado no setor central do evento, com cadeira e mesa',
        'Alimentação: Inclui almoço para otimizar seu tempo, além da mesa de frutas',
        'Networking: Acesso ao "Networking Experience", um momento direcionado para conexões de alto nível',
      ],
      bgColor: 'from-yellow-900 to-black',
      borderColor: 'border-yellow-600',
      titleColor: 'text-yellow-400'
    },
    {
      id: 'vip',
      name: 'Ingresso VIP',
      price: '12x de R$ 499,75',
      fullPrice: 'ou R$ 5.997 à vista',
      description: 'Ideal para: A experiência definitiva para quem busca o máximo de conforto, exclusividade e acesso.',
      features: [
        'Acesso: Lugar no exclusivo VIP Lounge, com cadeira e mesa em área privilegiada',
        'Alimentação Premium: Experiência completa com café da manhã, almoço incluído e mesa gastronômica com serviço de garçom',
        'Networking Exclusivo: Inclui "Networking Experience" com o palestrante principal, Lásaro do Carmo, e acesso a happy hour exclusivo ao final do evento',
      ],
      bgColor: 'from-red-900 to-black',
      borderColor: 'border-red-600',
      titleColor: 'text-red-400'
    }
  ]

  const packages = [
    {
      id: 'platinum',
      name: 'Pacote Platinum',
      price: '12x de R$ 581,66',
      fullPrice: 'ou R$ 6.980 à vista',
      description: 'Perfeito para equipes que querem a experiência completa do evento',
      items: [
        '1 Ingresso VIP',
        '2 Ingressos GOLD',
        '2 Ingressos BLACK'
      ],
      total: '5 ingressos total',
      bgColor: 'from-purple-900 to-black',
      borderColor: 'border-purple-600',
      titleColor: 'text-purple-400'
    },
    {
      id: 'diamond',
      name: 'Pacote Diamond',
      price: '12x de R$ 990,83',
      fullPrice: 'ou R$ 11.890 à vista',
      description: 'A escolha ideal para empresas que querem maximizar o impacto do evento',
      items: [
        '2 Ingressos VIP',
        '4 Ingressos GOLD',
        '3 Ingressos BLACK'
      ],
      total: '9 ingressos total',
      bgColor: 'from-cyan-900 to-black',
      borderColor: 'border-cyan-600',
      titleColor: 'text-cyan-400'
    }
  ]

  const handleTicketSelect = (ticket: typeof tickets[0]) => {
    openWhatsApp(`Olá! Quero garantir meu ${ticket.name} para o Encontro da Elite. Podem me enviar mais detalhes?`)
    onClose()
  }

  const handlePackageSelect = (pkg: typeof packages[0]) => {
    openWhatsApp(`Olá! Tenho interesse no ${pkg.name} para o Encontro da Elite. Podem me enviar mais informações sobre esse pacote?`)
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
                <h2 className="text-xl md:text-2xl font-semibold text-white">Escolha sua experiência</h2>
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
                  Pacotes para Equipes
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
                  <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {packages.map((pkg) => (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`bg-gradient-to-tl ${pkg.bgColor} border ${pkg.borderColor} rounded-xl p-4 md:p-6 min-h-[450px] flex flex-col justify-between`}
                      >
                        <div className="flex-1">
                          <h3 className={`text-lg md:text-xl font-semibold mb-3 ${pkg.titleColor}`}>
                            {pkg.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-6 leading-relaxed">{pkg.description}</p>

                          <div className="mb-6">
                            <div className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.price}</div>
                            <div className="text-sm text-gray-400">{pkg.fullPrice}</div>
                          </div>

                          <div className="mb-8">
                            <h4 className="text-sm font-medium text-gray-300 mb-3">Inclui:</h4>
                            <div className="space-y-2">
                              {pkg.items.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                  <Check className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                  <span className="text-xs md:text-sm text-gray-300">{item}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-3 text-xs text-gray-500 font-medium">{pkg.total}</div>
                          </div>
                        </div>

                        <Button
                          onClick={() => handlePackageSelect(pkg)}
                          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 text-sm md:text-base"
                        >
                          Selecionar {pkg.name}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
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