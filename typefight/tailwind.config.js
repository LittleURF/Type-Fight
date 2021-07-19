const colors = require('tailwindcss/colors')

module.exports = {
	prefix: '',
	purge: {
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.gray,
        warning: colors.yellow[500],
        danger: colors.red[500],
      },
    },
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
