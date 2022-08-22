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
        grayish: "#B1AEBD",
        charcoal: "#1E1E1E",
        beige: "#FDF8EA",
      },
    },
  },
  plugins: [],
};
