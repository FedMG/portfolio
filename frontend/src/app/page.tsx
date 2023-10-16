import { getProjects } from './modules/services'

import { ProjectCarousel } from './home/components/projects/Carousel.project'

export default async function Home(): Promise<JSX.Element> {
  const projects = await getProjects()
  // <main className='border border-red-600 h-screen'>
  return (
    <main className=''>
      <ProjectCarousel projects={projects} />
    </main>
  )
}
