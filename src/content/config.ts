import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'buying-guides',
      'reviews',
      'comparisons',
      'how-to',
      'accessories'
    ]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Guides collection schema (formerly pillars)
const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    relatedArticles: z.array(z.string()).default([]),
    featured: z.boolean().default(true),
    tableOfContents: z.boolean().default(true),
  }),
});

// Espresso Machines collection schema
const espressoMachinesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    price: z.number(),
    originalPrice: z.number().optional(),
    image: z.string(),
    amazonLink: z.string().url(),
    affiliateLink: z.string().url().optional(),
    features: z.array(z.string()),
    specs: z.object({
      boilerType: z.string(),
      pressure: z.string(),
      waterTank: z.string(),
      dimensions: z.string(),
      warranty: z.string(),
    }),
    benefitDescription: z.string(),
    rating: z.number().min(0).max(5),
    category: z.enum([
      'manual',
      'semi-automatic',
      'automatic',
      'super-automatic'
    ]),
    priceRange: z.enum(['budget', 'mid-range', 'premium', 'prosumer']),
    bestFor: z.enum(['beginners', 'intermediate', 'advanced', 'all']),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  guides: guidesCollection,
  'espresso-machines': espressoMachinesCollection,
};