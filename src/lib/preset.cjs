/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				neutral: {
					800: 'rgb(40, 40, 40)',
					900: 'rgb(30, 30, 30)'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace']
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
						},
						code: {
							fontFamily: '"Fira Code", monospace !important',
							fontWeight: '400 !important'
						},
						pre: {
							backgroundColor: theme('colors.neutral.800') + ' !important',
							padding: '1rem 1.25rem !important',
							margin: '1.5rem 0 !important'
						},
						'pre code': {
							fontSize: theme('fontSize.sm'),
							lineHeight: theme('lineHeight.relaxed') + ' !important'
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
