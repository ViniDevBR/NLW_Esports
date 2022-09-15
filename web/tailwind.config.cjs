/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradiente':
          'linear-gradient(89.86deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);',
        galaxy: "url('/Fundo.png')",
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'

      }
    }
  },
  plugins: []
}
