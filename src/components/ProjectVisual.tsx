import { useId } from 'react'
import type { Project } from '../data/projects'

export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const id = useId().replace(/:/g, '')

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl ${className ?? ''}`}
      style={{ background: `linear-gradient(160deg, ${project.from}, ${project.to})` }}
    >
      <svg
        viewBox="0 0 600 337"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`fade-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="48" y="52" width="504" height="248" rx="10" fill="#0c0c0f" fillOpacity="0.55" />
        <rect x="48" y="52" width="504" height="28" rx="10" fill="#0c0c0f" fillOpacity="0.75" />
        <rect x="48" y="70" width="504" height="10" fill="#0c0c0f" fillOpacity="0.75" />
        <circle cx="66" cy="66" r="4" fill="#f87171" fillOpacity="0.8" />
        <circle cx="80" cy="66" r="4" fill="#fbbf24" fillOpacity="0.8" />
        <circle cx="94" cy="66" r="4" fill="#34d399" fillOpacity="0.8" />
        <rect x="120" y="60" width="160" height="12" rx="6" fill="#ffffff" fillOpacity="0.12" />
        <rect x="72" y="104" width="180" height="14" rx="7" fill="#ffffff" fillOpacity="0.35" />
        <rect x="72" y="128" width="120" height="10" rx="5" fill="#ffffff" fillOpacity="0.18" />
        <rect x="72" y="164" width="104" height="36" rx="8" fill={`url(#fade-${id})`} />
        <rect x="72" y="216" width="200" height="60" rx="8" fill="#ffffff" fillOpacity="0.08" />
        <rect x="288" y="216" width="110" height="60" rx="8" fill="#ffffff" fillOpacity="0.08" />
        <rect x="414" y="216" width="110" height="60" rx="8" fill="#ffffff" fillOpacity="0.08" />
        <rect x="288" y="104" width="236" height="96" rx="8" fill="#ffffff" fillOpacity="0.1" />
      </svg>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  )
}