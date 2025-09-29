"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";

const Speakers = () => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);

  const speakers = [
    {
      name: "Wander Miranda",
      role: "Estratégia e Coragem",
      company: "O Código da Coragem",
      image: "/7.jpg",
      bio: "Saiba como ele superou desafios e críticas e construiu com coragem a mais relevante iniciativa de educação e conexão empresarial do Estado.",
      about: "Wander Miranda é fundador e CEO da Enjoy Educação, escola de negócios para empresários que está transformando o cenário empresarial capixaba. É autor do livro Máquina de Resultados e idealizador da maior imersão de performance empresarial do ES (IMR). Sua missão é provocar empresários a crescerem com visão, gestão e coragem para fazer diferente."
    },
    {
      name: "Marral Lage",
      role: "Faturamento Bilionário",
      company: "Estratégias Avançadas",
      image: "/3.png",
      bio: "Descubra como ele deixou a mentalidade milionária para trás e construiu uma trajetória de sucesso rumo ao bilhão.",
      about: "Marral Laje é empresário capixaba e fundador do Grupo Multicar, referência no setor automotivo no Espírito Santo. De espírito empreendedor, construiu sua trajetória sempre em busca de inovação e crescimento sustentável. Marral é reconhecido por sua visão estratégica, pela forma próxima de liderar e pela capacidade de transformar desafios em oportunidades de negócios."
    },
    {
      name: "Vitor Escocard",
      role: "Networking Milionário",
      company: "Conexões Estratégicas",
      image: "/9.png",
      bio: "Entenda como ele fez do networking uma estratégia poderosa, gerando alianças que resultaram em contratos milionários.",
      about: "Vitor Escocard é engenheiro de produção, mestre em Engenharia de Produção e possui MBAs em Finanças, Controladoria e Marketing. Iniciou a carreira no mercado financeiro e, em 2014, fundou a ORION, master franquia da Prudential do Brasil. Com mais de 4.700 apólices sob gestão, foi reconhecido 12 vezes internacionalmente e chegou ao topo da Times Square. Atua também como sócio-investidor em empresas de diferentes setores."
    },
    {
      name: "Thammy Manuella",
      role: "Estratégia e Liderança",
      company: "Transformação Empresarial",
      image: "/1.jpg",
      bio: "Descubra como ela rompeu com os padrões tradicionais de vendas e capacitou milhares a vender com confiança e autoridade.",
      about: "Thammy Manuella é especialista em marketing e vendas, com mais de uma década de atuação no mercado. Ela desenvolveu métodos próprios focados em alta conversão e estratégias para transformar propostas em resultados. Com presença marcante nas redes sociais, ela divide experiências reais, provoca mentalidades e ensina a construir vendas sustentáveis sem depender de promessas vazias."
    },
    {
      name: "Marcelo Coelho",
      role: "Gestão Afinada",
      company: "Liderança Criativa",
      image: "/2.png",
      bio: "Saiba como ele transformou o jazz em uma metodologia de liderança que impulsionou equipes a resultados excepcionais.",
      about: "Saxofonista, compositor, pesquisador, palestrante e educador, Marcelo Coelho é referência em jazz no Brasil e no mundo. Com doutorado pela Unicamp e mestrado pela University of Miami, já lançou 10 álbuns e atuou ao lado de artistas como Caetano Veloso. Empreendedor, fundou a Acelerarte e lidera a Plataforma SOM."
    },
    {
      name: "Gustavo Fonseca",
      role: "Estratégias Jurídicas",
      company: "Blindagem Empresarial",
      image: "/5.jpg",
      bio: "Saiba como ele utilizou sua expertise jurídica para blindar empresas e garantir um crescimento sustentável.",
      about: "Gustavo Fonseca é advogado, empresário e fundador da FASS Advogados, com escritórios em Vitória e São Paulo. Há 20 anos apoia empresas no Brasil e no exterior a crescer, proteger patrimônio e gerar negócios. Mentor e palestrante, conecta técnica jurídica e visão empresarial, além de atuar como investidor."
    },
    {
      name: "Raphael Ruffo",
      role: "Liderança sem Filtro",
      company: "Conduzir na Pressão",
      image: "/8.png",
      bio: "Veja como ele deixou de ser um 'apagador de incêndios' para se tornar um líder que gera resultados mesmo sob pressão.",
      about: "Raphael Ruffo é empresário e especialista em comunicação e comportamento. Sócio-fundador da Alfaduo Desenvolvimento Humano, empresa de wellness corporativo que transforma cuidado em lucro. Ele promove ambientes de trabalho mais saudáveis. Mentor de empresários, conduz jornadas de performance e propósito."
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
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl max-sm:text-3xl font-medium text-white">
          Conheça todos os mentores
        </h2>
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
            className="group relative bg-gradient-to-b from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 overflow-visible"
            custom={index}
            variants={fadeUp}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#ec020d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative p-6 max-sm:p-4">
              {/* Image and Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ec020d]/20 to-transparent"></div>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
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
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {speaker.bio}
              </p>

              {/* Who is button with tooltip */}
              <div className="relative">
                <button
                  onClick={() => setHoveredSpeaker(hoveredSpeaker === index ? null : index)}
                  onMouseEnter={() => window.innerWidth > 768 && setHoveredSpeaker(index)}
                  onMouseLeave={() => window.innerWidth > 768 && setHoveredSpeaker(null)}
                  className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>Quem é?</span>
                </button>

                {/* Tooltip */}
                {hoveredSpeaker === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-full left-0 mb-2 w-80 max-sm:w-72 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-[9999]"
                    style={{
                      maxHeight: '300px',
                      overflowY: 'auto'
                    }}
                  >
                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 transform rotate-45"></div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {speaker.about}
                    </p>
                  </motion.div>
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