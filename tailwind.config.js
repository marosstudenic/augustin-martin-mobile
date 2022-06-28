/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      helvetica: ['"Helvetica"', "sans-serif"],
      neue: ["Neue Haas Grotesk Display Pro", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
