'use client'

import { motion } from 'framer-motion'

const ExclusiveBanner = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full bg-gradient-to-r from-[#ec020d] via-[#d0010b] to-[#9a0008] py-3 px-4 border-b border-red-900/20 z-[10000]"
    >
      <div className="container mx-auto flex items-center justify-center gap-3">
        <p className="text-white text-sm md:text-base font-bold text-center tracking-wide">
           EXCLUSIVO PARA DONOS DE EMPRESAS QUE FATURAM +R$ 1M/ANO
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
    </motion.div>
  )
}

export default ExclusiveBanner
