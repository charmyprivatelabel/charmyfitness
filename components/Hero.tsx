import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="início" className="relative h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy-1.pdf-1920-x-800-px-1.webp"
          alt="Background"
          className="w-full h-full object-cover object-[35%_center] md:object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-left text-white pt-24 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[12px] uppercase tracking-[0.5em] text-[#E6B7B2] font-semibold mb-6 block">
            Excelência na fabricação
          </span>
          <h1 className="text-6xl md:text-8xl serif leading-[0.9] mb-8">
            Private Label <br />
            <span className="italic">Fitness</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-10 leading-relaxed">
            Sua marca com a qualidade Charmy. Produção especializada em moda fitness de alta performance para marcas que buscam sofisticação e resultados.
          </p>
          <div className="flex flex-row gap-3 sm:gap-4 justify-start">
            <a 
              href="https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-white text-black px-2 py-4 sm:px-10 sm:py-5 rounded-xl font-bold uppercase tracking-widest sm:tracking-[0.2em] text-[10px] sm:text-sm hover:bg-[#E6B7B2] hover:text-white transition-all flex items-center justify-center text-center whitespace-nowrap"
            >
              Ver Catálogo
            </a>
            <a 
              href="https://wa.me/5535997301868?text=Ol%C3%A1!%20entrei%20em%20seu%20site%20Charmy%20Lingerie,%20quero%20saber%20mais%20sobre%20private%20label%20Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-[#E6B7B2] text-black px-2 py-4 sm:px-8 sm:py-5 rounded-xl font-bold uppercase tracking-widest sm:tracking-[0.2em] text-[10px] sm:text-sm flex items-center justify-center gap-2 sm:gap-3 hover:bg-white transition-all group whitespace-nowrap"
            >
              Fale com comercial 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform sm:w-[18px] sm:h-[18px]" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
