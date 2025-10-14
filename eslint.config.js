import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            react,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
        },
        rules: {
            "react-hooks/exhaustive-deps": "error",

            "jsx-a11y/alt-text": "error",

            "import/order": ["error", {
                "groups": ["builtin", "external", "internal", "parent", "sibling"],
                "newlines-between": "always",
                "alphabetize": {"order": "asc"}
            }],

            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-unused-vars": "error",

            "react/jsx-boolean-value": ["error", "never"],
            "react/self-closing-comp": "error"
        }
    },
])
