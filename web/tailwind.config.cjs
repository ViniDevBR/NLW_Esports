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
          'linear-gradient(89.86deg, #9572FC 15.00%, #43E7AD 63.00%, #E1D55D 15.00%);',
        galaxy: "url('/Fundo.png')",
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'

      }
    }
  },
  plugins: []
}
