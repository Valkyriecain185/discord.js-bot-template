module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --ignore-unknown --write',
    'turbo run typecheck',
  ],
  '*.{md,json,yaml,html,css}': 'prettier --write',
};
