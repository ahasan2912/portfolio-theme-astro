export interface Project {
  title: string
  slug: string
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  category: string
  github: string
  preview: string
  from: string
  to: string
}

export const projects: Project[] = [
  {
    title: 'Yeap Ads',
    slug: 'yeap-ads',
    tagline: 'A platform for creating and managing targeted advertising campaigns.',
    description:
      'Yeap Ads is a full-featured advertising platform that lets campaign managers design targeted campaigns, define audience segments, and monitor performance in real time. I was responsible for the entire frontend: building the dashboard shell, the campaign builder wizard, and the analytics views that stream live metrics as they update.',
    features: [
      'Visual campaign builder with real-time budget preview',
      'Audience targeting across demographics, interests, and regions',
      'Live performance dashboard with spend, impressions, and conversion charts',
      'Role-based access for managers, editors, and viewers',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'REST API'],
    category: 'Advertising',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#7c5cff',
    to: '#241a38',
  },
  {
    title: 'BloodLink',
    slug: 'bloodlink',
    tagline: 'A blood donation platform connecting donors with people in need.',
    description:
      'BloodLink matches blood donors with nearby donation requests. The platform helps hospitals and individuals post urgent requests while donors receive notifications when their blood type is needed close to home. My work focused on the request flow, donor profiles, and the notification experience.',
    features: [
      'Urgent request board filtered by blood group and location',
      'Donor profiles with eligibility status and donation history',
      'Match notifications when a nearby request matches your blood type',
      'Hospital verification workflow for official requests',
    ],
    technologies: ['React', 'TypeScript', 'Mapbox', 'Tailwind CSS', 'Node.js'],
    category: 'Healthcare',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#e25563',
    to: '#241a38',
  },
  {
    title: 'MediHub Medical Store',
    slug: 'medihub-medical-store',
    tagline: 'An online medical store for browsing and ordering health products.',
    description:
      'MediHub is an e-commerce store designed for medical supplies. Customers can browse medicines and health products, check availability, and place orders with delivery tracking. I built the catalog experience, product detail pages, and a streamlined checkout that keeps repeat purchases fast.',
    features: [
      'Product catalog with search, filters, and prescription flags',
      'Detailed product pages with dosage and safety information',
      'Cart and checkout flow with order tracking',
      'Wishlist and reorder for returning customers',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Express'],
    category: 'E-commerce',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#4fb3a1',
    to: '#241a38',
  },
  {
    title: 'VehicleBD Market',
    slug: 'vehiclebd-market',
    tagline: 'A marketplace for buying and selling vehicles across Bangladesh.',
    description:
      'VehicleBD Market is a classified marketplace where users list and discover cars and bikes. Sellers publish detailed listings with photos and specs, while buyers search, compare, and reach out directly. I focused on the listing flow, search experience, and seller messaging.',
    features: [
      'Smart search with filters for brand, price, year, and condition',
      'Rich listing pages with photo galleries and full specifications',
      'Listing builder with guided photo and spec entry',
      'Direct buyer-to-seller messaging thread',
    ],
    technologies: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Supabase'],
    category: 'Marketplace',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#ffb45e',
    to: '#241a38',
  },
  {
    title: 'FeedbackPro',
    slug: 'feedbackpro',
    tagline: 'A tool to collect, organize, and act on product feedback.',
    description:
      'FeedbackPro gives product teams a single home for customer feedback. It collects submissions from multiple channels, organizes them by theme, and turns them into a prioritized roadmap. I built the collection widgets, the triage inbox, and the roadmap board.',
    features: [
      'Embeddable feedback widget with screenshots and tags',
      'Triage inbox to deduplicate and merge incoming feedback',
      'Theme grouping with vote counting and priority scoring',
      'Board view for planning the public roadmap',
    ],
    technologies: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'WebSocket'],
    category: 'SaaS',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#5e91ff',
    to: '#241a38',
  },
  {
    title: 'AI Subscription Platform',
    slug: 'ai-subscription-platform',
    tagline: 'A subscription platform managing plans and billing for an AI service.',
    description:
      'A subscription management platform for an AI product, handling plan selection, billing, and usage limits. Users pick a tier, review credits, and manage their subscription from a self-service dashboard. I built the pricing pages, billing portal, and usage-metering UI.',
    features: [
      'Plan selection with feature and credit comparison',
      'Self-service billing portal with invoices and payment methods',
      'Live usage metering against plan credit limits',
      'Plan upgrade, downgrade, and cancellation flows',
    ],
    technologies: ['React', 'TypeScript', 'Stripe', 'Tailwind CSS', 'tRPC'],
    category: 'AI',
    github: 'https://github.com/yourname',
    preview: 'https://example.com',
    from: '#a476ff',
    to: '#241a38',
  },
]