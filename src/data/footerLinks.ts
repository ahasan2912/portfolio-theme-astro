export interface FooterLink {
  label: string
  href?: string
  number?: string
  email?: string
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
      { label: 'GitHub', href: 'https://github.com/ahasan2912' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahasanhabib2912' },
      { label: 'Mobile', number: '+8801796905988' },
      { label: 'Email', email: 'ahasanhabib2912@gmail.com' },
    ],
  },
  /* {
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
  }, */
]
