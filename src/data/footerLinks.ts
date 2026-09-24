export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/yourname' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
      { label: 'Email', href: 'mailto:hello@example.com' },
    ],
  },
  {
    heading: 'Frontend',
    links: [
      { label: 'React', href: '#skills' },
      { label: 'Next.js', href: '#skills' },
      { label: 'TypeScript', href: '#skills' },
      { label: 'Tailwind CSS', href: '#skills' },
    ],
  },
  {
    heading: 'Backend',
    links: [
      { label: 'Node.js', href: '#skills' },
      { label: 'Express.js', href: '#skills' },
      { label: 'PostgreSQL', href: '#skills' },
      { label: 'Prisma', href: '#skills' },
    ],
  },
]
