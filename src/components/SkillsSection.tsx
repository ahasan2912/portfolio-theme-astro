import { motion } from 'framer-motion'
import { skillCategories } from '../data/categories'
import { skills } from '../data/skills'
import { CategoryCard } from './CategoryCard'

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-kicker">
            What I work with
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find the skill for the job
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            From interface polish to API integration — the tools I reach for when shipping
            production features.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 5 * 0.06, ease: 'easeOut' }}
            className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-card-hover"
          >
            <h3 className="font-display text-lg font-semibold text-white">...and more</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Beyond the cards above — the workflow tools and libraries that keep delivery
              smooth day to day.
            </p>

            <div
              aria-hidden="true"
              className="mt-5 flex flex-1 flex-wrap content-start gap-2 rounded-lg border border-white/10 bg-bg/60 p-4"
            >
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-card px-2.5 py-1.5 text-xs text-zinc-300"
                >
                  <img src={skill.icon} alt="" className="h-3.5 w-3.5" />
                  {skill.label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <a
                href="#contact"
                className="rounded-full bg-zinc-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Let's talk
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
