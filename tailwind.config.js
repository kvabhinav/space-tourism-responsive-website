/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}'
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

