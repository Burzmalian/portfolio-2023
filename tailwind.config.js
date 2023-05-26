const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "g-theme": {
          DEFAULT: "#414C79",
          50: "#D9DCEA",
          100: "#CBD0E3",
          200: "#B1B8D5",
          300: "#96A0C7",
          400: "#7C88B9",
          500: "#6170AA",
          600: "#4F5D94",
          700: "#414C79",
          800: "#2D3555",
          900: "#1A1E30",
          950: "#10131E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        cardGrid: "repeat(auto-fill,minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
