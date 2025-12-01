import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
// CORREÇÃO: Adicionei ArrowRight na lista de imports
import { Calculator as CalcIcon, TrendingDown, AlertTriangle, RefreshCw, DollarSign, Users, Clock, ArrowRight } from "lucide-react";

// --- 1. COMPONENTE DE NÚMERO ANIMADO (O Segredo do "Wow") ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  // Motion value para suavizar a troca de números
  const springValue = useSpring(value, { stiffness: 50, damping: 15 });

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  useEffect(() => {
    // Inscreve no evento de mudança para formatar e atualizar o texto
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} />;
};

// --- 2. SLIDER CUSTOMIZADO (Futurista) ---
const CustomSlider = ({ value, min, max, step, onChange }) => {
    const percentage = ((value - min) / (max - min)) * 100;
    
    return (
        <div className="relative w-full h-6 flex items-center group cursor-pointer">
            {/* O Input invisível que cobre tudo para garantir funcionamento */}
            <input 
                type="range" min={min} max={max} step={step} value={value} onChange={onChange}
                className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
            />
            
            {/* Track de Fundo */}
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative z-10">
                {/* Preenchimento Colorido */}
                <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-100 ease-out" 
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* O "Thumb" (Bolinha) que brilha */}
            <div 
                className="absolute h-5 w-5 bg-white rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)] z-10 pointer-events-none transition-all duration-100 ease-out group-hover:scale-125"
                style={{ left: `calc(${percentage}% - 10px)` }}
            >
                <div className="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-50" />
            </div>
        </div>
    )
}


// --- COMPONENTE PRINCIPAL ---
export const Calculator = () => {
  const [employees, setEmployees] = useState(5);
  const [hours, setHours] = useState(1.5);
  const [salary, setSalary] = useState(3000);
  const [period, setPeriod] = useState("monthly");

  const hourlyRate = salary / 160;
  const wasteMonthly = hourlyRate * hours * 20 * employees;
  const wasteYearly = wasteMonthly * 12;
  const currentWaste = period === "monthly" ? wasteMonthly : wasteYearly;

  return (
    <section id="calculadora" className="py-24 bg-[#02050a] relative overflow-hidden">

      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] sm:text-xs font-bold text-red-400 mb-4"
            >
                <AlertTriangle size={14} />
                Diagnóstico Financeiro
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Quanto você está <span className="text-red-500">queimando</span> hoje?
            </h2>
            <p className="text-lg text-slate-400">
                A ineficiência é silenciosa, mas o prejuízo é barulhento. Ajuste os sliders abaixo e veja a realidade da sua operação.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* COLUNA ESQUERDA: CONTROLES */}
          <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Card de Inputs */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                  
                  {/* Input 1: Funcionários */}
                  <div className="mb-8">
                      <div className="flex justify-between items-end mb-4">
                          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Users size={18} className="text-teal-400"/>
                              Equipe Operacional
                          </label>
                          <span className="text-xl font-bold text-white bg-black/40 px-3 py-1 rounded border border-white/10 tabular-nums">
                              {employees} <span className="text-xs text-slate-500 font-normal">pessoas</span>
                          </span>
                      </div>
                      <CustomSlider 
                          min={1} max={100} step={1} value={employees} 
                          onChange={(e) => setEmployees(Number(e.target.value))} 
                      />
                  </div>

                  {/* Input 2: Horas */}
                  <div className="mb-8">
                      <div className="flex justify-between items-end mb-4">
                          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <Clock size={18} className="text-teal-400"/>
                              Tempo Desperdiçado (Dia/Pessoa)
                          </label>
                          <span className="text-xl font-bold text-white bg-black/40 px-3 py-1 rounded border border-white/10 tabular-nums">
                              {hours}h
                          </span>
                      </div>
                      <CustomSlider 
                          min={0.5} max={8} step={0.5} value={hours} 
                          onChange={(e) => setHours(Number(e.target.value))} 
                      />
                      <p className="text-xs text-slate-500 mt-2 italic">
                          *Considerando retrabalho, espera por informação, preenchimento manual e pausas.
                      </p>
                  </div>

                  {/* Input 3: Salário */}
                  <div>
                      <div className="flex justify-between items-end mb-4">
                          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                              <DollarSign size={18} className="text-teal-400"/>
                              Custo Médio (Salário + Encargos)
                          </label>
                      </div>
                      <div className="relative group">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold group-focus-within:text-teal-400 transition-colors">R$</span>
                          <input 
                              type="number" 
                              value={salary} 
                              onChange={(e) => setSalary(Number(e.target.value))}
                              className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-bold focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                          />
                      </div>
                  </div>
              </div>
          </div>

          {/* COLUNA DIREITA: RESULTADO (O CARTÃO DE ALERTA) */}
          <div className="lg:col-span-5">
              <div className="relative h-full bg-gradient-to-b from-red-950/40 to-black/60 border border-red-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)] flex flex-col justify-between overflow-hidden">
                  
                  {/* Efeito de "Scanlines" ou Ruído sutil */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20" />

                  <div className="relative z-10">
                      {/* Switch */}
                      <div className="flex justify-center mb-8">
                          <div className="bg-black/40 p-1 rounded-lg border border-white/10 flex">
                              <button 
                                  onClick={() => setPeriod("monthly")}
                                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${period === "monthly" ? "bg-red-500 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                              >
                                  MENSAL
                              </button>
                              <button 
                                  onClick={() => setPeriod("yearly")}
                                  className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${period === "yearly" ? "bg-red-500 text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                              >
                                  ANUAL
                              </button>
                          </div>
                      </div>

                      <div className="text-center">
                          <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-xs mb-2">
                              <TrendingDown size={16} />
                              Desperdício Estimado
                          </div>
                          
                          {/* O VALOR GIGANTE */}
                          <div className="font-display font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                              <span className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] leading-none">
                                  <AnimatedCounter value={currentWaste} />
                              </span>
                          </div>

                          <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            key={period} // Reinicia animação ao mudar período
                            className="mt-2 text-red-300/70 text-sm"
                          >
                              {period === "monthly" ? "jogados fora todo mês." : "jogados fora todo ano."}
                          </motion.div>
                      </div>
                  </div>

                  <div className="relative z-10 mt-8">
                      {/* Card de Aviso */}
                      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                          <p className="text-sm text-red-100 leading-relaxed">
                              <strong className="block text-red-400 mb-1">Impacto direto no lucro.</strong>
                              Com esse valor, você poderia reinvestir em {period === "monthly" ? "marketing" : "novos equipamentos"} ou aumentar sua margem líquida.
                          </p>
                      </div>

                      <a 
                          href="#contato" 
                          className="group block w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-center rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-1"
                      >
                          <span className="flex items-center justify-center gap-2">
                              Estancar Prejuízo Agora
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                          </span>
                      </a>
                      
                      <button 
                          onClick={() => { setEmployees(5); setHours(1.5); setSalary(3000); }}
                          className="w-full mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 hover:text-white transition-colors"
                      >
                          <RefreshCw size={12} /> Resetar parâmetros
                      </button>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};