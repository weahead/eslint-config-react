module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    'babel',
    'jsx-a11y',
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
  ],
  rules: {
    semi: 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/boolean-prop-naming': 'error',
    'react/no-array-index-key': 'error',
    'react/no-set-state': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/require-default-props': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': 'warn',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-bind': [
      'error',
      { allowArrowFunctions: true, allowFunctions: true },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Select', 'Input', 'TextArea', 'Textarea'],
        depth: 3,
      },
    ],
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/export': 'error',
    'import/no-mutable-exports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  overrides: [
    {
      files: 'api/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/sort': 'off',
        'import/order': ['error', { 'newlines-between': 'always' }],
      },
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
