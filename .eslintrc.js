module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    indent: 'off',
    'no-trailing-spaces': 'off',
    'react/prefer-stateless-function': 'off',
    'react/state-in-constructor': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
