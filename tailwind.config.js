/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      colors:{
        primary:"#5c059b",
        secundary:"#1e293b",
        accent:"#cb5930",
        danger:"#f00"
      }
    },
  },
  plugins: [],
}

