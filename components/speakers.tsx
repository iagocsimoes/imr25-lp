"use client";

import Image from "next/image";
import { Linkedin, Instagram, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Speakers = () => {
  const speakers = [
    {
      name: "Lásaro do Carmo",
      role: "CEO & Founder",
      company: "Wider Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Empreendedor serial com mais de 15 anos de experiência em transformação digital",
      social: {
        linkedin: "#",
        instagram: "#",
        website: "#"
      }
    },
    {
      name: "Marina Santos",
      role: "Diretora de Inovação",
      company: "Tech Ventures",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Especialista em estratégias de crescimento e scale-ups no mercado brasileiro",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Roberto Silva",
      role: "Head of Sales",
      company: "Growth Partners",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Top voice em vendas B2B com resultados comprovados em grandes corporações",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Ana Paula Ferreira",
      role: "CMO",
      company: "Digital Leaders",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Referência em marketing digital e geração de demanda para empresas SaaS",
      social: {
        instagram: "#",
        website: "#"
      }
    },
    {
      name: "Carlos Mendes",
      role: "Investidor Anjo",
      company: "Venture Capital BR",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Investidor com portfólio de 50+ startups e mentor de empreendedores",
      social: {
        linkedin: "#",
        instagram: "#",
        website: "#"
      }
    },
    {
      name: "Juliana Costa",
      role: "Head of People",
      company: "Future Work",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop",
      bio: "Pioneira em cultura organizacional e gestão de talentos na era digital",
      social: {
        linkedin: "#"
      }
    }
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
    <div className="relative z-1 container mx-auto px-4 max-sm:px-6 py-20 max-sm:py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-16 max-sm:mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gray-500/20 px-4 py-2 rounded-full mb-6"
          custom={0}
          variants={fadeUp}
        >
          <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Conheça os especialistas</span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-8xl max-sm:text-3xl font-medium mb-6 max-sm:mb-4 text-white max-w-[1200px] max-sm:max-w-full text-center mx-auto"
          custom={1}
          variants={fadeUp}
        >
          Palestrantes Confirmados
        </motion.h1>
        <motion.p
          className="text-lg max-sm:text-base text-white leading-relaxed opacity-90 max-w-3xl max-sm:max-w-full mx-auto font-medium"
          custom={2}
          variants={fadeUp}
        >
          Líderes de mercado compartilhando experiências práticas e insights transformadores
        </motion.p>
      </motion.div>

      {/* Speakers Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:gap-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-hidden"
            custom={index}
            variants={fadeUp}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative p-6 max-sm:p-4">
              {/* Image and Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl max-sm:text-lg font-semibold text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-red-400 font-medium mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-xs text-gray-400">
                    {speaker.company}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {speaker.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {speaker.social.linkedin && (
                  <a
                    href={speaker.social.linkedin}
                    className="w-8 h-8 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center transition-colors"
                    aria-label={`LinkedIn de ${speaker.name}`}
                  >
                    <Linkedin className="w-4 h-4 text-gray-400" />
                  </a>
                )}
                {speaker.social.instagram && (
                  <a
                    href={speaker.social.instagram}
                    className="w-8 h-8 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center transition-colors"
                    aria-label={`Instagram de ${speaker.name}`}
                  >
                    <Instagram className="w-4 h-4 text-gray-400" />
                  </a>
                )}
                {speaker.social.website && (
                  <a
                    href={speaker.social.website}
                    className="w-8 h-8 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 flex items-center justify-center transition-colors"
                    aria-label={`Website de ${speaker.name}`}
                  >
                    <Globe className="w-4 h-4 text-gray-400" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Speakers;