'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TestimonialOverlay() {
  const avatars = [
    {
      src: '/professional-business-person-smiling.png',
      alt: 'Cliente satisfeito 1',
    },
    {
      src: '/happy-business-woman-professional.png',
      alt: 'Cliente satisfeito 2',
    },
    { src: '/smiling-businessman.png', alt: 'Cliente satisfeito 3' },
    { src: '/happy-professional-woman.png', alt: 'Cliente satisfeito 4' },
    { src: '/satisfied-business-person.png', alt: 'Cliente satisfeito 5' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="transform z-20 flex items-center justify-center mt-24 sm:mt-32"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="max-w-[280px] sm:max-w-[380px] bg-gradient-to-r from-[#9a0008]/20 to-slate-950/20 rounded-full px-3 sm:px-6 py-2 sm:py-3 shadow-2xl border border-[#9a0008]/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="relative flex items-center"
          >
            {avatars.map((avatar, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#ec020d] ${
                  index > 0 ? '-ml-1.5 sm:-ml-3' : ''
                } relative z-${40 - index * 10}`}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start gap-0.5 sm:gap-1"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex gap-0.5"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-[#ec020d] text-[#ec020d]" />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-gray-300 font-sk-modernist">
              <span className="text-xs sm:text-base font-extralight">
                +1000 empresários
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
