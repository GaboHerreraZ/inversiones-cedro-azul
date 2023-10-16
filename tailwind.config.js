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
        projects: "url('../../../public/img/proyectos.png')",
        footer: "url('../../../public/img/footer.jpg')",
        contacto: "url('../../../public/img/contacto.jpg')",
        piedecuesta1:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-1.jpg')",
        piedecuesta2:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-2.jpg')",
        piedecuesta3:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-3.jpg')",
        piedecuesta4:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-4.jpg')",
        piedecuesta5:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-5.jpg')",
        piedecuesta6:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-6.jpg')",
        piedecuesta7:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-7.jpg')",
        piedecuesta8:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-8.jpg')",
        piedecuesta9:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-9.jpg')",
        piedecuesta10:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-10.jpg')",
        piedecuesta11:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-11.jpg')",
        piedecuesta12:
          "url('../../../public/img/projects/casa-piedecuesta/casa-piedecuesta-12.jpg')",
        bucaramanga1:
          "url('../../../public/img/projects/edificio-bucaramanga/edificio-bucaramanga-1.jpg')",
        bucaramanga2:
          "url('../../../public/img/projects/edificio-bucaramanga/edificio-bucaramanga-2.jpg')",
        bello1: "url('../../../public/img/projects/gas-bello/gas-bello-1.jpg')",
        bello2: "url('../../../public/img/projects/gas-bello/gas-bello-2.jpg')",
        bello3: "url('../../../public/img/projects/gas-bello/gas-bello-3.jpg')",
        bello4: "url('../../../public/img/projects/gas-bello/gas-bello-4.jpg')",
        bello5: "url('../../../public/img/projects/gas-bello/gas-bello-5.jpg')",
        bello6: "url('../../../public/img/projects/gas-bello/gas-bello-6.jpg')",
        bello7: "url('../../../public/img/projects/gas-bello/gas-bello-7.jpg')",
        bello8: "url('../../../public/img/projects/gas-bello/gas-bello-8.jpg')",
        cartagena1:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-1.jpg')",
        cartagena2:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-2.jpg')",
        cartagena3:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-3.jpg')",
        cartagena4:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-4.jpg')",
        cartagena5:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-5.jpg')",
        cartagena6:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-6.jpg')",
        cartagena7:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-7.jpg')",
        cartagena8:
          "url('../../../public/img/projects/hotel-cartagena/hotel-cartagena-8.jpg')",
        yondo1:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-1.jpg')",
        yondo2:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-2.jpg')",
        yondo3:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-3.jpg')",
        yondo4:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-4.jpg')",
        yondo5:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-5.jpg')",
        yondo6:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-6.jpg')",
        yondo7:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-7.jpg')",
        yondo7:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-8.jpg')",
        yondo7:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-9.jpg')",
        yondo8:
          "url('../../../public/img/projects/placa-huellas-yondo/placa-huellas-yondo-10.jpg')",
        placa1:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-1.jpg')",
        placa2:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-2.jpg')",
        placa3:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-3.jpg')",
        placa4:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-4.jpg')",
        placa5:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-5.jpg')",
        placa6:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-6.jpg')",
        placa7:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-7.jpg')",
        placa8:
          "url('../../../public/img/projects/placa-huellas-guavata/placa-huella-8.jpg')",
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
        home: "30rem",
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
