import Image from 'next/image'
import type { Project } from '@/app/modules/models'

type Props = Project['image'] & {
  quality?: number
}

export const ProjectImage = ({ src, alt, quality = 40 }: Props) => (
  <div className='relative aspect-[2/3] flex items-center from-white to-gray-300 bg-gradient-to-br h-full xl:max-w-[610px] lg:max-w-[595px] md:max-w-[550px] sm:max-w-[455px] xs:max-w-[400px] max-w-[410px]'>
    <Image
      priority
      sizes='100vw'
      quality={quality}
      fill
      className='w-full h-auto  select-none overflow-hidden object-cover object-left-top'
      src={src || '#placeholder'}
      alt={alt || '#placeholder'}
    />
  </div>
)
