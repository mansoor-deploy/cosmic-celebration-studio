
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import StarryBackground from '@/components/StarryBackground';
import HeroSection from '@/components/HeroSection';
import EventDetails from '@/components/EventDetails';
import LocationDetails from '@/components/LocationDetails';
import PhotoGallery from '@/components/PhotoGallery';
import GiftRegistry from '@/components/GiftRegistry';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-cosmic-dark">
      <StarryBackground />
      <Navbar />
      <HeroSection />
      <EventDetails />
      <LocationDetails />
      <PhotoGallery />
      <GiftRegistry />
      <RSVPForm />
      <Footer />
    </div>
  );
};

export default Index;
