'use client'

import { MoveRight } from 'lucide-react'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { motion } from 'framer-motion'

const MyLp = () => {
  const { openModal } = useTicketModalContext()

  return (
    <div className="max-w-[1400px] z-50 mx-auto mt-12 sm:mt-20 pb-12 sm:pb-20 px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-[280px] sm:h-[420px] w-full bg-[url('/mylp.svg')] rounded-[20px] sm:rounded-[40px] border border-gray-200/52 bg-no-repeat bg-top bg-cover flex flex-col items-center px-4 sm:px-8 relative"
        style={{ filter: 'hue-rotate(-20deg) saturate(0.8) brightness(0.9)' }}
      >
        {/* Color overlay for red/blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/25 via-transparent to-blue-900/20 mix-blend-multiply rounded-[20px] sm:rounded-[40px]"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl w-full sm:w-[1150px] text-center font-medium mt-8 sm:mt-14 text-balance relative z-10"
        >
          Pronto para transformar sua trajetória empresarial?
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-light mt-6 sm:mt-12 px-2 sm:px-0 text-balance"
        >
          O Encontro da Elite é o evento que vai conectar você com as estratégias e conexões necessárias para elevar seu negócio ao próximo nível.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          onClick={openModal}
          className="flex items-center gap-2 mt-8 sm:mt-12 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-red-500/25 text-base sm:text-lg cursor-pointer"
          style={{ fontFamily: 'SK-Modernist, sans-serif' }}
        >
          Garantir meu ingresso
          <MoveRight className="size-5 sm:size-6" />
        </motion.button>
      </motion.div>
    </div>
  )
}

export default MyLp
