export interface SkillCategory {
  title: string
  description: string
  gradient: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible interfaces with modern JavaScript frameworks.',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #312e81 100%)',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'State Management',
    description: 'Predictable client state, caching, and server data synchronization.',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #1e3a5f 100%)',
    skills: ['Redux Toolkit', 'Zustand', 'React Query'],
  },
  {
    title: 'Styling & UI',
    description: 'Utility-first styling and carefully crafted component systems.',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 50%, #4c1d95 100%)',
    skills: ['Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs and server logic powering smooth frontend experiences.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #164e63 100%)',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    description: 'Reliable data modeling and typed database access layers.',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #1e1b4b 100%)',
    skills: ['PostgreSQL', 'Prisma'],
  },
]
