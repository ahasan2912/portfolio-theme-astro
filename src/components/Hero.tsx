import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Link } from 'react-router-dom'
import { IoMdDownload } from 'react-icons/io'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-300 px-6 py-24 text-center sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {profile.name}
          <br />
          <span className="font-display  text-xl sm:text-2xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-white">{profile.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
         Frontend Developer specializing in React, Next.js, and TypeScript, with 01 year of professional experience building responsive and accessible web applications at Beup Tech Agency (Oct 2025 – Jul 2026).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="#"
            className="rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 flex items-center"
          >
            <IoMdDownload size={20} />
            Download Resume
          </Link>
          <Link
            to="#projects"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
          >
            View my work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
