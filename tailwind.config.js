/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Pure Black
        secondaryDark: {
          DEFAULT: '#111111', // Secondary Dark
          light: '#1A1A1A', // Secondary Dark Variant
        },
        accentBrown: {
          dark: '#2B1E16', // Accent Brown
          light: '#3A2418', // Accent Brown Variant
        },
        goldAccent: '#C8A96B', // Gold Accent
        textPrimary: '#FFFFFF', // Text Primary
        textSecondary: '#B8B8B8', // Text Secondary
        customBorder: 'rgba(255,255,255,0.08)', // Borders
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // Heading Font
        body: ['Inter', 'sans-serif'], // Body Font
      },
    },
  },
  plugins: [],
}

