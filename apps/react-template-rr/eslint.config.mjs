import baseConfig from 'eslint-config-custom'
import reactConfig from 'eslint-config-custom/react'
import { fixupConfigRules } from '@eslint/compat'
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
      '.react-router/**',
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
      'vite.config.*',
      'tailwind.config.*',
      'postcss.config.*',
      'react-router.config.*',
    ],
  },
  ...baseConfig,
  ...reactConfig,
  ...fixupConfigRules(compat.extends('plugin:prettier/recommended')),
]
