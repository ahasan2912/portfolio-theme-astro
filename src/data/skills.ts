export interface Skill {
  label: string
  icon: string
  categoryId: string
  level: number
}

export const skills: Skill[] = [
  { label: 'JavaScript', icon: '/svg/javascript.svg', categoryId: 'frontend', level: 92 },
  { label: 'TypeScript', icon: '/svg/typescript.svg', categoryId: 'frontend', level: 90 },
  { label: 'React.js', icon: '/svg/react.svg', categoryId: 'frontend', level: 95 },
  { label: 'Next.js', icon: '/svg/next.svg', categoryId: 'frontend', level: 92 },
  { label: 'Tailwind CSS', icon: '/svg/tailwindcss.svg', categoryId: 'frontend', level: 96 },
  { label: 'Redux Toolkit', icon: '/svg/redux.svg', categoryId: 'tools', level: 85 },
  { label: 'Zustand', icon: '/svg/zustand.svg', categoryId: 'tools', level: 84 },
  { label: 'React Query', icon: '/svg/reactQuery.svg', categoryId: 'tools', level: 86 },
  { label: 'Node.js', icon: '/svg/nodejs.svg', categoryId: 'backend', level: 82 },
  { label: 'Express.js', icon: '/svg/express.svg', categoryId: 'backend', level: 80 },
  { label: 'PostgreSQL', icon: '/svg/postgresql.svg', categoryId: 'database', level: 78 },
  { label: 'Prisma', icon: '/svg/prisma.svg', categoryId: 'database', level: 76 },
]