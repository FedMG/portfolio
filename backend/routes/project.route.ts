import express from 'express'

import { ProjectRepository } from '@/repositories'
import { ProjectService } from '@/services'
import { ProjectController } from '@/controllers'

const projectRepository = new ProjectRepository()
const projectService = new ProjectService(projectRepository)
const projectController = new ProjectController(projectService)

const router = express.Router()

router.route('/').get(projectController.getAllProjects)

export { router }
