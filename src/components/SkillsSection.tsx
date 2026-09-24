import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillCategories } from '../data/categories'
import { skills } from '../data/skills'
import { SkillCard } from './SkillCard'

export function SkillsSection() {
  const [active, setActive] = useState<string>('all')

  const chips = useMemo(
    () => [
      { id: 'all', label: 'All', count: skills.length },
      ...skillCategories.map((category) => ({
        id: category.id,
        label: category.label,
        count: skills.filter((skill) => skill.categoryId === category.id).length,
      })),
    ],
    [],
  )

  const visible = useMemo(
    () => (active === 'all' ? skills : skills.filter((skill) => skill.categoryId === active)),
    [active],
  )

  const categoryLabel = useMemo(() => {
    const byId = new Map(skillCategories.map((category) => [category.id, category.label]))
    return (id: string) => byId.get(id) ?? ''
  }, [])

  return (
    <section id="skills" className="border-b border-white/10 py-8 sm:py-10 lg:py-18">
      <div className="mx-auto max-w-300 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Skills & Technologies
            </h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.span
              key={visible.length}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 rounded-full border border-white/10 bg-card px-4 py-2 text-sm font-medium text-zinc-300"
            >
              Showing {visible.length} {visible.length === 1 ? 'Skill' : 'Skills'}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
          className="mt-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Category filters
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {chips.map((chip) => {
              const selected = active === chip.id
              return (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActive(chip.id)}
                  aria-pressed={selected}
                  className={
                    selected
                      ? 'rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25'
                      : 'rounded-full border border-white/10 bg-card px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:shadow-md hover:shadow-violet-500/10 hover:text-violet-300'
                  }
                >
                  {chip.label}
                  <span className={selected ? 'ml-1.5 text-white/70' : 'ml-1.5 text-zinc-500'}>
                    ({chip.count})
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((skill) => (
                <SkillCard key={skill.label} skill={skill} category={categoryLabel(skill.categoryId)} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}