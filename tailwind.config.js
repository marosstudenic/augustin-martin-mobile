/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      test: ["sans"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
