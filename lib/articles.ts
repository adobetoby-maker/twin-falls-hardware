export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  body: string      // full article content as plain text paragraphs separated by '\n\n'
}

export const articles: Article[] = [
  {
    slug: 'tools-every-idaho-homeowner-needs-before-winter',
    title: '5 Tools Every Idaho Homeowner Needs Before Winter',
    excerpt: 'Winter in Twin Falls can be brutal. Make sure you have these essential tools before the first freeze hits.',
    category: 'Tools',
    date: '2024-10-15',
    readTime: '5 min read',
    body: `Idaho winters come fast. One week it's 65°F, the next you're scraping ice off the windshield at 7 AM. If you're a homeowner in Twin Falls or the Magic Valley, there are five tools you absolutely need before temperatures drop.\n\nFirst, a quality snow shovel. Not all shovels are created equal — look for a steel-tipped blade if you have a concrete driveway, or a poly blade for pavers and decking. We carry several options from True Temper and Suncast at Twin Falls Hardware.\n\nSecond, a pipe insulation kit. Even a single burst pipe from a hard freeze can cost thousands in water damage. Foam pipe insulation is cheap and takes 30 minutes to install. We have foam sleeves for 1/2", 3/4", and 1" pipe in stock year-round.\n\nThird, a weatherstripping kit. Idaho's winds are no joke. A drafty door or window can add 15-20% to your heating bill. Self-adhesive foam tape and door sweeps are fast weekend projects that pay for themselves in one heating season.\n\nFourth, a quality caulk gun and exterior caulk. Walk around your home and look for any gaps around windows, doors, and where utilities enter. A tube of Sashco Big Stretch or similar flexible exterior caulk will seal gaps that rigid caulks crack through during freeze-thaw cycles.\n\nFifth, a reliable extension ladder. Gutters need cleaning before the freeze, and if you have any roof issues, you want to address them while the weather is still workable. A 24-foot fiberglass ladder covers most single-story work and most second-floor access.\n\nStop by Twin Falls Hardware at 2180 Addison Ave W — we'll help you pick the right tools for your specific situation. We've been helping Twin Falls homeowners prep for winter since 1987.`,
  },
  {
    slug: 'choose-right-lumber-for-deck',
    title: 'How to Choose the Right Lumber for Your Deck Project',
    excerpt: "Not all lumber is deck lumber. Here's what you need to know about species, treatment, and grades before you build.",
    category: 'Lumber & Building',
    date: '2024-08-22',
    readTime: '7 min read',
    body: `Building a deck is one of the best investments you can make in a Twin Falls home — our warm summers and mild springs mean you'll use it most of the year. But choosing the wrong lumber will cost you in repairs, replacement, or worse, structural failure.\n\nThe most important distinction for deck lumber is ground contact vs. above-ground treatment. Pressure-treated lumber (PT) comes in two ratings: .15 PCF for above-ground applications like deck boards and railings, and .40 PCF for ground contact or concrete-embedded posts. Using the wrong rating is a common mistake — using above-ground PT for a buried post will rot within a few years in Idaho's moisture cycles.\n\nFor decking boards themselves, you have several good options in the Pacific Northwest region. Pressure-treated southern yellow pine (SYP) is the most affordable and widely available. It requires sealing or staining within 6 months of installation. Incense cedar is naturally rot-resistant and looks beautiful — it's a premium option that many Twin Falls contractors prefer for visible decking. Redwood is the gold standard but often requires special ordering.\n\nFor structural members — joists, beams, and posts — always use pressure-treated. Period. Even in areas that won't contact the ground, moisture accumulates in structural connections and PT lumber gives you the safety margin you need.\n\nOne tip most people miss: let your PT lumber acclimate. Fresh pressure-treated lumber contains moisture from the treatment process. Stack it with spacers ("stickers") between boards and let it dry for at least a week before installation. This prevents the dramatic warping and splitting that causes so many deck callbacks.\n\nWe stock dimensional PT lumber in common sizes and can cut to length on most orders. Call ahead for large orders — (208) 555-0211 — and we can have your material ready for pickup.`,
  },
  {
    slug: 'plumbing-emergencies-what-to-have-on-hand',
    title: 'Plumbing Emergencies: What to Have on Hand',
    excerpt: "A burst pipe at 11 PM doesn't care about business hours. These supplies could save you thousands in water damage.",
    category: 'Plumbing',
    date: '2024-06-10',
    readTime: '4 min read',
    body: `No one plans for a plumbing emergency, but in the Magic Valley, frozen pipe bursts in winter and irrigation line failures in summer are common enough that every homeowner should keep a basic plumbing kit on hand.\n\nShut-off knowledge first: before anything else, know where your main water shut-off is. If you're in Twin Falls, it's typically near your water meter at the property line or where the main line enters your home. Practice turning it off so you're not fumbling in a panic at midnight with water spraying.\n\nFor your emergency kit, start with plumber's tape (PTFE or Teflon tape). It costs about $2 and seals threaded connections. Keep a few rolls in different thread sizes. Next, get a pipe repair clamp — a $15-20 item that can stop a small crack or pinhole leak until you can make a permanent repair. They work on copper, PVC, and galvanized pipe.\n\nShark-Bite push-to-connect fittings are a game-changer for emergencies. No soldering, no glue — push and twist. They're approved for permanent installation in most codes but they're especially valuable when you need to stop a leak fast and can't wait for solder joints to cool. We stock a full range of Shark-Bite elbows, couplings, and tees for 1/2" and 3/4" pipe.\n\nFor frozen pipes, a heat gun or hair dryer on low is safer than an open flame. Start from the faucet end and work toward the frozen section. Never use a propane torch near wood framing — this is the leading cause of house fires in older homes.\n\nWe're open Monday through Saturday 7 AM to 6 PM, Sunday 9 AM to 4 PM. For contractor emergencies outside those hours, call (208) 555-0211 and leave a message — Gary or one of the team will get back to you for genuine emergencies.`,
  },
  {
    slug: 'why-local-hardware-beats-big-box-for-contractors',
    title: "Why Local Hardware Beats Big-Box for Contractor Accounts",
    excerpt: "Home Depot and Lowe's have more square footage. We have more knowledge, better service, and accounts that actually work for your business.",
    category: 'Contractor Accounts',
    date: '2024-04-03',
    readTime: '6 min read',
    body: `We hear it all the time: "I can get it cheaper at Home Depot." Sometimes that's true. But talk to any seasoned contractor in Twin Falls and they'll tell you the full cost of a big-box account goes way beyond the price tag.\n\nLet's start with time. The average contractor trip to a big-box store in Twin Falls takes 45-60 minutes by the time you drive, park, navigate the 150,000 square foot store, wait for a forklift to pull your lumber, and stand in the pro desk line. At Twin Falls Hardware, most contractors are in and out in under 20 minutes — and we pull your order if you call ahead.\n\nThen there's the knowledge problem. Big-box stores hire to fill bodies, not to build expertise. Our staff averages 11 years in the trades or building supply industry. When you ask about the right adhesive for a specialty application or which fastener meets the Idaho building code for a particular detail, you get a real answer, not a shrug and a product suggestion from whoever stocks that aisle.\n\nFor specialty and odd items, we win every time. Big-box stores optimize for volume movers. Obscure sizes, legacy parts, and specialty materials are either not carried or buried in the back of a bin. We stock the parts that keep older Twin Falls homes running, and our special order system can source almost anything within 24-48 hours.\n\nOur contractor accounts offer net-30 terms, volume pricing tiers, and a dedicated account manager who knows your business. No navigating a 1-800 number when there's a problem with your order. No corporate policy getting in the way of a solution.\n\nIf you're a contractor in Twin Falls or the Magic Valley area and you're tired of the big-box runaround, apply for a contractor account at twinfallshardware.worker-bee.app/contractors. We'll get you set up within 24 hours.`,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getRelatedArticles(slug: string, count = 2): Article[] {
  return articles.filter(a => a.slug !== slug).slice(0, count)
}
