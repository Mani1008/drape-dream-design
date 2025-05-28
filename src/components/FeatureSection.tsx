
import React from 'react';

const features = [
  {
    id: 1,
    icon: "https://img.icons8.com/cotton/64/000000/chair.png",
    title: "Authentic Craftsmanship",
    description: "Each saree in our collection is carefully handpicked from skilled artisans who continue age-old traditions of weaving and embroidery."
  },
  {
    id: 2,
    icon: "https://img.icons8.com/cotton/64/000000/shopping-bag--v1.png",
    title: "Extensive Collection",
    description: "Explore sarees from various regions of India, featuring distinct weaving techniques, motifs, and cultural significance."
  },
  {
    id: 3,
    icon: "https://img.icons8.com/cotton/64/000000/needle.png",
    title: "Customization Options",
    description: "We offer personalized blouse stitching, embellishment additions, and border customizations to match your unique style."
  },
  {
    id: 4,
    icon: "https://img.icons8.com/cotton/64/000000/price-tag.png",
    title: "Price Range For All",
    description: "From everyday wear to heirloom pieces, our collection caters to all budgets without compromising on quality."
  }
];

const FeatureSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-saree-cream/30 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-saree-maroon/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4">Our Commitment to Quality</h3>
              <p className="text-gray-700 mb-6">
                At Weavelle, we take pride in sourcing only the finest fabrics and partnering with skilled artisans who share our passion for preserving traditional techniques while embracing contemporary designs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-saree-gold">✓</span>
                  <span>Ethically sourced materials</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-saree-gold">✓</span>
                  <span>Supporting traditional artisans</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-saree-gold">✓</span>
                  <span>Rigorous quality checks</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-saree-gold">✓</span>
                  <span>Packaging with care and precision</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="./Saree_Images/Singlewoman1.avif" 
                  alt="Artisan working on a handloom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full border-4 border-white bg-saree-gold flex items-center justify-center">
                <span className="font-playfair text-white text-lg font-bold">20+<br/>Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
