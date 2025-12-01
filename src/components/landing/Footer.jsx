import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Instagram, Github, Activity, Globe, Wifi } from "lucide-react";

// --- COMPONENTES VISUAIS ---

// 1. Grid de Fundo "End of Line"
const FooterGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <motion.div 
            animate={{ y: [0, -40] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
        />
    </div>
    {/* Luz de topo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent blur-sm" />
  </div>
);

// 2. Botão Social com Glow
const SocialButton = ({ href, icon: Icon }) => (
    <a 
        href={href} 
        className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-300 overflow-hidden"
    >
        <div className="absolute inset-0 bg-teal-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <Icon size={20} className="text-slate-400 group-hover:text-white relative z-10 transition-colors" />
    </a>
);

export const Footer = () => {
  return (
    <footer id="contato" className="relative pt-32 pb-8 bg-[#02050a] border-t border-white/5 overflow-hidden">
      
      {/* Background Animado */}
      <FooterGrid />

      {/* Luz Ambiental */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-teal-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Container Fluido (90%) */}
      <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* CTA Principal */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-24"
        >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
                <Activity size={12} className="animate-pulse" />
                Pronto para escalar?
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                Pare de perder <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-teal-500 drop-shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                    dinheiro hoje.
                </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Sua operação pode ser 10x mais eficiente. Agende uma análise técnica de 15 minutos com nossos técnicos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                {/* Botão Shimmer (Igual ao Hero V3.0) */}
                <a 
                    href="#" 
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#02050a] bg-teal-400 rounded-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)]"
                >
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
                    <span className="relative z-10 flex items-center gap-2">
                        Quero meu Plano de Automação
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                
                <span className="text-sm text-slate-500">
                    Preferir email? <a href="mailto:contato@dataedge.com" className="text-teal-400 hover:text-teal-300 transition-colors underline decoration-teal-500/30 underline-offset-4">contato@dataedge.com</a>
                </span>
            </div>
        </motion.div>

        {/* Rodapé Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Marca e Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span className="text-2xl font-bold font-display text-white tracking-tight">
                    Data<span className="text-teal-400">Edge.</span>
                </span>
                <div className="hidden md:block w-px h-6 bg-white/10" />
                <p className="text-sm text-slate-500">© 2025 DataEdge Solutions. Todos os direitos reservados.</p>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4">
                <SocialButton href="#" icon={Linkedin} />
                <SocialButton href="#" icon={Instagram} />
                <SocialButton href="#" icon={Github} />
            </div>
        </div>

        {/* Status Bar (Toque IoT) */}
        <div className="mt-8 py-3 px-4 bg-black/40 border border-white/5 rounded-lg flex flex-wrap justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                System Status: Operational
            </div>
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Globe size={10} /> Server: US-East-1</span>
                <span className="flex items-center gap-1"><Wifi size={10} /> Latency: 12ms</span>
            </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          100% { left: 100%; }
        }
      `}</style>
    </footer>
  );
};
