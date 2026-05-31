import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-background">
      
      {/* Background Visual Wrapper (Cinematic Zoom Fallback Layout) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 transform scale-105 transition-transform duration-[10000ms] ease-out animate-[pulse_8s_infinite]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920')` 
        }}
      />
      
      {/* Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-90" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Tagline */}
        <span className="text-goldAccent text-xs uppercase tracking-[0.25em] font-medium mb-4 block animate-fade-in">
          An Immersive Culinary Journey
        </span>

        {/* Restaurant Name Header */}
        <h1 className="font-heading text-5xl md:text-8xl font-light tracking-wide mb-6 uppercase text-white">
          L’Étoile
        </h1>

        {/* Short Concept Line */}
        <p className="text-textSecondary max-w-md md:max-w-xl text-sm md:text-base font-light tracking-wide leading-relaxed mb-10">
          Where Michelin-star artistry meets a mesmerizing rooftop atmosphere. Crafted for those who appreciate the extraordinary.
        </p>

        {/* CTA Elements */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#reservation" 
            className="px-8 py-4 bg-goldAccent text-background font-medium text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg text-center"
          >
            Reserve A Table
          </a>
          <a 
            href="#menu" 
            className="px-8 py-4 border border-customBorder text-textPrimary font-medium text-xs uppercase tracking-wider hover:bg-white hover:text-background transition-all duration-300 text-center"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-40 text-xs tracking-widest font-light uppercase hidden md:block animate-bounce">
        Scroll Down
      </div>
    </section>
  );
};