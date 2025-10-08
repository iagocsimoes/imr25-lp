'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqData = [
    {
      question: 'Quando e onde será o IMR25?',
      answer:
        'O evento acontecerá no dia 12 de novembro de 2025, em Vitória/ES. No Ilha Buffet com conteudo sendo das 08:00h as 19:00h e Networking Exclusive (Apenas para VIPS) das 19:00 as 23:00',
    },
    {
      question: 'Qual é a diferença entre os ingressos Black, Gold e VIP?',
      answer:
        'O ingresso Black dá acesso ao setor posterior e ao conteúdo completo do evento. O Gold garante lugar no setor central, com cadeira e mesa, além de incluir almoço e uma experiência de networking com empresários. Já o VIP oferece posição privilegiada no VIP Lounge, com café da manhã, almoço, mesa gastronômica, serviço de garçom, happy hour exclusivo e networking com Lásaro do Carmo. Escolha seu nível de experiência.',
    },
    {
      question: 'O que está incluso no Networking Experience?',
      answer:
        'É um momento exclusivo para conexões estratégicas entre empresários participantes. No VIP, inclui também interação direta com o palestrante principal Lásaro do Carmo e happy hour exclusivo.',
    },
    {
      question: 'Como funciona o parcelamento dos ingressos?',
      answer:
        'Todos os ingressos podem ser parcelados em até 12x sem juros no cartão de crédito. Entre em contato para mais detalhes sobre formas de pagamento.',
    },
    {
      question: 'Qual é a política de cancelamento?',
      answer:
        'Você tem até 7 dias após a compra para cancelar e receber reembolso integral. Após esse prazo, o ingresso não é reembolsável. Entre em contato pelo WhatsApp para solicitar o cancelamento.',
    },
  ]

  const faqVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const answerVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
  }

  return (
    <div id="faq" className="max-w-6xl z-50 mx-auto px-4 sm:px-6 lg:px-8 text-white mt-12 sm:mt-20 pb-12 sm:pb-20">
      {/* Header */}
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance"
          variants={faqVariants}
        >
          FAQ (Perguntas Frequentes)
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-5xl mx-auto text-balance px-2 sm:px-0"
          variants={faqVariants}
        >
          Tem dúvidas sobre o Encontro da Elite? Aqui estão as respostas para as perguntas mais frequentes sobre o evento, ingressos e experiências disponíveis.
        </motion.p>
      </motion.div>

      {/* Perguntas */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={faqVariants}
            className="border-b border-gray-800"
          >
            {/* Pergunta */}
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full flex items-center justify-between py-3 sm:py-4 md:py-6 text-left group"
            >
              <span className="text-sm sm:text-base md:text-lg font-medium pr-3 sm:pr-4 group-hover:text-red-400 transition-colors duration-300">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openFaq === index ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                    openFaq === index ? 'text-red-400' : 'text-gray-400'
                  }`}
                />
              </motion.div>
            </button>

            {/* Resposta */}
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={answerVariants}
                  className="overflow-hidden"
                >
                  <div className="pb-3 sm:pb-4 md:pb-6 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
