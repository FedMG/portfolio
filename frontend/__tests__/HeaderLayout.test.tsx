// Partial solution to the following warning by using findBy queries or waitFor function.
// "Warning: An update to ForwardRef(LinkComponent) inside a test was not wrapped in act(...)"

import { HeaderLayout, HeaderLayoutProps } from '@/app/application/components'

import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

afterEach(cleanup)

jest.mock('../src/app/application/components/templates/Header.tsx', () => ({
  __esModule: true,
  Header: ({ children }) => <header>{children} Mocked Header Template Component</header>
}))

jest.mock('../src/app/application/components/templates/Navigation.tsx', () => ({
  __esModule: true,
  Navigation: ({ children }) => <nav>{children} Mocked Navigation Template Component</nav>
}))

jest.mock('../src/app/application/components/layout/HeaderLogo.tsx', () => ({
  __esModule: true,
  HeaderLogo: () => <div>Mocked HeaderLogo Component</div>
}))

describe('HeaderLayout component', () => {
  describe('WHEN pages prop is passed', () => {
    it('SHOULD renders a component with pages links that has label and path attributes', async () => {
      // Arrange
      const pagesMock: HeaderLayoutProps[] = [
        {
          path: '/',
          label: 'Home'
        },
        {
          path: '/about',
          label: 'About me'
        }
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
          label: 'Home'
        }
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
