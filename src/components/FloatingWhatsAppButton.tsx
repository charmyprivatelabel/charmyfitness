import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const phoneNumber = "5535997301868";
  const message = encodeURIComponent("Olá! entrei em seu site Charmy Lingerie, quero saber mais sobre private label Fitness");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale com comercial
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
