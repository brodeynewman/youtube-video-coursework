module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  errorOnDeprecated: true,
  resetMocks: true,
  roots: ['src'],
  testEnvironment: 'node',
}
