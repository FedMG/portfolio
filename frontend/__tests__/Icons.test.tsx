import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { GithubIcon, LinkedInIcon, LeftArrowIcon, RightArrowIcon, SquareIcon } from '@/app/modules/assets'

afterEach(cleanup)

const components = [
  { Element: LinkedInIcon, name: 'LinkedInIcon', role: 'img' },
  { Element: GithubIcon, name: 'GithubIcon', role: 'img' },
  { Element: LeftArrowIcon, name: 'LeftArrowIcon', role: 'button' },
  { Element: RightArrowIcon, name: 'RightArrowIcon', role: 'button' },
  { Element: SquareIcon, name: 'SquareIcon', role: 'presentation' }
]

components.forEach(({ Element, name, role }) => {
  describe(`${name} Component`, () => {
    describe('WHEN is mounted', () => {
      it('SHOULD render it correctly', async () => {
        // Arrange
        const classValue = 'null'

        // Act
        render(<Element className={classValue} />)
        const svg = screen.getByRole(role)
        const path = svg.querySelector('path')
        const title = svg.querySelector('title')
        // Assert
        expect(svg).toBeInTheDocument()
        expect(svg).toHaveAttribute('class')

        expect(path).toBeInTheDocument()

        if (title != null) {
          expect(title).toBeInTheDocument()
        }
      })
    })
  })
})
