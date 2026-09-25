import { motion } from 'framer-motion'
import { ArrowLeft, Check, ExternalLink, FolderGit2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectVisual } from '../components/ProjectVisual'
import { NotFound } from './NotFound'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function routeTo(index: number) {
  const total = projects.length
  return {
    next: projects[(index + 1) % total].slug,
    prev: projects[(index - 1 + total) % total].slug,
  }
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) {
    return <NotFound />
  }

  const project = projects[index]
  const { next, prev } = routeTo(index)

  return (
    <article className="border-b border-border">
      <div className="mx-auto max-w-300 px-4 py-8 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>
        </motion.div>

        <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="min-w-0"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-muted">
                {project.category}
              </span>
              <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-medium text-badge">
                Web App
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.tagline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 sm:w-auto"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live preview
              </Link>
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-border-strong hover:text-text sm:w-auto"
              >
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                View source
              </Link>
            </div>

            <div className="mt-10 min-w-0 overflow-hidden rounded-xl border border-border">
              <ProjectVisual project={project} />
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-xl font-semibold text-text">About this project</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-text">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                      <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="min-w-0 lg:mt-60"
          >
            <div className="rounded-xl border border-border bg-card p-3">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-subtle">
                Tech stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
              <Link
                to={`/projects/${prev}`}
                className="group flex min-w-0 flex-col gap-1 rounded-lg p-2 transition-colors hover:bg-surface-muted"
              >
                <div className="flex items-center gap-2 text-sm text-subtle">
                  <FaArrowLeft size={13} aria-hidden="true" /> Previous
                </div>
                <span className="truncate text-sm font-medium text-muted transition-colors group-hover:text-text">
                  {projects.find((candidate) => candidate.slug === prev)?.title}
                </span>
              </Link>
              <Link
                to={`/projects/${next}`}
                className="group flex min-w-0 flex-col items-end gap-1 rounded-lg p-2 transition-colors hover:bg-surface-muted"
              >
                <div className="flex items-center gap-2 text-sm text-subtle">
                  Next <FaArrowRight size={13} aria-hidden="true" />
                </div>
                <span className="truncate text-sm font-medium text-muted transition-colors group-hover:text-text">
                  {projects.find((candidate) => candidate.slug === next)?.title}
                </span>
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  )
}
