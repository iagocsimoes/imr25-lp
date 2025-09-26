'use client'

import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

const ExclusiveBanner = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full bg-gradient-to-r from-[#ec020d] via-[#d0010b] to-[#9a0008] py-3 px-4 border-b border-red-900/20"
    >
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Crown className="w-5 h-5 text-yellow-300 animate-pulse" />
        <p className="text-white text-sm md:text-base font-bold text-center tracking-wide">
          🎯 EXCLUSIVO PARA DONOS DE EMPRESA QUE FATURAM +R$ 1M/ANO
        </p>
        <Crown className="w-5 h-5 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
    </motion.div>
  )
}

export default ExclusiveBanner