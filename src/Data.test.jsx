import { render, screen } from '@testing-library/react'
import Data from './Data'
import React from 'react'

// Mock LazyData component to throw an error
vi.mock('./LazyData', () => ({
  __esModule: true,
  default: () => {
    throw new Error('Test error')
  },
}))

describe('Data Component', () => {
  beforeEach(() => {
    render(<Data />)
  })

  it('should render the Suspense fallback', () => {
    expect(
      screen.getByText('Taylor Swift is coming for us all...'),
    ).toBeInTheDocument()
  })

  it('should render the ErrorFallback component on error', () => {
    // Simulate error
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong:')).toBeInTheDocument()
    expect(screen.getByText('Test error')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /try again/i }),
    ).toBeInTheDocument()
  })
})
