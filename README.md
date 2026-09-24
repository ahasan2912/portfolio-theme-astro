# Ahasan Habib — Frontend Engineer Portfolio

A dark, single-page portfolio closely following the visual design of the
[astro.build themes directory](https://astro.build/themes/?search=&categories%5B%5D=portfolio),
rebuilt with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) — entrance / hover / menu animations
- [lucide-react](https://lucide.dev) — UI icons
- Inter + Outfit Variable (self-hosted via `@fontsource-variable`)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Structure

```
src/
  data/          # all content (profile, projects, skills, categories, footer links, experience)
  components/    # Header, Hero, ProjectCard, ProjectsSection, CategoryCard,
                 # SkillsSection, ContactCta, Footer, LogoMark
  lib/cn.ts      # tiny class-name helper
  App.tsx        # page composition
  index.css      # theme tokens, fonts, global styles
```

## Customizing content

Edit the files in `src/data/` — contact links sit in `profile.ts` (GitHub, LinkedIn,
email placeholders), projects live in `projects.ts` (title, tagline, category, gradient
colors), skill groups in `categories.ts`, and the footer link columns in
`footerLinks.ts` (SVG icons in `public/svg/`).

## Attribution

Design inspired by the portfolio category of the
[Astro themes directory](https://astro.build/themes/).
