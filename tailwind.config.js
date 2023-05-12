/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navBg: '#616787',
        navText: '#ffffff',
        navHover: '#38bdf8',
        btnHover: '#8CBCDB',
      },
      backgroundImage: {
        'main-bg': 'url(./assets/bg.webp)',
      },
      animation:{
        'spin-slow': 'spin 5s linear infinite'
      }
    },
  },
  plugins: [],
}