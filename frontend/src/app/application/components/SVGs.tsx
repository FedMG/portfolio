import type { FC, ReactElement } from 'react'
import type { BaseComponentProps } from '../schemas'
import type { AddDisplayName } from '@/utilities'

interface PathProps {
  d: string
}
interface TitleProps {
  title: string
}

type PathSVGType = AddDisplayName<({ d }: PathProps) => ReactElement>
type TitleSVGType = AddDisplayName<({ title }: TitleProps) => ReactElement>

interface NextSVGType<T> extends FC<T> {
  Path: PathSVGType
  Title: TitleSVGType
}

interface SVGElementProps extends BaseComponentProps {
  role: string
  viewBox: string
}

export const SVGElement: NextSVGType<SVGElementProps> = ({
  children,
  className,
  role,
  viewBox
}) => (
  <svg role={role} className={className} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
    {children}
  </svg>
)

const SVGPath: PathSVGType = ({ d }) => (
  <path d={d} strokeLinecap='round' strokeLinejoin='round' fillRule='evenodd' clipRule='evenodd' />
)
SVGPath.displayName = 'SVGElement.Path'
SVGElement.Path = SVGPath

const SVGTitle: TitleSVGType = ({ title }) => <title>{title}</title>
SVGTitle.displayName = 'SVGElement.Title'
SVGElement.Title = SVGTitle

export default SVGElement
