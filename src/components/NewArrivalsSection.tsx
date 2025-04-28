
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const sareeProducts = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    description: "Handwoven silk with intricate gold zari work",
    price: 24999,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=80",
    category: "Silk",
    badge: "New"
  },
  {
    id: 2,
    name: "Kanjivaram Silk",
    description: "Traditional temple border with rich pallu",
    price: 32999,
    image: "https://images.unsplash.com/photo-1610030266500-eae5adedae95?w=500&auto=format&fit=crop&q=80",
    category: "Bridal",
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Linen Cotton Saree",
    description: "Lightweight comfort with contemporary prints",
    price: 3999,
    image: "https://images.unsplash.com/photo-1583693460637-7d41a0e17423?w=500&auto=format&fit=crop&q=80",
    category: "Casual"
  },
  {
    id: 4,
    name: "Designer Georgette",
    description: "Modern embellishments with elegant drape",
    price: 15999,
    image: "https://images.unsplash.com/photo-1610030252449-43b2d482a708?w=500&auto=format&fit=crop&q=80",
    category: "Designer",
    badge: "Limited"
  }
];

const NewArrivalsSection = () => {
  return (
    <section id="new-arrivals" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">New Arrivals</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          Discover our latest collection of handpicked sarees, featuring exquisite craftsmanship and timeless designs.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sareeProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-saree-maroon text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-saree-maroon p-3 rounded-full hover:bg-saree-gold transition duration-300">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-saree-gold mb-1">{product.category}</div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-saree-maroon">₹{product.price.toLocaleString()}</span>
                  <button className="text-saree-maroon hover:text-saree-gold text-sm font-medium">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#collections" className="btn-secondary">View All Collection</a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
