import React from "react";
import { motion } from "framer-motion";
import { Workflow, Database, Server, Lock, Zap, ArrowRight, Brain, Plug } from "lucide-react";

// --- ÍCONE DO N8N (SVG Customizado) ---
const N8nLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.72 2.04C12.5.91 11.5.91 11.28 2.04l-1.07 5.51c-.13.67-.66 1.2-1.33 1.33l-5.51 1.07c-1.13.22-1.13 1.22 0 1.44l5.51 1.07c.67.13 1.2.66 1.33 1.33l1.07 5.51c.22 1.13 1.22 1.13 1.44 0l1.07-5.51c.13-.67.66-1.2 1.33-1.33l5.51-1.07c1.13-.22 1.13-1.22 0-1.44l-5.51-1.07c-.67-.13-1.2-.66-1.33-1.33l-1.07-5.51z"/>
  </svg>
);

// --- CARD DE BENEFÍCIO ---
const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff6d5a]/40 transition-colors group"
  >
    <div className="shrink-0 w-12 h-12 rounded-lg bg-[#ff6d5a]/10 flex items-center justify-center text-[#ff6d5a] group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#ff6d5a] transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const N8nSection = () => {
  return (
    <section className="py-24 bg-[#050a12] relative overflow-hidden">
      
      {/* Background Decorativo (Linhas de Fluxo) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6d5a]/10 border border-[#ff6d5a]/20 text-[#ff6d5a] text-xs font-bold uppercase tracking-widest mb-6">
              <N8nLogo className="w-4 h-4" />
              Powered by n8n
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Automação Inteligente <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6d5a] to-[#ff9f8e]">
                para sua empresa crescer.
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              O <strong>n8n</strong> é uma plataforma de automação visual que permite conectar sistemas,
              criar fluxos automáticos e eliminar tarefas manuais — <strong>sem precisar ser programador</strong>.
              Ele funciona como um “painel de controle” onde você monta processos arrastando blocos,
              integrando ERPs, CRMs, bancos de dados, sistemas internos e inteligências artificiais.
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Com o n8n, tudo que hoje você faz manualmente — enviar dados, mover arquivos,
              atualizar sistemas, disparar notificações, gerar relatórios — pode se tornar
              completamente automático, rápido e à prova de erros.
            </p>

            <div className="flex flex-col gap-4">

              <BenefitCard 
                icon={Plug} 
                title="Conecta tudo com tudo" 
                description="Mais de 400 integrações prontas: ERP, CRM, WhatsApp, bancos de dados, APIs, planilhas, e muito mais. Se existe API, nós conectamos."
                delay={0.1}
              />

              <BenefitCard 
                icon={Workflow} 
                title="Automação fácil de visualizar" 
                description="Fluxos organizados em blocos, como um mapa. Você entende e controla todo o processo mesmo sem conhecimento técnico."
                delay={0.15}
              />

              <BenefitCard 
                icon={Brain} 
                title="Automação com Inteligência Artificial" 
                description="Integramos ChatGPT, modelos de IA, classificadores e análise de dados para criar fluxos inteligentes e autônomos."
                delay={0.2}
              />

              <BenefitCard 
                icon={Lock} 
                title="Segurança & LGPD" 
                description="Rodamos tudo em ambiente próprio (self-hosted). Nada sai da sua infraestrutura, garantindo total privacidade e conformidade."
                delay={0.25}
              />

              <BenefitCard 
                icon={Zap} 
                title="Escalável para qualquer empresa" 
                description="Suporta alto volume, milhões de requisições e processos ilimitados — sem taxas extras por execução."
                delay={0.3}
              />

            </div>
          </div>

          {/* Lado Direito – Workflow Visual */}
          <div className="relative">
            
            <div className="absolute inset-0 bg-[#ff6d5a]/20 blur-[100px] rounded-full" />
            
            <div className="relative bg-[#0f1521] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
              
              {/* Header da "Janela" */}
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="text-xs text-slate-600 font-mono ml-2">workflow_automation.json</div>
              </div>

              {/* Animação dos fluxos */}
              <div className="relative h-[400px] w-full">

                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M100 80 C 200 80, 150 200, 250 200" stroke="#555" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M250 200 C 350 200, 300 100, 400 100" stroke="#555" strokeWidth="2" fill="none" />
                    <path d="M250 200 C 350 200, 300 300, 400 300" stroke="#555" strokeWidth="2" fill="none" />

                    <circle r="4" fill="#ff6d5a">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M100 80 C 200 80, 150 200, 250 200" />
                    </circle>
                </svg>

                {/* Nó 1 */}
                <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-[50px] left-[50px] w-12 h-12 bg-[#2d3748] rounded-xl border border-white/20 flex items-center justify-center text-white z-10 shadow-lg"
                >
                    <Zap size={20} />
                    <div className="absolute -bottom-6 text-[10px] text-slate-400 whitespace-nowrap">Webhook Trigger</div>
                </motion.div>

                {/* Nó 2 */}
                <motion.div 
                    className="absolute top-[170px] left-[220px] w-14 h-14 bg-[#ff6d5a] rounded-xl flex items-center justify-center text-white z-20 shadow-[0_0_20px_rgba(255,109,90,0.4)]"
                >
                    <N8nLogo className="w-8 h-8" />
                    <div className="absolute -bottom-6 text-[10px] text-[#ff6d5a] font-bold whitespace-nowrap">Core Processing</div>
                </motion.div>

                {/* Nó 3 */}
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-[70px] right-[50px] w-12 h-12 bg-[#336791] rounded-xl border border-white/20 flex items-center justify-center text-white z-10 shadow-lg"
                >
                    <Database size={20} />
                    <div className="absolute -bottom-6 text-[10px] text-slate-400 whitespace-nowrap">Insert DB</div>
                </motion.div>

                {/* Nó 4 */}
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4.5, repeat: Infinity }}
                    className="absolute bottom-[70px] right-[50px] w-12 h-12 bg-[#4a154b] rounded-xl border border-white/20 flex items-center justify-center text-white z-10 shadow-lg"
                >
                    <Server size={20} />
                    <div className="absolute -bottom-6 text-[10px] text-slate-400 whitespace-nowrap">Notify Team</div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
