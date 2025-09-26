'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, TrendingUp, Users } from 'lucide-react'

const KeynoteSpeakers = () => {
  const speaker = {
    name: "Lásaro do Carmo Jr.",
    role: "Estratégias Financeiras",
    company: "Do Zero a Meio Bilhão",
    image: "/MAT02456-38.jpg",
    achievements: [
      { icon: TrendingUp, text: "Do controle ao posicionamento estratégico" },
      { icon: Users, text: "Finanças com visão de CEO" },
      { icon: Award, text: "Aconselha as maiores empresas do país" }
    ],
    quote: "Do Zero a Meio Bilhão: Estratégias que Fazem o Caixa Crescer",
    bio: "O ponto cego que impede empresas boas de crescer: Descubra o que você não está vendo. Finanças com visão de CEO: Do controle ao posicionamento estratégico. Estratégia prática de quem aconselha as maiores empresas do país."
  }

  return (
    <section className="relative py-24 overflow-hidden bg-slate-950">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-[#ec020d]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#9a0008]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 left-20 w-[400px] h-[400px] bg-[#1c1d1c]/20 rounded-full mix-blend-multiply filter blur-[96px]"></div>
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 2, 13, 0.01) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 2, 13, 0.01) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        ></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/50 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-sm:mb-10"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#ec020d] to-[#9a0008] mx-auto mb-6"
          />
          <h2 className="text-5xl md:text-6xl lg:text-7xl max-sm:text-3xl font-medium text-white mb-4">
            Mentores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">transformam</span>,
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl max-sm:text-2xl font-medium text-white">
            empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9a0008] to-[#ec020d]">evoluem</span>
          </h3>
          <p className="mt-6 text-lg max-sm:text-base text-[#d8d8d8] max-w-3xl mx-auto">
            Insights valiosos e estratégias comprovadas para você aplicar imediatamente em seu negócio
          </p>
        </motion.div>

        {/* Speaker Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative"
          >
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950 rounded-2xl border border-gray-800/30 overflow-hidden h-full">
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Image Section - Full Height */}
                  <div className="relative h-[400px] md:h-full min-h-[500px] overflow-hidden">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent z-10"></div>

                    {/* Image with subtle hover */}
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-[1.02]"
                    />

                    {/* Name Overlay with better positioning */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h3 className="text-3xl font-semibold text-white mb-1 drop-shadow-lg">{speaker.name}</h3>
                        <p className="text-[#ec020d] font-medium drop-shadow">{speaker.role}</p>
                        <p className="text-[#d8d8d8] text-sm drop-shadow">{speaker.company}</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between h-full">
                    {/* Quote */}
                    <div className="mb-6">
                      <div className="text-5xl text-[#ec020d]/10 font-serif leading-none">&ldquo;</div>
                      <p className="text-white/90 text-lg italic -mt-6 ml-3 leading-relaxed">
                        {speaker.quote}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-[#d8d8d8]/80 text-sm leading-relaxed mb-6">
                      {speaker.bio}
                    </p>

                    {/* Achievements with better spacing */}
                    <div className="space-y-4 flex-grow">
                      {speaker.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-800/50 backdrop-blur flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#ec020d]/10">
                            <achievement.icon className="w-5 h-5 text-[#ec020d] transition-transform duration-300 group-hover/item:scale-110" />
                          </div>
                          <span className="text-white/70 text-sm group-hover/item:text-white/90 transition-colors duration-300">{achievement.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA with better design */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mt-auto pt-6 border-t border-gray-800/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#d8d8d8]/60 text-sm">
                          Palestra principal
                        </span>
                        <div className="flex items-center gap-2 bg-[#ec020d]/10 px-3 py-1 rounded-full">
                          <div className="w-1.5 h-1.5 bg-[#ec020d] rounded-full animate-pulse"></div>
                          <span className="text-[#ec020d] text-xs font-medium uppercase tracking-wider">Confirmado</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default KeynoteSpeakers
