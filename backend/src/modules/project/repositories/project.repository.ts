import { prismaInstance } from '@/database'
import { ProjectAdapter } from '../adapters'
import { BadRequestError, NotFoundError } from '@/errors'
import type { Project } from '@/modules/models'

class ProjectTools {
  private async setImage(image: Project['image']) {
    if (!image) return undefined

    const isThereImage = await prismaInstance.image.findUnique({ where: { src: image.src } })
    if (isThereImage)
      throw new BadRequestError('SRC value already exists, please enter another source image.')

    return { create: image }
  }

  // later FIX: There is a error wht the connect relations
  public async setStack(technologies: string[]) {
    if (!technologies) return undefined

    // find matches technologies and fetch them
    const mathedTechnologies = await prismaInstance.technology.findMany({
      where: { name: { in: technologies } }
    })

    if (!mathedTechnologies || mathedTechnologies.length <= 0) {
      return { create: technologies.map(name => ({ name })) }
    }

    // create a map with ids for each technology
    const technologyIDs: Record<string, number> = {}
    mathedTechnologies.forEach(({ name, id }) => {
      technologyIDs[name] = id
    })

    return { connect: technologies.map(name => ({ id: technologyIDs[name] })) }
  }

  async getData({ image, links, technologies, ...rest }: Project) {
    return {
      ...rest,
      image: await this.setImage(image),
      links: { create: links ?? undefined },
      stack: await this.setStack(technologies)
    }
  }
}

export class ProjectRepository extends ProjectAdapter {
  private projects = prismaInstance.project
  private projectTool: ProjectTools

  constructor() {
    super()
    this.projectTool = new ProjectTools()
  }

  public async createManyProjects(newProjects: Project[]): Promise<void> {
    await Promise.all(
      newProjects.map(async project => {
        await this.projects.create({
          data: await this.projectTool.getData(project)
        })
      })
    )
  }

  public async createProject(newProject: Project): Promise<Project> {
    const project = await this.projects.create({
      include: { image: true, links: true, stack: true },
      data: await this.projectTool.getData(newProject)
    })

    return this.adaptOne(project)
  }

  public async updateProject(id: number, updates: Project): Promise<Project> {
    const project = await this.projects.findUnique({ where: { id } })
    if (!project) throw new NotFoundError(`Project with id ${id} was not found.`)

    // later find a better way to do this maybe with OnUpdate
    const imageOnDB = await prismaInstance.image.findUnique({ where: { id } })
    const linkOnDB = await prismaInstance.link.findUnique({ where: { id } })
    const { technologies, image, links, ...rest } = updates

    const isImage = imageOnDB ? { alt: imageOnDB.alt, src: imageOnDB.src } : undefined
    const isLink = linkOnDB
      ? { website: linkOnDB.website, repository: linkOnDB.repository }
      : undefined

    const data = {
      stack: await this.projectTool.setStack(technologies),
      image: { update: image ?? isImage },
      links: { update: links ?? isLink },
      ...rest
    }

    const updatedProject = await this.projects.update({
      where: { id },
      include: { image: true, links: true, stack: true },
      data
    })

    return this.adaptOne(updatedProject)
  }

  public async deleteProject(id: number): Promise<void> {
    const project = await this.projects.findUnique({ where: { id } })
    if (!project) throw new NotFoundError(`Project with id ${id} was not found.`)

    await this.projects.delete({ where: { id } })
  }

  public async getProjectById(id: number): Promise<Project> {
    const project = await this.projects.findUnique({
      where: { id },
      include: { image: true, links: true, stack: true }
    })
    if (!project) throw new NotFoundError(`Project with id ${id} was not found.`)

    return this.adaptOne(project)
  }

  public async getAllProjects(): Promise<Project[]> {
    const projects = await this.projects.findMany({
      include: { image: true, links: true, stack: true }
    })
    if (!projects) throw new NotFoundError(`There are not projects.`)

    return this.adaptAll(projects)
  }
}
