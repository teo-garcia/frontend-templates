import baseConfig from 'eslint-config-custom'
import reactConfig from 'eslint-config-custom/react'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/.DS_Store',
      '**/node_modules/**',
      'build/**',
      '.next/**',
      'dist/**',
      'out/**',
      'package/**',
      '**/.env',
      '**/.env.*',
      '!**/.env.example',
      '**/pnpm-lock.yaml',
      '**/package-lock.json',
      '**/yarn.lock',
      'public/mockServiceWorker.js',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      'jest.config.*',
      'next.config.*',
      'tailwind.config.*',
      'postcss.config.*',
    ],
  },
  ...baseConfig,
  ...reactConfig,
  // Next.js specific configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': fixupPluginRules(nextPlugin),
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  // Prettier configuration
  {
    plugins: {
      prettier: fixupPluginRules(prettierPlugin),
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]
