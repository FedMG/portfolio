import { StatusCodes } from 'http-status-codes'
import { ProjectService } from '@/services'
import { BadRequestError, NotFoundError } from '@/errors'

import type { Request, Response } from 'express'

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  async createManyProject(req: Request, res: Response): Promise<void> {
    await this.projectService.createManyProject(req.body)
    res.sendStatus(StatusCodes.NO_CONTENT)
  }

  async createProject(req: Request, res: Response): Promise<void> {
    const newProject = await this.projectService.createProject(req.body)
    if (!newProject) throw new BadRequestError('There are invalid arguments.')

    res.status(StatusCodes.OK).json(newProject)
  }

  async getProjectById(req: Request, res: Response): Promise<void> {
    const projectId = Number(req.params.id)
    const project = await this.projectService.getProjectById(projectId)
    if (!project) throw new NotFoundError('Project not found')

    res.status(StatusCodes.OK).json(project)
  }

  async updateProject(req: Request, res: Response): Promise<void> {
    const projectId = Number(req.params.id)
    const updatedProject = req.body
    const project = await this.projectService.updateProject(projectId, updatedProject)
    if (!project) throw new NotFoundError('Project not found')

    res.status(StatusCodes.OK).json(project)
  }

  async deleteProject(req: Request, res: Response): Promise<void> {
    const projectId = Number(req.params.id)
    await this.projectService.deleteProject(projectId)

    res.sendStatus(StatusCodes.NO_CONTENT)
  }

  async getAllProjects(_req: Request, res: Response): Promise<void> {
    const projects = await this.projectService.getAllProjects()

    res.status(StatusCodes.OK).json(projects)
  }
}
