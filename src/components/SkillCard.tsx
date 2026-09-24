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
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-card p-4 transition-[box-shadow,border-color,background-color] duration-300 hover:border-white/20 hover:bg-card-hover hover:shadow-lg hover:shadow-violet-500/10 sm:p-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-violet-400/40">
        <img src={skill.icon} alt={`${skill.label} logo`} className="h-6 w-6" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-semibold text-white">{skill.label}</h3>
        <p className="mt-0.5 truncate text-xs text-zinc-400">{category}</p>
      </div>

      <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-sm font-semibold text-violet-300 transition-colors duration-300 group-hover:border-violet-400/40">
        {skill.level}%
      </span>
    </motion.div>
  )
}