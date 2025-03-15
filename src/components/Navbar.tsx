
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-cosmic-dark/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-cosmic-light">
              <span className="text-cosmic-accent">Celestial</span> Celebration
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('event')} 
              className="text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Event Details
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('gifts')} 
              className="text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Gifts
            </button>
            <Button 
              onClick={() => scrollToSection('rsvp')} 
              className="bg-cosmic hover:bg-cosmic-light text-white"
            >
              RSVP Now
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-cosmic-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmic-dark/95 backdrop-blur-md">
          <div className="py-4 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('event')} 
              className="block w-full text-left py-2 text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Event Details
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-2 text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('gifts')} 
              className="block w-full text-left py-2 text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Gifts
            </button>
            <Button 
              onClick={() => scrollToSection('rsvp')} 
              className="w-full bg-cosmic hover:bg-cosmic-light text-white"
            >
              RSVP Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
