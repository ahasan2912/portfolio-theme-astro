import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'

export function SkillCard({ skill, category }: { skill: Skill; category: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="
        group grid grid-cols-[auto_minmax(0,1fr)]
        items-center gap-3
        rounded-xl border border-border
        bg-card p-3
        transition-[box-shadow,border-color,background-color]
        duration-300
        hover:border-border-strong
        hover:bg-card-hover
        hover:shadow-lg
        hover:shadow-violet-500/10  
        sm:gap-4 sm:p-5
  "
    >
      <span
        className="
      grid h-10 w-10 shrink-0 place-items-center
      rounded-lg border border-border
      bg-surface-muted
      transition-colors duration-300
      group-hover:border-violet-400/40
      sm:h-11 sm:w-11
    "
      >
        <img
          src={skill.icon}
          alt={`${skill.label} logo`}
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </span>

      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-text sm:text-[15px]">
          {skill.label}
        </h3>

        <p className="mt-0.5 truncate text-[11px] text-muted sm:text-xs">
          {category}
        </p>
      </div>
    </motion.div>
  )
}
