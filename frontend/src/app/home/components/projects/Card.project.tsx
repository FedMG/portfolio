import { ProjectImage } from './Image.project'
import { ProjectButtons } from './Buttons.project'
import { ProjectModal } from './Modal.project'

import type { Project } from '@/app/modules/models'
import type { BaseComponentProps } from '@/app/modules/schemas'

type Props = Pick<Project, 'image' | 'links'> & Pick<BaseComponentProps, 'children'>

const STYLES_BUTTONS = 'w-7 h-7 z-20 fill-current text-black hover:text-[#764EF3] active:text-black'

export const ProjectCard = ({ children, image, links }: Props): React.ReactElement => (
  <div className='group/card border w-full h-full shadow-sm hover:shadow-md rounded-sm hover:rounded-sm transition-transform transform duration-[100ms] easy-in-out hover:scale-[1.03] flex flex-col relative'>
    <ProjectImage src={image?.src} alt={image?.alt} />
    <ProjectButtons links={links} className={STYLES_BUTTONS}>
      <ProjectModal image={image} className={STYLES_BUTTONS}>{children}</ProjectModal>
    </ProjectButtons>
  </div>
)
