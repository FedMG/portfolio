import { ProjectImage } from './Image.project'
import { ProjectButtons } from './Buttons.project'
import { ProjectModal } from './Modal.project'

import type { Project } from '@/app/modules/models'
import type { BaseComponentProps } from '@/app/modules/schemas'

type Props = Pick<Project, 'image' | 'links'> &
  Pick<BaseComponentProps, 'children'> & {
    title: JSX.Element
  }

const STYLES_BUTTONS = 'w-7 h-7 z-20 fill-current text-black hover:text-[#764EF3] active:text-black'
// later reduce prop-drilling with a context
export const ProjectCard = ({ children, title, image, links }: Props): React.ReactElement => (
  <div className='group/card border w-full h-full shadow-md hover:shadow-lg rounded-sm hover:rounded-sm transition-transform transform duration-[100ms] easy-in-out hover:scale-[1.03] flex flex-col relative'>
    <ProjectImage src={image?.src} alt={image?.alt} />
    <ProjectButtons links={links} className={STYLES_BUTTONS}>
      <ProjectModal title={title} image={image} className={STYLES_BUTTONS}>
        {children}
      </ProjectModal>
    </ProjectButtons>
  </div>
)
