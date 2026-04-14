/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We can add custom theme colors here later
        'portfolio-bg': '#0f172a', 
      }
    },
  },
  plugins: [],
}