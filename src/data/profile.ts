export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  title: string
  email: string
  githubUrl: string
  linkedinUrl: string
  facebookUrl: string
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Ahasan Habib',
  title: 'Frontend Developer',
  email: 'ahasanhabib2912@gmail.com',
  githubUrl: 'https://github.com/ahasan2912',
  linkedinUrl: 'https://www.linkedin.com/in/ahasanhabib2912',
  facebookUrl: 'https://www.facebook.com/mdahashanhabib.siam',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ahasan2912'},
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahasanhabib2912'},
    { label: 'Facebook', href: 'https://www.facebook.com/mdahashanhabib.siam'},
    { label: 'Email', href: 'ahasanhabib2912@gmail.com' }, 
  ],
}
