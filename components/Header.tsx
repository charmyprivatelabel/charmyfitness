import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="bg-[#cd392b] backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={scrollToTop}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Voltar ao início"
            >
              <img 
                src="https://charmylingerie.com.br/wp-content/uploads/2026/01/logo-charmy.png#1938" 
                alt="Charmy Logo" 
                className="h-10 object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          <nav className="hidden md:flex space-x-12 items-center">
            {['Início', 'Propósito', 'Private Label', 'Catálogo', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://charmylingerie.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors border border-white/30 px-4 py-2 rounded hover:bg-white/10"
            >
              Conheça a Charmy Lingerie
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#cd392b]/90 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {['Início', 'Propósito', 'Private Label', 'Catálogo', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase().replace(' ', '-'))}
                  className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://charmylingerie.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors pt-2 border-t border-white/10"
              >
                Conheça a Charmy Lingerie
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
