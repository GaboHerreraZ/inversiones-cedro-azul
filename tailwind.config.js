/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "open-menu": "url('../../../public/svg/bars.svg')",
        "close-menu": "url('../../../public/svg/close.svg')",
        "bg-image": "url('../../../public/img/home-header.jpg')",
      },
      colors: {
        "background-header": "#faf7f7",
        cedro: {
          100: "#D9F9FE",
          200: "#B4EFFE",
          300: "#8EE0FE",
          400: "#72D0FD",
          500: "#44B5FC",
          600: "#318ED8",
          700: "#226BB5",
          800: "#154B92",
          900: "#0D3578",
          DEFAULT: "#44b5fc",
        },
      },
      height: {
        100: "35rem",
      },
      skew: {
        30: "30deg",
      },
      animation: {
        fade: "fadeIn 3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0.4,
          },
        },
      },
    },
  },
  plugins: [],
};
