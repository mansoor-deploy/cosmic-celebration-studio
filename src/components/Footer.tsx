
import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t border-cosmic-light/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-cosmic-light mb-2">
              Celestial Celebration
            </h3>
            <p className="text-cosmic-accent">
              Join us for a mystical night under the stars
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="w-4 h-4 text-cosmic-light mr-2" />
              <a href="mailto:contact@celestialcelebration.com" className="text-cosmic-accent hover:text-cosmic-light transition-colors">
                contact@celestialcelebration.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Phone className="w-4 h-4 text-cosmic-light mr-2" />
              <a href="tel:+1234567890" className="text-cosmic-accent hover:text-cosmic-light transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cosmic-light/10 mt-8 pt-8 text-center">
          <p className="text-cosmic-accent text-sm">
            &copy; {currentYear} Celestial Celebration. All rights reserved.
          </p>
          <p className="text-cosmic-accent text-sm mt-2 flex items-center justify-center">
            Made with 
            <Heart className="w-4 h-4 text-cosmic-light mx-1" fill="currentColor" /> 
            for a special celebration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
