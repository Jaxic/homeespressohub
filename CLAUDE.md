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

### Design Philosophy
**Editorial-First Approach**: Following $100M+ affiliate site standards with clean, trust-focused design that resembles editorial publications rather than sales pages.

### Styling Guidelines
- **Minimalist Color Palette** (2-3 colors maximum):
  - Primary: Pure white (#FFFFFF) - dominant background (80%+ of page)
  - Text: Deep charcoal (#2C2C2C) - primary text color
  - Accent: Single brand color for links/CTAs only
- **Typography**: Sans-serif fonts with generous white space and minimal weight variations
- **Layout Principles**:
  - Generous white space - content must breathe
  - Uncluttered, news-site aesthetic
  - Content-first, not sales-first approach
  - Professional, trustworthy visual hierarchy
- **Component Design**:
  - White backgrounds dominate
  - Minimal shadows, gradients, or colored sections
  - Editorial-style cards and layouts
  - Subtle, trust-based CTAs over aggressive sales language
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

- Editorial-first design following $100M+ affiliate site standards
- Trust-focused, news-publication aesthetic
- Minimalist color palette and generous white space
- Content-driven approach over sales-focused design
- Automatic sitemap generation
- RSS feed at `/rss.xml`
- SEO-optimized with meta tags and Open Graph
- Mobile-responsive design
- Subtle affiliate link management
- Table of contents generation
- Related articles system

## Implementation Priorities

When working on this codebase, prioritize:

1. **Editorial Aesthetic**: Ensure all changes maintain news-site professionalism
2. **White Space**: Never compromise on generous spacing and clean layouts
3. **Trust Over Sales**: Content and expertise first, monetization second
4. **Simplicity**: Remove rather than add visual elements
5. **Performance**: Clean code reflects clean design philosophy

## Deployment

Configured for Netlify deployment with `netlify.toml`. Pushes to main branch trigger automatic builds.