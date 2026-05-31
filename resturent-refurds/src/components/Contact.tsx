import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondaryDark px-4 sm:px-6 lg:px-8 border-t border-customBorder">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left 5 Columns: Structural Contact Details & Hours */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div>
            <span className="text-goldAccent text-xs uppercase tracking-[0.25em] font-medium mb-3 block">
              Location & Hours
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white uppercase tracking-wide mb-8">
              Visit The Atelier
            </h2>
            
            {/* Address & Phone */}
            <div className="space-y-4 text-sm font-light text-textSecondary tracking-wide">
              <p className="text-white font-normal">L’Étoile Lounge</p>
              <p>145 Rue de la Toile, Rooftop Level<br />Paris, France 75001</p>
              <p className="pt-2">Reservations: <span className="text-white">+33 (0) 1 23 45 67 89</span></p>
              <p>Email: concierge@letoile-restaurant.com</p>
            </div>
          </div>

          {/* Operational Hours Block */}
          <div className="border-t border-customBorder pt-8">
            <h3 className="font-heading text-lg text-white mb-4 uppercase tracking-wider">Hours of Handiwork</h3>
            <div className="space-y-2 text-xs uppercase tracking-widest text-textSecondary">
              <div className="flex justify-between"><span className="font-light">Mon — Thu</span><span className="text-white">18:00 – 23:30</span></div>
              <div className="flex justify-between"><span className="font-light">Fri — Sat</span><span className="text-goldAccent">17:30 – 01:00</span></div>
              <div className="flex justify-between"><span className="font-light">Sunday</span><span className="text-white">12:30 – 22:00</span></div>
            </div>
          </div>

          {/* Social Handle Preview Feed Point */}
          <div className="text-xs tracking-widest text-textSecondary">
            <p className="mb-2">Follow Our Journey</p>
            <a href="#instagram" className="text-goldAccent hover:text-white transition-colors duration-300">
              @LETOILE_PARIS
            </a>
          </div>
        </div>

        {/* Right 7 Columns: Premium Cinematic Map Embed */}
        <div className="lg:col-span-7 h-[400px] lg:h-full min-h-[350px] relative border border-customBorder p-2 bg-background">
          <iframe 
            title="L’Étoile Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693481!2d2.329434!3d48.858370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1717000000000!5m2!1sen!2s"
            className="w-full h-full filter grayscale invert opacity-70 contrast-125 border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};