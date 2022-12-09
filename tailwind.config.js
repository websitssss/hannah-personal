/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}
