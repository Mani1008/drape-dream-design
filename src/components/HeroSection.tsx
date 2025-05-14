
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero image carousel */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src="https://media-hosting.imagekit.io/da219975a0d44361/saree.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ze14DCKIz768hlqf7pesgywZYe0izBnwx-663qi9WXb6tNjoSLa9mxvrDBhl7WrlsBX4SIKl3OOpaDmUceo9HNvxlzxfM5XWpHQIP1ENdYDcM5bcfNXNT7CmAc9Dt~v2tSf~OEYz~AASMA8MhoS4fOEPSn4BAeIy6~Su33FpYmuYl4d85VpDKiHSQsvnapv4dTLSwA~OyLWgIdxfC90bOdZ1JltAcqLYPwvkOr2VgmxAZZV~lRcdFmVSdiQPdODcEiItMMzy6gz-H8~tEtabHpKCJadPnahSe0-~7kV6fwUrXHopoDAuZS9knMRumioqqwFIrxeSfrvGvxUoytT5JA__" 
            alt="Elegant silk saree" 
            className="hero-slide"
          />
          <img 
            src="https://media-hosting.imagekit.io/3093680a05934f8d/saree%202.jpg?Expires=1841846762&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GdaoZ74hy8k3r03pwZbKjCU2v6cnrgnH9-bZpZgNskNBM~UMLemnp5y0uhMPoJ1dILNoaHS1lw1tyJGyDT9Ru3tsSWfiofOS-Lt-NWPIectqTayZW6Fau19C6vPuoqaH2F10ys7Qf-5LRwBEzwrFV60KLh6Lerur9cpDswt18eYdFmt2inuv0N36D-NoVHdEAmIq-abxdfjxtEA1B9YJ3nV66ubQ2wfLcqmmm5eb5w3oMrbGDNxUjXeOc4CnHW7ccln-Mzamj57Xd2JgajzrGOLU5u9LgGZa5COV0JHnaV82iQG58X74GkPH69ApQMibEDOPz7bgxvloTx6PG0WeiQ__" 
            alt="Traditional bridal saree" 
            className="hero-slide"
          />
          <img 
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&auto=format&fit=crop&q=80" 
            alt="Contemporary designer saree" 
            className="hero-slide"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">Elegance Woven in Every Thread</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">Discover our exquisite collection of traditional and contemporary sarees, crafted with authentic artisanship from across India.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#collections" className="btn-primary text-center">Explore Collection</a>
            <a href="#contact" className="btn-secondary text-center bg-white/10 backdrop-blur-sm">Book Appointment</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
