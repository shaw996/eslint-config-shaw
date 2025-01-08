module.exports = {
  plugins: [
    'import',
    'prettier',
    'sort-destructure-keys',
    'sort-keys-fix',
    'unicorn',
    'unused-imports',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
  rules: {
    'import/no-duplicates': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],

    'no-console': 'warn',
    'no-unused-vars': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        minKeys: 2,
        natural: false,
        caseSensitive: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'unicorn/better-regex': 'error',
    'unicorn/prefer-node-protocol': 'error',
  },
};
