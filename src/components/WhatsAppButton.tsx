
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hello! I'm interested in your saree collection." }: WhatsAppButtonProps) => {
  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
