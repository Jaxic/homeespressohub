#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create src/content/blog directory if it doesn't exist (Astro content collection)
const blogDir = path.join(__dirname, 'src', 'content', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Blog articles data organized by clusters
const blogArticles = [
  // PILLAR ARTICLE
  {
    title: "Best Espresso Machine for Home 2025: Expert Reviews & Buying Guide",
    slug: "best-espresso-machine-for-home-2025",
    date: "2024-12-15",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["espresso machines", "home brewing", "coffee equipment", "buying guide", "2025"],
    focus_keyword: "best espresso machine for home",
    meta_description: "Find the perfect home espresso machine in 2025. Expert reviews, detailed comparisons, and buying advice for every budget and skill level.",
    keyword_difficulty: 75,
    search_volume: 18000,
    content_cluster: "main-pillar",
    cluster_name: "Home Espresso Machines",
    is_pillar: true,
    pillar_page: "",
    priority: 1,
    stars: 5,
    related_articles: [
      "best-automatic-espresso-machine",
      "best-budget-espresso-machine", 
      "best-espresso-machine-for-beginners"
    ],
    status: "published",
    featured_image: "/images/blog/best-espresso-machine-home-2025.jpg"
  },

  // CLUSTER 1: MACHINE TYPES (4 articles)
  {
    title: "Best Automatic Espresso Machines 2025: Top Picks for Effortless Brewing",
    slug: "best-automatic-espresso-machine",
    date: "2024-12-10",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["automatic espresso", "espresso machines", "coffee equipment", "convenience"],
    focus_keyword: "best automatic espresso machine",
    meta_description: "Discover the top automatic espresso machines of 2025. Perfect coffee at the touch of a button with our expert-tested recommendations.",
    keyword_difficulty: 68,
    search_volume: 8100,
    content_cluster: "machine-types",
    cluster_name: "Machine Types",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-super-automatic-espresso-machine",
      "best-semi-automatic-espresso-machine"
    ],
    status: "published",
    featured_image: "/images/blog/best-automatic-espresso-machine.jpg"
  },

  {
    title: "Best Super Automatic Espresso Machines: Ultimate Convenience Guide",
    slug: "best-super-automatic-espresso-machine",
    date: "2024-12-08",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["super automatic", "espresso machines", "coffee equipment", "luxury"],
    focus_keyword: "best super automatic espresso machine",
    meta_description: "Find the perfect super automatic espresso machine. From grinding to brewing, these machines do it all. Expert reviews and comparisons.",
    keyword_difficulty: 70,
    search_volume: 5400,
    content_cluster: "machine-types",
    cluster_name: "Machine Types",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-automatic-espresso-machine",
      "best-espresso-machine-under-1000"
    ],
    status: "published",
    featured_image: "/images/blog/best-super-automatic-espresso-machine.jpg"
  },

  {
    title: "Best Manual Espresso Machines: Hands-On Brewing Excellence",
    slug: "best-manual-espresso-machine",
    date: "2024-12-06",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["manual espresso", "espresso machines", "craft coffee", "brewing technique"],
    focus_keyword: "best manual espresso machine",
    meta_description: "Master the art of espresso with the best manual machines. Complete control over every variable for the perfect shot every time.",
    keyword_difficulty: 65,
    search_volume: 4200,
    content_cluster: "machine-types",
    cluster_name: "Machine Types",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-semi-automatic-espresso-machine",
      "how-to-make-espresso-at-home"
    ],
    status: "published",
    featured_image: "/images/blog/best-manual-espresso-machine.jpg"
  },

  {
    title: "Best Semi-Automatic Espresso Machines: Perfect Balance of Control & Convenience",
    slug: "best-semi-automatic-espresso-machine",
    date: "2024-12-04",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["semi automatic", "espresso machines", "coffee equipment", "brewing control"],
    focus_keyword: "best semi automatic espresso machine",
    meta_description: "Find the ideal semi-automatic espresso machine. The perfect balance between manual control and automated convenience for home baristas.",
    keyword_difficulty: 67,
    search_volume: 6800,
    content_cluster: "machine-types",
    cluster_name: "Machine Types",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-manual-espresso-machine",
      "best-automatic-espresso-machine"
    ],
    status: "published",
    featured_image: "/images/blog/best-semi-automatic-espresso-machine.jpg"
  },

  // CLUSTER 2: BUDGET TIERS (5 articles)
  {
    title: "Best Budget Espresso Machines 2025: Quality Coffee Without Breaking the Bank",
    slug: "best-budget-espresso-machine",
    date: "2024-12-02",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["budget espresso", "affordable coffee", "espresso machines", "value"],
    focus_keyword: "best budget espresso machine",
    meta_description: "Discover amazing budget espresso machines that deliver quality coffee without the premium price. Expert reviews of affordable options.",
    keyword_difficulty: 72,
    search_volume: 12000,
    content_cluster: "budget-tiers",
    cluster_name: "Budget Options",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 5,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-cheap-espresso-machine",
      "best-espresso-machine-under-500"
    ],
    status: "published",
    featured_image: "/images/blog/best-budget-espresso-machine.jpg"
  },

  {
    title: "Best Cheap Espresso Machines: Great Coffee on a Tight Budget",
    slug: "best-cheap-espresso-machine",
    date: "2024-11-30",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["cheap espresso", "budget coffee", "affordable machines", "value picks"],
    focus_keyword: "best cheap espresso machine",
    meta_description: "Find the best cheap espresso machines that still make great coffee. Proven budget options that deliver quality without compromise.",
    keyword_difficulty: 69,
    search_volume: 9200,
    content_cluster: "budget-tiers",
    cluster_name: "Budget Options",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-budget-espresso-machine",
      "best-espresso-machine-under-500",
      "best-affordable-espresso-machine"
    ],
    status: "published",
    featured_image: "/images/blog/best-cheap-espresso-machine.jpg"
  },

  {
    title: "Best Affordable Espresso Machines: Premium Features at Reasonable Prices",
    slug: "best-affordable-espresso-machine",
    date: "2024-11-28",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["affordable espresso", "mid-range machines", "value coffee equipment", "budget friendly"],
    focus_keyword: "best affordable espresso machine",
    meta_description: "Discover affordable espresso machines with premium features. The sweet spot between budget and high-end for serious coffee lovers.",
    keyword_difficulty: 71,
    search_volume: 7800,
    content_cluster: "budget-tiers",
    cluster_name: "Budget Options",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-budget-espresso-machine",
      "best-espresso-machine-under-1000",
      "best-cheap-espresso-machine"
    ],
    status: "published",
    featured_image: "/images/blog/best-affordable-espresso-machine.jpg"
  },

  {
    title: "Best Espresso Machines Under $1000: Premium Quality at Mid-Range Prices",
    slug: "best-espresso-machine-under-1000",
    date: "2024-11-26",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["espresso under 1000", "mid-range espresso", "coffee equipment", "value machines"],
    focus_keyword: "best espresso machine under 1000",
    meta_description: "Find the best espresso machines under $1000. Premium features and cafe-quality coffee without the luxury price tag.",
    keyword_difficulty: 74,
    search_volume: 6500,
    content_cluster: "budget-tiers",
    cluster_name: "Budget Options",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-affordable-espresso-machine",
      "best-espresso-machine-under-500"
    ],
    status: "published",
    featured_image: "/images/blog/best-espresso-machine-under-1000.jpg"
  },

  {
    title: "Best Espresso Machines Under $500: Entry-Level Excellence",
    slug: "best-espresso-machine-under-500",
    date: "2024-11-24",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["espresso under 500", "entry level espresso", "budget coffee", "starter machines"],
    focus_keyword: "best espresso machine under 500",
    meta_description: "Discover the best espresso machines under $500. Perfect entry-level options for starting your home coffee journey without overspending.",
    keyword_difficulty: 70,
    search_volume: 8900,
    content_cluster: "budget-tiers",
    cluster_name: "Budget Options",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 4,
    related_articles: [
      "best-budget-espresso-machine",
      "best-cheap-espresso-machine",
      "best-espresso-machine-for-beginners"
    ],
    status: "published",
    featured_image: "/images/blog/best-espresso-machine-under-500.jpg"
  },

  // CLUSTER 3: BEGINNER FOCUS (3 articles)
  {
    title: "Best Espresso Machines for Beginners: Easy Start to Home Coffee",
    slug: "best-espresso-machine-for-beginners",
    date: "2024-11-22",
    author: "Coffee Expert Team",
    category: "Guides",
    tags: ["beginner espresso", "coffee basics", "starter machines", "how to"],
    focus_keyword: "best espresso machine for beginners",
    meta_description: "Start your espresso journey right with beginner-friendly machines. Easy-to-use options with helpful features for coffee newcomers.",
    keyword_difficulty: 66,
    search_volume: 10500,
    content_cluster: "beginner-focus",
    cluster_name: "Beginner Guides",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 2,
    stars: 5,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "how-to-make-espresso-at-home",
      "best-espresso-machine-under-500"
    ],
    status: "published",
    featured_image: "/images/blog/best-espresso-machine-beginners.jpg"
  },

  {
    title: "How to Make Espresso at Home: Complete Beginner's Guide",
    slug: "how-to-make-espresso-at-home",
    date: "2024-11-20",
    author: "Coffee Expert Team",
    category: "Guides",
    tags: ["how to make espresso", "coffee brewing", "home barista", "coffee techniques"],
    focus_keyword: "how to make espresso at home",
    meta_description: "Learn how to make perfect espresso at home with our step-by-step guide. Master the basics of grinding, dosing, and extraction.",
    keyword_difficulty: 63,
    search_volume: 15200,
    content_cluster: "beginner-focus",
    cluster_name: "Beginner Guides",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-beginners",
      "best-manual-espresso-machine",
      "espresso-grinder-guide"
    ],
    status: "published",
    featured_image: "/images/blog/how-to-make-espresso-home.jpg"
  },

  {
    title: "Espresso Machine Buying Guide: What to Look for in 2025",
    slug: "espresso-machine-buying-guide",
    date: "2024-11-18",
    author: "Coffee Expert Team",
    category: "Guides",
    tags: ["buying guide", "espresso machines", "coffee equipment", "purchase advice"],
    focus_keyword: "espresso machine buying guide",
    meta_description: "Complete espresso machine buying guide for 2025. Learn what features matter most and how to choose the perfect machine for your needs.",
    keyword_difficulty: 64,
    search_volume: 4800,
    content_cluster: "beginner-focus",
    cluster_name: "Beginner Guides",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-espresso-machine-for-beginners",
      "how-to-make-espresso-at-home"
    ],
    status: "published",
    featured_image: "/images/blog/espresso-machine-buying-guide.jpg"
  },

  // CLUSTER 4: PROBLEM-SOLVING (3 articles)
  {
    title: "Best Small Espresso Machines: Big Flavor in Compact Designs",
    slug: "best-small-espresso-machine",
    date: "2024-11-16",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["small espresso machines", "compact coffee", "space saving", "apartment living"],
    focus_keyword: "best small espresso machine",
    meta_description: "Find the perfect small espresso machine for your kitchen. Compact designs that don't compromise on coffee quality or features.",
    keyword_difficulty: 67,
    search_volume: 7200,
    content_cluster: "problem-solving",
    cluster_name: "Specific Needs",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-compact-espresso-machine",
      "best-espresso-machine-for-beginners"
    ],
    status: "published",
    featured_image: "/images/blog/best-small-espresso-machine.jpg"
  },

  {
    title: "Best Espresso Machines with Built-in Grinder: All-in-One Solutions",
    slug: "best-espresso-machine-with-grinder",
    date: "2024-11-14",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["espresso with grinder", "all-in-one coffee", "built-in grinder", "space saving"],
    focus_keyword: "best espresso machine with grinder",
    meta_description: "Discover the best espresso machines with built-in grinders. Save space and ensure freshly ground coffee with these all-in-one solutions.",
    keyword_difficulty: 69,
    search_volume: 5600,
    content_cluster: "problem-solving",
    cluster_name: "Specific Needs",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-espresso-machine-for-home-2025",
      "best-super-automatic-espresso-machine",
      "espresso-grinder-guide"
    ],
    status: "published",
    featured_image: "/images/blog/best-espresso-machine-grinder.jpg"
  },

  {
    title: "Best Compact Espresso Machines: Perfect Coffee in Minimal Space",
    slug: "best-compact-espresso-machine",
    date: "2024-11-12",
    author: "Coffee Expert Team",
    category: "Reviews",
    tags: ["compact espresso", "small spaces", "minimalist coffee", "space efficient"],
    focus_keyword: "best compact espresso machine",
    meta_description: "Find the best compact espresso machines for small kitchens. Space-efficient designs that deliver professional-quality coffee.",
    keyword_difficulty: 65,
    search_volume: 4100,
    content_cluster: "problem-solving",
    cluster_name: "Specific Needs",
    is_pillar: false,
    pillar_page: "best-espresso-machine-for-home-2025",
    priority: 3,
    stars: 4,
    related_articles: [
      "best-small-espresso-machine",
      "best-espresso-machine-for-home-2025",
      "best-budget-espresso-machine"
    ],
    status: "published",
    featured_image: "/images/blog/best-compact-espresso-machine.jpg"
  }
];

// Function to generate YAML frontmatter (Astro blog collection compatible)
function generateFrontmatter(article) {
  // Convert category to match Astro schema
  const astroCategory = article.category.toLowerCase() === 'reviews' ? 'reviews' : 
                       article.category.toLowerCase() === 'guides' ? 'buying-guides' : 'how-to';
  
  return `---
title: "${article.title}"
description: "${article.meta_description}"
pubDate: ${article.date}
updatedDate: ${article.date}
heroImage: "${article.featured_image}"
tags: [${article.tags.map(tag => `"${tag}"`).join(', ')}]
category: "${astroCategory}"
featured: ${article.is_pillar}
draft: false

# SEO & Content Strategy (custom fields)
focus_keyword: "${article.focus_keyword}"
keyword_difficulty: ${article.keyword_difficulty}
search_volume: ${article.search_volume}
content_cluster: "${article.content_cluster}"
cluster_name: "${article.cluster_name}"
is_pillar: ${article.is_pillar}
pillar_page: "${article.pillar_page}"
priority: ${article.priority}
stars: ${article.stars}
related_articles: [${article.related_articles.map(slug => `"${slug}"`).join(', ')}]
---

`;
}

// Generate files
let filesCreated = 0;
const summary = {
  pillar: [],
  clusters: {
    'machine-types': [],
    'budget-tiers': [],
    'beginner-focus': [],
    'problem-solving': []
  }
};

blogArticles.forEach(article => {
  const filename = `${article.slug}.md`;
  const filepath = path.join(blogDir, filename);
  const content = generateFrontmatter(article);
  
  fs.writeFileSync(filepath, content, 'utf8');
  filesCreated++;
  
  // Organize summary
  if (article.is_pillar) {
    summary.pillar.push({
      title: article.title,
      slug: article.slug,
      filename: filename
    });
  } else {
    summary.clusters[article.content_cluster].push({
      title: article.title,
      slug: article.slug,
      filename: filename,
      priority: article.priority
    });
  }
});

// Display summary
console.log('\n🎉 Blog Article Generation Complete!\n');
console.log(`✅ Created ${filesCreated} markdown files in './src/content/blog/' directory\n`);

console.log('📄 PILLAR ARTICLE:');
summary.pillar.forEach(article => {
  console.log(`   • ${article.title}`);
  console.log(`     File: ${article.filename}\n`);
});

console.log('📂 CONTENT CLUSTERS:\n');

Object.entries(summary.clusters).forEach(([clusterKey, articles]) => {
  const clusterNames = {
    'machine-types': 'Machine Types',
    'budget-tiers': 'Budget Options', 
    'beginner-focus': 'Beginner Guides',
    'problem-solving': 'Specific Needs'
  };
  
  console.log(`   ${clusterNames[clusterKey]} (${articles.length} articles):`);
  articles.forEach(article => {
    console.log(`   • ${article.title}`);
    console.log(`     File: ${article.filename} (Priority: ${article.priority})`);
  });
  console.log('');
});

console.log('🚀 Next Steps:');
console.log('   1. Files are ready in src/content/blog/ for Astro content collections');
console.log('   2. Add actual article content below the frontmatter');
console.log('   3. Update heroImage paths to match your image directory');
console.log('   4. Customize dates and other metadata as needed');
console.log('   5. Run `npm run dev` to see articles in your Astro site\n');

console.log('💡 Content Structure:');
console.log('   • 1 Pillar article (main hub)');
console.log('   • 4 Machine Type articles (supporting content)');
console.log('   • 5 Budget Tier articles (targeting price-conscious searchers)');
console.log('   • 3 Beginner articles (educational content)');
console.log('   • 3 Problem-solving articles (specific use cases)\n');