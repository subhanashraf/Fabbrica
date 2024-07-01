/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      container: {
        padding: '2rem',
      },
  
    extend: {
      colors: {
        customBlack: '#111111',
      },
      spacing: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.075rem',
      },
      width: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.075rem',
        // You can add more custom values as needed
      },
      height: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.095rem',
        // You can add more custom values as needed
      },
    },
    fontFamily:{
      abc:["DM Serif Text","serif"],
    },
  },
  plugins: [],
}

