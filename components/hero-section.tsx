'use client'

import { scrollToSection } from '../utils/whatsapp'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const { openModal } = useTicketModalContext()

  return (
    <section className="flex flex-col z-50 items-center overflow-hidden w-full justify-center mt-20 max-sm:mt-8 h-full px-4 max-sm:px-6">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-[5.5rem] max-sm:text-3xl leading-[6rem] max-sm:leading-tight font-semibold text-white max-w-[1000px] max-sm:max-w-full text-center"
      >
        O Encontro da <span className="text-red-600">Elite</span>.
      </motion.h1>

      {/* Subtítulo */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="text-gray-100/80 text-xl max-sm:text-base max-w-[800px] max-sm:max-w-full text-center mt-8 max-sm:mt-4"
      >
        A maior imersão empresarial do Espírito Santo está de volta. Chegou a hora de posicionar sua marca onde os verdadeiros líderes estão, assumir o protagonismo e transformar o ambiente de negócios capixaba.
      </motion.h3>

      {/* Botões */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex max-sm:flex-col items-center justify-center mt-8 max-sm:mt-6 gap-4 max-sm:gap-3 max-sm:w-full"
      >
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={openModal}
          className="bg-red-600 hover:bg-red-700 text-white px-8 max-sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-red-500/25 text-lg max-sm:text-sm cursor-pointer max-sm:w-full"
          style={{ fontFamily: 'SK-Modernist, sans-serif' }}
        >
          Garantir Ingressos
        </motion.button>

        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={openModal}
          className="bg-transparent border border-gray-100/30 text-white px-8 max-sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-red-500/25 text-lg max-sm:text-sm cursor-pointer max-sm:w-full"
          style={{ fontFamily: 'SK-Modernist, sans-serif' }}
        >
          Ver Pacotes
        </motion.button>
      </motion.div>

      {/* Métricas */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="flex max-sm:grid max-sm:grid-cols-3 border-t border-b items-center justify-center gap-40 max-sm:gap-4 border-gray-100/15 w-full mt-32 max-sm:mt-12 py-10 max-sm:py-6"
      >
        {[
          { title: 'Palestrantes', value: '13+' },
          { title: 'Empresários', value: '1.000' },
          { title: 'Colaboradores', value: '400' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-3 max-sm:gap-1 items-center"
          >
            <h2 className="text-red-600 text-2xl max-sm:text-sm">
              {item.title}
            </h2>
            <span className="text-white text-5xl max-sm:text-xl font-bold">
              {item.value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default HeroSection
