import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        
        {/* Logo DataEdge (SVG) */}
        <a href="#" className="flex items-center gap-3 group">
            {/* Ícone SVG da Logo */}
            <div className="w-10 h-10 relative">
                {/* Ajustei o drop-shadow para teal/turquesa */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,166,181,0.5)]">
                    {/* Contorno Externo - Agora Teal (#00a6b5) */}
                    <path d="M50 15 L85 35 V75 L50 95 L15 75 V35 Z" stroke="#00a6b5" strokeWidth="6" fill="none" className="group-hover:stroke-purple-400 transition-colors duration-300"/>
                    {/* Linhas Internas Superiores - Agora Teal (#00a6b5) */}
                    <path d="M50 15 V55 M50 55 L85 35 M50 55 L15 35" stroke="#00a6b5" strokeWidth="6" className="group-hover:stroke-purple-400 transition-colors duration-300"/>
                    {/* Linha Vertical Inferior - Mantive Cinza Claro para contraste */}
                    <path d="M50 55 L50 95" stroke="#94a3b8" strokeWidth="6" opacity="0.7"/>
                    {/* Preenchimento da Face Direita - Teal com transparência */}
                    <polygon points="50,55 85,35 85,75 50,95" fill="#00a6b5" opacity="0.3" className="group-hover:fill-purple-500/30 transition-colors duration-300"/>
                </svg>
            </div>

            {/* Texto da Marca */}
            <span className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-1">
                Data<span className="text-primary group-hover:text-purple-400 transition-colors duration-300">Edge.</span>
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solucoes" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Soluções</a>
          <a href="#metodologia" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Metodologia</a>
          <a href="#resultados" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Resultados</a>
          
          <a href="#contato" className="px-6 py-2.5 text-sm font-bold rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,151,178,0.3)] hover:shadow-[0_0_30px_rgba(0,151,178,0.5)]">
            Diagnóstico Gratuito
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050a10] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a href="#solucoes" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">Soluções</a>
              <a href="#metodologia" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">Metodologia</a>
              <a href="#resultados" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">Resultados</a>
              <a href="#contato" onClick={() => setIsOpen(false)} className="text-primary font-bold">Diagnóstico Gratuito</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};