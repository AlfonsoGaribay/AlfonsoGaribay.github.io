/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-wallpaper': "url('https://github.com/AlfonsoGaribay/AlfonsoGaribay.github.io/blob/Astro-branch/src/imgs/Site-wallpaper-min.jpg?raw=true')",
			  },
			  fontFamily: {
				header: ['Bebas Neue', 'sans-serif'],
				nonheader: ['Nunito', 'sans-serif'],
			  },
			  fontSize: {
				'10xl': '10rem',
				'SemiGiga' : '16rem',
				'GIGA': '20rem',
			  }
		},
	},
	plugins: [],
}
