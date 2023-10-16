import { TECHS } from './skills.project'
import type { Project } from '@/app/modules/models'

type Props = {
  technologies: Project['techStack']
}

export const BadgesTechnologies = ({ technologies }: Props) => (
  <div className='flex flex-wrap gap-1'>
    {technologies.map(technology => (
      <span
        key={technology}
        className={`text-sm xl:text-md border ${
          TECHS[technology.toLowerCase()]?.color ?? 'bg-slate-900'
        } font-medium text-white p-1 rounded-xl shadow transition-transform duration-300 ease-in-out hover:translate-y-1`}>
        {technology}
      </span>
    ))}
  </div>
)
