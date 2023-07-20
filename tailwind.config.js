/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx,ts}'
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:['Barlow Condensed'],
        barlow2:['Barlow'],
        bellefair:['Bellefair'],

      }
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: [],
}

