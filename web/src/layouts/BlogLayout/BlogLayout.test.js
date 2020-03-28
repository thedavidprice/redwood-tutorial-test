import { render, cleanup } from '@testing-library/react'

import BlogLayout from './BlogLayout'

describe('BlogLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayout />)
    }).not.toThrow()
  })
})
