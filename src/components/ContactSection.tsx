
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Store Details */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605941907104-60843ce92a37?w=600&auto=format&fit=crop&q=80" 
                  alt="Store Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Visit Our Store</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-saree-maroon mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Store Location:</p>
                      <p className="text-gray-600">weavelle, 120, Shahpur Jat</p>
                      <p className="text-gray-600">New Delhi, Delhi 110049</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-saree-maroon mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Call Us:</p>
                      <p className="text-gray-600">+91 80761 83966</p>
                      {/* <p className="text-gray-600">+91 12345 67890</p> */}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-saree-maroon mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      {/* <p className="font-medium">Email Us:</p>
                      <p className="text-gray-600">info@drapedream.com</p>
                      <p className="text-gray-600">support@drapedream.com</p> */}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Store Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>Monday - Saturday</div>
                    <div>10:00 AM - 7:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 6:00 PM</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="http://instagram.com/weavelle_/?hl=en" className="bg-saree-maroon/10 p-3 rounded-full hover:bg-saree-maroon/20 transition-colors">
                      <Instagram size={20} className="text-saree-maroon" />
                    </a>
                    <a href="https://www.facebook.com/WEAVELLE" className="bg-saree-maroon/10 p-3 rounded-full hover:bg-saree-maroon/20 transition-colors">
                      <Facebook size={20} className="text-saree-maroon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saree-maroon"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saree-maroon"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saree-maroon"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saree-maroon"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              
              <div className="mt-8 p-4 bg-saree-cream/30 rounded-md">
                <h4 className="font-medium mb-2">Book an Appointment</h4>
                <p className="text-gray-700 text-sm">
                  For personalized shopping experience or bridal consultations, 
                  schedule an appointment with our saree experts.
                </p>
                <a href="#" className="inline-block mt-2 text-saree-maroon hover:text-saree-burgundy font-medium">
                  Book Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
