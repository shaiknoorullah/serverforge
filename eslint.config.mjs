import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"),
    {
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js','.jsx','.ts','.tsx']
                }
            },
            typescript: {
                alwaysTryTypes:true,
                project:'./tsconfig.eslint.json'
            },
        },

        plugins: {
            "@typescript-eslint": typescriptEslint,
            import: fixupPluginRules(_import),
            promise,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.commonjs,
            },

            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: "commonjs",

            parserOptions: {
                project: "./tsconfig.eslint.json",
            },
        },

        rules: {
            "import/first": "error",
            "import/newline-after-import": "off",
            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-unresolved": "error",
            '@typescript-eslint/no-unused-expressions': 'off',
            "import/no-cycle": "error",

            "import/order": ["off", {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",

                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            }],

            "promise/always-return": "error",
            "promise/no-return-wrap": "error",
            "promise/param-names": "error",
            "promise/catch-or-return": "error",
            "promise/no-native": "off",
            "promise/no-new-statics": "error",
            "promise/no-return-in-finally": "error",
            "promise/valid-params": "error",

            "no-console": ["warn", {
                allow: ["warn", "error", "info"],
            }],

            "no-debugger": "error",
            "no-alert": "error",
            "no-var": "error",
            "prefer-const": "error",
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": ["error", {
                argsIgnorePattern: "^_",
            }],

            "max-lines": ["warn", {
                max: 500,
                skipBlankLines: true,
                skipComments: true,
            }],

            "max-depth": ["error", 4],

            "max-lines-per-function": ["warn", {
                max: 100,
                skipBlankLines: true,
                skipComments: true,
            }],

            complexity: ["warn", 15],
            "no-param-reassign": "error",
            "no-multi-assign": "error",
            "arrow-body-style": ["error", "as-needed"],
            "prefer-arrow-callback": "error",
            "prefer-template": "error",
            "template-curly-spacing": ["error", "never"],

            "prefer-destructuring": ["error", {
                array: true,
                object: true,
            }],

            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "object-shorthand": ["error", "always"],

            "@typescript-eslint/explicit-function-return-type": ["error", {
                allowExpressions: true,
            }],

            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "@typescript-eslint/consistent-type-assertions": "error",

            "@typescript-eslint/naming-convention": ["error", {
                selector: "default",
                format: ["camelCase"],
            }, {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            }, {
                selector: "parameter",
                format: ["camelCase"],
                leadingUnderscore: "allow",
            }, {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            }, {
                selector: "typeLike",
                format: ["PascalCase"],
            }, {
                selector: "interface",
                format: ["PascalCase"],
                prefix: ["I"],
            }, {
                selector: "enum",
                format: ["PascalCase"],
                prefix: ["E"],
            }],
        },
    },
    {
        files: ["**/*.test.ts", "**/__tests__/**/*.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "max-lines-per-function": "off",
            "max-lines": "off",
        },
    },
];