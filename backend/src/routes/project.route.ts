
import express from 'express'

// import { apiKeyLayer } from '@/middlewares'

import { ProjectRepository } from '@/modules/project/repositories'
import { ProjectService } from '@/modules/project/services'
import { ProjectController } from '@/modules/project/controllers'

const projectRepository = new ProjectRepository()
const projectService = new ProjectService(projectRepository)
const projectController = new ProjectController(projectService)

const router = express.Router()

// apiKeyLayer
router
  .route('/')
  .get(projectController.getAllProjects.bind(projectController))
  // .post(apiKeyLayer, projectController.createProject.bind(projectController))

router
  .route('/:id')
  .get(projectController.getProjectById.bind(projectController))
  // .patch(apiKeyLayer, projectController.updateProject.bind(projectController))
  // .delete(apiKeyLayer, projectController.deleteProject.bind(projectController))

export { router }
