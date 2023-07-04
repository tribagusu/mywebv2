/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D3AE7E",
        dark: "#2E2E33",
        darkLight: "#9B9C9D",
        grey: "#C4C4C5",
        light: "#D8D8D8",
        text: "#bcbcbd",
      },
    },
  },
  plugins: [],
};
