import { CoverCarousel } from './home/components'
import { slides } from './home/data.ref'
import { Button } from '@nextui-org/button'

export default function Home(): JSX.Element {
  return (
    <main>
      <CoverCarousel items={slides} />
      <Button>Click on me!</Button>
    </main>
  )
}
