module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors : {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },

      borderRadius: {
        md: `4px` // Sobreescreve uma propriedade do tailwind
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
