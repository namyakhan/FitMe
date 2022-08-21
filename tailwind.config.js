/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        purple: "#8440E9",
        gray: "#7F8487",
        charcoal: "#1E1E1E",
        beige: "#FDF8EA",
       
      },
      // screens: {
      //   'sm': '640px',
      //   // => @media (min-width: 640px) { ... }
  
      //   'md': '768px',
      //   // => @media (min-width: 768px) { ... }
  
      //   'lg': '1024px',
      //   // => @media (min-width: 1024px) { ... }
  
      //   'xl': '1280px',
      //   // => @media (min-width: 1280px) { ... }
  
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // }
    },
  },
  plugins: [],
};
