module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'json',
    'jsx-a11y',
    'prettier',
    'react',
    'react-hooks',
    'eslint-plugin-import',
    'eslint-plugin-simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'prettier',
    'prettier/react',
  ],
  rules: {
    semi: 'off',
    'babel/semi': ['error', 'always'],
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
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
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
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
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
  ],
};
