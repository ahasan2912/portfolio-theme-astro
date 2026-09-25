import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { LogoMark } from './LogoMark'
import { MdEmail } from 'react-icons/md'

export function Footer() {
  const [email, setEmail] = useState('')

  const onSubscribe = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent('Newsletter subscription')
    const body = encodeURIComponent(`Please add ${email} to the newsletter list.`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <footer id="footer" className="border-t border-border">
      <div className="mx-auto max-w-300 px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
          <div className="min-w-0 md:max-w-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-text">
              <MdEmail aria-hidden="true" />
              Let's keep in touch
            </h2>
            <p className="mt-2 text-base text-muted">
              Occasional notes on frontend work and new projects. No spam.
            </p>
            <form onSubmit={onSubscribe} className="mt-5 flex max-w-sm flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ahasanhabib2912@gmail.com"
                className="min-w-0 flex-1 rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-text placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-lg bg-text px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>

          <nav className="mt-10 w-full md:mt-0 md:max-w-[480px]">
            <ul className="grid grid-cols-2 gap-6 sm:gap-10 md:flex md:justify-between md:gap-20">
              <li className="min-w-0">
                <h2 className="text-base font-semibold text-text">Navigation</h2>
                <div className="mt-4 flex flex-col gap-3">
                  <Link to="/#home" className="text-sm text-muted transition-colors hover:text-text">
                    Home
                  </Link>
                  <Link
                    to="/#projects"
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    Projects
                  </Link>
                  <Link to="/#skills" className="text-sm text-muted transition-colors hover:text-text">
                    Skills
                  </Link>
                  <Link
                    to="/#footer"
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    Contact
                  </Link>
                </div>
              </li>
              <li className="min-w-0">
                <h2 className="text-base font-semibold text-text">Connect</h2>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sm text-muted transition-colors hover:text-text"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-sm text-muted transition-colors hover:text-text"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-words text-sm text-muted transition-colors hover:text-text"
                  >
                    Email: ahasanhabib2912@gmail.com
                  </a>
                  <a
                    href="tel:+8801796905988"
                    className="break-words text-sm text-muted transition-colors hover:text-text"
                  >
                    Mobile: +8801796905988
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
            <LogoMark className="h-7 w-7 rounded-full object-fill text-xs" />
            <p className="text-sm text-subtle">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
