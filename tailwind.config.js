/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          500: '#d97706',
          600: '#b45309',
        },
        navy: {
          900: '#0f172a',
          950: '#020617',
        }
      },
    },
  },
  plugins: [],
}