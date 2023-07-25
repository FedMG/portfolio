import { withTrackerPosition } from '@/app/application/hocs'
import { cleanup, render } from '@testing-library/react'

afterEach(() => {
  cleanup
  jest.restoreAllMocks()
  jest.resetAllMocks()
  jest.clearAllMocks()
})

const stubArgument = {
  IconComponent: () => <div data-testid='icon-component' />,
  carouselLength: 2,
  positionColor: {
    default: 'styles 1',
    active: 'styles 2'
  }
}

describe('withTrackerPosition HOC', () => {
  describe('WHEN is called', () => {
    it('SHOULD be passed an object as argument', () => {
      // Arrange
      const spied = { withTrackerPosition: withTrackerPosition }
      const spy = jest.spyOn(spied, 'withTrackerPosition')

      // Act
      const EnhancedIconComponent = spied.withTrackerPosition(stubArgument)

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(stubArgument)
    })

    it('SHOULD returns a EnhancedIconComponent', () => {
      // Arrange
      const spied = { withTrackerPosition: withTrackerPosition }
      const spy = jest.spyOn(spied, 'withTrackerPosition')

      // Act
      const EnhancedIconComponent = spied.withTrackerPosition(stubArgument)

      // Assert
      expect(typeof spy).toBe('function')
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveReturnedWith(EnhancedIconComponent)
    })
  })

  describe('WHEN EnhancedIconComponent is returned', () => {
    it('SHOULD contain 3 IconComponent if carouselLength is 2', () => {
      // Arrange
      const spied = { EnhancedIconComponent: withTrackerPosition(stubArgument) }
      const spy = jest.spyOn(spied, 'EnhancedIconComponent')

      // Act
      const { getAllByTestId } = render(<spied.EnhancedIconComponent position={0} />)
      
      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(getAllByTestId('icon-component')).toHaveLength(3)
    })

    it('SHOULD admit a position property', () => {
      // Arrange
      const spied = { EnhancedIconComponent: withTrackerPosition(stubArgument) }
      const spy = jest.spyOn(spied, 'EnhancedIconComponent')

      // Act
      render(<spied.EnhancedIconComponent position={0} />)

      // Assert
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith({ position: 0 }, {})
    })

  })
})
