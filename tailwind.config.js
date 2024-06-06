/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundPosition: {
        'bg-top-center' : "85% 25%",
      },

      backgroundImage: {
        'hero-bg-night': "url('https://raw.githubusercontent.com/benazeem/PizzaShop/master/src/assets/HeroNight.jpg')",
        'hero-bg-day': "url('https://raw.githubusercontent.com/benazeem/PizzaShop/master/src/assets/HeroDay.jpg')",
      }
    }
  },
  plugins: [],
};
