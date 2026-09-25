# Ahasan Habib — Frontend Engineer Portfolio

A responsive, light/dark single-page portfolio closely following the visual design of the
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
npm test         # theme and scroll helper tests
```

## Structure

```
src/
  data/          # all content (profile, projects, skills, categories, footer links, experience)
  components/    # Header, ThemeToggle, Hero, project and skills sections,
                 # ScrollToTopButton, Footer, LogoMark
  lib/           # theme.ts, scroll.ts, and cn.ts helpers
  main.tsx       # app entry and router
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
