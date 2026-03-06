import type { Project } from '@/types'
import proyOne1 from '@/assets/ProyOne-one.jpeg'
import proyOne2 from '@/assets/ProyOne-two.jpeg'
import proyOne3 from '@/assets/ProyOne-three.jpeg'
import proyOne4 from '@/assets/ProyOne-four.jpeg'
import proyOne5 from '@/assets/ProyOne-five.jpeg'
import proyOne6 from '@/assets/ProyOne-six.jpeg'
import proyOne7 from '@/assets/ProyOne-seven.jpeg'
import proyOne8 from '@/assets/ProyOne-eight.jpeg'
import proyTwo1 from '@/assets/ProyTwo-one.jpeg'
import proyTwo2 from '@/assets/ProyTwo-two.jpeg'
import proyTwo3 from '@/assets/ProyTwo-three.jpeg'
import proyTwo4 from '@/assets/ProyTwo-four.jpeg'
import proyTwo5 from '@/assets/ProyTwo-five.jpeg'
import proyTwo6 from '@/assets/ProyTwo-six.jpeg'
import proyTwo7 from '@/assets/ProyTwo-seven.jpeg'
import proyTwo8 from '@/assets/ProyTwo-eight.jpeg'
import proyThree1 from '@/assets/ProyThree-one.jpeg'
import proyThree2 from '@/assets/ProyThree-two.jpeg'
import proyThree3 from '@/assets/ProyThree-three.jpeg'
import proyThree4 from '@/assets/ProyThree-four.jpeg'
import proyThree5 from '@/assets/ProyThree-five.jpeg'
import proyThree6 from '@/assets/ProyThree-six.jpeg'
import proyThree7 from '@/assets/ProyThree-seven.jpeg'
import proyThree8 from '@/assets/ProyThree-eight.jpeg'
import proyThree9 from '@/assets/ProyThree-nine.jpeg'
import proyFour1 from '@/assets/ProyFour-one.jpeg'
import proyFour2 from '@/assets/ProyFour-two.jpeg'
import proyFour3 from '@/assets/ProyFour-three.jpeg'
import proyFour4 from '@/assets/ProyFour-four.jpeg'

export const projects: Project[] = [
  {
    id: 'edusmart',
    titleKey: 'edusmart',
    type: 'group',
    images: [
      proyOne1,
      proyOne2,
      proyOne3,
      proyOne4,
      proyOne5,
      proyOne6,
      proyOne7,
      proyOne8,
    ],
    technologies: [
      'Angular 17',
      'Bootstrap',
      'Angular Animations',
      'Material Design',
      'RxJS',
      'Spring Boot 3',
      'Spring Security',
      'JWT',
      'MariaDB',
      'DeepSeek',
      'GitHub Actions',
    ],
    contributionCount: 5,
    link: 'https://github.com/orgs/NovaSoftCENFOTEC/repositories',
  },
  {
    id: 'canela-vainilla',
    titleKey: 'canelaVainilla',
    type: 'group',
    images: [
      proyTwo1,
      proyTwo2,
      proyTwo3,
      proyTwo4,
      proyTwo5,
      proyTwo6,
      proyTwo7,
      proyTwo8,
    ],
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'AWS Amplify',
    ],
    contributionCount: 6,
    link: 'https://github.com/Pabloscode23/FrontendBakery',
  },
  {
    id: 'traffic-ticket',
    titleKey: 'trafficTicket',
    type: 'group',
    images: [
      proyThree1,
      proyThree2,
      proyThree3,
      proyThree4,
      proyThree5,
      proyThree6,
      proyThree7,
      proyThree8,
      proyThree9,
    ],
    technologies: [
      'React',
      'ASP.NET',
      'Entity Framework',
      'MSSQL',
      'CSS',
      'Git',
      'Azure DevOps',
      'Scrum',
    ],
    contributionCount: 6,
    link: 'https://github.com/Pabloscode23/.NetReact-CarTicketsApp',
  },
  {
    id: 'pokemon-battles',
    titleKey: 'pokemonBattles',
    type: 'group',
    images: [
      proyFour1,
      proyFour2,
      proyFour3,
      proyFour4,
    ],
    technologies: [
      'JavaScript',
      'EJS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
    ],
    contributionCount: 6,
    link: 'https://github.com/Pabloscode23/PokemonBattleUCENFOTEC.github.io',
  },
]
