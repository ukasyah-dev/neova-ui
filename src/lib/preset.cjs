/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				neutral: {
					800: 'rgb(39, 39, 39)',
					900: 'rgb(29, 29, 29)'
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
						h2: {
							fontSize: theme('fontSize.2xl'),
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
							margin: '1.35rem 0 !important'
						},
						'pre code': {
							fontSize: '0.935rem !important',
							lineHeight: theme('lineHeight.relaxed') + ' !important'
						},
						th: {
							fontWeight: theme('fontWeight.medium'),
							textAlign: 'left'
						},
						'.dark .prose th': {
							color: theme('colors.neutral.400')
						},
						'th, td': {
							fontSize: '0.95rem',
							padding: theme('spacing[2.5]')
						},
						'td:not(:last-child)': {
							paddingRight: theme('spacing.7')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
