import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { ProjectCard } from './ProjectCard'
import { Link } from 'react-router-dom'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border py-8 sm:py-10 lg:py-18">
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">
            A selection of applications I have designed and built — each one shipped with a focus
            on performance, accessibility, and clean UI.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-14 flex justify-center"
        >
          <Link
            to={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
          >
            Discover more projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
