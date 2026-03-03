export interface Certification {
  id: string
  credentialUrl: string
}

export const CERTIFICATION_IDS = ['scrum', 'freecodecamp', 'efset', 'udemy', 'udacity'] as const

export const certifications: Certification[] = [
  { id: 'scrum', credentialUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1023375' },
  { id: 'freecodecamp', credentialUrl: 'https://www.freecodecamp.org/certification/pabloscode23/javascript-algorithms-and-data-structures' },
  { id: 'efset', credentialUrl: 'https://cert.efset.org/oz3QtY' },
  { id: 'udemy', credentialUrl: 'https://www.udemy.com/certificate/UC-0e1c9996-d4d6-4788-9ad4-7d46a36bfa29/' },
  { id: 'udacity', credentialUrl: 'https://www.udacity.com/certificate/e/48cabf9a-e362-11eb-86b0-9731b9ded024' },
]
