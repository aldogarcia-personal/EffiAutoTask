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
        "gray-dark": "#1f2937",
        "gray-light": "#f3f4f6",
        "nav-light": "#e2e8f0",
        "nav-dark": "#2d3748",
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        /* paleta modo claro */
        surface: "#FFFFFF",
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        secondary: "#06B6D4",
        text: "#0F172A",
        "text-secondary": "#475569",
        border: "#E2E8F0",
        card: "#FFFFFF",
        "card-hover": "#F1F5F9",
        "nav-border": "#CBD5E1",

        /* Paleta modo oscuro proporcionada */
        "background-dark": "#0F172A",
        "dark-primary": "#1E3A8A",
        "darkPrimary-hover": "##1E40AF",
        "dark-secondary": "#0891B2",
        "surface-dark": "#1E293B",
        "text-dark": "#F8FAFC",
        "text-secondary-dark": "#CBD5E1",
      },
      width: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
      },
    },
  },
  darkMode: "class", // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  plugins: [],
}
