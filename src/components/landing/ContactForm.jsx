import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

// ⚠️ SUBSTITUA ISSO PELO SEU LINK DO N8N (Webhook) OU DE TESTE (webhook.site)
// Exemplo: "https://seu-n8n.com/webhook/form-contato"
const WEBHOOK_URL = "https://hook.eu1.n8n.cloud/webhook-test/seu-uuid-aqui"; 

export const ContactForm = () => {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  
  // 1. Estado para guardar os dados digitados
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: ""
  });

  // 2. Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 3. Envio real dos dados para o Webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          data_envio: new Date().toISOString(),
          origem: "Landing Page"
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Limpar formulário (opcional)
        setFormData({ nome: "", empresa: "", email: "", whatsapp: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-24 bg-[#02050a] relative border-t border-white/5">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Vamos escalar sua operação?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Preencha o formulário e nossos técnicos entrarão em contato para apresentar um plano personalizado.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">1</div>
                <span>Análise de viabilidade técnica gratuita</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">2</div>
                <span>Retorno financeiro em 30 dias</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Recebida!</h3>
                <p className="text-slate-400">Em breve entraremos em contato.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-teal-400 hover:text-teal-300 text-sm font-bold">Enviar nova mensagem</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Nome</label>
                    <input 
                      required 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Empresa</label>
                    <input 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors" 
                      placeholder="Nome da empresa" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Email Corporativo</label>
                  <input 
                    required 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors" 
                    placeholder="voce@empresa.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Whatsapp</label>
                  <input 
                    required 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-teal-500 focus:outline-none transition-colors" 
                    placeholder="(11) 99999-9999" 
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle size={16} />
                    <span>Erro ao enviar. Tente novamente ou chame no WhatsApp.</span>
                  </div>
                )}

                <button 
                  disabled={status === "loading"}
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-400 text-[#02050a] font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? <Loader2 className="animate-spin" /> : <>Solicitar Contato <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};