/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Editorial-first design palette (2-3 colors maximum)
        'primary': '#FFFFFF',         // Pure white - dominant background (80%+ usage)
        'text': '#2C2C2C',           // Deep charcoal - primary text color
        'accent': '#3366CC',          // Single brand color - links/CTAs only
        // Legacy colors maintained for gradual migration
        'cream': '#F5F5DC',
        'espresso': '#3E2723',
        'caramel': '#D4A574',
        'charcoal': '#2C2C2C',
        'latte': '#E8DCC4',
        'espresso-dark': '#3E2723',
        'coffee-bean': '#2C2C2C',
        'latte-tan': '#E8DCC4',
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