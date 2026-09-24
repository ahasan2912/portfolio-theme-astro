import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { footerColumns } from '../data/footerLinks'
import { LogoMark } from './LogoMark'

export function Footer() {
  const [email, setEmail] = useState('')

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Newsletter subscription')
    const body = encodeURIComponent(`Please add ${email} to the newsletter list.`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <h2 className="font-display text-lg font-semibold text-white">Let's keep in touch</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Occasional notes on frontend work and new projects. No spam.
            </p>
            <form onSubmit={onSubscribe} className="mt-5 flex max-w-sm gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-card px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/60 focus:outline-none focus:ring-1 focus:ring-violet-500/60"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    {link.href.startsWith('#') ? (
                      <Link
                        to={`/${link.href}`}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        {...(link.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-6 w-6 text-xs" />
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-1">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5 fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
