import { Footer, Header, Navigation } from '@/app/modules/components/templates'

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

describe('Footer template component', () => {
  describe('WHEN children, label and className are passed', () => {
    it('SHOULD renders a Footer', async () => {
      // Arrange
      const text = 'Test-children-property'
      const className = 'Test-class-property'
      const ariaLabel = 'Footer-label'

      // Act
      render(
        <Footer className={className} ariaLabel={ariaLabel}>
          {text}
        </Footer>
      )

      const footer = await screen.findByRole('contentinfo')

      // Assert
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveAttribute('aria-label', ariaLabel)
      expect(footer).toHaveAttribute('class', className)
      expect(footer).toHaveTextContent(text)
    })
  })
})
