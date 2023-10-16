export interface GoToProps {
  children: React.ReactNode
  href: string
}

export const GoTo: React.FC<GoToProps> = ({ children, href = '#' }) => (
  <a href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)
