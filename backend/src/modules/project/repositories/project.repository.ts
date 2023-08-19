import { prismaInstance } from '@/database'
import { ProjectAdapter } from '../adapters'
import { BadRequestError, NotFoundError } from '@/errors'
import type { Project } from '@/modules/models'

class ProjectTools {
  private async setImage(image: Project['image']) {
    if (!image) return undefined

    const isThereImage = await prismaInstance.image.findFirst({ where: { src: image.src } })
    if (isThereImage)
      throw new BadRequestError('SRC value already exists, please enter another source image.')

    return { create: image }
  }

  private async setStack(technologies: string[]) {
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

  public async updateProject(id: number, updates: Project): Promise<Project | undefined> {
    const existingProduct = await this.projects.findUnique({
      where: { id },
      include: { image: true, links: true, stack: true }
    })
    if (!existingProduct) throw new NotFoundError(`Product with id ${id} has not been found`)

    // later make it dynamic
    const project = await this.projects.update({
      where: { id },
      include: { image: true, links: true, stack: true },
      data: await this.projectTool.getData(updates)
    })

    if (!project) return undefined
    return this.adaptOne(project)
  }

  public async deleteProject(id: number): Promise<void> {
    this.projects.delete({ where: { id } })
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    const project = await this.projects.findFirst({
      where: { id },
      include: { image: true, links: true, stack: true }
    })

    if (!project) return undefined
    return this.adaptOne(project)
  }

  public async getAllProjects(): Promise<Project[]> {
    const projects = await this.projects.findMany({
      include: { image: true, links: true, stack: true }
    })

    return this.adaptAll(projects)
  }
}
