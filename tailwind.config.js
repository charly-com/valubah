/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "green": "rgba(12, 69, 12, 1)",
        "ash": "rgba(251, 203, 201, 1)"
      },
    },
  },
  plugins: [],
}

