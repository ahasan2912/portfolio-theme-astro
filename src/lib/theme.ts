export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'portfolio-theme'

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getInitialTheme(storedTheme: string | null, prefersDark: boolean): Theme {
  return isTheme(storedTheme) ? storedTheme : prefersDark ? 'dark' : 'light'
}

export function getNextTheme(theme: Theme): Theme {
  return theme === 'dark' ? 'light' : 'dark'
}

export function readStoredTheme(storage: Pick<Storage, 'getItem'> | null | undefined): Theme | null {
  if (!storage) return null

  try {
    const value = storage.getItem(THEME_STORAGE_KEY)
    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

export function saveTheme(storage: Pick<Storage, 'setItem'> | null | undefined, theme: Theme): void {
  if (!storage) return

  try {
    storage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }
}

type ThemeRoot = {
  dataset: { theme?: string }
  style: { colorScheme: string }
}

export function applyTheme(theme: Theme, root: ThemeRoot = document.documentElement): void {
  root.dataset.theme = theme
  root.style.colorScheme = theme
}
