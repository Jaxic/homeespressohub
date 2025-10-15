import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const machines = await getCollection('machines');
    
    const machinesData = machines.map(machine => ({
      // Core identification
      slug: machine.slug,
      id: machine.id,
      
      // Machine details from front matter
      title: machine.data.title,
      brand: machine.data.brand,
      model: machine.data.model,
      priceRange: machine.data.priceRange,
      machineType: machine.data.machineType,
      
      // Features
      keyFeatures: machine.data.keyFeatures || [],
      pros: machine.data.pros || [],
      cons: machine.data.cons || [],
      
      // Links
      affiliateLinks: machine.data.affiliateLinks || {},
      
      // Meta
      featured: machine.data.featured || false,
      order: machine.data.order || 999,
      
      // Additional useful info
      pageUrl: `/machines/${machine.slug}`,
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
        error: error.message
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