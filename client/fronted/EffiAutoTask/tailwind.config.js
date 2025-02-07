/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "0056B3": "#0056B3",
        f5f5dc: "#f5f5dc",
        "343A40": "#343A40",
        "00449B": "#00449B",
      },
    },
  },
  plugins: [],
};
module.exports = {
  darkMode: "class", // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
