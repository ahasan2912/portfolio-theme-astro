import { motion } from 'framer-motion'
import type { SkillCategory } from '../data/categories'

export function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-card-hover"
    >
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {category.description}
        </p>
      </div>
      <div className="px-5">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg border border-b-0 border-white/10"
          style={{ background: category.gradient }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex flex-wrap content-start gap-2 p-4">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
