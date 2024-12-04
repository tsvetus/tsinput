/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: 'babel',
  rootDir: './test',
  testMatch: ['**/test/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.jsx$': ['babel-jest', { rootMode: 'upward' }],
    '^.+\\.js$': ['babel-jest', { rootMode: 'upward' }],
    '^.+\\.tsx$': ['babel-jest', { rootMode: 'upward' }],
    '^.+\\.ts$': ['babel-jest', { rootMode: 'upward' }]
  }
}

export default config
