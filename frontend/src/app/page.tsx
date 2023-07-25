import { CoverCarousel } from './home/CoverCarousel'
import { slides } from './home/data.ref'

export default function Home (): JSX.Element {
  return (
    <main>
      <CoverCarousel items={slides} />
    </main>
  )
}
