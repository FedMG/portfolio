import { LinkButton } from '@/app/application/components'

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('LinkButton component', () => {
  describe('When users clicks', () => {
    it('Should be sent', async () => {
      // Arrange
      const user = userEvent.setup()
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
      await user.click(button)

      // Assert
      expect(window.location.pathname).toBe(href)
      expect(button).toHaveAttribute('aria-label', label)
      expect(button).toHaveTextContent(text)
    })
  })
})
