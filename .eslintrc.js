module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
    'unused-imports'
  ],
  rules: {
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'camelcase': ['error', { 'properties': 'always' }],
    'semi': [2, 'never'],
    'no-console': 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/max-attributes-per-line': 'off',
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': 1
  }
}
