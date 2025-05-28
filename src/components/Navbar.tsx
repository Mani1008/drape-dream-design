
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="font-playfair text-2xl md:text-3xl font-bold text-saree-maroon">Drape<span className="text-saree-gold">Dream</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="nav-link">Home</a>
            <div className="relative group">
              <a href="#collections" className="nav-link">Collections</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="#silk" className="block px-4 py-2 text-sm hover:bg-gray-100">Silk Sarees</a>
                <a href="#cotton" className="block px-4 py-2 text-sm hover:bg-gray-100">Cotton Sarees</a>
                <a href="#designer" className="block px-4 py-2 text-sm hover:bg-gray-100">Designer Sarees</a>
                <a href="#bridal" className="block px-4 py-2 text-sm hover:bg-gray-100">Bridal Sarees</a>
                <a href="#casual" className="block px-4 py-2 text-sm hover:bg-gray-100">Casual Sarees</a>
              </div>
            </div>
            <a href="#new-arrivals" className="nav-link">New Arrivals</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-saree-maroon">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-saree-maroon">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-saree-maroon">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md">
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 pb-4">
              <a href="#" className="nav-link" onClick={toggleMenu}>Home</a>
              <a href="#collections" className="nav-link" onClick={toggleMenu}>Collections</a>
              <a href="#silk" className="nav-link pl-6 text-sm" onClick={toggleMenu}>Silk Sarees</a>
              <a href="#cotton" className="nav-link pl-6 text-sm" onClick={toggleMenu}>Cotton Sarees</a>
              <a href="#designer" className="nav-link pl-6 text-sm" onClick={toggleMenu}>Designer Sarees</a>
              <a href="#bridal" className="nav-link pl-6 text-sm" onClick={toggleMenu}>Bridal Sarees</a>
              <a href="#casual" className="nav-link pl-6 text-sm" onClick={toggleMenu}>Casual Sarees</a>
              <a href="#new-arrivals" className="nav-link" onClick={toggleMenu}>New Arrivals</a>
              <a href="#about" className="nav-link" onClick={toggleMenu}>About Us</a>
              <a href="#testimonials" className="nav-link" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
            </nav>
            <div className="flex justify-center space-x-6 pt-4 border-t">
              <button className="p-2 hover:text-saree-maroon">
                <Search size={20} />
              </button>
              <button className="p-2 hover:text-saree-maroon">
                <User size={20} />
              </button>
              <button className="p-2 hover:text-saree-maroon">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
