import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { LogoMark } from './LogoMark'
import { MdEmail } from 'react-icons/md'

export function Footer() {
  const [email, setEmail] = useState('')

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Newsletter subscription')
    const body = encodeURIComponent(`Please add ${email} to the newsletter list.`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <footer id='footer' className="border-t border-white/10">
      <div className="mx-auto max-w-300 px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="">
            <h2 className="text-lg font-semibold text-white">Let's keep in touch</h2>
            <p className="mt-2 text-base text-zinc-400">
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
                placeholder="ahasanhabib2912@gmail.com"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-card px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-violet-500/60 focus:outline-none focus:ring-1 focus:ring-violet-500/60"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          <nav className="mt-10 md:mt-0 max-w-120">
            <ul className="mt-4 space-x-5 md:space-x-20 flex justify-between">
              <li className="flex flex-col gap-3">
                <h1 className="text-base font-semibold text-white">Navigation</h1>
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/#home`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'Home'}
                  </Link>
                  <Link
                    to={`/#projects`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'Projects'}
                  </Link>
                  <Link
                    to={`/#skills`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'Skills'}
                  </Link>
                  <Link
                    to={`/#footer`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'Contact'}
                  </Link>
                </div>
              </li>
              <li className="flex flex-col gap-3">
                <h1 className="text-base font-semibold text-white">Connect</h1>
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/https://github.com/ahasan2912`}
                    target="_blank"
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'GitHub'}
                  </Link>
                  <Link
                    to={`/https://www.linkedin.com/in/ahasanhabib2912`}
                    target="_blank"
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'LinkedIn'}
                  </Link>
                  <Link
                    to={`#`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white flex items-center gap-1">
                    {'Email: ahasanhabib2912@gmail.com'}
                  </Link>
                  <Link
                    to={`#`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {'Mobile: +8801796905988'}
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7 rounded-full object-fill text-xs" />
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}




{/* <li key={`${column.heading}-${link.label}`}>
  {link.href.startsWith('#') ? (
    <Link
      to={`/${link.href}`}
      target="_blank"
      className="text-sm text-zinc-400 transition-colors hover:text-white">
      {link.label}
    </Link>
  ) : (
    <Link
      to={link.href}
      {...(link.href.startsWith('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="text-sm text-zinc-400 transition-colors hover:text-white">
      {link.label}
    </Link>
  )}
</li> */}