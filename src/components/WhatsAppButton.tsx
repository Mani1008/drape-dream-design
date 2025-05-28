
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918076183966';
  const message = encodeURIComponent('Hello! I would like to inquire about your sarees.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
