/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Schibsted Grotesk', 'sans-serif' ],
      headline: ['Syne Mono', 'serif']
    },
    extend: {
      fontSize: {
        '2xs': ['0.6rem', '0.8rem']
      },
      colors: {
        primary: '#E7F3F7',
        secondary: '#E7F3F7',
        accent: '#023F3A',
        vibrant: '#f20c92',
        background: '#E4BACC',
        marine: '#E7F3F7',
        cool: '#A2A4D7',
        fairy: '#E4BACC',
        brunswick: '#023F3A',
        'dark_slate_gray': { DEFAULT: '#283d3b', 100: '#080c0c', 200: '#101918', 300: '#182524', 400: '#203130', 500: '#283d3b', 600: '#496f6b', 700: '#6b9e99', 800: '#9cbfbb', 900: '#cedfdd' },
        'caribbean_current': { DEFAULT: '#197278', 100: '#051618', 200: '#0a2d2f', 300: '#0f4347', 400: '#135a5f', 500: '#197278', 600: '#25aab3', 700: '#48d0da', 800: '#85e0e6', 900: '#c2eff3' },
        'red_(pantone)': { DEFAULT: '#ef233c', 100: '#330409', 200: '#660813', 300: '#9a0c1c', 400: '#cd0f26', 500: '#ef233c', 600: '#f25063', 700: '#f57c8a', 800: '#f8a8b1', 900: '#fcd3d8' },
        'champagne_pink': { DEFAULT: '#edddd4', 100: '#3f281a', 200: '#7f5035', 300: '#b87955', 400: '#d2ab95', 500: '#edddd4', 600: '#f1e4dc', 700: '#f4ebe5', 800: '#f8f1ee', 900: '#fbf8f6' },
        'honeydew': { DEFAULT: '#dff8eb', 100: '#114d2e', 200: '#229a5c', 300: '#44d68a', 400: '#91e7ba', 500: '#dff8eb', 600: '#e4f9ee', 700: '#ebfbf2', 800: '#f2fcf7', 900: '#f8fefb' }
      },
      borderWidth: {
        '6': '6px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

