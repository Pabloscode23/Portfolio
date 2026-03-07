export type ExperienceKey = 'tradestation' | 'factork'

export interface ExperienceItem {
  id: ExperienceKey
  startDate: { year: number; month: number }
  endDate: { year: number; month: number } | null
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'tradestation',
    startDate: { year: 2025, month: 5 },
    endDate: null,
    technologies: [
      'Angular 20',
      '.NET 8',
      '.NET Framework',
      'AngularJS',
      'Visual Basic',
      'Docker',
      'Retool',
      'GitLab',
      'Octopus Deploy',
      'Jira',
      'Scrum',
      'IIS',
    ],
  },
  {
    id: 'factork',
    startDate: { year: 2025, month: 1 },
    endDate: { year: 2025, month: 4 },
    technologies: [
      'React Native',
      '.NET Core',
      'C#',
      'Scrum',
      'Git',
      'Azure DevOps',
    ],
  },
]

function totalMonths(
  start: { year: number; month: number },
  end: { year: number; month: number } | null
): number {
  const endRef = end ?? { year: new Date().getFullYear(), month: new Date().getMonth() + 1 }
  return (endRef.year - start.year) * 12 + (endRef.month - start.month) + 1
}

export function getDuration(item: ExperienceItem): { years: number; months: number } {
  const months = totalMonths(item.startDate, item.endDate)
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  return { years, months: remainingMonths }
}

export function formatDuration(
  item: ExperienceItem,
  t: (key: string, opts?: { count?: number }) => string
): string {
  const { years, months } = getDuration(item)
  const parts: string[] = []
  if (years > 0) {
    parts.push(years === 1 ? t('about.durationYear') : t('about.durationYears', { count: years }))
  }
  if (months > 0) {
    parts.push(months === 1 ? t('about.durationMonth') : t('about.durationMonths', { count: months }))
  }
  if (parts.length === 0) {
    return t('about.durationLessThanMonth')
  }
  return parts.join(' ')
}
