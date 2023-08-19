import { ProjectRepository } from '../repositories'
import type { Project } from '@/modules/models'

// later add implementations and the interface
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  // later implement validations
  public async createManyProject(project: Project[]): Promise<void> {
    return this.projectRepository.createManyProjects(project)
  }

  public async createProject(project: Project): Promise<Project> {
    return this.projectRepository.createProject(project)
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    return this.projectRepository.getProjectById(id)
  }

  public async updateProject(id: number, updatedProject: Project): Promise<Project | undefined> {
    return this.projectRepository.updateProject(id, updatedProject)
  }

  public async deleteProject(id: number): Promise<void> {
    return this.projectRepository.deleteProject(id)
  }

  public async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects()
  }
}
