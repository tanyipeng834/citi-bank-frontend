/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black: '#333333',
      white: colors.white,
      blue: {
        DEFAULT: '#002D72',
        50: '#056DAE',
        25: '#00B4F0',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

