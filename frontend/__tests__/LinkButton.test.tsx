import { LinkButton } from '@/app/application/components'

import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('LinkButton component', () => {
  describe('When is mountend and props are passed', () => {
    it('Should be rendered correctly', async () => {
      // Arrange
      const text = 'Home'
      const href = '/'
      const label = 'Go to Homepage'

      // Act
      render(
        <LinkButton href={href} ariaLabel={label} className=''>
          {text}
        </LinkButton>
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
