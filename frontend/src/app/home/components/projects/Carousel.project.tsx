'use client'

import { Carousel } from 'flowbite-react'

import { ProjectCard } from './Card.project'
import { ProjectTitle } from './Title.project'
import { BadgesTechnologies } from './Badges.project'

import type { Project } from '@/app/modules/models'
import type { CustomFlowbiteTheme } from 'flowbite-react'

type Props = {
  projects: Project[]
}

const customTheme: CustomFlowbiteTheme['carousel'] = {
  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 group-hover:bg-black/60 group-active:bg-black/40 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10',
    icon: 'h-5 w-5 text-white sm:h-6 sm:w-6 group-focus:text-white'
  }
}

export const ProjectCarousel = ({ projects }: Props) => (
  <section id='home' className='py-[55px]'>
    <Carousel
      theme={customTheme}
      pauseOnHover
      slideInterval={4000}
      indicators={false}
      className='h-[420px]'>
      {projects.map(({ id, image, title, techStack, description, links }) => (
        <div
          key={id}
          className='max-w-[800px] max-h-[400px] w-full h-full py-3 px-8 flex align-center justify-between gap-x-6'>
          <ProjectCard image={image} links={links}>
            <ProjectTitle>{title}</ProjectTitle>
          </ProjectCard>

          <div className='flex flex-col max-w-[350px] w-full overflow-auto h-full gap-5 px-2'>
            <ProjectTitle className='border-b border-gray-300'>{title}</ProjectTitle>
            <BadgesTechnologies technologies={techStack} />
            <div>
              <p className='text-left text-base leading-relaxed text-gray-500'>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </section>
)
