import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { EducationSection } from '../components/EducationSection'
import { ContactCta } from '../components/ContactCta'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactCta />
    </>
  )
}