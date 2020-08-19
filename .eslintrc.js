module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: ['error', 'never'],
    'vue/require-default-prop': ['error'],
    'no-console':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
