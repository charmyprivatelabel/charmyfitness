import React from 'react';
import { motion } from 'motion/react';

const FabricSection: React.FC = () => {
  return (
    <section id="tecnologia" className="py-24 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#E6B7B2] mb-4 block"
            >
              Tecnologia Têxtil
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl serif mb-10"
            >
              Conheça nosso <br /><span className="italic">Tecido Premium</span>
            </motion.h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-[1px] bg-[#E6B7B2] mt-3 shrink-0"></div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] mb-2 text-[#E6B7B2]">Composição</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Tecido em poliamida de alta performance, com gramatura 340, desenvolvido para oferecer maior sustentação, segurança e durabilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-[1px] bg-[#E6B7B2] mt-3 shrink-0"></div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.2em] mb-2 text-[#E6B7B2]">Toque e Ajuste</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Possui toque macio, excelente elasticidade e ajuste perfeito ao corpo, proporcionando conforto durante o uso e liberdade total de movimentos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="aspect-square bg-gray-800 rounded-full overflow-hidden border-8 border-white/5 shadow-2xl"
            >
              <motion.img 
                src="https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy-1.pdf-1920-x-800-px-3.webp" 
                alt="Fabric Detail"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
                referrerPolicy="no-referrer"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-light block mb-2">340</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Gramatura</span>
                </div>
              </div>
            </motion.div>
            
            {/* Floating stats */}
            <div className="absolute top-0 right-0 bg-[#E6B7B2] text-black p-6 rounded-xl shadow-xl transform translate-x-10 -translate-y-10">
              <span className="text-2xl font-bold block">100%</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricSection;
