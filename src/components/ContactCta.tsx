import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { LogoMark } from './LogoMark'

export function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-violet-600/20 to-transparent blur-2xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 text-center sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex justify-center">
            <LogoMark className="h-10 w-10 rounded-xl" />
          </div>

          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            I'm open to freelance work, full-time roles, and interesting collaborations. Drop me
            a line and I'll get back to you.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
