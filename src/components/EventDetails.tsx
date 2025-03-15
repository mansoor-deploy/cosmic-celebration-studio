
import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EventDetails: React.FC = () => {
  return (
    <section 
      id="event" 
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Event Details</h2>
          <div className="w-20 h-1 bg-cosmic-light mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Date Card */}
          <div className="cosmic-card flex flex-col items-center">
            <div className="w-16 h-16 bg-cosmic rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Date</h3>
            <p className="text-cosmic-accent">December 31, 2023</p>
            <p className="text-cosmic-accent mt-2">Saturday</p>
          </div>
          
          {/* Time Card */}
          <div className="cosmic-card flex flex-col items-center">
            <div className="w-16 h-16 bg-cosmic rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Time</h3>
            <p className="text-cosmic-accent">8:00 PM</p>
            <p className="text-cosmic-accent mt-2">Until the stars fade</p>
          </div>
          
          {/* Location Card */}
          <div className="cosmic-card flex flex-col items-center md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-cosmic rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
            <p className="text-cosmic-accent">Starlight Banquet Hall</p>
            <p className="text-cosmic-accent mt-2">1234 Celestial Avenue</p>
            <p className="text-cosmic-accent">Astral City, AC 12345</p>
          </div>
        </div>
        
        <div className="mt-16 cosmic-card text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Dress Code</h3>
          <p className="text-cosmic-accent mb-6">Celestial Elegance - Starry blues, purples, and silver accents</p>
          
          <div className="flex justify-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cosmic-dark border-2 border-cosmic-light"></div>
            <div className="w-10 h-10 rounded-full bg-cosmic"></div>
            <div className="w-10 h-10 rounded-full bg-cosmic-light"></div>
            <div className="w-10 h-10 rounded-full bg-cosmic-silver"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
