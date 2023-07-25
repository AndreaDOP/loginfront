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
        "url('https://jardinica.com/wp-content/uploads/2023/07/image-15.png')",
      },
      fontFamily: {
       DynaPuff: ['DynaPuff', 'cursive'],
      },
    },
  },
  plugins: [],
}