import nextJest from 'next/jest.js'

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
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
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
export default createJestConfig(customJestConfig)
