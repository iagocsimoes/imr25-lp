'use client'

import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const { openModal } = useTicketModalContext()

  return (
    <>
      {/* Hero Section - 80vh */}
      <section className="flex flex-col z-50 items-center overflow-hidden w-full h-[80vh] px-4 max-sm:px-6 relative">
        {/* Container central para título, subtítulo e botões */}
        <div className="flex flex-col items-center justify-center h-full w-full">
          {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[5.5rem] max-sm:text-3xl leading-[6rem] max-sm:leading-tight font-semibold text-white max-w-[1200px] max-sm:max-w-full text-center"
        >
          IMR25: O Chamado para a <br />
          <span className="text-red-600">Transformação Empresarial</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-gray-100/80 text-xl max-sm:text-base max-w-[1000px] max-sm:max-w-full text-center mt-8 max-sm:mt-4"
        >
          Prepare-se para Liderar a Revolução! Chegou a hora de posicionar sua marca onde os <br />
          verdadeiros empresários estão, liderando a transformação do Espírito Santo. O IMR25 não é <br />
          apenas um evento; é um movimento para homens e mulheres que se preparam para vencer.
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
            GARANTA AGORA SUA VAGA
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
            Pacotes para Embaixadores
          </motion.button>
        </motion.div>
      </div>
      </section>

      {/* Métricas - seção separada */}
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
        className="flex max-sm:grid max-sm:grid-cols-3 border-t border-b items-center justify-center gap-40 max-sm:gap-4 border-gray-100/15 w-full py-10 max-sm:py-6 z-50 relative"
      >
        {[
          { title: 'Mentores', value: '7+' },
          { title: 'Empresários', value: '1.000' },
          { title: 'Data', value: '12/11/25' },
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
    </>
  )
}

export default HeroSection
