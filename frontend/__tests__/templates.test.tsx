import { Header, Navigation } from '@/app/application/components'

import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('Header template component', () => {
  describe('WHEN children, labelledby and className are passed', () => {
    it('SHOULD renders a header', async () => {
      // Arrange
      const text = 'Test-children-property'
      const className = 'Test-class-property'
      const labelledby = 'header-label'

      // Act
      render(
        <Header className={className} labelledby={labelledby}>
          {text}
        </Header>
      )

      const header = await screen.findByRole('banner')

      // Assert
      expect(header).toBeInTheDocument()
      expect(header).toHaveAttribute('aria-labelledby', labelledby)
      expect(header).toHaveAttribute('class', className)
      expect(header).toHaveTextContent(text)
    })
  })
})

describe('Navigation template component', () => {
  describe('WHEN children, label and className are passed', () => {
    it('SHOULD renders a navigation', async () => {
      // Arrange
      const text = 'Test-children-property'
      const className = 'Test-class-property'
      const label = 'nav-label'

      // Act
      render(
        <Navigation className={className} ariaLabel={label}>
          {text}
        </Navigation>
      )

      const nav = await screen.findByRole('navigation')

      // Assert
      expect(nav).toBeInTheDocument()
      expect(nav).toHaveAttribute('aria-label', label)
      expect(nav).toHaveAttribute('class', className)
      expect(nav).toHaveTextContent(text)
    })
  })
})
