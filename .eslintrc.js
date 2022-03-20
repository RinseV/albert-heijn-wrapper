module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: ['airbnb-typescript/base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/quotes': [0, 'double'],
        'max-len': ['error', { code: 160 }],

        radix: 'off',
        'no-underscore-dangle': 'off',
        'no-restricted-syntax': 'warn',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        quotes: 'off',
        'linebreak-style': 0,
        'no-plusplus': 'off',
        'prettier/prettier': 'error',

        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off'
    }
};
