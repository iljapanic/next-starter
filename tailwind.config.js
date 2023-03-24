const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* base colors scales */
        gray: colors.stone,

        /* social colors */
        rss: '#f26522',
        linkedin: '#0072b1',
        twitter: '#1DA1F2',
        github: '#171515',
        instagram: '#cd486b',
        facebook: '#3b5998',
      },
      fontSize: {
        '2xs': '.575rem',
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
        system: [...fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
  },
}
