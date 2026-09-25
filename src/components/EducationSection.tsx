import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'

export function EducationSection() {
  return (
    <section id="education" className="border-b border-border py-14 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-5 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:p-7"
        >
          <div className="flex min-w-0 items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white"
            >
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-kicker">Education</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-text sm:text-xl">
                {education.degree}
              </h2>
              <p className="mt-0.5 text-sm text-muted">{education.university}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-muted">
              {education.period}
            </span>
            <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-badge">
              CGPA {education.cgpa.toFixed(2)}
            </span>
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-muted">
              Passed {education.passed}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
