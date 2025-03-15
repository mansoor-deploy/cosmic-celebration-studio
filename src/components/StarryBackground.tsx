
import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear any existing stars
    container.innerHTML = '';
    
    // Create small stars
    for (let i = 0; i < 100; i++) {
      createStar('star-sm', containerWidth, containerHeight, container);
    }
    
    // Create medium stars
    for (let i = 0; i < 50; i++) {
      createStar('star-md', containerWidth, containerHeight, container);
    }
    
    // Create large stars
    for (let i = 0; i < 25; i++) {
      createStar('star-lg', containerWidth, containerHeight, container);
    }
    
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = `${Math.random() * containerWidth}px`;
      shootingStar.style.top = `${Math.random() * containerHeight / 3}px`;
      shootingStar.style.animationDelay = `${Math.random() * 15}s`;
      shootingStar.style.animationDuration = `${6 + Math.random() * 10}s`;
      container.appendChild(shootingStar);
    }
  }, []);
  
  const createStar = (
    className: string, 
    containerWidth: number, 
    containerHeight: number, 
    container: HTMLDivElement
  ) => {
    const star = document.createElement('div');
    star.className = `star ${className}`;
    star.style.left = `${Math.random() * containerWidth}px`;
    star.style.top = `${Math.random() * containerHeight}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.opacity = `${0.2 + Math.random() * 0.8}`;
    container.appendChild(star);
  };
  
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default StarryBackground;
