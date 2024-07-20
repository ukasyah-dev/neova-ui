/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'h1, h2, h3, h4': {
							fontWeight: theme('fontWeight.semibold')
						},
						h1: {
							fontSize: theme('fontSize.3xl'),
							marginBottom: theme('spacing.5')
						},
						p: {
							fontSize: theme('fontSize.base')
						},
						'.dark p': {
							color: theme('colors.gray.300')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
