import { ProjectRepository } from '@/repositories'
import type { Project } from '@/models'

// later add implementations and the interface
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  // later implement validations
  async createManyProject(project: Project[]): Promise<void> {
    return this.projectRepository.createManyProjects(project)
  }

  async createProject(project: Project): Promise<Project> {
    return this.projectRepository.createProject(project)
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projectRepository.getProjectById(id)
  }

  async updateProject(id: number, updatedProject: Project): Promise<Project | undefined> {
    return this.projectRepository.updateProject(id, updatedProject)
  }

  async deleteProject(id: number): Promise<void> {
    return this.projectRepository.deleteProject(id)
  }

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects()
  }
}
