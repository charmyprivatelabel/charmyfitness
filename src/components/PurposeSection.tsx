import React from 'react';
import { motion } from 'motion/react';

const PurposeSection: React.FC = () => {
  return (
    <section id="propósito" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 flex justify-center h-full"
          >
            <div className="w-full max-w-[580px] h-[450px] md:h-[750px] overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy-1.pdf-1920-x-800-px-2.webp" 
                alt="Fitness Production"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4 block">O Propósito</span>
            <h2 className="text-5xl serif mb-8 leading-tight">Lançamento <br /><span className="italic">Nova Linha Fitness</span></h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                É com grande entusiasmo que apresentamos novidades na nossa linha fitness aqui na Charmy. Sempre atentos às tendências do mercado e à crescente valorização desse segmento, seguimos ampliando o nosso portfólio com novos produtos desenvolvidos para oferecer ainda mais opções às marcas que confiam no nosso trabalho.
              </p>
              <p>
                Cada peça é desenvolvida com rigor técnico, criteriosa seleção de matérias-primas e um processo produtivo altamente qualificado, respeitando as exigências específicas do segmento fitness.
              </p>
              <p>
                O resultado são produtos que unem conforto, desempenho e acabamento impecável, refletindo o compromisso com qualidade e excelência que já é marca registrada da Charmy.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
              <div>
                <h4 className="serif text-xl mb-2">Conforto</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Ergonomia e suavidade</p>
              </div>
              <div>
                <h4 className="serif text-xl mb-2">Desempenho</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Alta performance técnica</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
