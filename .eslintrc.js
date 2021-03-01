module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],

  plugins: ['import'],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'import/no-relative-parent-imports': 'error',
    'import/order': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 120,
        comments: 120,
      },
    ],
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      },
    ],
    'vue/valid-v-slot': 'error',
  },

  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
