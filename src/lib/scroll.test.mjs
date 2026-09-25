import test from 'node:test'
import assert from 'node:assert/strict'
import { getScrollBehavior, shouldShowScrollTop } from './scroll.ts'

test('keeps the scroll-to-top control hidden at the top of the page', () => {
  assert.equal(shouldShowScrollTop(0), false)
  assert.equal(shouldShowScrollTop(319), false)
})

test('shows the scroll-to-top control after the page has been scrolled', () => {
  assert.equal(shouldShowScrollTop(320), true)
  assert.equal(shouldShowScrollTop(1200), true)
})

test('uses smooth scrolling unless reduced motion is requested', () => {
  assert.equal(getScrollBehavior(false), 'smooth')
  assert.equal(getScrollBehavior(true), 'auto')
})
