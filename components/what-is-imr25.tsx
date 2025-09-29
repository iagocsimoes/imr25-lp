'use client'

import { motion, Variants } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const WhatIsIMR25 = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 },
    }),
  }

  const characteristics = [
    {
      title: "Lideram com Propósito",
      description: "Vá além do lucro e construa um legado",
      gradient: "from-[#ec020d]/20 via-[#9a0008]/10 to-transparent"
    },
    {
      title: "Buscam Sair da Zona de Conforto",
      description: "Desafie o status quo e inove",
      gradient: "from-[#9a0008]/20 via-[#ec020d]/10 to-transparent"
    },
    {
      title: "Estão Prontos para Ouvir Verdades Duras",
      description: "Receba insights diretos e acionáveis",
      gradient: "from-[#ec020d]/20 via-[#9a0008]/10 to-transparent"
    },
    {
      title: "Querem Mudar a Forma como Vendem, Lideram, Gerenciam",
      description: "Transforme suas estratégias e resultados",
      gradient: "from-[#9a0008]/20 via-[#ec020d]/10 to-transparent"
    }
  ]

  return (
    <section className="relative py-24 max-sm:py-16 overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#ec020d]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-[#9a0008]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 2, 13, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 2, 13, 0.01) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20 max-sm:mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '150px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#ec020d] to-[#9a0008] mx-auto mb-8"
          />

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl max-sm:text-4xl font-bold text-white mb-4"
            custom={0}
            variants={fadeUp}
          >
            O que é o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">
              IMR25?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl max-sm:text-lg text-gray-300 font-light mt-8"
            custom={1}
            variants={fadeUp}
          >
            Um evento criado pela{" "}
            <span className="text-white font-semibold">ENJOY</span>{" "}
            que busca os{" "}
            <span className="text-white font-semibold">empresários de verdade</span>{" "}
            que lideram com propósito,<br />
            vão além do lucro e constroem um legado:
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {characteristics.map((item, index) => (
            <motion.div
              key={index}
              custom={index + 2}
              variants={fadeUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden"
            >
              {/* Card Background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ec020d] to-[#9a0008] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-slate-900/95 rounded-3xl p-8 m-[1px] backdrop-blur-sm">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}></div>

                {/* Content */}
                <div className="relative flex items-start gap-5">
                  {/* Arrow Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 relative transform transition-transform duration-300 group-hover:translate-x-2">
                      <Image
                        src="/SETA_VERMELHA.png"
                        alt="Seta"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.description}
                    </p>

                    {/* Checkmark indicator */}
                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">Este é você?</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#ec020d]/10 via-[#9a0008]/5 to-[#ec020d]/10 rounded-2xl p-8 max-w-4xl mx-auto border border-[#ec020d]/20">
            <p className="text-xl text-gray-200 font-light mb-6">
              Já passaram mais de mil empresários pelas nossas formações e mentorias.
              Essa é sua oportunidade de se conectar à Enjoy e construir um legado.
            </p>
            <p className="text-2xl text-white font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">
                O que está faltando para você crescer ainda mais?
              </span>
            </p>
            <p className="text-3xl text-white font-bold">
              Encontre a resposta no IMR 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsIMR25