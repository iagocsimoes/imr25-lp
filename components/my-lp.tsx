'use client'

import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'

const MyLp = () => {

  return (
    <div className="max-w-[1400px] z-50 mx-auto mt-12 sm:mt-20 pb-12 sm:pb-20 px-4 sm:px-0">
      <motion.a
        href="https://www.sympla.com.br/evento/imersao-maquina-de-resultados-12-11-2025/3149276?_gl=1*t62a9x*_gcl_au*MTgwNDkxMTA2Ni4xNzU4OTA3NDg5LjIwOTI3NzAwNC4xNzU5MjU5ODA0LjE3NTkyNTk4MDM.*_ga*MTg3MTQ4MDA3NS4xNzU4OTA3NDkw*_ga_KXH10SQTZF*czE3NTkyNTczMzQkbzgkZzEkdDE3NTkyNjIxMTAkajU1JGwwJGgxNTMzNTI5MTE/utm_source=landing-page&utm_medium=geral&utm_campaign=imr-25"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="min-h-[280px] sm:h-[420px] w-full bg-[url('/mylp.svg')] rounded-[20px] sm:rounded-[40px] border border-gray-200/52 bg-no-repeat bg-top bg-cover flex flex-col items-center px-4 sm:px-8 relative cursor-pointer group block hover:scale-[1.02] transition-transform duration-300"
        style={{ filter: 'hue-rotate(-15deg) saturate(1.8) contrast(1.2) brightness(0.95)' }}
      >
        {/* Color overlay for red/blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ec020d]/40 via-[#9a0008]/20 to-[#ec020d]/30 mix-blend-multiply rounded-[20px] sm:rounded-[40px] group-hover:from-[#ec020d]/50 group-hover:to-[#ec020d]/40 transition-all duration-300"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl w-full sm:w-[1150px] text-center font-medium mt-8 sm:mt-14 text-balance relative z-10 pointer-events-none"
        >
          IMR25: O Chamado para a Transformação Empresarial
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-light mt-6 sm:mt-12 px-2 sm:px-0 text-balance pointer-events-none"
        >
          Prepare-se para Liderar a Revolução! O palco das estratégias que transformarão os negócios do Estado.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2 mt-8 sm:mt-12 bg-[#ec020d] group-hover:bg-[#9a0008] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg group-hover:shadow-[#ec020d]/25 text-base sm:text-lg pointer-events-none"
          style={{ fontFamily: 'SK-Modernist, sans-serif' }}
        >
          Garanta sua vaga agora
          <MoveRight className="size-5 sm:size-6" />
        </motion.div>
      </motion.a>
    </div>
  )
}

export default MyLp
