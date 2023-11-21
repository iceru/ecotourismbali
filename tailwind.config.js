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
  safelist: [
    'bg-yellow-500',
    'bg-yellow-700',
    'bg-slate-500',
    'text-slate-500',
    'text-yellow-500',
    'text-yellow-700',
    'border-slate-500',
    'border-yellow-500',
    'border-yellow-700',
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
        neue: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '2/3': '66.666667%',
      },
      colors: {
        primary: '#1F656C',
        secondary: '#7BB052',
        lightSecondary: '#D8E8CC',
        lightPrimary: '#D2E0E2',
        etbGray: '#353535',
        greenpal: '#2b583d',
        gold: '#F1C571',
      },
      dropShadow: {
        admin: '0px 0px 8px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
