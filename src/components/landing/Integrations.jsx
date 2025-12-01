import React from "react";
import { motion } from "framer-motion";
import { Workflow, Database, Server, MessageSquare, Zap, Layers, Globe, ShieldCheck } from "lucide-react";

// --- CARD DE BENEFÍCIO ---
const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/40 hover:bg-white/[0.07] transition-all group"
  >
    <div className="shrink-0 w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-teal-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const Integrations = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full" />
        <svg width="100%" height="100%">
          <pattern id="grid-int" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-int)" />
        </svg>
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Layers size={14} />
              Conectividade Total
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Não jogue seus sistemas atuais <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                no lixo. Integre-os.
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Muitas empresas temem a inovação porque acham que precisam trocar o ERP ou o CRM. 
              <strong> Nós fazemos o oposto.</strong> Nossa tecnologia age como uma "cola inteligente", conectando o legado que você já tem com as novas funcionalidades que você precisa.
            </p>

            <div className="flex flex-col gap-4">
              <BenefitCard 
                icon={Globe} 
                title="Conecta tudo com tudo" 
                description="Integramos seu ERP (SAP, Totvs), CRM, WhatsApp, planilhas e bancos de dados em um fluxo único e automático."
                delay={0.1}
              />
              <BenefitCard 
                icon={Workflow} 
                title="Orquestração de Dados" 
                description="O dado sai da venda, vai para o financeiro e notifica a logística sem nenhuma mão humana tocando nele."
                delay={0.2}
              />
              <BenefitCard 
                icon={ShieldCheck} 
                title="Segurança & Compliance" 
                description="Rodamos em ambiente seguro. Seus dados trafegam criptografados e você mantém o controle total da informação."
                delay={0.3}
              />
            </div>
          </div>

          {/* Lado Direito – Workflow Visual Responsivo */}
          <div className="relative w-full">
            
            <div className="relative bg-[#0a0f1c] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden">
              
              {/* Header da "Janela" */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-[10px] md:text-xs text-slate-600 font-mono ml-4">integration_flow.live</div>
              </div>

              {/* Área de Animação - Container Responsivo */}
              {/* Usamos 'aspect-square' no mobile para garantir altura suficiente e 'h-[400px]' no desktop */}
              <div className="relative w-full aspect-square md:h-[400px] md:aspect-auto">

                {/* SVG de Fundo com viewBox para escalar coordenadas corretamente */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none" 
                    viewBox="0 0 400 400" 
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/* Linhas de Conexão */}
                    <path d="M100 80 C 200 80, 150 200, 250 200" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[pulse_3s_infinite]" />
                    <path d="M250 200 C 350 200, 300 100, 400 100" stroke="#334155" strokeWidth="2" fill="none" />
                    <path d="M250 200 C 350 200, 300 300, 400 300" stroke="#334155" strokeWidth="2" fill="none" />

                    {/* Partículas Viajando */}
                    <circle r="4" fill="#2dd4bf">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M100 80 C 200 80, 150 200, 250 200" />
                    </circle>
                    <circle r="4" fill="#a855f7">
                        <animateMotion dur="2s" begin="1.5s" repeatCount="indefinite" path="M250 200 C 350 200, 300 300, 400 300" />
                    </circle>
                </svg>

                {/* Nó 1: Entrada (ERP) - Posicionado em % */}
                <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute left-[25%] top-[20%] -translate-x-1/2 -translate-y-1/2 px-3 py-2 md:px-4 bg-[#1e293b] rounded-lg border border-white/10 flex items-center gap-2 text-white z-10 shadow-lg whitespace-nowrap"
                >
                    <Database size={14} className="text-blue-400 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-xs font-bold">Seu ERP</span>
                </motion.div>

                {/* Nó 2: Processamento Central - Posicionado em % */}
                <motion.div 
                    className="absolute left-[62.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white z-20 shadow-[0_0_30px_rgba(45,212,191,0.4)]"
                >
                    <Zap size={24} className="fill-white md:w-8 md:h-8" />
                    <div className="absolute -bottom-6 md:-bottom-8 text-center w-32 -left-8 md:-left-12">
                        <span className="text-[8px] md:text-[10px] text-teal-400 font-bold uppercase tracking-wider bg-teal-950/80 px-2 py-1 rounded backdrop-blur-md">Processamento</span>
                    </div>
                </motion.div>

                {/* Nó 3: Saída (Financeiro) - Posicionado em % */}
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute left-[85%] top-[25%] -translate-x-1/2 -translate-y-1/2 px-3 py-2 md:px-4 bg-[#1e293b] rounded-lg border border-white/10 flex items-center gap-2 text-white z-10 shadow-lg whitespace-nowrap"
                >
                    <Server size={14} className="text-green-400 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-xs font-bold">NF Emitida</span>
                </motion.div>

                {/* Nó 4: Saída (Cliente) - Posicionado em % */}
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4.5, repeat: Infinity }}
                    className="absolute left-[85%] top-[75%] -translate-x-1/2 -translate-y-1/2 px-3 py-2 md:px-4 bg-[#1e293b] rounded-lg border border-white/10 flex items-center gap-2 text-white z-10 shadow-lg whitespace-nowrap"
                >
                    <MessageSquare size={14} className="text-green-500 md:w-4 md:h-4" />
                    <span className="text-[10px] md:text-xs font-bold">WhatsApp</span>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};