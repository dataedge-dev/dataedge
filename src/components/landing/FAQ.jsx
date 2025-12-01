import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const questions = [
  {
    id: 1,
    q: "Preciso comprar servidores ou computadores caros?",
    a: "Absolutamente não. Nossa solução é 100% em nuvem (Cloud). Você acessa de qualquer navegador ou celular, sem precisar investir um centavo em infraestrutura física."
  },
  {
    id: 2,
    q: "Minha equipe tem dificuldade com tecnologia. É difícil usar?",
    a: "Focamos obsessivamente em UX (Experiência do Usuário). Se sua equipe sabe usar o WhatsApp ou Instagram, saberá usar nosso sistema. Além disso, oferecemos treinamento completo na implantação."
  },
  {
    id: 3,
    q: "Vocês entregam o código fonte do sistema?",
    a: "Sim. Acreditamos na transparência e na liberdade do cliente. Dependendo do modelo de contrato escolhido, a propriedade intelectual (IP) pode ser transferida integralmente para sua empresa."
  },
  {
    id: 4,
    q: "Quanto tempo leva para implantar o sistema?",
    a: "Nossa metodologia ágil permite entregar as primeiras funcionalidades (MVP) em 4 a 6 semanas. Você não espera meses para ver o resultado; o valor é gerado incrementalmente."
  },
  {
    id: 5,
    q: "O sistema integra com meu ERP atual (Totvs/SAP)?",
    a: "Sim. Desenvolvemos APIs personalizadas que conectam nossa automação ao seu legado. O dado flui automaticamente entre o chão de fábrica/campo e o seu financeiro."
  }
];

const AccordionItem = ({ i, expanded, setExpanded, q, a }) => {
  const isOpen = i === expanded;

  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(0, 151, 178, 0.05)" : "transparent" }}
      className={`border-b border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? "border-primary/50" : "hover:bg-white/5"}`}
    >
      <button
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex items-center justify-between w-full p-6 text-left cursor-pointer outline-none"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
          {q}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed max-w-3xl">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Glow Decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container px-4 relative z-10 max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-2xl border border-white/10 text-primary shadow-lg">
                    <MessageCircleQuestion size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                    Tirando suas dúvidas
                </h2>
                <p className="text-lg text-muted-foreground">
                    Transparência total sobre como trabalhamos e o que entregamos.
                </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080c14]/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                {questions.map((item, i) => (
                    <AccordionItem 
                        key={item.id} 
                        i={i} 
                        expanded={expanded} 
                        setExpanded={setExpanded} 
                        {...item} 
                    />
                ))}
            </div>

        </div>
    </section>
  );
};