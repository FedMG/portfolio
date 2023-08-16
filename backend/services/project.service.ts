import { ProjectRepository } from '@/repositories'
import type { Project } from '@/models'

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepository.getAllProjects()
  }
}
