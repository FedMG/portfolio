type Techs =  { [key: string]:  { name: string, color: string } }

export const TECHS: Techs = Object.freeze({
  html5: {
    name: 'HTML5',
    color: 'bg-[#E34F26]'
  },
  javascript: {
    name: 'Javascript',
    color: 'bg-[#F7DF1E]'
  },
  nodejs: {
    name: 'NodeJS',
    color: 'bg-[#339933]'
  },
  typescript: {
    name: 'Typescript',
    color: 'bg-[#3178C6]'
  },
  'testing library': {
    name: 'Testing Library',
    color: 'bg-[#E33332]'
  },
  jest: {
    name: 'Jest',
    color: 'bg-[#C21325]'
  },
  express: {
    name: 'Express',
    color: 'bg-[#000000]'
  },
  mongodb: {
    name: 'MongoDB',
    color: 'bg-[#47A248]'
  },
  mongoose: {
    name: 'Mongoose',
    color: 'bg-[#800]'
  },
  'styled components': {
    name: 'Styled components',
    color: 'bg-[#DB7093]'
  },
  tailwind: {
    name: 'Tailwind',
    color: 'bg-[#06B6D4]'
  },
  postgresql: {
    name: 'PostgreSQL',
    color: 'bg-[#4169E1]'
  },
  prisma: {
    name: 'Prisma',
    color: 'bg-[#2D3748]'
  },
  'next.js': {
    name: 'Next.js',
    color: 'bg-[#000000]'
  },
  'next-auth': {
    name: 'Next-Auth',
    color: 'bg-[#a553b3]'
  },
  jwt: {
    name: 'JWT',
    color: 'bg-[#000000]'
  },
  redis: {
    name: 'Redis',
    color: 'bg-[#DC382D]'
  },
  python: {
    name: 'Python',
    color: 'bg-[#3776AB]'
  },
  aws: {
    name: 'AWS',
    color: 'bg-[#232F3E]'
  }

})

// const formattedTECHS = {};

// for (const key in TECHS) {
//   formattedTECHS[key.toLowerCase()] = {
//     name: key,
//     color: TECHS[key],
//   };
// }
