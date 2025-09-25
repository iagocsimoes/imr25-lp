'use client'

import { ArrowUpRight } from 'lucide-react'
import { Icosahedron3D } from './icon-3d'
import { motion, Variants } from 'framer-motion'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
  }),
}

const Description = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 max-sm:px-6 flex items-center flex-col mt-20 max-sm:mt-12">
      <motion.div
        className="flex max-sm:flex-col items-center max-sm:items-start justify-between max-sm:gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-col">
          <motion.h1
            variants={fadeInUp}
            className="text-[5rem] max-sm:text-3xl leading-[6rem] max-sm:leading-tight font-semibold text-white max-w-[1000px] max-sm:max-w-full text-start max-sm:text-center"
          >
            O que você vai aprender no{' '}
            <span className="text-red-600">Encontro da Elite</span>.
          </motion.h1>
          <motion.h3
            variants={fadeInUp}
            className="text-gray-100/80 text-xl max-sm:text-base max-w-[700px] max-sm:max-w-full text-start max-sm:text-center mt-4"
          >
            Conteúdos exclusivos e estratégicos para elevar seu negócio
            ao próximo nível com a elite empresarial capixaba.
          </motion.h3>
        </div>

        <motion.div
          className="max-sm:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <Icosahedron3D />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-7 max-sm:grid-cols-1 gap-6 max-sm:gap-4 mt-10 max-sm:mt-8">
        {[
          {
            text: 'Explore estratégias que vão além do óbvio e enxergue novas oportunidades de crescimento. Atualize suas táticas com práticas atuais para vender mais e se destacar no mercado.',
            title: 'Visão e Estratégia de Mercado',
          },
          {
            text: 'Tenha acesso a conteúdo da vida real, prático e direcionado ao médio empresário. Aplique métodos eficientes para otimizar processos e aumentar os resultados da sua empresa.',
            title: 'Gestão e Metodologias Práticas',
          },
          {
            text: 'Aprenda a liderar com propósito, dominando a arte de se comunicar com clareza e impacto para engajar seu time de verdade. Eleve o nível da sua gestão e liderança para transformar a performance da sua equipe.',
            title: 'Liderança e Engajamento',
          },
          {
            text: 'Participe de momentos de networking dirigidos e tenha engajamento direto com tomadores de decisão, construindo relacionamentos com a elite empresarial de diversos setores da economia capixaba.',
            title: 'Conexões e Estratégias',
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={
              i === 0 || i === 3
                ? 'flex items-start justify-between col-span-3 max-sm:col-span-1 gap-6 max-sm:gap-4 p-8 max-sm:p-6 rounded-2xl bg-gradient-to-br from-gray-400/20 via-gray-400/10 to-red-600/30 text-white overflow-hidden shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition'
                : 'flex items-start justify-between col-span-4 max-sm:col-span-1 gap-6 max-sm:gap-4 p-8 max-sm:p-6 rounded-2xl bg-gray-400/15 text-white overflow-hidden shadow-[0_0_15px_rgba(249,116,22,0.15)] hover:shadow-[0_0_25px_rgba(249,116,22,0.25)] transition'
            }
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col justify-between h-full gap-2">
              <p className="text-lg max-sm:text-base leading-relaxed opacity-90">
                {card.text}
              </p>
              <h2 className="text-3xl max-sm:text-2xl font-bold">
                {card.title}
              </h2>
            </div>

            <div>
              <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-red-500 rounded-full flex items-center justify-center shadow-md shadow-red-500/40">
                <ArrowUpRight className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Description
