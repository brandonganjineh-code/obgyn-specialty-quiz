/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'mauve-50': '#fff5f7',
        'mauve-100': '#ffeef2',
        'mauve-500': '#d87fa1',
        'mauve-600': '#b15a79'
      }
    },
  },
  plugins: [],
}
