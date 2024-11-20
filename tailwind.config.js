/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        custom: '1px 1px 2px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xs: '500px', 
      },
    },
  },
  plugins: [],
}