/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#cfd9d2",
          200: "#a0b3a4",
          300: "#708d77",
          400: "#416749",
          500: "#11411c",
          600: "#0e3416",
          700: "#0a2711",
          800: "#071a0b",
          900: "#030d06",
        },
        secondary: {
          100: "#fad5cc",
          200: "#f4ab9a",
          300: "#ef8067",
          400: "#e95635",
          500: "#e42c02",
          600: "#b62302",
          700: "#891a01",
          800: "#5b1201",
          900: "#2e0900",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
