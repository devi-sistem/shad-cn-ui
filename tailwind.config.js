/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bubblegumBlue: '#56D8D8',
        hotPink: '#FBA997',
        maroonSky: '#FBA997',
        summersDay: '#FBA997',
        onyx: '#0D1A23',
        snowWhite: '#FFFFFF',
        'navy': '#0D1A23',
        'coral': '#FBA997',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}