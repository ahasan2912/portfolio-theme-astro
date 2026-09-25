import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectVisual } from './ProjectVisual'

function initials(title: string) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-card-hover"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label={`View ${project.title} project details`}
      >
        <ProjectVisual project={project} />

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-auto pt-5">
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-[10px] font-semibold text-white"
                  >
                    {initials(project.title)}
                  </span>
                  <span className="truncate text-sm font-medium text-muted">{project.category}</span>
                </div>
                <span className="shrink-0 rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-medium text-badge">
                  Web App
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
