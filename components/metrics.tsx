'use client'

import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
  }),
}

const Metrics = () => {
  const { openModal } = useTicketModalContext()

  return (
    <section
      id="sobre"
      className="w-[1200px] max-sm:w-full mx-auto px-10 max-sm:px-6"
    >
      {/* Título principal */}
      <motion.div
        className="flex items-center justify-center flex-col"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <h1 className="text-2xl text-white md:text-3xl max-sm:text-xl max-w-[700px] max-sm:max-w-full font-medium text-center leading-relaxed mt-12 max-sm:mt-8">
          Um movimento criado para transformar o ambiente de negócios capixaba com seriedade e estratégia.
        </h1>
      </motion.div>

      {/* Desktop */}
      <motion.div
        className="mt-20 max-sm:mt-12 text-white max-sm:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Primeira linha */}
        <motion.div
          className="flex items-center justify-between max-w-[820px]"
          custom={1}
          variants={fadeUp}
        >
          <div className="flex items-center flex-col gap-2">
            <h2 className="text-7xl font-medium">1.000</h2>
            <span className="font-medium text-lg">Empresários comprometidos</span>
          </div>
          <div className="flex items-start flex-col gap-2">
            <h2 className="text-7xl font-medium">13+</h2>
            <span className="font-medium text-lg">Palestrantes e convidados</span>
          </div>
        </motion.div>

        {/* Segunda linha */}
        <motion.div
          className="flex items-center gap-14 mt-16"
          custom={2}
          variants={fadeUp}
        >
          {/* Blocos de clientes e métricas */}
          <div className="flex items-center">
            <div className="relative flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white relative z-20">
                <Image
                  src="/professional-business-person-smiling.png"
                  alt="Cliente 1"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4 relative z-30">
                <Image
                  src="/happy-business-woman-professional.png"
                  alt="Cliente 2"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4 relative z-40">
                <Image
                  src="/smiling-businessman.png"
                  alt="Cliente 3"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[220px] h-[1px] bg-white/50" />
            <div className="h-[80px] w-[1px] bg-white/50 -ml-4 mb-1 -mt-12" />
          </div>

          <div className="flex items-start flex-col gap-2 -mt-28">
            <h2 className="text-7xl font-medium">3</h2>
            <span className="font-medium text-lg">Tipos de experiência</span>
          </div>

          <div className="flex items-center ml-10">
            <div className="relative flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white relative z-20">
                <Image
                  src="/professional-business-person-smiling.png"
                  alt="Cliente 1"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4 relative z-30">
                <Image
                  src="/happy-business-woman-professional.png"
                  alt="Cliente 2"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white -ml-4 relative z-40">
                <Image
                  src="/smiling-businessman.png"
                  alt="Cliente 3"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[220px] h-[1px] bg-white/50" />
            <div className="h-[80px] w-[1px] bg-white/50 -ml-4 mb-1 -mt-12" />
          </div>

          <div className="flex items-start flex-col gap-2 -mt-24">
            <h2 className="text-7xl font-medium">1</h2>
            <span className="font-medium text-lg">Dia de imersão total</span>
          </div>
        </motion.div>

        {/* Terceira linha */}
        <motion.div
          className="flex items-center justify-end w-full"
          custom={3}
          variants={fadeUp}
        >
          {/* Blocos adicionais de clientes */}
          <div className="w-[950px] flex items-center justify-between mt-8">
            <div className="flex items-center">
              <div className="relative flex items-center">
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white relative z-20">
                  <Image
                    src="/professional-business-person-smiling.png"
                    alt="Cliente 1"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white -ml-4 relative z-30">
                  <Image
                    src="/happy-business-woman-professional.png"
                    alt="Cliente 2"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white -ml-4 relative z-40">
                  <Image
                    src="/smiling-businessman.png"
                    alt="Cliente 3"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[200px] h-[1px] bg-white/50" />
              <div className="h-[80px] w-[1px] bg-white/50 -ml-4 mt-1 -mb-12" />
            </div>

            <div className="flex items-center">
              <div className="relative flex items-center">
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white relative z-20">
                  <Image
                    src="/professional-business-person-smiling.png"
                    alt="Cliente 1"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white -ml-4 relative z-30">
                  <Image
                    src="/happy-business-woman-professional.png"
                    alt="Cliente 2"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border-2 border-white -ml-4 relative z-40">
                  <Image
                    src="/smiling-businessman.png"
                    alt="Cliente 3"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[200px] h-[1px] bg-white/50" />
              <div className="h-[80px] w-[1px] bg-white/50 -ml-4 mt-1 -mb-12" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        className="hidden max-sm:block mt-16 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 gap-8 text-center">
          {[
            { value: '1.000', label: 'Empresários comprometidos' },
            { value: '13+', label: 'Palestrantes e convidados' },
            { value: '3', label: 'Tipos de experiência' },
            { value: '1', label: 'Dia de imersão total' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-1"
              custom={i}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-medium">{item.value}</h2>
              <span className="font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="flex max-sm:flex-col items-center justify-center gap-4 max-sm:gap-3 mt-20 max-sm:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={5}
        variants={fadeUp}
      >
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 max-sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-red-500/25 text-lg max-sm:text-sm cursor-pointer max-sm:w-full max-sm:justify-center"
          style={{ fontFamily: 'SK-Modernist, sans-serif' }}
        >
          Garantir Vaga no Evento
          <MoveRight className="size-6 max-sm:size-4" />
        </button>

        <div className="flex items-center max-sm:justify-center">
          <span className="text-white/80 max-sm:text-sm">
            Vagas limitadas
          </span>
          <span className="w-2.5 h-2.5 max-sm:w-2 max-sm:h-2 bg-red-400 rounded-full ml-2 animate-pulse"></span>
        </div>
      </motion.div>
    </section>
  )
}

export default Metrics