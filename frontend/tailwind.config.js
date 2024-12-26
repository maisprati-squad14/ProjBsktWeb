/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Ativa o modo escuro com a classe 'dark'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#F8F8FF',
        'nba-blue': '#1D1160',
        'nba-red': '#C8102E',
        'nba-orange': '#E56020',
        'phoenixsuns-yellow': '#F9AD1B',
      }
    },
  },
  plugins: [],
}
