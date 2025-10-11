/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Coffee-themed color palette
        'espresso-dark': '#2C1810',
        'espresso-brown': '#8B4513',
        'latte-tan': '#D4A574',
        'cream': '#F5F5DC',
        'caramel': '#C67C4E',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}