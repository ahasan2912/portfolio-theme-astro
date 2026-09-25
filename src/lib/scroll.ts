export const SCROLL_TOP_THRESHOLD = 320

export function shouldShowScrollTop(scrollY: number, threshold = SCROLL_TOP_THRESHOLD): boolean {
  return scrollY >= threshold
}

export function getScrollBehavior(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? 'auto' : 'smooth'
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
