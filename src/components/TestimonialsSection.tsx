
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "I purchased a Kanjivaram silk saree for my wedding and was amazed by the quality. The customization options were perfect and the team was incredibly helpful throughout the process."
  },
  {
    id: 2,
    name: "Anjali Patel",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "The collection is diverse and authentic. I've been a loyal customer for years and their sarees always receive compliments. The attention to detail in their craftsmanship is unmatched."
  },
  {
    id: 3,
    name: "Meera Reddy",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "I love that they offer sarees in various price ranges without compromising on quality. Their customer service is excellent and they've been very helpful with my online orders."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-saree-cream/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Customer Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < testimonial.rating ? 'text-saree-gold' : 'text-gray-300'}`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-saree-maroon text-white p-8 md:p-10 rounded-lg text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4">Our Customers Love Us</h3>
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">4.9</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">2000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
          </div>
          <a href="#contact" className="inline-block bg-white text-saree-maroon px-6 py-3 rounded-md hover:bg-saree-cream transition duration-300 font-medium">Share Your Experience</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
