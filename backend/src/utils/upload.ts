import PrismaInstance from '@/database'
import projectsJSON from './projects.json'
import type { Project } from '@/models'

const start = async () => {
  try {
    const projectInstance = PrismaInstance.project

    const getData = async ({ image, links, technologies, ...rest }: Omit<Project, 'id'>) => {
      const setStack = async (technologies: string[]) => {
        if (!technologies) return undefined

        const mathedTechnologies = await PrismaInstance.technology.findMany({
          where: { name: { in: technologies } }
        })

        const technologyIDs: Record<string, number> = {}
        mathedTechnologies.forEach(({ name, id }) => {
          technologyIDs[name] = id
        })

        if (!mathedTechnologies || mathedTechnologies.length <= 0) {
          return {
            create: technologies.map(name => ({ name }))
          }
        }

        return {
          connect: technologies.map(name => ({ id: technologyIDs[name] }))
        }
      }

      return {
        ...rest,
        image: {
          create: image ?? undefined
        },
        links: {
          create: links ?? undefined
        },
        stack: await setStack(technologies)
      }
    }

    await Promise.all(
      projectsJSON.map(async project => {
        await projectInstance.create({
          data: await getData(project)
        })
      })
    )

    console.log('Success')
    process.exit(0)
  } catch (error) {
    console.error('Save data failed', { cause: error })
    process.exit(1)
  }
}

start()
