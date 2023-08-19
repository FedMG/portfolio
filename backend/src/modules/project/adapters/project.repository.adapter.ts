import type { Project, ProjectSchema } from '@/modules/models'

class Adapter {
  // must be privated
  public adapter(project: ProjectSchema): Project {
    const { id, title, description, stack, image, links } = project
    const getStack = (stack: ProjectSchema['stack']) => stack.map(({ name }) => name)
    const technologies = stack?.length > 0 ? getStack(stack) : ['']

    const _image = image && {
      alt: image.alt,
      src: image.src
    }

    const _links = links && {
      repository: links.repository,
      website: links.website
    }

    return {
      id,
      title,
      description,
      technologies,
      image: _image,
      links: _links
    }
  }
}

export class ProjectAdapter extends Adapter {
  public adaptOne(response: ProjectSchema): Project {
    return this.adapter(response)
  }

  public adaptAll(response: ProjectSchema[]): Project[] {
    return response.map(this.adapter)
  }
}
