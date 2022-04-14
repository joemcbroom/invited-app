module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'highlight-initial': 'inset 0 0px 0 0 rgb(26 187 169 / 10%)',
				highlight: 'inset 0 -1rem 0 0 rgb(26 187 169 / 30%)',
			},
		},
	},
	plugins: [],
};
