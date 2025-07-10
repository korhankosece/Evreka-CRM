import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

export default tseslint.config(
  {
    ignores: ['dist/**/*'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    }
  },
  // Special config for build configuration files - placing this first to take precedence
  {
    files: ['vite.config.ts', 'msw.config.ts'],
    ...tseslint.configs.recommended,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.node.json'
      }
    }
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['vite.config.ts', 'msw.config.ts'],
    extends: [
      ...compat.extends(
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
      )
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        React: true
      }
    },
    settings: {
      react: {
        version: '19.1.0'
      }
    },
    rules: {
      // TypeScript rules - keeping only essential ones
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      
      // React rules - keeping only essential ones
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'warn',
      'react/jsx-key': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // General rules - keeping only the most important ones
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn',

      // Prettier integration
      'prettier/prettier': 'warn'
    }
  }
)
