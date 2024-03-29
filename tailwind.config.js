/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "prheart-50": "#f3f1ff",
        "prheart-100": "#ebe5ff",
        "prheart-200": "#d9ceff",
        "prheart-300": "#bea6ff",
        "prheart-400": "#9f75ff",
        "prheart-500": "#843dff",
        "prheart-600": "#7916ff",
        "prheart-700": "#6b04fd",
        "prheart-800": "#5a03d5",
        "prheart-900": "#4b05ad",
        "prheart-950": "#2c0076",
      },
    },
  },
  plugins: [],
}

