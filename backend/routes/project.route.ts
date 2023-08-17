import express from 'express'

// import { apiKeyLayer } from '@/middlewares'

import { ProjectRepository } from '@/repositories'
import { ProjectService } from '@/services'
import { ProjectController } from '@/controllers'

const projectRepository = new ProjectRepository()
const projectService = new ProjectService(projectRepository)
const {
  getAllProjects,
  getProjectById
  /* createProject */
} = new ProjectController(projectService)

const router = express.Router()

router.route('/').get(getAllProjects) /*.post(apiKeyLayer, createProject) */
router.route('/:id').get(getProjectById)

export { router }
