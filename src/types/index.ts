export interface NavItem {
  id: string
  labelKey: string
  href: string
}

export interface Project {
  id: string
  titleKey: string
  technologies: string[]
  link?: string
  type: 'individual' | 'group'
  images: string[]
  contributionCount: number
}
