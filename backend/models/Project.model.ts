import type {
  Project as ProjectModel,
  Image as ImageModel,
  Link as LinkModel
} from '@prisma/client'

// external
export type ProjectSchema = ProjectModel & {
  image: ImageModel | null
  links: LinkModel | null
}

// internal
type Image = {
  src: string
  alt: string
}

type Link = {
  repository: string
  website: string
}

export interface Project {
  id: number
  title: string
  image: Partial<Image>
  links: Partial<Link>
  description: string | null
  finished: boolean
}
