import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Globe, MessageCircle, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-20 text-white flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#E6B7B2] mb-4 md:mb-6 block">Vamos Conversar</span>
            <h2 className="text-3xl md:text-5xl serif mb-8 md:mb-10 leading-tight">Pronta para elevar <br />sua marca?</h2>
            
            <div className="space-y-6 md:space-y-8">
              <a 
                href="https://charmylingerie.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all shrink-0">
                  <Globe size={18} className="md:w-5 md:h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-50 mb-0.5 md:mb-1">Website</p>
                  <p className="text-base md:text-lg">charmylingerie.com.br</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/charmy_lingerieprivatelabel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all shrink-0">
                  <Instagram size={18} className="md:w-5 md:h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-50 mb-0.5 md:mb-1">Instagram</p>
                  <p className="text-base md:text-lg">@charmy_lingerieprivatelabel</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5535997301868?text=Ol%C3%A1!%20entrei%20em%20seu%20site%20Charmy%20Lingerie,%20quero%20saber%20mais%20sobre%20private%20label%20Fitness"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all shrink-0">
                  <MessageCircle size={18} className="md:w-5 md:h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-50 mb-0.5 md:mb-1">WhatsApp - Alessandra</p>
                  <p className="text-base md:text-lg">(35) 99730-1868</p>
                </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#222] p-8 md:p-20 text-white relative">
            <h3 className="text-xl md:text-2xl font-light mb-8">Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#E6B7B2] transition-colors placeholder:text-white/20"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#E6B7B2] transition-colors placeholder:text-white/20"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#E6B7B2] transition-colors placeholder:text-white/20"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Sua Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-[#E6B7B2] transition-colors resize-none placeholder:text-white/20"
                  placeholder="Como podemos ajudar a sua marca?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E6B7B2] text-black py-4 md:py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-3 hover:bg-white transition-all group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="text-green-700">Mensagem Enviada!</span>
                ) : (
                  <span className="flex items-center justify-center gap-3 w-full">
                    Enviar Mensagem
                    <Send size={16} className="group-hover:translate-x-1 transition-transform md:w-[18px] md:h-[18px]" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
