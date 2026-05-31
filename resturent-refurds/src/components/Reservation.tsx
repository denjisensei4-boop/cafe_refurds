import React from 'react';

export const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-24 bg-background px-4 sm:px-6 lg:px-8 border-t border-customBorder">
      <div className="max-w-4xl mx-auto bg-secondaryDark border border-customBorder p-8 md:p-16">
        <div className="text-center mb-12">
          <span className="text-goldAccent text-[10px] uppercase tracking-superWide mb-2 block">Secure Your Table</span>
          <h2 className="font-heading text-3xl md:text-5xl text-white uppercase font-light">Make a Reservation</h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          <input type="email" placeholder="Email Address" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          <input type="tel" placeholder="Phone Number" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          <input type="number" placeholder="Guest Count" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          <input type="date" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          <input type="time" className="bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors" required />
          
          <textarea placeholder="Special Requests" className="md:col-span-2 bg-background border border-customBorder p-4 text-sm text-white focus:outline-none focus:border-goldAccent transition-colors h-32" />

          <button type="submit" className="md:col-span-2 w-full py-5 bg-goldAccent text-background font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 mt-4">
            Request Reservation
          </button>
        </form>
        
        {/* WhatsApp Integration [cite: 198] */}
        <div className="mt-8 text-center">
          <p className="text-textSecondary text-xs uppercase tracking-widest mb-4">Or Reach Us Directly</p>
          <a href="https://wa.me/yournumber" className="inline-flex items-center gap-2 text-goldAccent hover:text-white transition-colors text-sm">
            <span>WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
};