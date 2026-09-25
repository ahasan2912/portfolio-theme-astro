import { motion } from 'framer-motion'
import { ArrowLeft, Check, ExternalLink, FolderGit2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectVisual } from '../components/ProjectVisual'
import { NotFound } from './NotFound'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function routeTo(index: number) {
  const total = projects.length
  return { next: projects[(index + 1) % total].slug, prev: projects[(index - 1 + total) % total].slug }
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) {
    return <NotFound />
  }

  const project = projects[index]
  const { next, prev } = routeTo(index);

  return (
    <article className="border-b border-white/10">
      <div className="mx-auto max-w-300 px-6 py-5 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                {project.category}
              </span>
              <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-medium text-amber-400">
                Web App
              </span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live preview
              </Link>
              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <FolderGit2 className="h-4 w-4" />
                View source
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
              <ProjectVisual project={project} />
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-xl font-semibold text-white">About this project</h2>
              <p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-semibold text-white">Key features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20">
                      <Check className="h-3 w-3 text-violet-300" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:mt-60"
            >
            <div className="rounded-xl border border-white/10 bg-card p-3">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Tech stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <Link
                to={`/projects/${prev}`}
                className="group flex min-w-0 flex-col gap-1 rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div className="text-sm text-zinc-500 flex items-center gap-2"><FaArrowLeft size={13} /> Previous</div>
                <span className="truncate text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {projects.find((p) => p.slug === prev)?.title}
                </span>
              </Link>
              <Link
                to={`/projects/${next}`}
                className="group flex min-w-0 flex-col items-end gap-1 rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div className="text-sm text-zinc-500 flex items-center gap-2">
                  Next<FaArrowRight size={13} />
                </div>
                <span className="truncate text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  {projects.find((p) => p.slug === next)?.title}
                </span>
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  )
}