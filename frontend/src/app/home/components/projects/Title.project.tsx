import { BaseComponentProps } from '@/app/modules/schemas'

type Props = Partial<Pick<BaseComponentProps, 'children' | 'className'>>

export const ProjectTitle = ({ children, className }: Props) => (
  <div>
    <div className={`w-full truncate ${className} pb-1`}>
      <h2 className='text-gray-800 font-bold capitalize leading-normal max-md:text-md max-lg:text-lg lg:text-2xl'>
        {children}
      </h2>
    </div>
  </div>
)
