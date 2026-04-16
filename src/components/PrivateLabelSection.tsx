import React from 'react';
import { motion } from 'motion/react';
import { Package, ShieldCheck, Zap, Scissors } from 'lucide-react';

const PrivateLabelSection: React.FC = () => {
  const steps = [
    {
      icon: <Scissors className="text-[#E6B7B2]" size={32} />,
      title: "Design & Modelagem",
      description: "Desenvolvemos peças que podem receber adaptações para melhor atender ao posicionamento e identidade da sua marca."
    },
    {
      icon: <Zap className="text-[#E6B7B2]" size={32} />,
      title: "Produção Ágil",
      description: "Processos otimizados para garantir prazos competitivos sem comprometer a qualidade técnica."
    },
    {
      icon: <ShieldCheck className="text-[#E6B7B2]" size={32} />,
      title: "Controle de Qualidade",
      description: "Rigorosa inspeção em cada etapa, desde a escolha da matéria-prima até o acabamento final."
    },
    {
      icon: <Package className="text-[#E6B7B2]" size={32} />,
      title: "Etiquetagem & Entrega",
      description: "Sua marca, suas etiquetas. Entregamos os produtos prontos para a comercialização imediata."
    }
  ];

  return (
    <section id="private-label" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4 block">Soluções Corporativas</span>
            <h2 className="text-5xl serif leading-tight">Como funciona o nosso <br /><span className="italic">Private Label</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed border-l border-[#E6B7B2] pl-6">
            Oferecemos uma estrutura completa para que você foque no marketing e vendas, enquanto nós cuidamos de toda a engenharia de produto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#f5f2ed] hover:bg-[#E6B7B2]/10 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="serif text-xl mb-4">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateLabelSection;
