const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: 'var(--color-gray-50, #f9f9f9)',
					100: 'var(--color-gray-100, #ececec)',
					200: '#e3e3e3',
					300: '#cdcdcd',
					400: '#b4b4b4',
					500: '#9b9b9b',
					600: '#676767',
					700: '#4e4e4e',
					800: 'var(--color-gray-800, #333)',
					850: 'var(--color-gray-850, #262626)',
					900: 'var(--color-gray-900, #171717)',
					950: 'var(--color-gray-950, #0d0d0d)'
				},
				maroon: {
					700: '#782F40',
					850: 'rgb(81, 47, 46)'
				},
				gold: {
					700: '#EAAA00',
					850: 'rgb(198, 146, 20)'
				},
				// short for "lakeside gray"
				lg: {
					700: 'rgb(75, 79, 84)'
				},
				
				// short for "lakeside green"
				lgr: {
					700: 'rgb(0, 154, 68)',	
					850: 'rgb(17, 87, 64)'
				},
				// short for "st. nicholas yellow"
				sny: {
					700: 'rgb(243 221 109)'
				},
				// short for "st. nicholas blue"
				snb: {
					700: 'rgb(141 200 232)'
				},
				// short for "sound blue"
				sb: {
					700: 'rgb(0 56 101)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'),
		createThemes({
			light: {
				'sidebar': '#e3e3e3',
				'sidebar-hover': '#cdcdcd',
				'sidebar-accent': '#cdcdcd',
				'sidebar-accent-hover': '#b4b4b4'
			},
			dark: {},
			pastel: {
				'sidebar': 'rgb(141 200 232)',
				'sidebar-hover': 'rgb(243 221 109)',
				'sidebar-accent': 'rgb(243 221 109)',
				'sidebar-accent-hover': 'rgb(243 221 109)',
			}
		})]
};
