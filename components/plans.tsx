'use client'

import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { openWhatsApp } from '../utils/whatsapp'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
  }),
}

const Plans = () => {
  const { openModal } = useTicketModalContext()
  return (
    <div
      id="planos"
      className="relative z-10 container mx-auto px-4 max-sm:px-6 py-20 max-sm:py-12"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-16 max-sm:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl max-sm:text-4xl font-bold mb-6 max-sm:mb-4 text-white max-w-[1200px] max-sm:max-w-full text-center mx-auto"
          custom={0}
          variants={fadeUp}
        >
          ESCOLHA SUA EXPERIÊNCIA
        </motion.h1>
        <motion.div
          className="bg-[#ec020d]/20 p-2 w-fit mx-auto rounded-full"
          custom={1}
          variants={fadeUp}
        >
          <Button
            onClick={() => {
              openModal();
              // Set the modal to open on packages tab
              setTimeout(() => {
                const packagesTab = document.querySelector('[data-tab="pacotes"]') as HTMLButtonElement;
                if (packagesTab) packagesTab.click();
              }, 100);
            }}
            className="bg-[#ec020d]/60 hover:bg-[#ec020d] text-white px-8 max-sm:px-6 py-2 rounded-full cursor-pointer max-sm:text-sm"
          >
            Ver Pacotes Exclusivos
          </Button>
        </motion.div>
      </motion.div>

      {/* Pricing Cards - New Futuristic Design */}
      <motion.div
        className="flex flex-col lg:flex-row max-sm:flex-col gap-8 max-sm:gap-6 max-w-7xl mx-auto items-stretch justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Ingresso Black */}
        <motion.div custom={0} variants={fadeUp} className="flex-1">
          <div className="relative h-full group">
            {/* Neon Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-600/30 via-gray-500/40 to-gray-600/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

            {/* Futuristic Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-gray-700/30 to-gray-600/20 rounded-2xl"></div>

            {/* Tech Frame Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>

            {/* Card Content */}
            <div className="relative bg-slate-950/95 border border-gray-800/50 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm">
              {/* Tech Corner Decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gray-600/30"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gray-600/30"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gray-600/30"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gray-600/30"></div>

              <div className="mb-6">
                <h3 className="text-2xl max-sm:text-xl font-bold mb-6 text-white">
                  INGRESSO<br />
                  <span className="text-5xl max-sm:text-4xl font-black">BLACK</span>
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="text-3xl max-sm:text-2xl font-bold text-white">
                    12x de R$ 83,08
                  </div>
                  <div className="text-gray-400">
                    ou R$ 997 à vista
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                <div className="space-y-4">
                  {[
                    'Acesso ao setor posterior (cadeira e mesa)',
                    'Mesa de frutas',
                    'Acesso total ao conteúdo do evento'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso BLACK para o IMR25. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg py-3 border border-gray-700 transition-all duration-300 hover:border-gray-600"
              >
                Garantir Ingresso BLACK
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Ingresso Gold */}
        <motion.div custom={1} variants={fadeUp} className="flex-1">
          <div className="relative h-full group">
            {/* Neon Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/40 via-yellow-500/50 to-yellow-600/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

            {/* Futuristic Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/30 to-yellow-600/20 rounded-2xl"></div>

            {/* Tech Frame Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

            {/* Card Content */}
            <div className="relative bg-slate-950/95 border border-yellow-900/30 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm">
              {/* Tech Corner Decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-600/30"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-600/30"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-600/30"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-600/30"></div>

              <div className="mb-6">
                <h3 className="text-2xl max-sm:text-xl font-bold mb-6 text-white">
                  INGRESSO<br />
                  <span className="text-5xl max-sm:text-4xl font-black">GOLD</span>
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="text-3xl max-sm:text-2xl font-bold text-white">
                    12x de R$ 249,75
                  </div>
                  <div className="text-gray-400">
                    ou R$ 2.997 à vista
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-yellow-700/50 to-transparent my-6"></div>

                <div className="space-y-4">
                  {[
                    'Acesso ao setor central (cadeira e mesa)',
                    'Mesa de frutas',
                    'Acesso total ao conteúdo do evento',
                    'Almoço incluído',
                    'Networking Experience'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso GOLD para o IMR25. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-yellow-900/30 hover:bg-yellow-900/50 text-white rounded-lg py-3 border border-yellow-800/50 transition-all duration-300 hover:border-yellow-700/50"
              >
                Garantir Ingresso GOLD
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Ingresso VIP */}
        <motion.div custom={2} variants={fadeUp} className="flex-1">
          <div className="relative h-full group">
            {/* Neon Glow Background - Intense Red */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ec020d]/50 via-[#ec020d]/70 to-[#ec020d]/50 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity animate-pulse"></div>

            {/* Futuristic Border with Red Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec020d]/40 via-[#ec020d]/60 to-[#ec020d]/40 rounded-2xl"></div>

            {/* Tech Frame Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ec020d] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ec020d] to-transparent"></div>

            {/* Card Content */}
            <div className="relative bg-slate-950/95 border border-[#ec020d]/50 rounded-2xl p-8 m-[1px] h-full backdrop-blur-sm">
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
                <h3 className="text-2xl max-sm:text-xl font-bold mb-6 text-white">
                  INGRESSO<br />
                  <span className="text-5xl max-sm:text-4xl font-black text-[#ec020d]">VIP</span>
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="text-3xl max-sm:text-2xl font-bold text-white">
                    12x de R$ 499,75
                  </div>
                  <div className="text-gray-400">
                    ou R$ 5.997 à vista
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#ec020d]/50 to-transparent my-6"></div>

                <div className="space-y-4">
                  {[
                    'Acesso ao VIP Lounge (cadeira e mesa)',
                    'Café da manhã incluído',
                    'Almoço incluído',
                    'Mesa gastronômica e serviço de garçom',
                    'Acesso total ao conteúdo do evento',
                    'Networking Experience com Lásaro do Carmo',
                    'Happy hour exclusivo'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#ec020d] rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso VIP para o IMR25. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-gradient-to-r from-[#ec020d]/80 to-[#9a0008]/80 hover:from-[#ec020d] hover:to-[#9a0008] text-white rounded-lg py-3 border border-[#ec020d]/50 transition-all duration-300 hover:border-[#ec020d] shadow-lg hover:shadow-[#ec020d]/25"
              >
                Garantir Ingresso VIP
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Plans