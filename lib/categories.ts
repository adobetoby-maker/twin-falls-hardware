export type Category = {
  id: string          // slug used in URL: /products/[category]
  name: string
  description: string
  image: string       // Unsplash photo ID (e.g. 'photo-1558618047-3c8c76ca7d13')
  icon: string        // emoji
  featured: boolean
}

export const categories: Category[] = [
  {
    id: 'tools',
    name: 'Tools',
    description: 'Hand tools, power tools, and accessories for every job. From hammers to drills, we stock professional and homeowner grades.',
    image: 'photo-1504148455328-c376907d081c',
    icon: '🔨',
    featured: true,
  },
  {
    id: 'lumber-building',
    name: 'Lumber & Building',
    description: 'Dimensional lumber, plywood, OSB, treated wood, and structural materials. Cut to order available for most lumber.',
    image: 'photo-1558618666-fcd25c85cd64',
    icon: '🪵',
    featured: true,
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Pipes, fittings, fixtures, valves, and repair parts. Copper, PVC, PEX, and more. We carry parts for older homes too.',
    image: '4bHMwthk8pc',
    icon: '🔧',
    featured: true,
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wire, conduit, outlets, switches, breakers, and lighting. From 15A household to 200A service panels.',
    image: 'photo-1558618047-3c8c76ca7d13',
    icon: '⚡',
    featured: true,
  },
  {
    id: 'paint-supplies',
    name: 'Paint & Supplies',
    description: 'Interior and exterior paint, primers, stains, and all the brushes, rollers, and prep supplies you need.',
    image: 'photo-1562259949-e8e7689d7828',
    icon: '🎨',
    featured: true,
  },
  {
    id: 'outdoor-garden',
    name: 'Outdoor & Garden',
    description: 'Landscaping tools, irrigation, lawn care, fencing, concrete, and everything for your outdoor projects.',
    image: 'photo-1581244277943-fe4a9c777189',
    icon: '🌱',
    featured: true,
  },
  {
    id: 'fasteners-hardware',
    name: 'Fasteners & Hardware',
    description: 'Screws, bolts, nuts, washers, nails, anchors, and specialty fasteners sold individually or by the pound.',
    image: '0jnmSeGzRRg',
    icon: '⚙️',
    featured: true,
  },
  {
    id: 'safety-equipment',
    name: 'Safety Equipment',
    description: 'Hard hats, gloves, safety glasses, ear protection, fall protection, and first aid. OSHA-compliant gear for job sites.',
    image: 'photo-1558618047-3c8c76ca7d13',
    icon: '🦺',
    featured: false,
  },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}
