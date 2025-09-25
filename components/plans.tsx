'use client'

import { Check, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
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
          className="text-4xl md:text-5xl lg:text-8xl max-sm:text-3xl font-medium mb-6 max-sm:mb-4 text-white max-w-[1200px] max-sm:max-w-full text-center mx-auto"
          custom={0}
          variants={fadeUp}
        >
          Conheça nossos ingressos
        </motion.h1>
        <motion.p
          className="text-lg max-sm:text-base text-white leading-relaxed opacity-90 max-w-3xl max-sm:max-w-full mx-auto mb-8 max-sm:mb-6 font-medium"
          custom={1}
          variants={fadeUp}
        >
          Escolha a experiência ideal para você no Encontro da Elite.
          Cada ingresso oferece níveis diferenciados de conforto, networking e acesso exclusivo.
        </motion.p>
        <motion.div
          className="bg-red-500/20 p-2 w-fit mx-auto rounded-full"
          custom={2}
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
            className="bg-red-500/60 hover:bg-red-500 text-white px-8 max-sm:px-6 py-2 rounded-full cursor-pointer max-sm:text-sm"
          >
            Ver Pacotes
          </Button>
        </motion.div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="flex flex-col lg:flex-row max-sm:flex-col gap-6 max-sm:gap-4 max-w-7xl mx-auto items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Ingresso Black */}
        <motion.div custom={0} variants={fadeUp}>
          <Card className="bg-gradient-to-tl from-gray-900 to-black border border-gray-600 p-8 max-sm:p-6 shadow-2xl w-full lg:h-[600px] lg:w-[350px]">
            <CardContent className="p-0 text-white">
              <div className="mb-6 max-sm:mb-4">
                <h3 className="text-xl max-sm:text-lg font-semibold mb-4 max-sm:mb-3 text-gray-200">
                  Ingresso Black
                </h3>
                <p className="text-gray-400 text-sm max-sm:text-xs mb-6 max-sm:mb-4">
                  Ideal para: O empresário focado no conteúdo essencial e na energia do evento.
                </p>
                <div className="text-3xl max-sm:text-2xl font-medium mb-2">
                  12x de R$ 83,08
                </div>
                <div className="text-lg text-gray-400 mb-6 max-sm:mb-4">
                  ou R$ 997 à vista
                </div>
              </div>

              <div className="mb-8 max-sm:mb-6">
                <h4 className="text-sm max-sm:text-xs font-medium text-gray-300 mb-4 max-sm:mb-3">
                  Inclui
                </h4>
                <div className="space-y-3 max-sm:space-y-2">
                  {[
                    'Acesso: Lugar no setor posterior do evento, com cadeira e mesa',
                    'Conteúdo: Acesso total a todas as palestras',
                    'Alimentação: Inclui acesso a uma mesa de frutas',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 max-sm:gap-2"
                      custom={i}
                      variants={fadeUp}
                    >
                      <div className="w-[18px] h-[18px] max-sm:w-4 max-sm:h-4 bg-transparent rounded-full flex items-center justify-center border border-gray-300 mt-0.5">
                        <Check className="min-w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 text-gray-300 flex-shrink-0" />
                      </div>
                      <span className="text-sm max-sm:text-xs text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso Black para o Encontro da Elite. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 max-sm:text-sm max-sm:py-2"
              >
                Garantir Ingresso Black
                <ChevronRight className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ingresso Gold */}
        <motion.div custom={1} variants={fadeUp}>
          <Card className="bg-gradient-to-tl from-yellow-900 to-black border border-yellow-600 p-8 max-sm:p-6 shadow-2xl w-full lg:h-[600px] lg:w-[350px]">
            <CardContent className="p-0 text-white">
              <div className="mb-6 max-sm:mb-4">
                <h3 className="text-xl max-sm:text-lg font-semibold mb-4 max-sm:mb-3 text-yellow-400">
                  Ingresso Gold
                </h3>
                <p className="text-gray-400 text-sm max-sm:text-xs mb-6 max-sm:mb-4">
                  Ideal para: Quem busca, além do conteúdo, conexões estratégicas e maior conforto.
                </p>
                <div className="text-3xl max-sm:text-2xl font-medium mb-2">
                  12x de R$ 249,75
                </div>
                <div className="text-lg text-gray-400 mb-6 max-sm:mb-4">
                  ou R$ 2.997 à vista
                </div>
              </div>

              <div className="mb-8 max-sm:mb-6">
                <h4 className="text-sm max-sm:text-xs font-medium text-gray-300 mb-4 max-sm:mb-3">
                  Inclui
                </h4>
                <div className="space-y-3 max-sm:space-y-2">
                  {[
                    'Acesso: Assento privilegiado no setor central do evento, com cadeira e mesa',
                    'Alimentação: Inclui almoço para otimizar seu tempo, além da mesa de frutas',
                    'Networking: Acesso ao "Networking Experience", um momento direcionado para conexões de alto nível',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 max-sm:gap-2"
                      custom={i}
                      variants={fadeUp}
                    >
                      <div className="w-[18px] h-[18px] max-sm:w-4 max-sm:h-4 bg-transparent rounded-full flex items-center justify-center border border-gray-300 mt-0.5">
                        <Check className="min-w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 text-gray-300 flex-shrink-0" />
                      </div>
                      <span className="text-sm max-sm:text-xs text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso Gold para o Encontro da Elite. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 max-sm:text-sm max-sm:py-2"
              >
                Garantir Ingresso Gold
                <ChevronRight className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ingresso VIP */}
        <motion.div custom={2} variants={fadeUp}>
          <Card className="bg-gradient-to-tl from-red-900 to-black border border-red-600 p-8 max-sm:p-6 shadow-2xl w-full lg:h-[700px] lg:w-[350px]">
            <CardContent className="p-0 text-white">
              <div className="mb-6 max-sm:mb-4">
                <h3 className="text-xl max-sm:text-lg font-semibold mb-4 max-sm:mb-3 text-red-400">
                  Ingresso VIP
                </h3>
                <p className="text-gray-400 text-sm max-sm:text-xs mb-6 max-sm:mb-4">
                  Ideal para: A experiência definitiva para quem busca o máximo de conforto, exclusividade e acesso.
                </p>
                <div className="text-3xl max-sm:text-2xl font-medium mb-2">
                  12x de R$ 499,75
                </div>
                <div className="text-lg text-gray-400 mb-6 max-sm:mb-4">
                  ou R$ 5.997 à vista
                </div>
              </div>

              <div className="mb-8 max-sm:mb-6">
                <h4 className="text-sm max-sm:text-xs font-medium text-gray-300 mb-4 max-sm:mb-3">Inclui</h4>
                <div className="space-y-3 max-sm:space-y-2">
                  {[
                    'Acesso: Lugar no exclusivo VIP Lounge, com cadeira e mesa em área privilegiada',
                    'Alimentação Premium: Experiência completa com café da manhã, almoço incluído e mesa gastronômica com serviço de garçom',
                    'Networking Exclusivo: Inclui "Networking Experience" com o palestrante principal, Lásaro do Carmo, e acesso a happy hour exclusivo ao final do evento',
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 max-sm:gap-2"
                      custom={i}
                      variants={fadeUp}
                    >
                      <div className="w-[18px] h-[18px] max-sm:w-4 max-sm:h-4 bg-transparent rounded-full flex items-center justify-center border border-gray-300 mt-0.5">
                        <Check className="min-w-3 h-3 max-sm:w-2.5 max-sm:h-2.5 text-gray-300 flex-shrink-0" />
                      </div>
                      <span className="text-sm max-sm:text-xs text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp(
                    'Olá! Quero garantir meu Ingresso VIP para o Encontro da Elite. Podem me enviar mais detalhes?',
                  )
                }
                className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 max-sm:text-sm max-sm:py-2"
              >
                Garantir Ingresso VIP
                <ChevronRight className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Plans