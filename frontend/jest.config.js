const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

const customJestConfig = {
  // verbose: true,
  // snapshotSerializers: ['<rootDir>/src/snapshotSerializer.ts']
  // modulePathIgnorePatterns: [''],
  // moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  // collectCoverage: true,
  // skipFull - hide coverage report lines for all fully-covered files
  // coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    // NOTE: if you update tsconfig path patterns, also update this patterns!

    // string pattern
    // '^@/(.*)$': '<rootDir>/src/$1',

    // string[] pattern
    '^@/(.*)$': ['<rootDir>/src/$1', '<rootDir>/src/app/$1', '<rootDir>/src/app/modules/$1']
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/layout.tsx',
    '!src/**/*.d.ts',
    '!src/**/*types.ts',
    '!src/**/*.ref.ts',
    '!src/**/*{types,schemas,utilities}.(ts|d).ts',
    '!src/**/*index.ts',
    '!src/index.ts'
  ],
  testEnvironment: 'jest-environment-jsdom'
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
