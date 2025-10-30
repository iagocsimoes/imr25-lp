'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Ticket, Building } from 'lucide-react'
import { useState } from 'react'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
}

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  const [selectedTab, setSelectedTab] = useState<'ingressos' | 'patrocinador'>('ingressos')

  return (
    <>
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
                    <div className="flex items-center justify-center gap-2">
                      <Ticket className="w-4 h-4" />
                      <span className="hidden md:inline">Ingressos Individuais</span>
                      <span className="md:hidden">Ingressos</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedTab('patrocinador')}
                    data-tab="patrocinador"
                    className={`flex-1 px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium transition-colors ${
                      selectedTab === 'patrocinador'
                        ? 'bg-red-500/10 text-red-400 border-b-2 border-red-500'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Building className="w-4 h-4" />
                      <span className="hidden md:inline">Seja Patrocinador</span>
                      <span className="md:hidden">Patrocinador</span>
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                  {selectedTab === 'ingressos' && (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                      {/* Ingresso Black */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        className="h-full"
                      >
                        <div className="relative h-full group">
                          {/* Neon Glow Background */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/30 via-gray-500/40 to-gray-600/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                          {/* Futuristic Border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-gray-700/30 to-gray-600/20 rounded-2xl"></div>

                          {/* Tech Frame Lines */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>

                          {/* Card Content */}
                          <div className="relative bg-slate-950/95 border border-gray-800/50 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm flex flex-col">
                            {/* Tech Corner Decorations */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gray-600/30"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gray-600/30"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gray-600/30"></div>
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gray-600/30"></div>

                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-6 text-white">
                                INGRESSO<br />
                                <span className="text-5xl font-black">BLACK</span>
                              </h3>

                              <div className="space-y-2 mb-6">
                                <div className="text-3xl font-bold text-white">12x de R$ 83,08</div>
                                <div className="text-gray-400">ou R$ 997 à vista</div>
                              </div>

                              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                              <div className="space-y-4 flex-1">
                                {['Acesso ao setor posterior (cadeiras)', 'Acesso total ao conteúdo do evento'].map((item, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <a href="https://www.sympla.com.br/evento/imersao-maquina-de-resultados-12-11-2025/3149276?_gl=1*t62a9x*_gcl_au*MTgwNDkxMTA2Ni4xNzU4OTA3NDg5LjIwOTI3NzAwNC4xNzU5MjU5ODA0LjE3NTkyNTk4MDM.*_ga*MTg3MTQ4MDA3NS4xNzU4OTA3NDkw*_ga_KXH10SQTZF*czE3NTkyNTczMzQkbzgkZzEkdDE3NTkyNjIxMTAkajU1JGwwJGgxNTMzNTI5MTE/utm_source=landing-page&utm_medium=geral&utm_campaign=imr-25" target="_blank" rel="noopener noreferrer" className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg py-3 border border-gray-700 transition-all duration-300 hover:border-gray-600 text-center block font-semibold">
                              Garantir Ingresso BLACK
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Ingresso Gold */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="h-full"
                      >
                        <div className="relative h-full group">
                          {/* Neon Glow Background */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/40 via-yellow-500/50 to-yellow-600/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

                          {/* Futuristic Border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/30 to-yellow-600/20 rounded-2xl"></div>

                          {/* Tech Frame Lines */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

                          {/* Card Content */}
                          <div className="relative bg-slate-950/95 border border-yellow-900/30 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm flex flex-col">
                            {/* Tech Corner Decorations */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-600/30"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-600/30"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-600/30"></div>
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-600/30"></div>

                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-6 text-white">
                                INGRESSO<br />
                                <span className="text-5xl font-black">GOLD</span>
                              </h3>

                              <div className="space-y-2 mb-6">
                                <div className="text-3xl font-bold text-white">12x de R$ 249,75</div>
                                <div className="text-gray-400">ou R$ 2.997 à vista</div>
                              </div>

                              <div className="h-px bg-gradient-to-r from-transparent via-yellow-700/50 to-transparent my-6"></div>

                              <div className="space-y-4 flex-1">
                                {['Acesso ao setor central (cadeira e mesa)', 'Acesso total ao conteúdo do evento', 'Almoço incluído'].map((item, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <a href="https://www.sympla.com.br/evento/imersao-maquina-de-resultados-12-11-2025/3149276?_gl=1*t62a9x*_gcl_au*MTgwNDkxMTA2Ni4xNzU4OTA3NDg5LjIwOTI3NzAwNC4xNzU5MjU5ODA0LjE3NTkyNTk4MDM.*_ga*MTg3MTQ4MDA3NS4xNzU4OTA3NDkw*_ga_KXH10SQTZF*czE3NTkyNTczMzQkbzgkZzEkdDE3NTkyNjIxMTAkajU1JGwwJGgxNTMzNTI5MTE/utm_source=landing-page&utm_medium=geral&utm_campaign=imr-25" target="_blank" rel="noopener noreferrer" className="w-full bg-yellow-900/30 hover:bg-yellow-900/50 text-white rounded-lg py-3 border border-yellow-800/50 transition-all duration-300 hover:border-yellow-700/50 text-center block font-semibold">
                              Garantir Ingresso GOLD
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Ingresso PREMIUM */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="h-full"
                      >
                        <div className="relative h-full group">
                          {/* Neon Glow Background - Purple */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 via-purple-500/50 to-purple-600/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

                          {/* Futuristic Border */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/30 to-purple-600/20 rounded-2xl"></div>

                          {/* Tech Frame Lines */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                          {/* Card Content */}
                          <div className="relative bg-slate-950/95 border border-purple-900/30 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm flex flex-col">
                            {/* Tech Corner Decorations */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-purple-600/30"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-purple-600/30"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-purple-600/30"></div>
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-purple-600/30"></div>

                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-6 text-white">
                                INGRESSO<br />
                                <span className="text-5xl font-black">PREMIUM</span>
                              </h3>

                              <div className="space-y-2 mb-6">
                                <div className="text-3xl font-bold text-white">12x de R$ 416,42</div>
                                <div className="text-gray-400">ou R$ 4.997 à vista</div>
                              </div>

                              <div className="h-px bg-gradient-to-r from-transparent via-purple-700/50 to-transparent my-6"></div>

                              <div className="space-y-4 flex-1">
                                {['Acesso ao VIP Lounge (cadeira e mesa)', 'Acesso total ao conteúdo do evento', 'Café da manhã incluído', 'Almoço incluído', 'Mesa gastronômica e serviço de garçom'].map((item, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-purple-400 rounded-full mt-2"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                  </div>
                                ))}

                                {/* Warning as bullet points */}
                                <div className="flex items-start gap-3 pt-2">
                                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2"></div>
                                  <span className="text-yellow-400 text-sm font-bold leading-relaxed">
                                    ⚠️ SEM ESTACIONAMENTO
                                  </span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2"></div>
                                  <span className="text-yellow-400 text-sm font-bold leading-relaxed">
                                    ⚠️ SEM NETWORKING EXPERIENCE
                                  </span>
                                </div>
                              </div>
                            </div>

                            <a href="https://www.sympla.com.br/evento/imersao-maquina-de-resultados-12-11-2025/3149276?_gl=1*t62a9x*_gcl_au*MTgwNDkxMTA2Ni4xNzU4OTA3NDg5LjIwOTI3NzAwNC4xNzU5MjU5ODA0LjE3NTkyNTk4MDM.*_ga*MTg3MTQ4MDA3NS4xNzU4OTA3NDkw*_ga_KXH10SQTZF*czE3NTkyNTczMzQkbzgkZzEkdDE3NTkyNjIxMTAkajU1JGwwJGgxNTMzNTI5MTE/utm_source=landing-page&utm_medium=geral&utm_campaign=imr-25" target="_blank" rel="noopener noreferrer" className="w-full bg-purple-900/30 hover:bg-purple-900/50 text-white rounded-lg py-3 border border-purple-800/50 transition-all duration-300 hover:border-purple-700/50 text-center block font-semibold">
                              Garantir Ingresso PREMIUM
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Ingresso VIP */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="h-full"
                      >
                        <div className="relative h-full group">
                          {/* Neon Glow Background - Intense Red */}
                          <div className="absolute -inset-4 bg-gradient-to-r from-[#ec020d]/50 via-[#ec020d]/70 to-[#ec020d]/50 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity animate-pulse"></div>

                          {/* Futuristic Border with Red Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#ec020d]/40 via-[#ec020d]/60 to-[#ec020d]/40 rounded-2xl"></div>

                          {/* Tech Frame Lines */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ec020d] to-transparent"></div>
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ec020d] to-transparent"></div>

                          {/* Card Content */}
                          <div className="relative bg-slate-950/95 border border-[#ec020d]/50 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm flex flex-col">
                            {/* Tech Corner Decorations */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#ec020d]/50"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-[#ec020d]/50"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-[#ec020d]/50"></div>
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#ec020d]/50"></div>

                            {/* VIP Badge */}
                            <div className="absolute top-6 right-6 text-xs font-bold text-[#ec020d] tracking-wider">
                              ESPAÇO DISRUPTION
                            </div>

                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-6 text-white">
                                INGRESSO<br />
                                <span className="text-5xl font-black text-[#ec020d]">VIP</span>
                              </h3>

                              <div className="space-y-2 mb-6">
                                <div className="text-3xl font-bold text-white">12x de R$ 499,75</div>
                                <div className="text-gray-400">ou R$ 5.997 à vista</div>
                              </div>

                              <div className="h-px bg-gradient-to-r from-transparent via-[#ec020d]/50 to-transparent my-6"></div>

                              <div className="space-y-4 flex-1">
                                {['Acesso ao VIP Lounge (cadeira e mesa)', 'Café da manhã incluído', 'Almoço incluído', 'Mesa gastronômica e serviço de garçom', 'Acesso total ao conteúdo do evento', 'Networking Experience com Lásaro do Carmo', 'Happy hour exclusivo'].map((item, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                    <div className="w-1 h-1 bg-[#ec020d] rounded-full mt-2"></div>
                                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <a href="https://www.sympla.com.br/evento/imersao-maquina-de-resultados-12-11-2025/3149276?_gl=1*t62a9x*_gcl_au*MTgwNDkxMTA2Ni4xNzU4OTA3NDg5LjIwOTI3NzAwNC4xNzU5MjU5ODA0LjE3NTkyNTk4MDM.*_ga*MTg3MTQ4MDA3NS4xNzU4OTA3NDkw*_ga_KXH10SQTZF*czE3NTkyNTczMzQkbzgkZzEkdDE3NTkyNjIxMTAkajU1JGwwJGgxNTMzNTI5MTE/utm_source=landing-page&utm_medium=geral&utm_campaign=imr-25" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#ec020d]/80 to-[#9a0008]/80 hover:from-[#ec020d] hover:to-[#9a0008] text-white rounded-lg py-3 border border-[#ec020d]/50 transition-all duration-300 hover:border-[#ec020d] shadow-lg hover:shadow-[#ec020d]/25 text-center block font-semibold">
                              Garantir Ingresso VIP
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {selectedTab === 'patrocinador' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="max-w-2xl mx-auto"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          Seja um Patrocinador do IMR25
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">
                          Conecte sua marca aos maiores empresários do Espírito Santo e faça parte da transformação empresarial do estado.
                        </p>
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                          <p className="text-gray-400 mb-4">
                            Interessado em patrocinar o evento ou trazer um grupo de empresários?
                          </p>
                          <p className="text-white font-semibold mb-6">
                            Entre em contato com nossa equipe comercial
                          </p>
                          <a
                            href="https://wa.me/5527996417399?text=Olá! Tenho interesse em ser patrocinador do IMR25 ou levar um grupo para o evento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ec020d] to-[#9a0008] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                          >
                            Falar com Equipe Comercial
                          </a>
                        </div>
                        <div className="mt-8 p-6 bg-slate-900/50 border border-gray-800 rounded-xl">
                          <p className="text-sm text-gray-500 italic">
                            Formulário de cadastro em breve
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default TicketModal
