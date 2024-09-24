/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: { node: true },
  extends: ['eslint:recommended', 'prettier'],
  ignorePatterns: ['node_modules/', 'dist/', 'tooling/', 'packages/', 'apps/'],
};
