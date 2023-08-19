import { BadRequestError } from '@/errors'
import { ProjectRepository } from '../repositories'
import type { Project } from '@/modules/models'
import { isArrayOfObjects, isNumber, isObject } from '@/utils'

// later add implementations and the interface
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  public async createManyProject(projects: Project[]): Promise<void> {
    if (!isArrayOfObjects(projects))
      throw new BadRequestError('Invalid arguments, must be an array of project object.')
    return await this.projectRepository.createManyProjects(projects)
  }

  public async createProject(payload: Project): Promise<Project> {
    if (!isObject(payload))
      throw new BadRequestError('Invalid argument, must be a valid project object.')
    const project = await this.projectRepository.createProject(payload)
    if (!project) throw new BadRequestError('There are invalid arguments in the project object.')
    return project
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    if (!isNumber(id)) throw new BadRequestError(`The value ${id} is not a number.`)
    const project = await this.projectRepository.getProjectById(id)
    return project
  }

  public async updateProject(id: number, updates: Project): Promise<Project | undefined> {
    if (!isNumber(id)) throw new BadRequestError(`The value ${id} is not a number.`)
    const project = await this.projectRepository.updateProject(id, updates)
    return project
  }

  public async deleteProject(id: number): Promise<void> {
    if (!isNumber(id)) throw new BadRequestError(`The value ${id} is not a number.`)
    return await this.projectRepository.deleteProject(id)
  }

  public async getAllProjects(): Promise<Project[]> {
    return await this.projectRepository.getAllProjects()
  }
}
