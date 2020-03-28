import { render, cleanup } from '@testing-library/react'

import BlogPost from './BlogPost'

describe('BlogPost', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPost />)
    }).not.toThrow()
  })
})
