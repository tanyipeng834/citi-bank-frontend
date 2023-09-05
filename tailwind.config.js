/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      blue:'#41A3D3'

    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

