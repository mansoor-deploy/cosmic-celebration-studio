
import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const LocationDetails: React.FC = () => {
  const isMobile = useIsMobile();
  const birthdayPerson = "Alex"; // Ensure this matches the name in other components
  
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="w-8 h-8 text-cosmic-light" />
            <Cake className="w-6 h-6 text-cosmic-light animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Celebration Venue</h2>
          <p className="text-cosmic-accent max-w-2xl mx-auto mb-4">
            Join us as we celebrate {birthdayPerson}'s special day at this magical location
          </p>
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
                  <div className="absolute w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
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
            <h3 className="text-2xl font-bold mb-2 text-white text-center lg:text-left">Starlight Banquet Hall</h3>
            <p className="text-cosmic-accent mb-6 text-center lg:text-left">Where we'll celebrate {birthdayPerson}'s special day</p>
            
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
