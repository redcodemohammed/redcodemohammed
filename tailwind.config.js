module.exports = {
	purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'han-blue': '#4a65c2',
				'eerie-black': '#171717',
				'rich-black': '#121212',
				onyx: '#444444',
				crimson: '#DA0037',
				cultured: '#EDEDED',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
