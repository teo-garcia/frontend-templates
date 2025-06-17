import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Base ESLint rules
  js.configs.recommended,

  // TypeScript configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: fixupPluginRules(_import),
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "./tsconfig.json",
            "./apps/react-template-next/tsconfig.json",
            "./apps/react-template-rr/tsconfig.json",
          ],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-undef": "off", // TypeScript handles this
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
    },
  },

  // JavaScript configuration
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      import: fixupPluginRules(_import),
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [
            "./tsconfig.json",
            "./apps/react-template-next/tsconfig.json",
            "./apps/react-template-rr/tsconfig.json",
          ],
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
    },
  },
];
