'use client'

import { useModal } from '../../hooks'
import { Modal } from 'flowbite-react'

import { ProjectModalImage } from './Modalimage.project'
import { OpenModalIcon } from '../../assets'

import type { BaseComponentProps } from '@/app/modules/schemas'
import type { Project } from '@/app/modules/models'

type Props = {
  title: JSX.Element
  image: Project['image']
} & Pick<BaseComponentProps, 'className' | 'children'>

export const ProjectModal = ({ children, title, image: { src, alt }, className }: Props) => {
  const { close, open, isOpen } = useModal()

  return (
    <>
      <button role={'button'} aria-label='Click to open modal' onClick={open}>
        <OpenModalIcon className={className} />
      </button>

      <Modal show={isOpen === 'default'} onClose={close}>
        <Modal.Header>
          <div className='w-full'>{title}</div>
        </Modal.Header>
        <Modal.Body>
          {/* <div className='flex items-center'> */}
          {/* <div className> */}
          <ProjectModalImage alt={alt} src={src} />
          {/* </div> */}
          {children}
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  )
}
