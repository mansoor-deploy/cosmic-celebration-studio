
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
            <h1 className={cn(
              "font-bold transition-all duration-300",
              isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl",
              "text-cosmic-light"
            )}>
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
              onClick={() => scrollToSection('location')} 
              className="text-cosmic-accent hover:text-cosmic-light transition-colors"
            >
              Location
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
            className="md:hidden text-cosmic-accent z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu - Updated for better animation and styling */}
      <div className={cn(
        "fixed inset-0 bg-cosmic-dark/95 backdrop-blur-lg md:hidden transition-all duration-300 z-40 flex flex-col justify-center",
        mobileMenuOpen 
          ? "opacity-100 pointer-events-auto translate-y-0" 
          : "opacity-0 pointer-events-none translate-y-[-100vh]"
      )}>
        <div className="py-4 px-6 space-y-6 text-center">
          <button 
            onClick={() => scrollToSection('home')} 
            className="block w-full text-center py-3 text-2xl text-cosmic-accent hover:text-cosmic-light transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('event')} 
            className="block w-full text-center py-3 text-2xl text-cosmic-accent hover:text-cosmic-light transition-colors"
          >
            Event Details
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="block w-full text-center py-3 text-2xl text-cosmic-accent hover:text-cosmic-light transition-colors"
          >
            Location
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="block w-full text-center py-3 text-2xl text-cosmic-accent hover:text-cosmic-light transition-colors"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('gifts')} 
            className="block w-full text-center py-3 text-2xl text-cosmic-accent hover:text-cosmic-light transition-colors"
          >
            Gifts
          </button>
          <div className="mt-8">
            <Button 
              onClick={() => scrollToSection('rsvp')} 
              className="w-3/4 py-6 bg-cosmic hover:bg-cosmic-light text-white text-xl"
            >
              RSVP Now
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 w-full text-center">
          <p className="text-cosmic-light/70 text-sm">
            Join us for a mystical celebration
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
