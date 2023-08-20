import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Button } from '@/app/modules/components'
import { CarouselButton } from '@/app/modules/components/carousel'
import { GetProperties } from '@/utilities'

type ButtonProps = GetProperties<typeof Button>

jest.mock('@/app/modules/components/Button.tsx', () => ({
  Button: ({ children, onClick, ariaLabel }: ButtonProps) => (
    <button onClick={onClick} data-testid='mocked-button' aria-label={ariaLabel}>
      {children} Mocked Button Component
    </button>
  )
}))

afterEach(cleanup)

describe('CarouselButton Component', () => {
  describe('WHEN is mounted and props are passed', () => {
    it('SHOULD be rendered correctly', async () => {
      // Arrange
      const user = userEvent.setup()
      const onClick = jest.fn()
      const buttonIcon = <div data-testid='button-icon-test' />
      const ariaLabel = 'Slide Item to the left'

      // Act
      render(
        <CarouselButton ariaLabel={ariaLabel} className='null' onClick={onClick}>
          {buttonIcon}
        </CarouselButton>
      )

      // Assert
      const button = await screen.findByRole('button')
      const icon = screen.getByTestId('button-icon-test')
      await user.click(button)

      // // Assert
      expect(button).toBeInTheDocument()
      expect(button).toContainElement(icon)
      expect(button).toHaveAttribute('aria-label', ariaLabel)
      expect(onClick).toHaveBeenCalled()
    })

    it('SHOULD match and render mocked component', () => {
      // Arrange
      const buttonTestId = 'mocked-button'

      // Act
      render(
        <CarouselButton ariaLabel='null' className='null' onClick={() => {}}>
          null
        </CarouselButton>
      )

      // Assert
      expect(screen.getByTestId(buttonTestId)).toBeInTheDocument()
    })
  })
})
