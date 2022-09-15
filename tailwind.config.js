/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        bgWhite: 'hsl(215, 67%, 96%)',
        orangy: 'hsl(20, 87%, 70%)',
        bluey: 'hsl(204, 69%, 20%)',
        greeny: 'hsl(166, 41%, 38%)',
        minty: 'hsl(170, 41%, 52%)',
        sweetViolet: 'hsl(268, 93%, 69%)',
      },
      fontFamily:{
        sans: ['Montserrat', 'sans-serif'],
      },
      spacing:{
        180: '32rem',
      },
    },
  },
  plugins: [],
}
