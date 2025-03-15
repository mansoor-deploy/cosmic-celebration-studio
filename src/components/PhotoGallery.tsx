
import React, { useState } from 'react';
import { Sparkles, X, Heart, Cake } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

// For a real app, you would upload actual images
// Using placeholder cosmic images for now
const galleryImages = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5fGVufDB8fDB8fHww",
    full: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXh5fGVufDB8fDB8fHww",
    caption: "The Cosmic Journey Begins"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVidWxhfGVufDB8fDB8fHww",
    full: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVidWxhfGVufDB8fDB8fHww",
    caption: "Nebula Dreams"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1539321908154-04927596764d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    full: "https://images.unsplash.com/photo-1539321908154-04927596764d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Stellar Celebration"
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    full: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Astral Visions"
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    full: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5lYnVsYXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Celestial Wonder"
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1570032257806-7272438f38da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnMlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    full: "https://images.unsplash.com/photo-1570032257806-7272438f38da?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnMlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    caption: "Star-Crossed Night"
  }
];

// This would be a featured image of the birthday person
const birthdayPerson = {
  name: "Alex",
  image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  fullImage: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  age: 30, // Change as needed
  birthdayWishes: [
    "May your day be as bright as the stars!",
    "Wishing you a cosmic year ahead!",
    "Here's to another trip around the sun!"
  ]
};

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [showBirthdayHighlight, setShowBirthdayHighlight] = useState(false);
  
  return (
    <section 
      id="gallery" 
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Gallery</h2>
          <p className="text-cosmic-accent max-w-2xl mx-auto">
            Glimpses of cosmic wonders and moments from {birthdayPerson.name}'s journey around the sun
          </p>
          <div className="w-20 h-1 bg-cosmic-light mx-auto mt-4"></div>
        </div>
        
        {/* Birthday Person Highlight */}
        <div className="cosmic-card p-6 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cosmic-light opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cosmic opacity-10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div 
                className="relative overflow-hidden rounded-full aspect-square border-4 border-cosmic-light cursor-pointer hover-scale"
                onClick={() => setShowBirthdayHighlight(true)}
              >
                <img 
                  src={birthdayPerson.image} 
                  alt={birthdayPerson.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/70 to-transparent flex items-end justify-center pb-4">
                  <Cake className="w-8 h-8 text-cosmic-light animate-bounce" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-cosmic-light">
                Celebrating {birthdayPerson.name}
              </h3>
              <p className="text-lg text-cosmic-accent">
                {birthdayPerson.age} Trips Around The Sun
              </p>
              
              <div className="space-y-2">
                <Carousel>
                  <CarouselContent>
                    {birthdayPerson.birthdayWishes.map((wish, index) => (
                      <CarouselItem key={index}>
                        <div className="p-4 text-center">
                          <p className="text-cosmic-accent italic">"{wish}"</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 text-cosmic-light border-cosmic" />
                  <CarouselNext className="right-0 text-cosmic-light border-cosmic" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="cosmic-card p-3 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={image.thumbnail} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-cosmic-accent">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-cosmic-dark border-cosmic-light max-w-4xl">
          {selectedImage && (
            <div>
              <div className="relative">
                <img 
                  src={selectedImage.full} 
                  alt={selectedImage.caption} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-cosmic-accent text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={showBirthdayHighlight} onOpenChange={() => setShowBirthdayHighlight(false)}>
        <DialogContent className="bg-cosmic-dark border-cosmic-light max-w-4xl">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={birthdayPerson.fullImage} 
                alt={birthdayPerson.name} 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/70 to-transparent flex items-end justify-center">
                <div className="p-6 text-center w-full">
                  <h3 className="text-3xl font-bold text-white mb-2">Happy Birthday, {birthdayPerson.name}!</h3>
                  <p className="text-cosmic-accent text-lg">We're celebrating you among the stars tonight</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Heart className="text-red-500 animate-pulse w-8 h-8" />
              <Cake className="text-cosmic-light w-8 h-8" />
              <Heart className="text-red-500 animate-pulse w-8 h-8" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
