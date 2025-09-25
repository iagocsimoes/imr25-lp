"use client";

import { Play, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

const VideoCTA = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { openModal } = useTicketModalContext()

  useEffect(() => {
    setIsClient(true);
  }, []);

  const benefits = [
    "Networking com +500 empresários",
    "Estratégias práticas e aplicáveis",
    "Certificado de participação",
    "Material de apoio exclusivo"
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
    }),
  };

  return (
    <div className="relative z-10 container mx-auto px-4 max-sm:px-6 py-20 max-sm:py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Video Section */}
          <motion.div
            className="relative flex-1 order-2 md:order-1"
            custom={0}
            variants={fadeUp}
          >
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
              {/* Video Thumbnail Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                {!isClient ? (
                  // Placeholder durante hidratação
                  <div className="w-20 h-20 bg-red-500/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                ) : !isPlaying ? (
                  <>
                    {/* Play Button */}
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="group relative w-20 h-20 bg-red-500/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-500"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      {/* Pulse animation */}
                      <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-30"></div>
                    </motion.button>

                    {/* Video Preview */}
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      preload="metadata"
                    >
                      <source src="/energia-contagiante-da-imersão-máquina-de-resultados-2024.mp4" type="video/mp4" />
                    </video>
                  </>
                ) : (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/energia-contagiante-da-imersão-máquina-de-resultados-2024.mp4" type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-red-500/30 rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-red-500/30 rounded-br-lg"></div>
            </div>

          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex-1 order-1 md:order-2"
            custom={1}
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full mb-6"
              custom={2}
              variants={fadeUp}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-400 font-medium uppercase tracking-wider">Vagas Limitadas</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl max-sm:text-3xl font-medium mb-6 text-white"
              custom={3}
              variants={fadeUp}
            >
              Transforme seu negócio em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                um só dia
              </span>
            </motion.h1>

            <motion.p
              className="text-lg max-sm:text-base text-gray-300 leading-relaxed mb-8"
              custom={4}
              variants={fadeUp}
            >
              Participe da maior imersão empresarial do ano. Um dia intenso de aprendizado,
              conexões estratégicas e insights que vão revolucionar a forma como você
              conduz seus negócios.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              className="space-y-3 mb-10"
              custom={5}
              variants={fadeUp}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              custom={6}
              variants={fadeUp}
            >
              <Button
                onClick={openModal}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
              >
                Garantir minha vaga
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-gray-700 hover:border-gray-600 text-white px-8 py-6 rounded-xl text-lg bg-transparent"
                onClick={openModal}
              >
                Ver ingressos disponíveis
              </Button>
            </motion.div>

            {/* Urgency Text */}
            <motion.p
              className="mt-6 text-sm text-gray-400"
              custom={7}
              variants={fadeUp}
            >
              <span className="text-red-400 font-semibold">Apenas 127 vagas restantes</span> •
              Evento em <span className="font-semibold">15 de março de 2025</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoCTA;