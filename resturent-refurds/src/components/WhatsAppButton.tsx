import React from 'react';

export const WhatsAppButton: React.FC = () => {
  // Replace with the client's actual target telephone sequence 
  const whatsappUrl = "https://wa.me/33123456789?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20premium%20table%20reservation.";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Inquiry"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 hover:bg-white hover:text-[#25D366] transition-all duration-300 group hover:scale-110"
    >
      {/* Icon Graphic Mesh */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6 transition-transform duration-300"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.456 5.46 0 12.161 0c3.248.001 6.301 1.267 8.597 3.566 2.296 2.299 3.561 5.356 3.559 8.602-.003 6.706-5.461 12.16-12.161 12.16-1.994-.001-3.95-.5-5.681-1.448L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.432 0 9.851-4.416 9.853-9.852.001-2.633-1.025-5.109-2.892-6.977C16.408 1.808 13.932.783 11.3.782 5.866.782 1.447 5.2 1.445 10.636c-.001 1.63.447 3.224 1.298 4.63l-.995 3.635 3.731-.977zm11.411-5.182c-.313-.156-1.854-.915-2.141-1.019-.288-.105-.497-.156-.707.156-.21.312-.811 1.019-.994 1.228-.183.21-.366.234-.679.078-2.148-1.074-3.552-2.142-4.985-4.594-.27-.464.27-.43.772-1.432.084-.167.042-.313-.021-.417-.063-.104-.542-1.303-.743-1.789-.196-.471-.393-.407-.542-.415-.14-.007-.3-.008-.461-.008-.161 0-.424.06-.646.302-.222.242-.848.828-.848 2.018 0 1.19.866 2.339.987 2.5.122.162 1.705 2.603 4.13 3.651.577.249 1.027.398 1.378.51.58.184 1.109.158 1.526.096.465-.069 1.854-.758 2.115-1.453.261-.695.261-1.29.183-1.415-.078-.125-.288-.209-.602-.365z"/>
      </svg>
      
      {/* Dynamic Hover Tooltip Action indicator */}
      <span className="absolute right-14 bg-background text-white text-[10px] font-medium tracking-widest uppercase py-1.5 px-3 border border-customBorder rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Book Via WhatsApp
      </span>
    </a>
  );
};