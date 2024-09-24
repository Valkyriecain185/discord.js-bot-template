/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(t|j)s?$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  preset: '@swc/jest',
};
