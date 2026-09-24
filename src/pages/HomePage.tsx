import { Hero } from '../components/Hero'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { EducationSection } from '../components/EducationSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      {/* <ContactCta /> */}
    </>
  )
}