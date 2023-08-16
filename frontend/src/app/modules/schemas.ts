export type Children = Pick<BaseComponentProps, 'children'>

export interface BaseComponentProps {
  children: React.ReactNode
  className: string
}
