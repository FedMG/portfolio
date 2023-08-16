import { ProjectService } from '@/services'
import type { Request, Response } from 'express'

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  async getAllProjects(_req: Request, res: Response): Promise<void> {
    try {
      const projects = await this.projectService.getAllProjects()
      res.json(projects)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}
