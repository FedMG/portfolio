// Partial solution to the following warning by using findBy queries or waitFor function.
// "Warning: An update to ForwardRef(LinkComponent) inside a test was not wrapped in act(...)"

import { HeaderLogo } from '@/app/application/components/layout/HeaderLogo'

import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { HeaderLayout, HeaderLayoutProps } from '@/app/application/components'

afterEach(cleanup)

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
  })
})

describe('HeaderLayout component', () => {
  describe('WHEN pages prop is passed', () => {
    it('SHOULD renders a component with pages links that has label and path attributes', async () => {
      // Arrange
      const pagesMock: HeaderLayoutProps[] = [
        {
          path: '/',
          label: 'Home',
        },
        {
          path: '/about',
          label: 'About me',
        },
      ]
      const { path, label } = pagesMock[1]

      // Act
      render(<HeaderLayout pages={pagesMock} />)
      const pagelink = (await screen.findAllByRole('link'))[1]

      // Assert
      expect(pagelink).toBeInTheDocument()
      expect(pagelink).toHaveAttribute('href', path)
      expect(pagelink).toHaveTextContent(label)
    })
  })

  describe('WHEN pages prop is not passed', () => {
    it('SHOULD renders a component without pages links', async () => {
      // Arrange
      const emptyPagesMock: HeaderLayoutProps[] = []

      // Act
      render(<HeaderLayout pages={emptyPagesMock} />)
      
      // Assert
      await waitFor(() => {
        const pageLink = screen.queryByRole('link')
        expect(pageLink).not.toBeInTheDocument()
      })
    })
  })

  describe('WHEN pages prop is passed and user clicks a link', () => {
    it('SHOULD sent the user to a new page', async () => {
      // Arrange
      const user = userEvent.setup()
      const pagesMock: HeaderLayoutProps[] = [
        {
          path: '/',
          label: 'Home',
        },
      ]
      const { path, label } = pagesMock[0]

      // Act
      render(<HeaderLayout pages={pagesMock} />)
      const homeLink = await screen.findByRole('link')
      await user.click(homeLink)

      // Assert
      expect(window.location.pathname).toBe(path)
      expect(homeLink).toHaveTextContent(label)
    })
  })
})
