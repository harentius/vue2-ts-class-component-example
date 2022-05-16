module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-useless-constructor': 'off',
    'no-restricted-imports': ['error', {
      patterns: ['**/modules/*/**']
    }]
  },
}
