import React, { useState } from 'react';

interface MockBooking {
  id: number;
  customer_name: string;
  email: string;
  phone: string;
  guests: number;
  reservation_date: string;
  reservation_time: string;
  notes: string;
  status: 'Pending' | 'Confirmed' | 'Declined';
}

const INITIAL_RESERVATIONS: MockBooking[] = [
  {
    id: 1,
    customer_name: "Baron von Dupont",
    email: "dupont@luxurymail.com",
    phone: "+33 6 1234 5678",
    guests: 4,
    reservation_date: "2026-06-05",
    reservation_time: "20:30",
    notes: "Requires a window table overlooking the sunset line if available.",
    status: "Pending"
  },
  {
    id: 2,
    customer_name: "Lady Penelope Sterling",
    email: "sterling@fintech.co.uk",
    phone: "+44 20 7946 0192",
    guests: 2,
    reservation_date: "2026-06-06",
    reservation_time: "19:00",
    notes: "Celebrating a 5th wedding anniversary. Nut allergy consideration.",
    status: "Pending"
  }
];

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<MockBooking[]>(INITIAL_RESERVATIONS);

  // Simple local development fallback authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "letoile2026") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid Atelier Credential Access Key.");
    }
  };

  const updateStatus = (id: number, newStatus: 'Confirmed' | 'Declined') => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  if (!isAuthenticated) {
    return (
      <section className="py-24 bg-background flex justify-center items-center px-4 border-t border-customBorder">
        <div className="w-full max-w-md bg-secondaryDark border border-customBorder p-8 text-center">
          <span className="text-goldAccent text-[10px] uppercase tracking-superWide mb-2 block">Secured Workspace</span>
          <h2 className="font-heading text-2xl text-white uppercase mb-6">Concierge Portal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Admin Access Key" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-customBorder p-4 text-center text-sm text-white focus:outline-none focus:border-goldAccent tracking-widest"
            />
            <button type="submit" className="w-full py-4 bg-goldAccent text-background font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300">
              Unlock Terminal
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8 border-t border-customBorder">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-customBorder pb-6">
          <div>
            <span className="text-goldAccent text-xs uppercase tracking-luxury">L'Étoile Live Operations</span>
            <h2 className="font-heading text-3xl md:text-4xl text-white uppercase mt-1">Reservation Ledger</h2>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs uppercase tracking-widest text-textSecondary hover:text-white mt-4 md:mt-0 transition-colors">
            Lock Portal ×
          </button>
        </div>

        {/* Dashboard Grid System */}
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-secondaryDark border border-customBorder p-6 md:p-8 flex flex-col lg:flex-row justify-between lg:items-center gap-6">
              
              {/* Profile Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <h3 className="font-heading text-xl text-white">{booking.customer_name}</h3>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm font-semibold ${
                    booking.status === 'Confirmed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                    booking.status === 'Declined' ? 'bg-rose-950 text-rose-400 border border-rose-800' :
                    'bg-amber-950 text-amber-400 border border-amber-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                <div className="text-xs text-textSecondary tracking-wide space-y-1">
                  <p>Guests: <span className="text-white font-medium">{booking.guests} Pax</span> | Time: <span className="text-white font-medium">{booking.reservation_date} @ {booking.reservation_time}</span></p>
                  <p>Contact: {booking.phone} | {booking.email}</p>
                  {booking.notes && <p className="italic text-goldAccent/80 mt-2">“{booking.notes}”</p>}
                </div>
              </div>

              {/* Functional Controls */}
              {booking.status === 'Pending' && (
                <div className="flex gap-3">
                  <button 
                    onClick={() => updateStatus(booking.id, 'Confirmed')}
                    className="px-5 py-3 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-widest bg-emerald-950/20 hover:bg-emerald-500 hover:text-black transition-all duration-300"
                  >
                    Accept
                  </button>
                  <button 
                    onClick={() => updateStatus(booking.id, 'Declined')}
                    className="px-5 py-3 border border-rose-500/30 text-rose-400 text-xs uppercase tracking-widest bg-rose-950/20 hover:bg-rose-500 hover:text-black transition-all duration-300"
                  >
                    Decline
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};