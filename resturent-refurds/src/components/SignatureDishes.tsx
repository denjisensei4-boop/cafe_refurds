import React from 'react';

interface Dish {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const SIGNATURE_DISHES: Dish[] = [
  {
    id: 1,
    name: "Truffle Glazed Wagyu Ribeye",
    category: "Main Course",
    price: "$85",
    description: "Agrade A5 Wagyu served with charred baby heirloom carrots and a rich Périgord black truffle reduction.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"
  },
  {
    id: 2,
    name: "Pan-Seared Diver Scallops",
    category: "Starters",
    price: "$34",
    description: "Saffron-infused parsnip purée, crispy jamón ibérico crumbs, and microgreens drizzle.",
    image: "https://images.unsplash.com/photo-1532636875304-0c8fe119ff9e?q=80&w=800"
  },
  {
    id: 3,
    name: "Caviar & Gold Leaf Soufflé",
    category: "Desserts",
    price: "$42",
    description: "Valrhona dark chocolate core accented with 24k gold leaf foil and an exquisite choice of wild berries.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800"
  }
];

export const SignatureDishes: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-secondaryDark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-goldAccent text-xs uppercase tracking-[0.25em] font-medium block mb-3">
            Chef's Recommendations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-white uppercase tracking-wide">
            Signature Creations
          </h2>
          <div className="h-[1px] w-20 bg-goldAccent/40 mx-auto mt-4" />
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div 
              key={dish.id} 
              className="group bg-background border border-customBorder overflow-hidden transition-all duration-500 hover:border-goldAccent/30 flex flex-col h-full"
            >
              {/* Image Container with Zoom Reveal Effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondaryDark-light">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-customBorder px-3 py-1 text-goldAccent font-heading text-sm">
                  {dish.price}
                </div>
              </div>

              {/* Dish Metadata */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-goldAccent text-[10px] uppercase tracking-widest font-medium mb-1">
                  {dish.category}
                </span>
                <h3 className="font-heading text-xl font-light text-white mb-2 group-hover:text-goldAccent transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-textSecondary text-xs font-light tracking-wide leading-relaxed flex-grow">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};