# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Home Espresso Hub is an affiliate niche site for home espresso machine reviews and buying guides. Built with Astro, TypeScript, and Tailwind CSS as a single-pillar content site with blog posts, product listings, and static pages.

**Tech Stack:** Astro + TypeScript + Tailwind CSS  
**Content:** Markdown-based with three content collections (blog, pillars, machines)

## Architecture

### Content Collections
- `src/content/blog/` - Blog posts (reviews, buying guides, comparisons)
- `src/content/pillars/` - Long-form pillar content (main guide)
- `src/content/machines/` - Product data with affiliate links

### Key Components
- `src/layouts/` - Base, BlogPost, and Pillar layouts
- `src/components/` - Reusable components (Header, Footer, ProductCard, etc.)
- `src/pages/` - Static pages and dynamic routes

### Styling
- Coffee-themed color palette (espresso-dark, caramel, latte-tan, cream)
- Custom Tailwind components in `src/styles/global.css`
- Responsive design with mobile-first approach

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check
```

## Content Management

### Adding Blog Posts
1. Create file in `src/content/blog/post-slug.md`
2. Use required frontmatter fields (title, description, pubDate, category, etc.)
3. Add hero image to `/public/images/blog/`
4. Include internal links to pillar page and related posts

### Adding Products
1. Create file in `src/content/machines/product-slug.md`
2. Include all product specs and affiliate links
3. Add product image to `/public/images/machines/`

### Content Schema
All content follows strict TypeScript schemas defined in `src/content/config.ts`

## Key Features

- Automatic sitemap generation
- RSS feed at `/rss.xml`
- SEO-optimized with meta tags and Open Graph
- Mobile-responsive design
- Affiliate link management
- Table of contents generation
- Related articles system

## Deployment

Configured for Netlify deployment with `netlify.toml`. Pushes to main branch trigger automatic builds.