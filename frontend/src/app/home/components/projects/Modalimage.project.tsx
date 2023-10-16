import Image from 'next/image'
import type { Project } from '@/app/modules/models'

type Props = Project['image']

export const ProjectModalImage = ({ src, alt }: Props) => (
  <div className='relative aspect-[3/2] flex items-center h-full w-auto'>
    <Image
      priority
      sizes='100vw'
      quality={50}
      fill
      className='h-full w-auto select-none object-contain object-left-top'
      src={src || '#placeholder'}
      alt={alt || '#placeholder'}
    />
  </div>
)
