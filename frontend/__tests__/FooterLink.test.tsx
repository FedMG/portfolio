import { FooterLink } from '@/app/modules/components/layout'

import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('FooterLink component', () => {
  describe('When users clicks', () => {
    it('Should be sent to a social network page', async () => {
      // Arrange
      const text = 'LinkedIn'
      const href = 'https://www.linkedin.com/'
      const label = 'Go to LinkedIn'

      // Act
      render(
        <FooterLink href={href} ariaLabel={label} className=''>
          {text}
        </FooterLink>
      )

      const button = await screen.findByLabelText(label)

      // Assert
      expect(button).toHaveAttribute('href', href)
      expect(button).toHaveAttribute('aria-label', label)
      expect(button).toHaveAttribute('class', undefined)
      expect(button).toHaveTextContent(text)
    })
  })
})
