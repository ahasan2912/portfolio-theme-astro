import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { getScrollBehavior, prefersReducedMotion } from './lib/scroll'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const behavior = getScrollBehavior(prefersReducedMotion())

    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior })
        return
      }
    }

    window.scrollTo({ top: 0, behavior })
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </MotionConfig>
  )
}
