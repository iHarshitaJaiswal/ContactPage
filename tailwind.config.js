/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'CG-light': ['CG-light', 'sans-serif'],
        'CG-bold': ['CG-bold', 'sans-serif'],
        'tan-pearl': ['tan-pearl', 'serif'],
      }
    },
  },
  plugins: [],
}

