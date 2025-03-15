
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  const scrollToRSVP = () => {
    const element = document.getElementById('rsvp');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-cosmic-dark opacity-70 z-[-1]"></div>
      
      {/* Animated Nebula Effect */}
      <div className="absolute inset-0 z-[-1] opacity-30 nebula-bg"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-float mb-4 inline-block">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-cosmic-light animate-glow mx-auto mb-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow">
          <span className="block text-cosmic-light">Celestial</span>
          <span className="block mt-2">Celebration</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cosmic-accent max-w-xl mx-auto mb-10">
          Join us for a mystical night under the stars to celebrate a special birthday
        </p>
        
        <CountdownTimer targetDate="2023-12-31T20:00:00" />
        
        <div className="mt-10">
          <Button 
            onClick={scrollToRSVP} 
            className="cosmic-button text-lg transform transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">RSVP Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
