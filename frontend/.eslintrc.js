module.exports = {
  // rules that applies to global project
  // plugins: ["testing-library", "jest"],
  root: true,
  extends: ['next/core-web-vitals'],
  rules: {},
  overrides: [
    {
      // rules that applies to specific files
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['testing-library', 'jest'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/no-standalone-expect': 'warn',
        'jest/valid-title': 'warn',
        'jest/no-large-snapshots': 'warn',
        'jest/no-deprecated-functions': 'warn',
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off'
      }
    }
  ]
}
