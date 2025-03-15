
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  const birthdayPerson = "Alex"; // You can change this name as needed
  
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
      className="min-h-[100svh] flex items-center justify-center px-4 relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-cosmic-dark opacity-70 z-[-1]"></div>
      
      {/* Animated Nebula Effect */}
      <div className="absolute inset-0 z-[-1] opacity-30 nebula-bg"></div>
      
      {/* Mobile-friendly Floating Stars */}
      {isMobile && (
        <div className="absolute inset-0 z-[-1]">
          <div className="star-sm absolute top-[10%] left-[20%] animate-twinkle-slow"></div>
          <div className="star-md absolute top-[30%] left-[60%] animate-twinkle"></div>
          <div className="star-lg absolute top-[45%] left-[15%] animate-twinkle-fast"></div>
          <div className="star-sm absolute top-[70%] left-[80%] animate-twinkle"></div>
          <div className="star-md absolute top-[85%] left-[25%] animate-twinkle-slow"></div>
        </div>
      )}
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-float mb-2 inline-block">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-cosmic-light animate-glow mx-auto mb-2" />
        </div>
        
        <h2 className="text-xl md:text-2xl text-cosmic-accent mb-2 animate-fade-in">A Special Celebration for</h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white text-shadow animate-enter">
          <span className="block">{birthdayPerson}</span>
        </h1>
        
        <div className="w-20 h-1 bg-cosmic-light mx-auto mb-6 animate-scale-in"></div>
        
        <p className="text-xl md:text-2xl text-cosmic-accent max-w-xl mx-auto mb-10 leading-relaxed">
          Join us for a mystical night under the stars to celebrate {birthdayPerson}'s birthday
        </p>
        
        <CountdownTimer targetDate="2023-12-31T20:00:00" />
        
        <div className="mt-10">
          <Button 
            onClick={scrollToRSVP} 
            className="cosmic-button text-lg transform transition-transform duration-300 hover:scale-105 px-8 py-6"
          >
            <span className="relative z-10 text-xl">RSVP Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
