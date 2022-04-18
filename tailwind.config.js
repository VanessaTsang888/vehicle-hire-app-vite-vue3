const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  purge: [path.resolve(__dirname, './node_modules/litepie-datepicker/**/*.js')],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Change with you want it
        'litepie-primary': colors.sky, // color system for light mode
        'litepie-secondary': colors.gray, // color system for dark mode
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    // require('tailwindcss/plugins/container')({
    //   center: true,
    //   padding: '1rem',
    // }),
  ],
};
