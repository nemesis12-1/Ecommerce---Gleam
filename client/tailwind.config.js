/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        background: '#09090B',  // black
        pri: '#FAFAFA',  // white
        sec: '#27272A', //  grey dark
        ter: '#C9C9CA', // grey light
        nav: '#FAFAFA99',
        sky: '#0CCDA3',
        wblue: '#C1FCD3'
      },

      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
        'Urbanist':[ "Urbanist", 'sans-serif']
      },
    },

  },
  plugins: [],
}