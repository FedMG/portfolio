import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CoverImage } from '@/app/home/components'

describe('CoverImage Component', () => {
  describe('WHEN is mounted and props are passed', () => {
    it('SHOULD be rendered correctly', async () => {
      // Arrange
      const src = '/example.svg'
      const alt = 'Alternative text example'

      // Act
      render(<CoverImage src={src} alt={alt} />)
      const image = screen.getByAltText(alt)

      // Assert
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('alt', alt)
      expect(image).toHaveAttribute('src', src)
    })
  })
})
