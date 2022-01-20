module.exports = {
  mode: 'jit',

  dark: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      screens: {
        'sm': '576px',
       
        'md': '768px',
        
        'lg': '992px',
       
        'xl': '1200px',
 
        '2xl': '1500px',
       
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
