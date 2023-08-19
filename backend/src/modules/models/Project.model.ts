import type {
  Project as ProjectModel,
  Image as ImageModel,
  Link as LinkModel,
  Technology as TechnologiesModel
} from '@prisma/client'

// external
export type ProjectSchema = ProjectModel & {
  image: ImageModel | null
  links: LinkModel | null
  stack: TechnologiesModel[]
}

// internal
type Image = {
  src: string
  alt: string
}

type Link = {
  repository: string
  website?: string | null
}

export interface Project {
  id: number
  title: string
  image: Image | null
  links: Link | null
  description: string | null
  technologies: string[]
}
