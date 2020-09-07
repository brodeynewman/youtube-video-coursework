/* eslint-disable */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    './src/',
  ],

  setupTestFrameworkScriptFile: '<rootDir>setupTests.js',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    //  '**/?(*.)+(spec|test).js?(x)'
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
