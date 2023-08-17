import PrismaInstance from '@/database'
import { ProjectAdapter } from './adapters'

import type { Project } from '@/models'

class ProjectTools {
  private async setStack(technologies: string[]) {
    if (!technologies) return undefined

    // find matches technologies and fetch them
    const mathedTechnologies = await PrismaInstance.technology.findMany({
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
      image: { create: image ?? undefined },
      links: { create: links ?? undefined },
      stack: await this.setStack(technologies)
    }
  }
}

export class ProjectRepository extends ProjectAdapter {
  private projects = PrismaInstance.project
  private projectTool: ProjectTools

  constructor() {
    super()
    this.projectTool = new ProjectTools()
  }

  async createManyProjects(newProjects: Project[]): Promise<void> {
    await Promise.all(
      newProjects.map(async project => {
        await this.projects.create({
          data: await this.projectTool.getData(project)
        })
      })
    )
  }

  async createProject(newProject: Project): Promise<Project> {
    const project = await this.projects.create({
      include: { image: true, links: true, stack: true },
      data: await this.projectTool.getData(newProject)
    })

    return this.adaptOne(project)
  }

  async updateProject(id: number, updatedProject: Project): Promise<Project | undefined> {
    const project = await this.projects.update({
      where: { id },
      include: { image: true, links: true, stack: true },
      data: await this.projectTool.getData(updatedProject)
    })

    if (!project) return undefined
    return this.adaptOne(project)
  }

  async deleteProject(id: number): Promise<void> {
    this.projects.delete({ where: { id } })
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const project = await this.projects.findFirst({
      where: { id },
      include: { image: true, links: true, stack: true }
    })

    if (!project) return undefined
    return this.adaptOne(project)
  }

  async getAllProjects(): Promise<Project[]> {
    const projects = await this.projects.findMany({
      include: { image: true, links: true, stack: true }
    })
    return this.adaptAll(projects)
  }
}
