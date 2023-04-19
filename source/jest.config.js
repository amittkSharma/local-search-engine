module.exports = function (name) {
  return {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).js?(x)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverage: true,
    displayName: name,
    reporters: [
      'default',
      [
        'jest-junit',
        {
          suiteName: name,
          outputDirectory: '../test-results',
          outputName: `${name}.report.xml`,
        },
      ],
    ],
    testPathIgnorePatterns: [
      '<rootDir>/build/',
      '<rootDir>/node_modules/',
      '<rootDir>/src/_tests_/common',
    ],
  }
}
