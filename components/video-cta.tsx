"use client";

import { Play, ChevronRight, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { useTicketModalContext } from '@/contexts/ticket-modal-context'
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

const VideoCTA = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Inicia com áudio
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useTicketModalContext()

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Intersection Observer para detectar quando o vídeo está visível
  useEffect(() => {
    if (!isClient) return;

    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
            // Auto-play quando entra na viewport
            if (videoRef.current) {
              // Tenta tocar com áudio primeiro
              videoRef.current.muted = false;
              videoRef.current.play().catch(err => {
                // Se falhar com som (devido a políticas do navegador), tenta mutado
                console.log("Autoplay with audio failed, trying muted:", err);
                setIsMuted(true);
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  videoRef.current.play();
                }
              });
            }
          } else {
            // Pausa quando sai da viewport
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger quando 50% do vídeo está visível
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [isClient]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const benefits = [
    "Conexões Estratégicas com líderes de todos os setores",
    "Networking Dirigido para construir parcerias",
    "Engajamento Direto com tomadores de decisão",
    "Conteúdo de Alto Nível com resultados comprovados"
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

          {/* Video Section - Order changed for mobile */}
          <motion.div
            className="relative flex-1 order-1 md:order-1 max-sm:order-2"
            custom={0}
            variants={fadeUp}
            ref={containerRef}
          >
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
              {/* Video Container */}
              <div className="relative w-full">
                {/* Video element - always rendered with poster */}
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  poster="/MAT02456-38.jpg"
                >
                  <source src="/lasaro.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay for better button visibility */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center">
                    {/* Play Button */}
                    <motion.button
                      onClick={() => {
                        setIsPlaying(true);
                        if (videoRef.current) {
                          videoRef.current.play();
                        }
                      }}
                      className="group relative w-20 h-20 bg-[#ec020d]/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#ec020d] z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      {/* Pulse animation */}
                      <div className="absolute inset-0 rounded-full bg-[#ec020d] animate-ping opacity-30"></div>
                    </motion.button>
                  </div>
                )}

                {/* Mute/Unmute Button - Always visible when playing */}
                {isClient && isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={toggleMute}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/80 z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </motion.button>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-[#ec020d]/30 rounded-tl-lg pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-[#ec020d]/30 rounded-br-lg pointer-events-none"></div>
            </div>

          </motion.div>

          {/* Content Section - Order changed for mobile */}
          <motion.div
            className="flex-1 order-2 md:order-2 max-sm:order-1"
            custom={1}
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#ec020d]/10 border border-[#ec020d]/30 px-4 py-2 rounded-full mb-6"
              custom={2}
              variants={fadeUp}
            >
              <div className="w-2 h-2 bg-[#ec020d] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#ec020d] font-medium uppercase tracking-wider">Vagas Limitadas</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl max-sm:text-3xl font-medium mb-6 text-white"
              custom={3}
              variants={fadeUp}
            >
              Não Assista,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec020d] to-[#9a0008]">
                Faça Parte!
              </span>
            </motion.h1>

            <motion.p
              className="text-lg max-sm:text-base text-gray-300 leading-relaxed mb-6"
              custom={4}
              variants={fadeUp}
            >
              Por que apenas assistir ao maior movimento de empresários do estado se você pode ser parte dele?
              O Espírito Santo já começou a mudar. Agora é a sua vez de se posicionar, assumir o protagonismo
              e escrever a história junto com a gente.
            </motion.p>

            <motion.p
              className="text-base max-sm:text-sm text-gray-400 leading-relaxed mb-8 italic"
              custom={4.5}
              variants={fadeUp}
            >
              Uma iniciativa Enjoy - já formamos o maior ambiente de negócios do Espírito Santo,
              com mais de mil empresários impactados.
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
                className="bg-gradient-to-r from-[#ec020d] to-[#9a0008] hover:from-[#9a0008] hover:to-[#ec020d] text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg shadow-[#ec020d]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#ec020d]/30"
              >
                GARANTA AGORA SUA VAGA
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>

              <Button
                variant="outline"
                className="border-gray-700 hover:border-gray-600 text-white px-8 py-6 rounded-xl text-lg bg-transparent"
                onClick={openModal}
              >
                Escolher minha experiência
              </Button>
            </motion.div>

            {/* Urgency Text */}
            <motion.div
              className="mt-6 space-y-2"
              custom={7}
              variants={fadeUp}
            >
              <p className="text-sm text-gray-400">
                <span className="text-[#ec020d] font-semibold">Vagas Limitadas</span> •
                Evento em <span className="font-semibold">12 de Novembro de 2025 no Ilha Buffet, Vitória/ES</span>
              </p>
              <p className="text-lg text-white font-bold">
                Prepare-se para liderar a revolução empresarial.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoCTA;
