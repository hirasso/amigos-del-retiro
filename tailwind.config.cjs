/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "",
        "primary-400": "#8D9B6A",
        "primary-800": "#31473A",
        neutral: "#F5F5F5",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        title: ["Gabriela", "serif"],
        body: ["Cormorant Garamond", "serif"],
        display2: ["Sonder", "serif"],
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
