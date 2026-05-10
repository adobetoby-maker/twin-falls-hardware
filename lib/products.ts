export type Product = {
  id: string
  name: string
  sku: string
  category: string  // matches Category.id
  price: number
  unit: string      // 'each', 'per lb', 'per board', 'per sq ft', etc.
  description: string
  inStock: boolean
  image: string     // Unsplash photo ID
  featured: boolean
}

export const products: Product[] = [
  // Tools
  {
    id: 'dewalt-20v-drill',
    name: 'DeWalt 20V MAX Cordless Drill/Driver',
    sku: 'TL-001',
    category: 'tools',
    price: 149.99,
    unit: 'each',
    description: 'Compact and lightweight design fits into tight areas. High speed transmission delivers two speeds (0-450/0-1500 RPM) for a range of fastening and drilling applications. 15-position clutch prevents stripping and overdriving screws. Includes battery and charger.',
    inStock: true,
    image: 'photo-1504148455328-c376907d081c',
    featured: true,
  },
  {
    id: 'estwing-claw-hammer',
    name: '16 oz Estwing Claw Hammer',
    sku: 'TL-002',
    category: 'tools',
    price: 34.99,
    unit: 'each',
    description: 'Forged in one piece of steel from tip to grip, Estwing hammers are virtually indestructible. The patented nylon vinyl grip absorbs shock and vibration. Milled face prevents slipping on nail heads. Magnetic nail starter in handle.',
    inStock: true,
    image: 'photo-1504148455328-c376907d081c',
    featured: false,
  },
  {
    id: 'stanley-25ft-tape',
    name: 'Stanley 25ft Tape Measure',
    sku: 'TL-003',
    category: 'tools',
    price: 12.99,
    unit: 'each',
    description: 'MyTape technology for measuring alone or with a partner. FatMax blade with Blade Armor coating is 3x more durable. 11-foot standout. Large, easy-to-read numbers with fractional markings. Rubber overmold for grip and impact protection.',
    inStock: true,
    image: 'photo-1504148455328-c376907d081c',
    featured: false,
  },

  // Lumber & Building
  {
    id: '2x4x8-doug-fir-stud',
    name: '2x4x8 Doug Fir Stud',
    sku: 'LB-001',
    category: 'lumber-building',
    price: 5.49,
    unit: 'each',
    description: 'Standard 2x4x8 Douglas Fir stud, kiln-dried and graded for framing. Actual dimensions 1-1/2" x 3-1/2" x 96". Meets #2 and better grading standards. Ideal for wall framing, blocking, and general construction. Buy by the bundle and save.',
    inStock: true,
    image: 'photo-1558618666-fcd25c85cd64',
    featured: true,
  },
  {
    id: '34-4x8-plywood-sanded',
    name: '3/4" 4x8 Plywood Sanded',
    sku: 'LB-002',
    category: 'lumber-building',
    price: 52.99,
    unit: 'each',
    description: 'Sanded softwood plywood, 3/4" thickness, 4x8 sheet. A/C face grade — smooth sanded face, one utility back. Ideal for cabinets, shelving, flooring underlayment, and general finish applications. PS-1 certified. Sheets stocked flat; inspect before purchase.',
    inStock: true,
    image: 'photo-1558618666-fcd25c85cd64',
    featured: false,
  },
  {
    id: '2x6x16-pressure-treated',
    name: '2x6x16 Pressure Treated',
    sku: 'LB-003',
    category: 'lumber-building',
    price: 18.99,
    unit: 'each',
    description: 'Pressure-treated southern yellow pine, .40 PCF retention — rated for ground contact and concrete embedment. Actual dimensions 1-1/2" x 5-1/2" x 192". Use for deck joists, ledgers, posts, and any application with soil or concrete contact. Allow to dry before staining.',
    inStock: false,
    image: 'photo-1558618666-fcd25c85cd64',
    featured: false,
  },

  // Plumbing
  {
    id: '12-copper-elbow-90',
    name: '1/2" Copper Elbow 90°',
    sku: 'PL-001',
    category: 'plumbing',
    price: 2.49,
    unit: 'each',
    description: 'Lead-free wrought copper pressure fitting, 90-degree elbow, 1/2" sweat connections. C x C ends for soldered connections. Meets ASTM B16.22 and NSF/ANSI 61 standards for potable water. Compatible with type K, L, and M copper tubing.',
    inStock: false,
    image: 'photo-4bHMwthk8pc',
    featured: false,
  },
  {
    id: 'moen-single-handle-cartridge',
    name: 'Moen Single-Handle Cartridge',
    sku: 'PL-002',
    category: 'plumbing',
    price: 28.99,
    unit: 'each',
    description: 'Genuine Moen 1225 replacement cartridge for single-handle faucets. Fixes dripping, hard-to-turn handles, and hot/cold reversal. Fits most Moen single-handle kitchen and bathroom faucets made after 1979. Includes cartridge puller tool. Lifetime limited warranty.',
    inStock: true,
    image: 'photo-4bHMwthk8pc',
    featured: true,
  },
  {
    id: '4-pvc-dwv-p-trap',
    name: '4" PVC DWV P-Trap',
    sku: 'PL-003',
    category: 'plumbing',
    price: 8.99,
    unit: 'each',
    description: 'Schedule 40 PVC DWV P-trap, 1-1/2" diameter. White. Hub x Hub connections for solvent-welded installation. Meets ASTM D2665 for drain, waste, and vent applications. Standard residential P-trap for bathroom sinks, laundry, and utility applications.',
    inStock: true,
    image: 'photo-4bHMwthk8pc',
    featured: false,
  },

  // Electrical
  {
    id: '12-2-nmb-wire-50ft',
    name: '12/2 NM-B Wire 50ft',
    sku: 'EL-001',
    category: 'electrical',
    price: 42.99,
    unit: 'each',
    description: 'Romex 12/2 NM-B non-metallic sheathed cable, 50-foot coil. Two 12 AWG THHN conductors plus ground. 600V rated. For use in dry locations in residential and light commercial wiring. Suitable for 20A circuits. Meets UL 719 and NEC requirements.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: false,
  },
  {
    id: 'single-pole-15a-switch',
    name: 'Single-Pole 15A Light Switch',
    sku: 'EL-002',
    category: 'electrical',
    price: 4.99,
    unit: 'each',
    description: 'Leviton single-pole 15A 120/277V toggle light switch. White. Side and back wired terminals. Back-wire holes accept 14 AWG wire. Suitable for residential and commercial applications. UL listed. Sold individually; cover plate sold separately.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: false,
  },
  {
    id: '20a-gfci-outlet-cover',
    name: '20A GFCI Outlet w/ Cover',
    sku: 'EL-003',
    category: 'electrical',
    price: 18.99,
    unit: 'each',
    description: 'Leviton 20A GFCI outlet with matching wall plate. White. Required by NEC in bathrooms, kitchens, garages, outdoor locations, and near water. Auto-monitoring self-test checks protection and alerts you if GFCI protection is lost. UL listed. Includes cover plate.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: true,
  },

  // Paint & Supplies
  {
    id: 'behr-premium-plus-exterior-1gal',
    name: 'Behr Premium Plus 1 Gal Exterior',
    sku: 'PA-001',
    category: 'paint-supplies',
    price: 45.99,
    unit: 'each',
    description: 'Behr Premium Plus 100% acrylic exterior paint and primer in one. Excellent hide, scrubbability, and durability. Resists blistering, peeling, cracking, and fading. Available in flat, satin, and semi-gloss. Custom color matching available in-store using our spectrophotometer.',
    inStock: true,
    image: 'photo-1562259949-e8e7689d7828',
    featured: true,
  },
  {
    id: '9-roller-cover-3-8-nap',
    name: '9" Roller Cover 3/8" Nap',
    sku: 'PA-002',
    category: 'paint-supplies',
    price: 5.99,
    unit: 'each',
    description: 'Wooster 9" roller cover, 3/8" nap thickness. Pro/Doo-Z polyester cover works with all paints and coatings. 3/8" nap is the versatile choice for smooth-to-medium texture walls. Fits standard 9" roller frames. Washable and reusable with water-based paints.',
    inStock: true,
    image: 'photo-1562259949-e8e7689d7828',
    featured: false,
  },
  {
    id: 'purdy-nylox-clearcut-3in',
    name: '3" Purdy Nylox Clearcut Brush',
    sku: 'PA-003',
    category: 'paint-supplies',
    price: 14.99,
    unit: 'each',
    description: 'Purdy 3" Clearcut angular sash brush with Nylox filament blend. Exceptional smoothness and control for cutting in edges, trim, and detail work. Works with all water-based paints and finishes. Stainless steel ferrule. Hand-crafted with hardwood handle. Easy to clean.',
    inStock: true,
    image: 'photo-1562259949-e8e7689d7828',
    featured: false,
  },

  // Outdoor & Garden
  {
    id: 'quikrete-80lb-concrete',
    name: '80 lb Quikrete Concrete Mix',
    sku: 'OG-001',
    category: 'outdoor-garden',
    price: 9.49,
    unit: 'each',
    description: 'Quikrete 80 lb bag of concrete mix. Blend of Portland cement, sand, and gravel. Sets in 24-48 hours; reaches 4000 PSI compressive strength. Use for setting fence posts, footings, walkways, and patios. Just add water — no mixing equipment needed for small pours.',
    inStock: true,
    image: 'photo-1581244277943-fe4a9c777189',
    featured: true,
  },
  {
    id: '50ft-garden-hose-5-8',
    name: '50 ft 5/8" Garden Hose',
    sku: 'OG-002',
    category: 'outdoor-garden',
    price: 29.99,
    unit: 'each',
    description: 'Flexon 50-foot 5/8" diameter garden hose. Kink-resistant design with reinforced construction. Crush-resistant brass couplings. 500 PSI burst strength. Drinking water safe. Lightweight and easy to coil. Works with all standard spray nozzles and attachments.',
    inStock: true,
    image: 'photo-1581244277943-fe4a9c777189',
    featured: false,
  },
  {
    id: 'fiskars-steel-spade-46in',
    name: 'Fiskars 46" Steel D-Handle Spade',
    sku: 'OG-003',
    category: 'outdoor-garden',
    price: 44.99,
    unit: 'each',
    description: 'Fiskars 46" digging spade with D-handle. Fully hardened steel blade with beveled edge stays sharp through hard use. Rust-resistant powder-coat finish. Ergonomic D-grip comfort handle. Integrated footrest for extra digging power. Lifetime warranty against defects.',
    inStock: true,
    image: 'photo-1581244277943-fe4a9c777189',
    featured: false,
  },

  // Fasteners & Hardware
  {
    id: 'wood-screws-8x1.5-1lb',
    name: '#8 x 1-1/2" Phillips Wood Screws (1 lb)',
    sku: 'FH-001',
    category: 'fasteners-hardware',
    price: 4.99,
    unit: 'per lb',
    description: 'Coarse thread #8 x 1-1/2" Phillips drive wood screws, sold by the pound. Zinc-plated for interior use. Flat head with bugle design drives flush without a pilot hole in soft wood. Approximately 100 screws per pound. Also available in 5 lb and 25 lb bulk.',
    inStock: true,
    image: 'photo-0jnmSeGzRRg',
    featured: true,
  },
  {
    id: '16d-galv-common-nails-5lb',
    name: '16d Galvanized Common Nails (5 lb)',
    sku: 'FH-002',
    category: 'fasteners-hardware',
    price: 11.99,
    unit: 'per lb',
    description: 'Hot-dipped galvanized 16d common nails, 3-1/2" x 0.162" diameter. 5 lb box, approximately 150 nails. HDG coating rated for pressure-treated lumber and outdoor use. For structural framing, decking, and treated-wood applications where corrosion resistance matters.',
    inStock: true,
    image: 'photo-0jnmSeGzRRg',
    featured: false,
  },
  {
    id: '3-8-16-x-1-hex-bolt-gr5',
    name: '3/8"-16 x 1" Hex Bolt Grade 5',
    sku: 'FH-003',
    category: 'fasteners-hardware',
    price: 0.49,
    unit: 'each',
    description: 'Grade 5 zinc-plated hex cap screw, 3/8"-16 thread x 1" length. Medium carbon steel, proof load 85,000 PSI. Fully threaded. Sold individually — buy exactly what you need, or ask about bulk pricing. Matching nuts, washers, and lock washers available.',
    inStock: true,
    image: 'photo-0jnmSeGzRRg',
    featured: false,
  },

  // Safety Equipment
  {
    id: 'pyramex-hard-hat-class-e-white',
    name: 'Pyramex Hard Hat Class E White',
    sku: 'SE-001',
    category: 'safety-equipment',
    price: 24.99,
    unit: 'each',
    description: 'Pyramex Ridgeline full-brim hard hat, white, Class E (electrical protection up to 20,000V). Meets ANSI/ISEA Z89.1-2014 Type I and Type II. 6-point ratchet suspension for secure, adjustable fit. Integrated brim provides sun and debris protection. Slots for earmuff and face shield attachments.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: true,
  },
  {
    id: 'mechanix-wear-work-gloves-m',
    name: 'Mechanix Wear Work Gloves M',
    sku: 'SE-002',
    category: 'safety-equipment',
    price: 14.99,
    unit: 'each',
    description: 'Mechanix Wear Original work gloves, medium. Thermoplastic rubber cuff closure for a secure fit. Synthetic leather palm for durability and grip. Machine washable. Low-profile fingertips allow tool use without removing gloves. Available in sizes S, M, L, XL, and 2XL.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: false,
  },
  {
    id: '3m-safety-glasses-clear',
    name: '3M Safety Glasses Clear Lens',
    sku: 'SE-003',
    category: 'safety-equipment',
    price: 8.99,
    unit: 'each',
    description: '3M Virtua safety glasses with clear lens and gray temples. Meets ANSI Z87.1 impact resistance standard. Polycarbonate lens with scratch-resistant coating. Lightweight wraparound design. Anti-fog coating keeps vision clear during active work. Fits over most prescription glasses.',
    inStock: true,
    image: 'photo-1558618047-3c8c76ca7d13',
    featured: false,
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}
