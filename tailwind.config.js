/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#262623",
          soft: "#3d3d38",
        },
        cream: {
          DEFAULT: "#F7F2ED",
          dark: "#EDE6DC",
        },
        terracotta: {
          DEFAULT: "#D3855E",
          dark: "#B86B47",
        },
        caramel: "#C49A6C",
        "warm-white": "#FFFFFF",
        "warm-gray": "#E8E4DF",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        script: ["Caveat", "cursive"],
      },
      letterSpacing: {
        label: "0.2em",
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
