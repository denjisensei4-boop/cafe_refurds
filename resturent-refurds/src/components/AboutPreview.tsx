import React from 'react';

export const AboutPreview: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background text-white px-4 sm:px-6 lg:px-8 border-t border-customBorder">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Elegant Text Block */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-goldAccent text-xs uppercase tracking-[0.25em] font-medium mb-3 block">
            Our Heritage
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-light uppercase tracking-wide mb-6">
            Where Artistry <br />Meets Ambiance
          </h2>
          <p className="text-textSecondary text-sm font-light tracking-wide leading-relaxed mb-6">
            Founded on the philosophy of gastronomic perfection, L’Étoile elevates fine dining into a multi-sensory theatrical experience. Every dish features complex culinary geometry orchestrated cleanly on your plate.
          </p>
          <p className="text-textSecondary text-sm font-light tracking-wide leading-relaxed mb-8">
            Our kitchen team, curated by Michelin-decorated masters, continuously pushes boundaries by exploring seasonal alignments, organic harvesting origins, and ancient wood-fired processing.
          </p>
          <div>
            <a 
              href="#story" 
              className="inline-block text-xs uppercase tracking-luxury border-b border-goldAccent text-goldAccent pb-1 hover:text-white hover:border-white transition-colors duration-300"
            >
              Discover Our Full Story →
            </a>
          </div>
        </div>

        {/* Right Side: Chef / Kitchen Cinematic Image */}
        <div className="lg:col-span-6 relative">
          <div className="border border-customBorder p-3 bg-secondaryDark">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800" 
                alt="Executive Chef Masterclass" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[4000ms] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
          {/* Accent Gold Frame Overlay decoration */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-goldAccent/30 -z-10 hidden md:block" />
        </div>

      </div>
    </section>
  );
};