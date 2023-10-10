/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        tablet: "1080px",
      },
      backgroundSize: {
        "800%": "300%",
      },
      gridTemplateColumns: {
        container: "1fr 2fr",
        service: "15% 85%",
      },
      backgroundImage: {
        arrow:
          "linear-gradient(10deg, #44B5FC, #0D3578, #44B5FC, #0D3578, #44B5FC, #0D3578, #44B5FC, #0D3578)",
        "open-menu": "url('../../../public/svg/bars.svg')",
        "close-menu": "url('../../../public/svg/close.svg')",
        home: "url('../../../public/img/home.jpg')",
        "about-us": "url('../../../public/img/sobre-nosotros.png')",
        service: "url('../../../public/img/servicios.png')",
        projects: "url('../../../public/img/proyectos.png')",
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
        home: "25rem",
      },
      skew: {
        30: "30deg",
      },
      zIndex: {
        100: 100,
      },
      boxShadow: {
        "cedro-custom": "0px 15px 10px -20px #44b5fc",
      },
      animation: {
        glowing: "glowing 20s linear infinite",
      },
      keyframes: {
        glowing: {
          "0%": {
            "background-position": "0 0;",
          },
          "50%": {
            "background-position": "400% 0",
          },
          "100%": {
            "background-position": "0 0;",
          },
        },
      },
    },
  },
  plugins: [],
};
