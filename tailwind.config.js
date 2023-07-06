/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D3AE7E",
        dark: "#2E2E33",
        darkLight: "#9B9C9D",
        grey: "#C4C4C5",
        light: "#E4E4E4",
        text: "#C7C7C7",
        text2: "#",
      },
    },
    // typography: {
    //   DEFAULT: {
    //     css: {
    //       p: {
    //         fontSize: "18px",
    //       },
    //     },
    //   },
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
