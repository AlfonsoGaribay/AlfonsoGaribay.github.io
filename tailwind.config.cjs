/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#101114',
        paper: '#f8f4ef',
        spice: '#d97706',
        clay: '#c7b7a3'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
