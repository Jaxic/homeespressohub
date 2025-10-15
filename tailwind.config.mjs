/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Coffee-themed brand palette for espresso site
        'espresso-dark': '#3E2723',    // Headers, navigation, dark elements
        'caramel': '#D4A574',          // CTAs, buttons, accent elements  
        'latte-cream': '#E8DCC4',      // Highlight boxes, soft backgrounds
        'coffee-cream': '#FDFAF6',     // Main background, cards
        'warm-charcoal': '#2C2C2C',    // Body text, readable content
        
        // Legacy colors for gradual migration
        'primary': '#FFFFFF',
        'text': '#2C2C2C',
        'accent': '#3366CC',
        'cream': '#F5F5DC',
        'espresso': '#3E2723',
        'charcoal': '#2C2C2C',
        'latte': '#E8DCC4',
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