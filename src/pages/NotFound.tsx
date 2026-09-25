import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section id="main-content" className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-lg px-4 py-24 text-center sm:px-6">
        <p className="font-display text-6xl font-semibold text-text">404</p>
        <h1 className="mt-4 font-display text-xl font-semibold text-text">
          This page could not be found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          The link may be broken, or the page may have been removed. Head back to the homepage to
          explore my projects.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
      </div>
    </section>
  )
}
