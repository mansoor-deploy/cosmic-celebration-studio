
import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  
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
            Glimpses of cosmic wonders and celestial moments to inspire your journey to our celebration
          </p>
          <div className="w-20 h-1 bg-cosmic-light mx-auto mt-4"></div>
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
    </section>
  );
};

export default PhotoGallery;
