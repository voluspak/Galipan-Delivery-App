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
      },
      minHeight: {
        modal: '18.75rem'
      },
      maxHeight: {
        modal: '31.25rem'
      },
      minWidth: {
        modal: '30rem'
      },
      height: {
        30: '120px'
      }
    }
  },
  plugins: []
}
