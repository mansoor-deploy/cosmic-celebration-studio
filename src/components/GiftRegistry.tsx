
import React from 'react';
import { Gift, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface GiftItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

const giftItems: GiftItem[] = [
  {
    id: 1,
    name: "Celestial Star Projector",
    description: "Transform any room into a starry night sky with this premium star projector.",
    price: "$75",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhciUyMHByb2plY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    link: "#"
  },
  {
    id: 2,
    name: "Cosmic Art Print",
    description: "Hand-crafted nebula art print, perfect for any space enthusiast.",
    price: "$50",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVidWxhJTIwYXJ0fGVufDB8fDB8fHww",
    link: "#"
  },
  {
    id: 3,
    name: "Astronomical Telescope",
    description: "Explore the cosmos with this beginner-friendly telescope.",
    price: "$200",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVsZXNjb3BlfGVufDB8fDB8fHww",
    link: "#"
  }
];

const GiftRegistry: React.FC = () => {
  return (
    <section 
      id="gifts" 
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Gift Registry</h2>
          <p className="text-cosmic-accent max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to bring something, here are some cosmic ideas
          </p>
          <div className="w-20 h-1 bg-cosmic-light mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftItems.map((item) => (
            <Card key={item.id} className="cosmic-card border-cosmic-light/20 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{item.name}</CardTitle>
                <CardDescription className="text-cosmic-accent">
                  {item.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-cosmic-accent">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-cosmic hover:bg-cosmic-light text-white"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Item
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="cosmic-card inline-block px-8 py-6">
            <Gift className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Monetary Gifts</h3>
            <p className="text-cosmic-accent mb-6 max-w-lg">
              If you prefer to contribute to a special fund for my dream telescope, you may do so through the link below
            </p>
            <Button className="bg-cosmic hover:bg-cosmic-light text-white">
              Contribute to Gift Fund
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
