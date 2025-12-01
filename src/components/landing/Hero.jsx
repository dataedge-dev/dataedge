import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Variáveis de animação para o texto (entrada suave)
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Efeito sutil de parallax no background e no texto ao rolar
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      // Adicionado style={{ position: "relative" }} para garantir que o Framer Motion não reclame
      style={{ position: "relative" }}
      className="min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712] py-20"
      id="hero"
    >
      {/* --- Background Animation: The Intelligent Network --- */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Gradiente de fundo para profundidade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(3,7,18,1)_100%)]"></div>
        
        {/* Luzes difusas de fundo - Cores Ciano e Roxo */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] animate-pulse-slow animation-delay-2000"></div>

        {/* A Rede Neural Fluida (SVG Animado) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          // IMPORTANTE: viewBox define coordenadas de 0 a 100 para evitar erros de % no path
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradiente para as linhas de conexão (Ciano para Roxo) */}
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" /> {/* Ciano */}
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" /> {/* Roxo */}
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" /> {/* Ciano */}
            </linearGradient>
             {/* Filtro de brilho para o núcleo central */}
             <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
          </defs>

          {/* Núcleo Central Pulsante */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="fill-cyan-500/20 stroke-cyan-400 stroke-2"
            filter="url(#glow)"
            strokeWidth="0.5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
           <motion.circle
            cx="50"
            cy="50"
            r="20"
            className="fill-cyan-100"
            filter="url(#glow)"
          />

          {/* Orbitais e Conexões */}
          {[0, 120, 240].map((angle, index) => (
            <motion.g key={index}>
               {/* Ponto Orbital */}
              <motion.circle
                r="1"
                className="fill-purple-400/80"
                animate={{
                  // Coordenadas calculadas numericamente (sem %)
                  cx: [50, 50 + 30 * Math.cos(angle * Math.PI / 180), 50 + 30 * Math.cos((angle + 180) * Math.PI / 180), 50],
                  cy: [50, 50 + 15 * Math.sin(angle * Math.PI / 180), 50 + 30 * Math.sin((angle + 180) * Math.PI / 180), 50],
                }}
                transition={{
                  duration: 15 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Linha conectando o ponto orbital ao centro */}
              <motion.path
                 d={`M 50 50 L 50 50`} 
                 stroke="url(#lineGradient)"
                 strokeWidth="0.2"
                 strokeLinecap="round"
                 fill="none"
                 animate={{
                    d: [
                        `M 50 50 L ${50 + 30 * Math.cos(angle * Math.PI / 180)} ${50 + 15 * Math.sin(angle * Math.PI / 180)}`,
                        `M 50 50 L ${50 + 30 * Math.cos((angle + 180) * Math.PI / 180)} ${50 + 30 * Math.sin((angle + 180) * Math.PI / 180)}`,
                        `M 50 50 L ${50 + 30 * Math.cos(angle * Math.PI / 180)} ${50 + 15 * Math.sin(angle * Math.PI / 180)}`,
                    ]
                 }}
                  transition={{
                    duration: 15 + index * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
              />
              {/* Partícula de dados fluindo na linha */}
              <motion.circle
                r="0.8"
                className="fill-white"
                animate={{
                    cx: [50, 50 + 30 * Math.cos((angle + 180) * Math.PI / 180), 50],
                    cy: [50, 50 + 30 * Math.sin((angle + 180) * Math.PI / 180), 50]
                }}
                transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror"
                }}
              />
            </motion.g>
          ))}

          {/* Linhas de grade sutis */}
          <motion.path
            d="M 0 20 H 100 M 0 80 H 100 M 20 0 V 100 M 80 0 V 100"
            className="stroke-cyan-900/20"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

        </svg>
      </motion.div>

      {/* --- Content --- */}
      <div className="container mx-auto px-4 z-10 relative text-center">
        <motion.div
          style={{ y: textY }}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge Superior */}
          <motion.div
            variants={textVariants}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-800/50 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-cyan-200 font-medium tracking-wide">
              Tecnologia sob medida, não pacotes padrão.
            </span>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1
            variants={textVariants}
            custom={0.2}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm"
          >
            Transformamos Processos Caóticos em<br className="hidden md:block"/>{" "}
            
            {/* INÍCIO DO DESTAQUE */}
            <span className="relative inline-block mt-2">
                {/* 1. Camada de Backlight (fundo desfocado para destacar) */}
                <span className="absolute inset-0 blur-[35px] bg-cyan-500/20 rounded-full pointer-events-none" />
                
                {/* 2. Texto Principal com Gradiente Brilhante + Glow (Drop Shadow) */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                  Sistemas Web Inteligentes
                </span>

                {/* 3. Sublinhado animado sutil - Mais brilhante */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 z-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <motion.path
                        d="M0 5 Q 25 10, 50 5 T 100 5"
                        className="stroke-cyan-300/80 stroke-[3px] fill-none drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                    />
                </svg>
            </span>
            {/* FIM DO DESTAQUE */}

          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={textVariants}
            custom={0.4}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Automação sob medida para empresas que querem crescer sem bagunça.
            Chega de planilhas, papelada e controle manual dependente de memória.
            Colocamos ordem e inteligência no coração da sua operação.
          </motion.p>

          {/* Botão CTA */}
          <motion.div variants={textVariants} custom={0.6}>
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-3 bg-[#00a6b5] hover:bg-[#008ba3] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 overflow-hidden shadow-lg shadow-[rgba(0,166,181,0.4)] hover:shadow-[rgba(0,166,181,0.6)]"
            >
              {/* Efeito de brilho no hover do botão */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              
              <span className="relative z-10">Quero meu diagnóstico gratuito</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
             <p className="text-slate-500 text-sm mt-4">Analise seus processos sem compromisso.</p>
          </motion.div>
        </motion.div>
      </div>

        {/* Indicador de Scroll (Seta para baixo) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};