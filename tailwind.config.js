/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "border-1": "var(--border-1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

// colors using custom properties for auto theme switching
// colors that are non switchable

// transparencys (hovers focused)
// text
// highlights
// error colors?
// borders
// shadows
// gradients

// dark backgrounds 404258, 474E68, 50577A
// dark border 6B728E
