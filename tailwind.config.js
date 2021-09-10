module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol: 
          {
            50: '#e5f4ff',
            100: '#c0dbf1',
            200: '#2B3148',
            300: '#72abdb',
            400: '#4d94d0',
            500: '#367ab7',
            600: '#295f8e',
            700: '#1c4466',
            800: '#0e293f',
            900: '#000f19',
          }         
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
