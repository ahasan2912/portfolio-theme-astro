import yeep_ads from '../assect/yeep_ads1.jpg';
import blood_donation from '../assect/blood_donation.jpg';
import medical_store from '../assect/medical_store.jpg';
import by_cycle from '../assect/by_cycle_BD.jpg';
import benchmark_monitoring from '../assect/movement_monitoring.jpg';

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
  to: string,
  image?: string
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
    image: yeep_ads,
    technologies: ['React.js', 'Redux & RTK Query', 'REST API', 'FCM Notifications', 'Tailwind CSS', 'Recharts', 'React Toastify', 'Lucide React', 'Git & GitHub'],
    category: 'Advertising',
    github: 'https://github.com/ahasan2912/yepp_frontend',
    preview: 'https://yeppads.com',
    from: '#7c5cff',
    to: '#241a38',
  },
  {
    title: 'Benchmark Monitoring',
    slug: 'benchmark-monitoring',
    tagline: 'A platform for monitoring structural movement and generating analytical reports.',
    description:
      'Benchmark Monitoring is a web-based platform designed to track movement across construction sites, structural conditions, infrastructure projects, and geotechnical surveys. The system establishes baseline readings for a structure and compares them with subsequent inspection data to identify shifts and coordinate deviations. Based on predefined movement thresholds, the platform categorizes structural conditions as Normal, Warning, or Alert. I developed the frontend using React.js and Tailwind CSS, implementing responsive dashboards, data visualization, baseline and inspection data comparison, API integrations, and PDF report generation workflows with Redux, RTK Query, and React Hook Form.',
    features: [
      'Baseline and subsequent inspection data comparison',
      'Structural movement and coordinate deviation analysis',
      'Automatic Normal, Warning, and Alert status visualization',
      'Interactive dashboards with graphical data analysis',
      'Comprehensive PDF report generation and viewing',
      'Project and survey data management through dashboard interfaces',
      'REST API integration for real-time project and report data',
    ],
    image: benchmark_monitoring,
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Redux',
      'RTK Query',
      'React Hook Form',
      'REST API',
      'Data Visualization',
      'PDF Generation',
      'Git & GitHub',
    ],
    category: 'Monitoring & Analytics',
    github: '',
    preview: '',
    from: '#0f766e',
    to: '#042f2e',
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
    image: blood_donation,
    technologies: ['React.js', 'Express.js', 'MongoDB', 'REST API', 'Nodemailer', 'TanStack Query', 'Firebase', 'Tailwind CSS', 'Recharts', 'React Toastify', 'Lucide React', 'Git & GitHub'],
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
    image: medical_store,
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
    image: by_cycle,
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