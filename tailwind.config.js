const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    container: {
      center: true,
      screens: {
        sm: '567px',
        md: '768px',
        lg: '992px',
        xl: '1100px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1F656C',
        secondary: '#7BB052',
        lightSecondary: '#D8E8CC',
        lightPrimary: '#D2E0E2',
        etbGray: '#353535',
        ...colors
      },
      dropShadow: {
        'admin': '0px 0px 8px 2px rgba(0, 0, 0, 0.05)'
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
