import { render, cleanup } from '@testing-library/react'

import BlogPostPage from './BlogPostPage'

describe('BlogPostPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostPage />)
    }).not.toThrow()
  })
})
