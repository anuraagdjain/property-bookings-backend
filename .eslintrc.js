module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-var': 'error',
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { ignoreUrls: true, code: 120, tabWidth: 2 }],
    'prettier/prettier': ['error']
  },
  globals: {
    I18n: true
  }
}
