import type { Project, ProjectSchema } from '@/models'

export class ProjectAdapter {
  adaptAll(response: ProjectSchema[]): Project[] {
    return response.map(({ id, title, finished, description, image, links }) => ({
      id,
      title,
      description,
      finished: finished,
      image: {
        alt: image?.alt,
        src: image?.src
      },
      links: {
        repository: links?.repository,
        website: links?.website
      }
    }))
  }
}
