export interface SkillCategory {
  id: string
  label: string
}

export const skillCategories: SkillCategory[] = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'tools', label: 'Tools' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
]