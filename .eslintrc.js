const prettierConfig = require('./.prettierrc.js');

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'next/core-web-vitals',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        // Possible errors
        'no-console': 'warn',
        // Best practices
        'dot-notation': 'error',
        'no-else-return': 'error',
        'no-floating-decimal': 'error',
        'no-sequences': 'error',
        // Stylistic
        'array-bracket-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        curly: 'error',
        'max-len': [
            'error',
            {
                comments: 120,
                code: 581,
                ignorePattern: '^import\\W.*',
                ignoreTrailingComments: true,
            },
        ],
        'no-lonely-if': 'error',
        // 'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'one-var-declaration-per-line': 'error',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: false,
                avoidEscape: true,
            },
        ],

        // ES6
        'array-callback-return': 'off',
        'prefer-const': 'error',
        // Imports
        'import/prefer-default-export': 'off',
        'no-unused-expressions': 'off',
        // Using a lot of hasOwnProperty
        'no-prototype-builtins': 'off',
        // REACT
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/href-no-hash': [0],
        'react/display-name': 0,
        'react/no-deprecated': 'error',
        'react/no-unsafe': [
            'error',
            {
                checkAliases: true,
            },
        ],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        // Prettier
        // eslint looks for the prettier config at the top level of the package/app
        // but the config lives in the `config/` directory. Passing the config here
        // to get around this.
        'prettier/prettier': ['error', prettierConfig],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
