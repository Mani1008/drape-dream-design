
const HeroSection = () => {


  const phoneNumber = '918076183966';
  const message = encodeURIComponent('Hello! I would like to inquire about your sarees.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero image carousel */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src="./Saree_Images/wallpaper.avif"
            alt="Elegant silk saree" 
            className="hero-slide"
          />
          <img 
            src="./Saree_Images/wallpapersaree2.jpg" 
            alt="Traditional bridal saree" 
            className="hero-slide"
          />
          <img 
            src="https://images8.alphacoders.com/853/thumb-1920-853181.jpg" 
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
            <a href="#collections" className="btn-primary text-center bg-teal-500">Explore Collection</a>
            <a href={whatsappUrl} target="_blank" className="btn-secondary text-center bg-white/10 backdrop-blur-sm">Book Appointment</a>
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
