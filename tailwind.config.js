/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'club-gold': '#c5a059',
        'club-gold-light': '#deb870',
        'club-blue': '#0a2540',
        'club-blue-dark': '#06182a',
        'club-sand': '#f5f5f5',
        'club-sand-dark': '#e5e5e5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
