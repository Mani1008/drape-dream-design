
import React, { useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Your exclusive discount code has been sent to your email.",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-saree-burgundy to-saree-maroon overflow-hidden">
      {/* Main promo section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
        {/* Background design elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-saree-gold blur-3xl"></div>
          <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-saree-purple blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-saree-gold blur-3xl"></div>
        </div>
        
        {/* Countdown timer */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl py-3 px-6 mb-8 animate-pulse">
          <div className="text-center text-sm font-medium">
            Limited Time Offer Ends In:
          </div>
          <div className="flex gap-3 justify-center text-saree-gold">
            <div className="text-center">
              <div className="text-2xl font-bold">{countdown.days}</div>
              <div className="text-xs">Days</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{countdown.hours}</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{countdown.minutes}</div>
              <div className="text-xs">Min</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold">{countdown.seconds}</div>
              <div className="text-xs">Sec</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto text-center z-10">
          <h5 className="text-saree-gold font-playfair">EXCLUSIVE COLLECTION</h5>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Celebrate the <span className="text-saree-gold">Festival Season</span> with Elegance
          </h1>
          <h3 className="text-2xl md:text-3xl font-light mb-6">
            Get <span className="font-bold text-saree-gold">30% OFF</span> on our Designer Collection
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover our exquisite range of traditional and contemporary sarees, 
            handcrafted by master artisans for your special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a 
              href="#shop-now" 
              className="bg-saree-gold text-saree-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              SHOP NOW <ArrowRight size={18} />
            </a>
            <a 
              href="#collection" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors duration-300"
            >
              VIEW COLLECTION
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} fill="currentColor" className="text-saree-gold w-4 h-4" />
                ))}
              </div>
              <span className="ml-2 text-sm">4.9/5 (2000+ reviews)</span>
            </div>
            <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
            <div className="text-sm">Free shipping on orders over ₹2999</div>
            <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
            <div className="text-sm">30-day returns</div>
          </div>
        </div>
        
        {/* Product showcase */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 z-10">
          {[
            "https://images.unsplash.com/photo-1610030242288-ed68eb757730?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1610030252449-43b2d482a708?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1610030196478-95a3966ff61e?w=500&auto=format&fit=crop&q=80"
          ].map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 hover:z-20"
              style={{ height: index === 0 ? '300px' : '200px' }}
            >
              <img 
                src={image} 
                alt={`Saree design ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <p className="text-white text-sm font-bold">Festival Collection</p>
                  <p className="text-saree-gold text-xs">Starting at ₹3,999</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Email signup */}
        <div className="w-full max-w-md mt-12 z-10">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl text-center font-bold mb-4">Get Your Exclusive 10% Discount</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md bg-white/90 text-saree-maroon focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-saree-gold text-saree-maroon px-4 py-2 rounded-md font-medium hover:bg-white transition-colors duration-300"
              >
                CLAIM NOW
              </button>
            </div>
            <p className="text-xs text-center mt-2 text-white/70">
              By signing up, you agree to receive promotional emails
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
