export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/.react-router/**",
      "**/coverage/**",
      "**/*.config.js",
      "**/*.config.mjs",
      "**/*.config.ts",
      "packages/**",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Minimal rules for root-level files
    },
  },
];
