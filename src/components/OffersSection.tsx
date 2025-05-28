
import React from 'react';
import { Tag, Clock } from 'lucide-react';

const OffersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r bg-teal-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-center mb-12">Special Offers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Offer 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Tag size={32} className="text-saree-gold" />
            </div>
            <h3 className="font-playfair text-xl text-center font-semibold mb-3">First-Time Purchase</h3>
            <p className="text-center mb-4">Enjoy 15% off on your first purchase when you sign up for our newsletter.</p>
            <div className="text-center">
              <button className="bg-white text-saree-maroon px-5 py-2 rounded-md hover:bg-saree-cream transition duration-300">
                Get Coupon
              </button>
            </div>
          </div>
          
          {/* Offer 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <Clock size={32} className="text-saree-gold" />
            </div>
            <h3 className="font-playfair text-xl text-center font-semibold mb-3">Limited Time Offer</h3>
            <p className="text-center mb-4">Buy any two sarees from our designer collection and get a blouse piece customized for free.</p>
            <div className="text-center">
              <button className="bg-white text-saree-maroon px-5 py-2 rounded-md hover:bg-saree-cream transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
          
          {/* Offer 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="text-saree-gold text-4xl font-bold">%</div>
            </div>
            <h3 className="font-playfair text-xl text-center font-semibold mb-3">Festival Season Sale</h3>
            <p className="text-center mb-4">Enjoy up to 25% off on selected bridal and festive collection sarees.</p>
            <div className="text-center">
              <button className="bg-white text-saree-maroon px-5 py-2 rounded-md hover:bg-saree-cream transition duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-playfair italic mb-6">"Elegance never goes out of style"</p>
          <a href="#collections" className="inline-block bg-white text-saree-maroon px-6 py-3 rounded-md hover:bg-saree-cream transition duration-300 font-medium">
            Shop the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
