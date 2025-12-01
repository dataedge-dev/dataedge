import React, { useState, useRef, useEffect } from "react"; // ADICIONADO: useEffect
import { motion, useInView } from "framer-motion";
import { 
    ScanSearch, 
    Workflow, 
    Compass, 
    Cpu, 
    Rocket, 
    ArrowRight,
    Check
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: ScanSearch,
    title: "Diagnóstico",
    headline: "Mergulho Profundo",
    description: "Antes de propor qualquer tecnologia, nós dissecamos sua operação atual. Identificamos gargalos invisíveis, planilhas críticas e riscos que custam dinheiro silenciosamente.",
    color: "from-blue-400 to-cyan-300"
  },
  {
    id: 2,
    icon: Workflow,
    title: "Mapeamento",
    headline: "Fluxo Otimizado",
    description: "Eliminamos a gordura. Redesenhamos seus processos para serem lógicos e lineares, removendo aprovações desnecessárias e etapas manuais repetitivas.",
    color: "from-emerald-400 to-teal-300"
  },
  {
    id: 3,
    icon: Compass,
    title: "Planejamento",
    headline: "Arquitetura Tech",
    description: "Definimos a stack ideal. Web, Mobile, IoT? Criamos protótipos de alta fidelidade para você validar a interface e a lógica antes do desenvolvimento.",
    color: "from-indigo-400 to-purple-300"
  },
  {
    id: 4,
    icon: Cpu,
    title: "Desenvolvimento",
    headline: "Engenharia Ágil",
    description: "Construção em sprints semanais. Você acompanha a evolução do software em tempo real, testando funcionalidades a cada entrega parcial.",
    color: "from-orange-400 to-amber-300"
  },
  {
    id: 5,
    icon: Rocket,
    title: "Go-Live",
    headline: "Decolagem",
    description: "Implantação assistida. Treinamos sua equipe, migramos seus dados históricos e monitoramos a operação intensivamente nos primeiros dias.",
    color: "from-rose-400 to-pink-300"
  }
];

// ============================ COMPONENT STEP ============================
const StepDetail = ({ step, setStep }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    // CORREÇÃO AQUI: Envolver o setStep em useEffect para evitar erro de renderização
    useEffect(() => {
        if (isInView) {
            setStep(step.id);
        }
    }, [isInView, step.id, setStep]);

    return (
        <motion.div 
            ref={ref}
            className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center py-12 px-6 sm:px-10 md:px-12 border-l border-white/5 relative group"
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 group-hover:bg-primary/50 transition-colors duration-500" />
            
            {/* Numero Gigante Mobile ajustado */}
            <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-white/5 absolute right-4 top-4 select-none">
                0{step.id}
            </span>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >

                {/* Título + Ícone Mobile visíveis */}
                <div className="flex md:hidden mb-6 items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${step.color}`}>
                        <step.icon className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-white">{step.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {step.headline}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                    {step.description}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-3 text-secondary/80">
                        <div className="p-1 rounded-full bg-primary/10 text-primary"><Check size={12} /></div>
                        <span>Processo validado</span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary/80">
                        <div className="p-1 rounded-full bg-primary/10 text-primary"><Check size={12} /></div>
                        <span>Foco em retorno financeiro</span>
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
};

// ============================ MAIN COMPONENT ============================

export const Methodology = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="metodologia" className="bg-background relative">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col lg:flex-row">

            {/* Sticky SOMENTE no desktop */}
            <div className="hidden lg:flex lg:w-5/12 h-screen sticky top-0 items-center justify-center p-12 border-r border-white/5">
                <div className="relative w-full max-w-md aspect-square">
                    
                    {/* Glow Dinâmico */}
                    <motion.div 
                        key={`glow-${activeStep}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep-1].color} blur-[120px] opacity-20 rounded-full`} 
                    />

                    {/* Conteúdo Central */}
                    <div className="relative z-10 flex flex-col justify-between h-full py-12">
                        <div>
                            <motion.span 
                                key={`badge-${activeStep}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white mb-6 backdrop-blur-md"
                            >
                                Passo 0{activeStep} de 05
                            </motion.span>

                            <motion.h2 
                                key={`title-${activeStep}`}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="text-5xl xl:text-6xl font-display font-bold text-white mb-4"
                            >
                                {steps[activeStep-1].title}.
                            </motion.h2>
                        </div>

                        <motion.div 
                            key={`icon-${activeStep}`}
                            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-28 h-28 xl:w-32 xl:h-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl"
                        >
                            {React.createElement(steps[activeStep-1].icon, { 
                                size: 58, 
                                className: "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Conteúdo Scrollável */}
            <div className="lg:w-7/12 bg-background/50 backdrop-blur-sm">
                <div className="lg:py-24">
                    {steps.map((step) => (
                        <StepDetail key={step.id} step={step} setStep={setActiveStep} />
                    ))}

                    {/* CTA Final Responsivo */}
                    <div className="py-20 px-6 sm:px-12 text-center lg:text-left border-l border-white/5">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Pronto para começar?</h3>
                        <a href="#contato" className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,151,178,0.4)] hover:-translate-y-1">
                            Agendar Diagnóstico Gratuito
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};