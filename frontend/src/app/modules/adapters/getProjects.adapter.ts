import type { EndpointProject, Project } from '../models'

class Adapter {
  public adapter(project: EndpointProject): Project {
    const { id, title, description, technologies, image, links } = project

    const _image = image && {
      alt: image?.alt,
      src: image?.src
    }

    const _links = links && {
      repository: links?.repository,
      website: links?.website
    }

    return {
      id,
      title,
      description,
      image: _image,
      links: _links,
      'tech-stack': technologies
    }
  }
}


class ProjectAdapter extends Adapter {
  public adaptAll(response: EndpointProject[]): Project[] {
    return response.map(this.adapter)
  }
}

export const adapter = new ProjectAdapter()
