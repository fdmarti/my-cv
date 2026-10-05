/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				surface: {
					DEFAULT: '#fafafa',
					elevated: '#f4f4f5'
				},
				'border-subtle': '#e4e4e7',
				muted: {
					DEFAULT: '#71717a',
					foreground: '#a1a1aa'
				},
				accent: {
					link: '#0284c7',
					'link-dark': '#38bdf8'
				}
			},
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif'
				]
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
