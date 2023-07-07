const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // ignore files in __tests__ directory
  verbose: 'true',
  modulePathIgnorePatterns: [''],
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',    
  },
  // collectCoverage: true,
  // skipFull - hide coverage report lines for all fully-covered files
  // coverageReporters: ['clover', 'json', 'lcov', ['text', {skipFull: true}]],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*types.d.ts",
    "!src/**/*schemas.d.ts",
    "!src/**/*index.ts",
    "!src/index.ts",
  ],
  testEnvironment: 'jest-environment-jsdom',
  // snapshotSerializers: ['<rootDir>/src/snapshotSerializer.ts']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)