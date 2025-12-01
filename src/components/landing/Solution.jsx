import React from "react";
import { motion } from "framer-motion";
import { 
    LayoutDashboard, 
    Smartphone, 
    Zap, 
    Cpu, 
    CheckCircle2, 
    ArrowUpRight,
    Activity,
    Signal
} from "lucide-react";

// --- COMPONENTES VISUAIS AUXILIARES ---

// 1. Gráfico Holográfico (Para o Card de BI)
const HolographicChart = () => (
    <div className="flex items-end gap-1 h-full w-full opacity-50">
        {[30, 60, 45, 80, 55, 90, 70].map((h, i) => (
            <motion.div 
                key={i}
                initial={{ height: "10%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-teal-500/20 to-teal-400 rounded-t-[2px]"
            />
        ))}
    </div>
);

// 2. Pulso de Automação (Para o Card de Automação)
const AutomationPulse = () => (
    <div className="absolute right-4 top-4 flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
            <motion.div 
                key={i}
                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            />
        ))}
    </div>
);

// 3. Circuito (Para o Card de Hardware)
const CircuitBoard = () => (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M10 10 h20 v20 h-20 z" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="10" cy="10" r="2" fill="currentColor"/>
                <path d="M30 10 l10 -10" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" className="text-teal-500"/>
        </svg>
    </div>
);

export const Solution = () => {
  return (
    <section id="solucoes" className="py-32 bg-[#02050a] relative overflow-hidden">
        
        {/* Fundo Atmosférico */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            {/* Grid Sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Container Fluido */}
        <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
            
            {/* 1. Header Renovado */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 max-w-3xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                    <Zap size={12} className="text-yellow-400 fill-current" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Stack Tecnológico</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Sua operação, <br className="md:hidden"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-purple-400 drop-shadow-[0_0_25px_rgba(45,212,191,0.2)]">
                        inteligente e previsível.
                    </span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                    Substituímos ferramentas desconexas por um ecossistema único. 
                    Do escritório ao campo, tudo conectado em tempo real.
                </p>
            </motion.div>

            {/* 2. Bento Grid de Funcionalidades */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                {/* CARD 1: Gestão & Dashboards (Ocupa 2 colunas) */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 group relative p-8 rounded-2xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 overflow-hidden"
                >
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                                <LayoutDashboard size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">Gestão à Vista (BI)</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Elimine o "achismo". Tenha dashboards que mostram produtividade, custos e gargalos em tempo real. 
                            </p>
                            
                            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Indicadores de Performance</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Alertas automáticos</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Controle de ativos</li>
                            </ul>
                        </div>

                        {/* UI Decorativa: Gráfico Animado */}
                        <div className="hidden md:flex w-48 h-32 bg-black/40 border border-white/10 rounded-lg p-3 flex-col justify-end relative overflow-hidden">
                             <div className="absolute top-3 left-3 text-[10px] text-teal-500 font-mono uppercase">Live Data</div>
                             <HolographicChart />
                        </div>
                    </div>
                </motion.div>

                {/* CARD 2: Automação (Vertical) */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-1 group relative p-8 rounded-2xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-purple-500/30 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <AutomationPulse />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Automação de Rotina</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Robôs que trabalham por você. O sistema gera ordens, envia emails e cobra prazos sozinho.
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="p-3 bg-black/40 rounded border border-white/5 flex items-center justify-between text-xs text-slate-300">
                                <span>Agendamento Auto.</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                            </div>
                            <div className="p-3 bg-black/40 rounded border border-white/5 flex items-center justify-between text-xs text-slate-300">
                                <span>Notificação WhatsApp</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CARD 3: Mobilidade & Campo (1 Coluna) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-1 group relative p-8 rounded-2xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <Smartphone size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">App de Campo</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            Conecte equipes externas. Coleta de dados offline, fotos, assinaturas e GPS.
                        </p>
                        
                        {/* Status visual */}
                        <div className="flex items-center gap-2 mt-6 p-2 bg-black/40 rounded-lg border border-white/5 w-fit">
                            <Signal size={14} className="text-blue-400" />
                            <span className="text-[10px] text-slate-300 uppercase font-bold">Modo Offline Ativo</span>
                        </div>
                    </div>
                </motion.div>

                {/* CARD 4: Ecossistema Nativo (ATUALIZADO & DESTAQUE) */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 group relative p-8 rounded-2xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/5 hover:border-teal-500/30 transition-all duration-500 overflow-hidden"
                >
                    <CircuitBoard />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">Ecossistema Nativo (Hardware + Software)</h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                Seu projeto merece tecnologia criada para colaborar. Desenvolvemos o hardware (IoT) e o sistema que o controla, garantindo integração total e comunicação perfeita desde a origem.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                 <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">Hardware Proprietário</span>
                                 <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">Firmware Dedicado</span>
                            </div>
                        </div>
                        
                        {/* Botão de Saída */}
                        <a href="#contato" className="group/btn flex items-center justify-center w-16 h-16 rounded-full bg-black/50 border border-white/10 hover:border-teal-500 hover:bg-teal-500/10 text-slate-400 hover:text-teal-400 transition-all shrink-0">
                            <ArrowUpRight size={28} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};