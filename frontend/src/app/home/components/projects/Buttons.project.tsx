import { GoTo } from '@/app/modules/components'
import { GithubIcon, GoToWebIcon } from '../../assets'

import type { Project } from '@/app/modules/models'
import type { BaseComponentProps } from '@/app/modules/schemas'

import { STYLES } from './styles.project'

type Props = Pick<Project, 'links'> & Pick<BaseComponentProps, 'className' | 'children'>

export const ProjectButtons: React.FC<Props> = ({
  className,
  children,
  links: { repository, website }
}) => (
  <span
    className={`absolute top-0 right-0 z-20  p-1 pt-2  flex flex-col gap-y-2  ${STYLES?.primary?.bg?.color} ${STYLES?.secondary?.bg?.groupHover} rounded-bl-md border-l border-b shadow-b shadow-l`}>
    {children}

    {website && (
      <GoTo href={website || '#'}>
        <GoToWebIcon className={className} />
      </GoTo>
    )}

    <GoTo href={repository || '#'}>
      <GithubIcon className={className} />
    </GoTo>
  </span>
)
