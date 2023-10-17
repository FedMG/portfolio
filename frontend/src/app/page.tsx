import { getProjects } from './modules/services'

import { WavesShape } from './home/components'
import { AboutMeBoard } from './home/components/about'
import { ProjectCarousel } from './home/components/projects'

export default async function Home(): Promise<JSX.Element> {
  const projects = await getProjects()
  return (
    <>
      <ProjectCarousel projects={projects} />
      <section className='relative py-[200px]'>
        <WavesShape
          fill={{
            firstWave: 'fill-slate-700',
            secondWave: 'fill-slate-700',
            thirdWave: 'fill-slate-700'
          }}
        />
      </section>
      <AboutMeBoard />
    </>
  )
}
