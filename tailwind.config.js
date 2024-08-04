/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Schibsted Grotesk', 'sans-serif' ]
    },
    extend: {
      colors: {
        primary: '#E7F3F7',
        secondary: '#E7F3F7',
        accent: '#023F3A',
        background: '#E4BACC',
        marine: '#E7F3F7',
        cool: '#A2A4D7',
        fairy: '#E4BACC',
        brunswick: '#023F3A',
      }
    }
  },
  plugins: [],
}

