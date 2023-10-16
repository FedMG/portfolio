'use client'

import { useModal } from '../../hooks'
import { Modal } from 'flowbite-react'

import { ProjectModalImage } from './Modalimage.project'
import { OpenModalIcon } from '../../assets'

import type { BaseComponentProps } from '@/app/modules/schemas'
import type { Project } from '@/app/modules/models'

type Props = {
  image: Project['image']
} & Pick<BaseComponentProps, 'className' | 'children'>

export const ProjectModal = ({ children, image: { src, alt }, className }: Props) => {
  const { close, open, isOpen } = useModal()

  return (
    <>
      <button role={'button'} aria-label='Click to open modal' onClick={open}>
        <OpenModalIcon className={className} />
      </button>

      <Modal show={isOpen === 'default'} onClose={close}>
        <Modal.Header>{children}</Modal.Header>
        <Modal.Body>
            <ProjectModalImage alt={alt} src={src} />
        </Modal.Body>
      </Modal>
    </>
  )
}





// // xl:max-w-[610px] lg:max-w-[595px] md:max-w-[550px] sm:max-w-[455px] xs:max-w-[400px] max-w-[410px]
// export const ProjectImage = ({ src, alt, quality = 40 }: Props) => (
//   <div className='relative aspect-[2/3] flex items-center from-white to-gray-300 bg-gradient-to-br h-full xl:max-w-[610px] lg:max-w-[595px] md:max-w-[550px] sm:max-w-[455px] xs:max-w-[400px] max-w-[410px] w-full'>
//     <Image
//       priority
//       sizes='100vw'
//       quality={quality}
//       fill
//       className='w-full h-auto  select-none overflow-hidden object-cover object-left-top'
//       src={src || '#placeholder'}
//       alt={alt || '#placeholder'}
//     />
//   </div>
// )
