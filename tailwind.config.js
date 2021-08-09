const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge:  [
    './public/**/*.html', 
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          'text-main': 'var(--text-main)',
          transparent: 'transparent',
          current: 'currentColor',
          cyan: colors.cyan,
          teal: colors.teal,
          dark: colors.trueGray,
          red: colors.red,
          sky: colors.sky,
          amber: colors.amber,
        }
      },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'dark', 'group-hover', 'hover'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'hover'],
      backgroundColor: ['responsive', 'light', 'dark'],
      fill: ['hover', 'focus'],
      stroke: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-prefers-color-scheme')(),
  ],
}
