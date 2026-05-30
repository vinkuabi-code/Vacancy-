/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#031635',
        brandLight: '#0f2855',
        accent: '#F59E0B',
        surface: '#f8fafc',
        surfaceAlt: '#ffffff',
        textPrimary: '#081b3a',
        textSecondary: '#475569'
      }
    }
  },
  plugins: []
};
