import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const machines = await getCollection('espresso-machines');
    
    const machinesData = machines.map(machine => ({
      // Core identification
      slug: machine.slug,
      id: machine.id,
      
      // Machine details from front matter (using correct property names)
      name: machine.data.name,
      brand: machine.data.brand,
      price: machine.data.price,
      originalPrice: machine.data.originalPrice,
      priceRange: machine.data.priceRange,
      category: machine.data.category,
      bestFor: machine.data.bestFor,
      
      // Features and description
      features: machine.data.features || [],
      benefitDescription: machine.data.benefitDescription,
      rating: machine.data.rating,
      specs: machine.data.specs,
      
      // Links
      image: machine.data.image,
      amazonLink: machine.data.amazonLink,
      affiliateLink: machine.data.affiliateLink,
      
      // Meta
      featured: machine.data.featured || false,
      order: machine.data.order || 999,
      draft: machine.data.draft || false,
      
      // Additional useful info
      pageUrl: `/espresso-machines/${machine.slug}`,
      lastModified: new Date().toISOString()
    }));
    
    // Sort by order
    machinesData.sort((a, b) => a.order - b.order);
    
    return new Response(
      JSON.stringify({
        success: true,
        count: machinesData.length,
        data: machinesData,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};