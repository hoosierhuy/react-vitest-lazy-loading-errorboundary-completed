import { render, screen } from '@testing-library/react'
import LazyData from './LazyData'

describe('LazyData Component', () => {
  beforeEach(() => {
    render(<LazyData />)
  })

  test('renders without crashing', () => {
    const firstElement = screen.getByText(/Record 1:/)
    expect(firstElement).toBeInTheDocument()
  })

  test('renders 2000 records on first load', () => {
    const elements = screen.getAllByText(/Record \d+:/)
    expect(elements.length).toBe(2000)
  })

  test('elements have unique keys', () => {
    const elements = screen.getAllByText(/Record \d+:/)
    const keys = elements.map((_, index) => `key-${index}`)
    const uniqueKeys = new Set(keys)
    expect(uniqueKeys.size).toBe(2000)
  })
})
