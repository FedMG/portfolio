import { GithubIcon, LinkedInIcon } from '@/app/application/assets'

import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(cleanup)

describe('GithubIcon Component', () => {
  describe('WHEN is mounted', () => {
    it('SHOULD render it correctly', async () => {
      // Arrange
      const classValue = 'null'

      // Act
      render(<GithubIcon className={classValue} />)
      const svg = screen.getByRole('img')
      const path = svg.querySelector('path')
      const title = svg.querySelector('title')

      // Assert
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('class', classValue)

      expect(path).toBeInTheDocument()
      expect(title).toBeInTheDocument()
    })
  })
})

describe('LinkedInIcon Component', () => {
  describe('WHEN is mounted', () => {
    it('SHOULD render it correctly', async () => {
      // Arrange
      const classValue = 'null'

      // Act
      render(<LinkedInIcon className={classValue} />)
      const svg = screen.getByRole('img')
      const path = svg.querySelector('path')
      const title = svg.querySelector('title')

      // Assert
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('class', classValue)

      expect(path).toBeInTheDocument()
      expect(title).toBeInTheDocument()
    })
  })
})
