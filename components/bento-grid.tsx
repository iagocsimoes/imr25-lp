"use client";

import { motion, Variants } from "framer-motion";
import { TrendingUp, Users, Zap, Target, Globe, Award, BarChart3, Rocket } from "lucide-react";
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
      title: "Crescimento Exponencial",
      description: "Estratégias comprovadas para escalar seu negócio 10x mais rápido",
      icon: TrendingUp,
      gradient: "from-red-500/20 to-red-600/10",
      size: "col-span-1 row-span-2",
      stats: "+347%",
      statsLabel: "Crescimento médio",
      hasCustomVisual: true
    },
    {
      id: 2,
      title: "Conexões Estratégicas",
      description: "Engajamento direto com tomadores de decisão e a elite empresarial de diversos setores da economia capixaba.",
      icon: Users,
      gradient: "from-blue-500/20 to-blue-600/10",
      size: "col-span-2 row-span-1",
      stats: "1.000",
      statsLabel: "Empresários"
    },
    {
      id: 3,
      title: "Liderança de Alta Performance",
      description: "Domine a arte de liderar com clareza e comunicar com impacto para engajar sua equipe de verdade.",
      icon: Zap,
      gradient: "from-purple-500/20 to-purple-600/10",
      size: "col-span-1 row-span-1",
      stats: "Engajamento",
      statsLabel: "do Time"
    },
    {
      id: 4,
      title: "Conteúdo da Vida Real",
      description: "Tenha acesso a estratégias de empresários com resultados comprovados no mercado.",
      icon: Target,
      gradient: "from-green-500/20 to-green-600/10",
      size: "col-span-1 row-span-1",
      stats: "Aprenda",
      statsLabel: "com quem fez"
    },
    {
      id: 5,
      title: "Palco de Gigantes",
      description: "Tenha acesso a líderes e especialistas com mais de R$ 1 bilhão em faturamento anual somado.",
      icon: Globe,
      gradient: "from-cyan-500/20 to-cyan-600/10",
      size: "col-span-2 row-span-1",
      stats: "+13",
      statsLabel: "Palestrantes"
    },
    {
      id: 6,
      title: "Experiência VIP Exclusiva",
      description: "Networking exclusivo com o palestrante principal, Lásaro do Carmo, e happy hour para convidados.",
      icon: Award,
      gradient: "from-yellow-500/20 to-yellow-600/10",
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
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full mb-6"
          custom={0}
          variants={fadeUp}
        >
          <Rocket className="w-4 h-4 text-red-400" />
          <span className="text-sm text-red-400 font-medium uppercase tracking-wider">Por que participar</span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl max-sm:text-3xl font-medium mb-6 max-sm:mb-4 text-white max-w-[1000px] max-sm:max-w-full text-center mx-auto"
          custom={1}
          variants={fadeUp}
        >
          Uma experiência que vai{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            transformar
          </span>{" "}
          seu negócio
        </motion.h1>
        <motion.p
          className="text-lg max-sm:text-base text-gray-300 leading-relaxed max-w-3xl max-sm:max-w-full mx-auto font-medium"
          custom={2}
          variants={fadeUp}
        >
          Descubra os pilares fundamentais que separam empresas comuns de impérios empresariais
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`group relative ${item.size} bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 transition-all duration-300 overflow-hidden`}
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
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent z-20">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative h-full p-6 flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-800/50">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>

                  {item.stats && (
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-2xl font-bold text-white">{item.stats}</div>
                      <div className="text-xs text-gray-400">{item.statsLabel}</div>
                    </motion.div>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
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
                    className="h-full bg-gradient-to-r from-red-500 to-red-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
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