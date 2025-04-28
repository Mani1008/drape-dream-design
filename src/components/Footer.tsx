
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="font-playfair text-2xl font-bold text-white">Drape<span className="text-saree-gold">Dream</span></span>
              </a>
            </div>
            <p className="mb-4">
              Bringing the rich heritage of Indian textiles to contemporary fashion, 
              offering an exquisite collection of handpicked sarees from across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-saree-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-saree-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-saree-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-playfair text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-saree-gold transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-saree-gold transition-colors">Collections</a></li>
              <li><a href="#new-arrivals" className="hover:text-saree-gold transition-colors">New Arrivals</a></li>
              <li><a href="#about" className="hover:text-saree-gold transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-saree-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-saree-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Collections */}
          <div>
            <h5 className="font-playfair text-lg font-semibold text-white mb-4">Collections</h5>
            <ul className="space-y-2">
              <li><a href="#silk" className="hover:text-saree-gold transition-colors">Silk Sarees</a></li>
              <li><a href="#cotton" className="hover:text-saree-gold transition-colors">Cotton Sarees</a></li>
              <li><a href="#designer" className="hover:text-saree-gold transition-colors">Designer Sarees</a></li>
              <li><a href="#bridal" className="hover:text-saree-gold transition-colors">Bridal Sarees</a></li>
              <li><a href="#casual" className="hover:text-saree-gold transition-colors">Casual Sarees</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-playfair text-lg font-semibold text-white mb-4">Contact Info</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-saree-gold" />
                <span>123 Fashion Street, Silk Market<br/>Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-saree-gold" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-saree-gold" />
                <span>info@drapedream.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} DrapeDream. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-saree-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-saree-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-saree-gold transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
