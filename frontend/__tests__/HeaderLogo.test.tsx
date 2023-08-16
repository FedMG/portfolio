import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HeaderLogo } from '@/app/modules/components/layout'
import type { Children } from '@/app/modules/schemas'

afterEach(cleanup)

jest.mock('../src/app/modules/components/LinkButton', () => ({
  __esModule: true,
  LinkButton: ({ children }: Children) => (
    <a role='button' href='/'>
      {children} Mocked LinkButton Component
    </a>
  )
}))

// Unit under test
describe('HeaderLogo component', () => {
  // Scenario
  describe('WHEN src, id and text children are passed', () => {
    // Expectation
    it('SHOULD renders a link (with a role button) wrapping an image element (with alt attribute)', async () => {
      // Arrange
      const text = 'AstraDev'
      const src = '/icon.ico'
      const href = '/'
      const alt = 'Personal portfolio logo. A white rocket with some violet tints.'

      // Act
      render(
        <HeaderLogo src={src} id='header-logo'>
          {text}
        </HeaderLogo>
      )

      const button = await screen.findByRole('button')
      const image = await screen.findByRole('img')

      // Assert
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('href', href)

      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/_next/image?url=%2Ficon.ico&w=96&q=75')
      expect(image).toHaveAttribute('alt', alt)

      expect(await screen.findByText(text)).toBeInTheDocument()
    })

    it('SHOULD match "Mocked LinkButton Component" text of the mock', () => {
      // Arrange
      const text = 'AstraDev'
      const src = '/icon.ico'
      const mocktext = 'Mocked LinkButton Component'

      // Act
      render(
        <HeaderLogo src={src} id='header-logo'>
          {text}
        </HeaderLogo>
      )

      // Assert
      expect(screen.getByText(mocktext)).toBeInTheDocument()
    })
  })
})
