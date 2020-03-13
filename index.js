module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'jubic'
  ],
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'rules': {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    "semi": "off",
    "@typescript-eslint/semi": ["error"]
  }
}
