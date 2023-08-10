import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { Button } from '@/app/modules/components'

afterEach(cleanup)

describe('Button Component', () => {
  describe('WHEN is mounted and props are passed', () => {
    it('SHOULD be rendered correctly', async () => {
      // Arrange
      const click = (): void => undefined
      const buttonName = 'Open'
      const className = 'null'

      // Act
      render(
        <Button className={className} onClick={click}>
          {buttonName}
        </Button>
      )
      const button = screen.getByText(buttonName)

      // Assert
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('class', className)
    })
  })

  describe('WHEN user clicks the button', () => {
    it('SHOULD works correctly', async () => {
      // Arrange
      const user = userEvent.setup()
      const click = jest.fn()
      const buttonName = 'Open'

      // Act
      render(
        <Button className='null' onClick={click}>
          {buttonName}
        </Button>
      )
      const button = await screen.findByText(buttonName)
      await user.click(button)

      // Assert
      expect(button).toBeInTheDocument()
      expect(click).toHaveBeenCalled()
    })
  })

  describe('WHEN the user doesn\'t clicks the button', () => {
    it('SHOULD not executed a click event', async () => {
      // Arrange
      const click = jest.fn()
      const buttonName = 'Open'

      // Act
      render(
        <Button className='null' onClick={click}>
          {buttonName}
        </Button>
      )
      const button = await screen.findByText(buttonName)

      // Assert
      expect(button).toBeInTheDocument()
      expect(click).not.toHaveBeenCalled()
    })
  })
})
