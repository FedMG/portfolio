import Prisma from '@/database'
import { ProjectAdapter } from './adapters'

import type { Project } from '@/models'

export class ProjectRepository extends ProjectAdapter {
  private projects = Prisma.project

  async getAllProjects(): Promise<Project[]> {
    const response = await this.projects.findMany({ include: { image: true, links: true } })
    return this.adaptAll(response)
  }
}
