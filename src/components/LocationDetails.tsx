
import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const LocationDetails: React.FC = () => {
  const isMobile = useIsMobile();
  
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Starlight+Banquet+Hall+1234+Celestial+Avenue+Astral+City', '_blank');
  };

  return (
    <section
      id="location"
      className="py-16 md:py-24 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark to-cosmic/30"></div>
        <div className="nebula-bg w-full h-full"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <MapPin className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Location</h2>
          <div className="w-20 h-1 bg-cosmic-light mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map View */}
          <div className="order-2 lg:order-1 cosmic-card h-[300px] md:h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-cosmic-dark/50">
              {/* Placeholder for an actual map - in production, embed a real map here */}
              <div className="w-full h-full bg-cosmic-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  {/* Cosmic map pattern */}
                  <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%239C92AC\" fill-opacity=\"0.2\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')] opacity-30"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-cosmic-light animate-bounce" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Button 
                onClick={handleDirections}
                className="bg-cosmic hover:bg-cosmic-light text-white group"
                size="sm"
              >
                Get Directions
                <Navigation className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Location Info */}
          <div className="order-1 lg:order-2 cosmic-card h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-white text-center lg:text-left">Starlight Banquet Hall</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-cosmic flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cosmic-light mb-1">Address</h4>
                  <p className="text-cosmic-accent">1234 Celestial Avenue</p>
                  <p className="text-cosmic-accent">Astral City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-cosmic flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cosmic-light mb-1">Contact</h4>
                  <p className="text-cosmic-accent">(123) 456-7890</p>
                  <p className="text-cosmic-accent">venue@starlightbanquet.com</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-cosmic/20 rounded-lg border border-cosmic-light/20">
                <h4 className="text-lg font-semibold text-cosmic-light mb-2">Parking Information</h4>
                <p className="text-cosmic-accent text-sm">
                  Complimentary valet parking is available for all guests. 
                  Self-parking is also available in the adjacent lot.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button
                  onClick={handleDirections} 
                  className="cosmic-button text-lg mt-4"
                >
                  <span className="relative z-10 flex items-center">
                    Open in Maps
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
