type Links = {
  repository: string
  website?: string
}

type Image = {
  alt: string
  src: string
}

export interface EndpointProject {
  id: number
  title: string
  description: string
  technologies: string[]
  image: Image
  links: Links
}

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  image: Image
  links: Links
}
