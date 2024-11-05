module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "@typescript-eslint",
        "sort-exports",
        "sort-keys-fix",
        "sort-imports-es6-autofix"
    ],
    "rules": {
        '@typescript-eslint/no-implicit-any': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'prefer-spread': 'off',
        'no-case-declarations': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        "@typescript-eslint/naming-convention": ["warn",
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'class',
                format: ['PascalCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },

            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },

            {
                selector: 'typeAlias',
                format: ['PascalCase'],
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase', 'camelCase'],
            },
            {
                selector: 'typeProperty',
                format: ['PascalCase', 'camelCase'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE']
            },
            {
                selector: 'enum',
                format: ['UPPER_CASE']
            },

            {
                selector: 'objectLiteralProperty',
                format: ['PascalCase', "camelCase"],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },

        ],
        "sort-imports-es6-autofix/sort-imports-es6": ["error", {
            "ignoreCase": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "sort-keys-fix/sort-keys-fix": ["error", "asc", {"caseSensitive": true, "natural": false}],
        "sort-exports/sort-exports": ["error", {"sortDir": "asc"}]

    },
    "overrides": [
        {
            "files": ["apps/*/src/config/**"],
            "rules": {
                "@typescript-eslint/naming-convention": ["warn",
                    {
                        selector: 'objectLiteralProperty',
                        format: ['UPPER_CASE',"snake_case", "camelCase"],
                        leadingUnderscore: 'allow',
                        trailingUnderscore: 'allow',
                    },
                ]
            }
        },
        {
            "files": ["**/*.json"],
            "rules": {
                "json/single-quotes": "error",
                "json/no-trailing-commas": "error"
            }
        }]
}
