import React from "react";
import { motion } from "framer-motion";
import { 
    Truck, 
    Factory, 
    Wrench, 
    Store, 
    Home, 
    TrendingUp, 
    CheckCircle2,
    ArrowRight
} from "lucide-react";

// Dados baseados na sua Copy Original
const sectors = [
  {
    id: 1,
    icon: Truck,
    title: "Transporte e Logística",
    description: "Rastreie frotas, otimize rotas e elimine o 'buraco negro' de informações entre o motorista e a base.",
    benefits: ["Fim dos atrasos", "Economia de combustível"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 2,
    icon: Factory,
    title: "Indústrias & Elétrica",
    description: "Monitoramento IoT de máquinas e consumo de energia. Saiba quando um equipamento vai falhar antes que aconteça.",
    benefits: ["Manutenção Preditiva", "Sem paradas bruscas"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: 3,
    icon: Wrench,
    title: "Equipes Externas & Manutenção",
    description: "Ordens de Serviço digitais no celular do técnico. Fotos, assinaturas e checklists preenchidos na hora, sem papelada.",
    benefits: ["Controle de técnicos", "Histórico digital"],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50"
  },
  {
    id: 4,
    icon: Store,
    title: "Comércios & Serviços",
    description: "Agendamentos automáticos e controle de estoque que se atualiza sozinho. Pare de vender o que você não tem.",
    benefits: ["Gestão de pedidos", "Atendimento ágil"],
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "group-hover:border-teal-500/50"
  },
  {
    id: 5,
    icon: Home,
    title: "Residências & Automação",
    description: "Casas e prédios inteligentes. Controle luzes, acesso e temperatura remotamente para eficiência e segurança.",
    benefits: ["Economia de energia", "Segurança total"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50"
  }
];

const dailyBenefits = [
    "Equipes mais rápidas e organizadas",
    "Controle total sobre cada etapa",
    "Menos erros e retrabalho manual",
    "Redução drástica de custos operacionais",
    "Relatórios automáticos (Fim do Excel)",
    "Acesso de qualquer lugar (Celular/PC)"
];

export const Testimonials = () => {
  return (
    <section id="resultados" className="py-24 bg-[#03060b] relative overflow-hidden">
        
        {/* Background Grid Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
            
            {/* --- HEADER DA SEÇÃO --- */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-xs mb-4">
                    <TrendingUp size={14} className="fill-current" />
                    Resultados Reais
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl mx-auto">
                    Se existe desperdício ou improviso, <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                        nós automatizamos.
                    </span>
                </h2>
                <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Atendemos empresas que precisam organizar processos internos, técnicos ou operacionais. 
                    Seja grande ou pequena, a regra é clara: chega de bagunça.
                </p>
            </div>

            {/* --- GRID DE SETORES (Amplo) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
                {sectors.map((item, i) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`bg-white/5 border border-white/10 p-6 rounded-2xl relative group transition-all duration-300 ${item.border} hover:bg-white/[0.07] flex flex-col`}
                    >
                        {/* Ícone */}
                        <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-3 min-h-[56px] flex items-center">{item.title}</h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {item.description}
                        </p>

                        {/* Tags de Benefício Rápido */}
                        <div className="space-y-2 pt-4 border-t border-white/5">
                            {item.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* --- LISTA DE BENEFÍCIOS DIÁRIOS (Copy Original) --- */}
            <div className="bg-[#0a0f1c]/80 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-6">
                            Benefícios que você sente <span className="text-teal-400">no dia a dia.</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-8">
                            Não criamos apenas "softwares bonitos". Criamos uma nova rotina de trabalho onde você deixa de apagar incêndios e começa a gerenciar o crescimento.
                        </p>
                        <a href="#contato" className="inline-flex items-center gap-2 text-white font-bold border-b border-teal-500 pb-1 hover:text-teal-400 transition-colors">
                            Ver o que podemos automatizar para você <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                        {dailyBenefits.map((benefit, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 min-w-[20px] h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                                    <CheckCircle2 size={12} />
                                </div>
                                <span className="text-slate-200 font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
};