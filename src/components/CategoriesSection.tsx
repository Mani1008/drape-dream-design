
import React from 'react';

const categories = [
  {
    id: 1,
    name: "Silk Sarees",
    image: "https://images.unsplash.com/photo-1610030242288-ed68eb757730?w=500&auto=format&fit=crop&q=80",
    count: 126,
    slug: "silk"
  },
  {
    id: 2,
    name: "Cotton Sarees",
    image: "https://images.unsplash.com/photo-1610976640891-9121f1afc434?w=500&auto=format&fit=crop&q=80",
    count: 84,
    slug: "cotton"
  },
  {
    id: 3,
    name: "Designer Sarees",
    image: "https://images.unsplash.com/photo-1610030252434-711b293da221?w=500&auto=format&fit=crop&q=80",
    count: 58,
    slug: "designer"
  },
  {
    id: 4,
    name: "Bridal Sarees",
    image: "https://images.unsplash.com/photo-1610030196478-95a3966ff61e?w=500&auto=format&fit=crop&q=80",
    count: 32,
    slug: "bridal"
  },
  {
    id: 5,
    name: "Casual Sarees",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80",
    count: 47,
    slug: "casual"
  }
];

const CategoriesSection = () => {
  return (
    <section id="collections" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Collections</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
          Explore our diverse range of sarees crafted with love and tradition, showcasing the rich heritage of Indian craftsmanship.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              id={category.slug}
              className={`relative overflow-hidden rounded-lg group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              style={{ height: index === 0 ? '600px' : '300px' }}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-playfair text-xl md:text-2xl font-semibold">{category.name}</h3>
                <p className="text-gray-200 text-sm mt-2">{category.count} Products</p>
                <a 
                  href={`#${category.slug}`} 
                  className="inline-block mt-4 text-white border-b-2 border-saree-gold hover:border-white transition-colors duration-300"
                >
                  View Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
