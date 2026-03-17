import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t border-white/10 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://charmylingerie.com.br/wp-content/uploads/2026/02/Banner-promocional-moda-esportiva-escuro.webp" 
          alt="Footer Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <img 
              src="https://charmylingerie.com.br/wp-content/uploads/2026/01/logo-charmy.png#1938" 
              alt="Charmy Logo" 
              className="h-8 object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-[9px] uppercase tracking-[0.2em] opacity-50 text-center md:text-right max-w-xl leading-relaxed">
            © 2026 Gomes & Oliveira Confeccoes Ltda - CNPJ: 08.229.801/0001-35
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
