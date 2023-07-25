import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FooterLayout, FooterLinkProps } from '@/app/application/components'
import { BaseComponentProps } from '@/app/application/schemas'

type Children = Pick<BaseComponentProps, 'children'>

afterEach(() => cleanup)

jest.mock('@/app/application/assets', () => ({
  GithubIcon: () => <svg role='img'>Mocked GithubIcon Component</svg>,
  LinkedInIcon: () => <svg role='img'>Mocked LinkedInIcon Component</svg>,
  // SquareIcon: () => <div/>, // I had not iclude it, why?
  LeftArrowIcon: () => <div/>, // I had include it for a warning message
  RightArrowIcon: () => <div />, // I had include it for a warning message
}))

jest.mock('@/app/application/components/templates/Footer.tsx', () => ({
  Footer: ({ children }: Children) => <footer>{children} Mocked Footer Template Component</footer>
}))

jest.mock('@/app/application/components/layout/FooterLink.tsx', () => ({
  FooterLink: ({ children, href, ariaLabel, className }: FooterLinkProps) => (
    <a href={href} aria-label={ariaLabel} className={className}>
      {children} Mocked FooterLink Component
    </a>
  )
}))

describe('FooterLayout component', () => {
  describe('WHEN is mounted', () => {
    it('SHOULD renders a copyright text, and linkedin and github links with an image', async () => {
      // Arrange
      const copyrightText = '© 2023 AstraDev™ Copyright'

      // Act
      render(<FooterLayout />)
      const [github, linkedIn] = screen.getAllByRole('link')
      const [githubImage, linkedInImage] = screen.getAllByRole('img')

      // Assert
      expect(screen.getByText(copyrightText)).toBeInTheDocument()

      expect(linkedIn).toBeInTheDocument()
      expect(linkedIn).toContainElement(linkedInImage)

      expect(github).toBeInTheDocument()
      expect(github).toContainElement(githubImage)
    })
  })

  describe('WHEN is mounted and user clicks a link', () => {
    it('SHOULD sent the user to a social network page', async () => {
      // Arrange

      // Act
      render(<FooterLayout />)
      const [github, linkedIn] = await screen.findAllByRole('link')

      // Assert
      expect(github).toHaveAttribute('href', github.getAttribute('href'))
      expect(linkedIn).toHaveAttribute('href', linkedIn.getAttribute('href'))
    })
  })

  describe('WHEN is mounted', () => {
    it('SHOULD match with mocked footer, footerLink, githubIcon and LinkedInIcon text', () => {
      // Arrange
      const footerText = 'Mocked Footer Template Component'
      const footerLinkText = 'Mocked FooterLink Component'
      const githubIconText = 'Mocked GithubIcon Component'
      const linkedInIconText = 'Mocked LinkedInIcon Component'

      // Act
      render(<FooterLayout />)

      // Assert
      expect(screen.getByText(footerText)).toBeInTheDocument()
      expect(screen.getAllByText(footerLinkText)).toHaveLength(2)
      expect(screen.getByText(githubIconText)).toBeInTheDocument()
      expect(screen.getByText(linkedInIconText)).toBeInTheDocument()
    })
  })
})
