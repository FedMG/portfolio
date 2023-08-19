import { StatusCodes } from 'http-status-codes'
import { ProjectService } from '../services'

import type { Request, Response } from 'express'

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  public async createManyProject(req: Request, res: Response): Promise<void> {
    await this.projectService.createManyProject(req.body)
    res.sendStatus(StatusCodes.NO_CONTENT)
  }

  public async createProject(req: Request, res: Response): Promise<void> {
    const project = await this.projectService.createProject(req.body)
    res.status(StatusCodes.OK).json(project)
  }

  public async getProjectById(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const projectId = parseInt(id)
    const project = await this.projectService.getProjectById(projectId)
    res.status(StatusCodes.OK).json(project)
  }

  public async updateProject(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const updates = req.body
    const projectId = parseInt(id)
    const project = await this.projectService.updateProject(projectId, updates)
    res.status(StatusCodes.OK).json(project)
  }

  public async deleteProject(req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const projectId = parseInt(id)
    await this.projectService.deleteProject(projectId)
    res.sendStatus(StatusCodes.NO_CONTENT)
  }

  public async getAllProjects(_req: Request, res: Response): Promise<void> {
    const projects = await this.projectService.getAllProjects()
    res.status(StatusCodes.OK).json(projects)
  }
}
