/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandRed: 'rgba(229, 50, 53, 1)',
        brandOrange: '#F7983A',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
