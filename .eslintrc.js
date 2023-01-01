module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'testing-library'],
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {},
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
    },
    {
      // use Cypress lint rules in Cypress test files
      files: ['cypress/**/?(*.)+(spec|test).[jt]s?(x)', 'cypress/support/*'],
      extends: ['plugin:cypress/recommended'],
      env: { 'cypress/globals': true },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
