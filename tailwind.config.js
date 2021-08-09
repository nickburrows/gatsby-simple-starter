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
        }
      },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'light', 'dark']
    },
  },
  plugins: [
    require('tailwindcss-prefers-color-scheme')(),
  ],
}
