import { render, screen } from '@testing-library/react'
import App from 'App'

describe('App component', () => {
  it('renders "POKEDEX" heading', () => {
    render(<App />)
    const headingElement = screen.getByText('Pokedex')
    expect(headingElement).toBeInTheDocument()
    expect(headingElement).toHaveClass('text-3xl font-bold underline')
  })
})
