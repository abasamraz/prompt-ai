/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#050B16",
          50: "#1a2233",
          100: "#141b2a",
          200: "#0f1420",
          300: "#0a0e18",
        },
        ivory: "#FAF9F6",
        champagne: {
          DEFAULT: "#C5A059",
          light: "#D4B876",
          dark: "#A8854A",
        },
        cloud: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.15em",
      },
      maxWidth: {
        canvas: "110rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
