import { render, cleanup } from '@testing-library/react'

import ContactPage from './ContactPage'

describe('ContactPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPage />)
    }).not.toThrow()
  })
})
