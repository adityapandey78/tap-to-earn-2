/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nunitoBold: ['NunitoSans_7pt-Bold', 'sans-serif'],
				nunitoReg: ['NunitoSans_7pt-Regular', 'sans-serif'],
			},
			colors:{
				col1:'Eaa2f3'
			}
		},
	},
	plugins: [],
}
