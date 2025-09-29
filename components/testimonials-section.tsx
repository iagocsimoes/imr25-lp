'use client'

import { motion } from 'framer-motion'
import { Quote, TrendingUp, Target } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andressa",
      role: "Empresária",
      content: "Alcancei minha meta em 1/3 do tempo e realizei o sonho do apartamento em 6 meses (previsão era 4 anos). A Enjoy distorce o tempo.",
      icon: Target,
      gradient: "from-[#ec020d]/20 to-[#9a0008]/10"
    },
    {
      id: 2,
      name: "Arthur Galvão",
      role: "Empresário",
      content: "Investi na Enjoy e tive ROI de 13,88x a partir das conexões feitas no movimento da Enjoy.",
      icon: TrendingUp,
      gradient: "from-[#9a0008]/20 to-[#ec020d]/10"
    }
  ]

  return (
    <section className="relative py-20 max-sm:py-12 overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ec020d]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9a0008]/5 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-sm:mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-sm:text-3xl font-bold text-white mb-6">
            Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">falam por si</span>
          </h2>
          <p className="text-xl max-sm:text-base text-gray-300 max-w-3xl mx-auto">
            A Enjoy é a mais relevante do Espírito Santo quando o assunto é conexão e educação para empresários. Em 2025 passaram mais de 1.000 empresários pelas nossas formações e mentorias, que fizeram a diferença em suas trajetórias.
          </p>
          <p className="text-xl max-sm:text-base text-gray-300 max-w-3xl mx-auto mt-4">
            Aqui é o único lugar no Espírito Santo em que você ganha dinheiro para aprender, se desenvolver e se conectar.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-sm:gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

              {/* Card content */}
              <div className="relative bg-slate-900/90 rounded-2xl p-8 max-sm:p-6 border border-gray-800 backdrop-blur-sm">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ec020d] to-[#9a0008] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Testimonial content */}
                <p className="text-lg max-sm:text-base text-gray-100 leading-relaxed mb-6 mt-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <testimonial.icon className="w-8 h-8 text-[#ec020d] opacity-50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
