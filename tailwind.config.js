/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  
  theme: {
    extend: {
        backgroundImage: {
        'custom-background-image':
        "url('https://www.portalvidasana.com/wp-content/uploads/tecnicas-relajacion-al-llegar-a-casa.jpg')",
      },
      fontFamily: {
       DynaPuff: ['DynaPuff', 'cursive'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Habilitar las clases hover para cambiar el color de fondo
    },
  },
  plugins: [],
}