/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      spacing: {
        34: '8.45rem',
        18: '70px'
      }
    }
  },
  plugins: []
}
