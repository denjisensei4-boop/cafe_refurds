import React, { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const MENU_DATA: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Oysters Rockefeller", description: "Freshly shucked oysters with sautéed spinach and hollandaise.", price: "$28" },
    { name: "Truffle Arancini", description: "Wild mushroom risotto balls with truffle aioli.", price: "$22" },
  ],
  "Main Course": [
    { name: "Herb-Crusted Lamb", description: "Slow-roasted rack of lamb with mint pea purée.", price: "$54" },
    { name: "Lobster Thermidor", description: "Atlantic lobster in a creamy cognac and mustard sauce.", price: "$72" },
  ],
  Desserts: [
    { name: "Deconstructed Tiramisu", description: "Mascarpone mousse, espresso-soaked ladyfingers, and cocoa soil.", price: "$18" },
    { name: "Saffron Crème Brûlée", description: "Infused with Persian saffron and topped with burnt sugar.", price: "$20" },
  ],
  Cocktails: [
    { name: "Smoked Old Fashioned", description: "Bourbon, maple syrup, and orange bitters smoked with cherry wood.", price: "$24" },
    { name: "The Gold Standard", description: "Gin, elderflower, lemon, and edible gold leaf garnish.", price: "$26" },
  ]
};

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
    <section id="full-menu" className="py-24 bg-secondaryDark px-4 sm:px-6 lg:px-8 border-t border-customBorder">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl text-white uppercase tracking-widest mb-4">The Menu</h2>
          <p className="text-goldAccent text-xs uppercase tracking-luxury">Refined flavors, orchestrated with precision</p>
        </div>

        {/* Sticky Category Navigation [cite: 147] */}
        <div className="sticky top-0 z-30 bg-secondaryDark/80 backdrop-blur-md py-6 mb-12 border-b border-customBorder overflow-x-auto flex justify-center gap-8 no-scrollbar">
          {Object.keys(MENU_DATA).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                activeCategory === category ? 'text-goldAccent border-b border-goldAccent pb-1' : 'text-textSecondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items [cite: 140] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {MENU_DATA[activeCategory].map((item, index) => (
            <div key={index} className="group border-b border-customBorder/50 pb-6 transition-all duration-500 hover:border-goldAccent/30">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-heading text-lg text-white group-hover:text-goldAccent transition-colors">
                  {item.name}
                </h3>
                <span className="text-goldAccent font-heading">{item.price}</span>
              </div>
              <p className="text-textSecondary text-xs font-light leading-relaxed italic">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};