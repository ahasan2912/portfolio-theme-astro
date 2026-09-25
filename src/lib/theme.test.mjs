import test from 'node:test'
import assert from 'node:assert/strict'
import {
  applyTheme,
  getInitialTheme,
  getNextTheme,
  isTheme,
  readStoredTheme,
  saveTheme,
  THEME_STORAGE_KEY,
} from './theme.ts'

test('uses a valid saved theme before the system preference', () => {
  assert.equal(getInitialTheme('dark', true), 'dark')
  assert.equal(getInitialTheme('light', false), 'light')
})

test('falls back to the system preference when no valid theme is saved', () => {
  assert.equal(getInitialTheme(null, true), 'dark')
  assert.equal(getInitialTheme('sepia', false), 'light')
})

test('recognizes only supported theme values', () => {
  assert.equal(isTheme('dark'), true)
  assert.equal(isTheme('light'), true)
  assert.equal(isTheme('night'), false)
  assert.equal(isTheme(null), false)
})

test('toggles between light and dark themes', () => {
  assert.equal(getNextTheme('dark'), 'light')
  assert.equal(getNextTheme('light'), 'dark')
})

test('applies a theme and color scheme to the document root', () => {
  const root = { dataset: {}, style: {} }

  applyTheme('light', root)

  assert.equal(root.dataset.theme, 'light')
  assert.equal(root.style.colorScheme, 'light')
})

test('uses a stable storage key for the selected theme', () => {
  assert.equal(THEME_STORAGE_KEY, 'portfolio-theme')
})

test('reads and saves only supported themes', () => {
  const values = new Map([[THEME_STORAGE_KEY, 'dark']])
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  }

  assert.equal(readStoredTheme(storage), 'dark')
  saveTheme(storage, 'light')
  assert.equal(readStoredTheme(storage), 'light')

  values.set(THEME_STORAGE_KEY, 'sepia')
  assert.equal(readStoredTheme(storage), null)
})

test('does not throw when browser storage is unavailable', () => {
  const storage = {
    getItem: () => {
      throw new Error('blocked')
    },
    setItem: () => {
      throw new Error('blocked')
    },
  }

  assert.equal(readStoredTheme(storage), null)
  assert.doesNotThrow(() => saveTheme(storage, 'dark'))
})
