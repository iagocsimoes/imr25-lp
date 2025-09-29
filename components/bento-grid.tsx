"use client";

import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Zap, Target, Globe, Award, Rocket } from "lucide-react";
import { Visual2 } from "./animated-card-diagram";

const BentoGrid = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
    }),
  };

  const items = [
    {
      id: 1,
      title: "Visão Estratégica",
      description: "Amplie sua visão de negócios e aprenda a identificar oportunidades únicas no mercado",
      icon: TrendingUp,
      gradient: "from-[#ec020d]/20 to-[#9a0008]/10",
      size: "col-span-1 row-span-2",
      stats: "IMR25",
      statsLabel: "O Chamado",
      hasCustomVisual: true
    },
    {
      id: 2,
      title: "Conexões Empresariais",
      description: "Networking dirigido com líderes empresariais de todos os setores para construir parcerias estratégicas.",
      icon: Users,
      gradient: "from-[#1c1d1c]/20 to-[#1c1d1c]/10",
      size: "col-span-2 row-span-1",
      stats: "1.000",
      statsLabel: "Empresários"
    },
    {
      id: 3,
      title: "Mentalidade de Resultados",
      description: "Calibre sua mentalidade através de provocações reais, de quem já chegou lá.",
      icon: Zap,
      gradient: "from-[#9a0008]/20 to-[#ec020d]/10",
      size: "col-span-1 row-span-1",
      stats: "Aplique",
      statsLabel: "Imediatamente"
    },
    {
      id: 4,
      title: "Motivação e Encorajamento",
      description: "Encontre a energia e direção para superar desafios e alcançar novos patamares empresariais.",
      icon: Target,
      gradient: "from-[#d8d8d8]/10 to-[#fbfcff]/5",
      size: "col-span-1 row-span-1",
      stats: "Domine",
      statsLabel: "o Mercado"
    },
    {
      id: 5,
      title: "Liderança Empresarial",
      description: "Desenvolva habilidades de liderança para conduzir sua equipe e empresa ao próximo nível de excelência.",
      icon: Globe,
      gradient: "from-[#ec020d]/10 to-[#9a0008]/5",
      size: "col-span-2 row-span-1",
      stats: "9",
      statsLabel: "Mentores"
    },
    {
      id: 6,
      title: "Experiência VIP Exclusiva",
      description: "Networking Experience com Lásaro do Carmo, happy hour exclusivo e acesso ao VIP Lounge.",
      icon: Award,
      gradient: "from-[#fbfcff]/10 to-[#d8d8d8]/5",
      size: "col-span-1 row-span-1",
      stats: "Acesso",
      statsLabel: "VIP Lounge"
    }
  ];

  return (
    <div className="relative z-10 container mx-auto px-4 max-sm:px-6 py-20 max-sm:py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-16 max-sm:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-[#ec020d]/10 border border-[#ec020d]/30 px-4 py-2 rounded-full mb-6"
          custom={0}
          variants={fadeUp}
        >
          <Rocket className="w-4 h-4 text-[#ec020d]" />
          <span className="text-sm text-[#ec020d] font-medium uppercase tracking-wider">O Que Você Vai Aprender</span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl max-sm:text-3xl font-medium mb-6 max-sm:mb-4 text-white max-w-[1000px] max-sm:max-w-full text-center mx-auto"
          custom={1}
          variants={fadeUp}
        >
          O que você vai aprender no{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">
            Encontro Máquina de Resultados
          </span>
        </motion.h1>
        <motion.p
          className="text-lg max-sm:text-base text-gray-300 leading-relaxed max-w-3xl max-sm:max-w-full mx-auto font-medium"
          custom={2}
          variants={fadeUp}
        >
          Estratégias que vão além do óbvio para você enxergar novas oportunidades de crescimento
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[200px] max-sm:auto-rows-[150px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group relative ${item.size} max-sm:col-span-1 max-sm:row-span-1 bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 transition-all duration-300 overflow-hidden`}
            custom={index}
            variants={fadeUp}
          >

            {/* Custom Visual for Growth Card */}
            {item.hasCustomVisual && item.id === 1 ? (
              <div className="group/animated-card relative h-full w-full overflow-hidden">
                <Visual2
                  mainColor="#ef4444"
                  secondaryColor="#fbbf24"
                  gridColor="#ffffff05"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 max-sm:p-4 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent z-20">
                  <h3 className="text-xl max-sm:text-base font-semibold text-white mb-2 max-sm:mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm max-sm:text-xs leading-relaxed max-sm:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative h-full p-6 max-sm:p-4 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4 max-sm:mb-3">
                  <div className="p-3 max-sm:p-2 rounded-xl bg-gray-800/50">
                    <item.icon className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-[#ec020d]" />
                  </div>

                  {item.stats && (
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-2xl max-sm:text-lg font-bold text-white">{item.stats}</div>
                      <div className="text-xs max-sm:text-[10px] text-gray-400">{item.statsLabel}</div>
                    </motion.div>
                  )}
                </div>

                <h3 className="text-xl max-sm:text-base font-semibold text-white mb-2 max-sm:mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm max-sm:text-xs leading-relaxed max-sm:line-clamp-3">
                  {item.description}
                </p>
              </div>


              {/* Bottom indicator */}
              <div className="mt-auto pt-4">
                <motion.div
                  className="w-full h-1 bg-gray-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ec020d] to-[#9a0008]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.div>
              </div>
            </div>
            )}

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default BentoGrid;
