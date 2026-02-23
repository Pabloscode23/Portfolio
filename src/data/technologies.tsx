import type { IconType } from 'react-icons'
import {
  SiAngular,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiSharp,
  SiPython,
  SiJest,
  SiPostman,
  SiSwagger,
  SiMongodb,
  SiAmazondynamodb,
  SiMariadb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiAmazon,
} from 'react-icons/si'
import { DiHtml5, DiCss3, DiJava } from 'react-icons/di'
import { FaDatabase, FaCode, FaMicrosoft } from 'react-icons/fa'

export interface TechItem {
  name: string
  icon: IconType
  color: string
  /** Color for light mode (e.g. when the default color has poor contrast on light backgrounds) */
  colorLight?: string
}

export interface TechCategory {
  id: string
  items: TechItem[]
}

function t(name: string, icon: IconType, color: string, colorLight?: string): TechItem {
  return colorLight ? { name, icon, color, colorLight } : { name, icon, color }
}

export const technologyCategories: TechCategory[] = [
  {
    id: 'frontend',
    items: [
      t('Angular', SiAngular, '#DD0031'),
      t('React Native', SiReact, '#61DAFB'),
      t('React', SiReact, '#61DAFB'),
      t('Redux', SiRedux, '#764ABC'),
      t('Tailwind', SiTailwindcss, '#06B6D4'),
      t('Bootstrap', SiBootstrap, '#7952B3'),
      t('CSS', DiCss3, '#1572B6'),
      t('HTML', DiHtml5, '#E34F26'),
      t('EJS', SiJavascript, '#F7DF1E'),
    ],
  },
  {
    id: 'backend',
    items: [
      t('.NET Framework', SiDotnet, '#512BD4'),
      t('Entity Framework', SiDotnet, '#512BD4'),
      t('Spring Boot', SiSpringboot, '#6DB33F'),
      t('Node.js', SiNodedotjs, '#339933'),
      t('Express.js', SiExpress, '#E8E8E8', '#303030'),
      t('.NET Core', SiDotnet, '#512BD4'),
    ],
  },
  {
    id: 'languages',
    items: [
      t('TypeScript', SiTypescript, '#3178C6'),
      t('JavaScript', SiJavascript, '#F7DF1E'),
      t('C#', SiSharp, '#239120'),
      t('Java', DiJava, '#ED8B00'),
      t('Python', SiPython, '#3776AB'),
    ],
  },
  {
    id: 'testing',
    items: [
      t('Jest', SiJest, '#C21325'),
      t('React Testing Library', SiReact, '#61DAFB'),
      t('Unit Testing', FaCode, '#94a3b8'),
      t('Postman', SiPostman, '#FF6C37'),
      t('Swagger', SiSwagger, '#85EA2D'),
      t('Insomnia', SiPostman, '#5849BE'),
    ],
  },
  {
    id: 'databases',
    items: [
      t('SQL', FaDatabase, '#4479A1'),
      t('MongoDB', SiMongodb, '#47A248'),
      t('DynamoDB', SiAmazondynamodb, '#4053D6'),
      t('MariaDB', SiMariadb, '#003545'),
      t('Firestore', SiFirebase, '#FFCA28'),
    ],
  },
  {
    id: 'versionControl',
    items: [
      t('Git', SiGit, '#F05032'),
      t('GitHub', SiGithub, '#f0f0f0', '#181717'),
      t('GitLab', SiGitlab, '#FC6D26'),
      t('Azure DevOps', FaMicrosoft, '#0078D4'),
      t('Bitbucket', SiBitbucket, '#0052CC'),
    ],
  },
  {
    id: 'cloud',
    items: [
      t('Firebase (Auth, Storage)', SiFirebase, '#FFCA28'),
      t('AWS (Lambda, API Gateway, Amplify)', SiAmazon, '#FF9900'),
    ],
  },
]
