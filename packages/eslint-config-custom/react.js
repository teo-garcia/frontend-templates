import { fixupPluginRules } from "@eslint/compat";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import playwrightPlugin from "eslint-plugin-playwright";

export default [
  // React configuration
  {
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      react: fixupPluginRules(reactPlugin),
      "react-hooks": fixupPluginRules(reactHooksPlugin),
      "jsx-a11y": fixupPluginRules(jsxA11yPlugin),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null, // for new JSX transform
      },
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic", // for new JSX transform
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "no-empty-pattern": "off", // Allow empty destructuring for props
    },
  },

  // Jest configuration for test files
  {
    files: [
      "**/*.test.{js,jsx,ts,tsx}",
      "**/*.spec.{js,jsx,ts,tsx}",
      "**/test/**/*",
      "**/tests/**/*",
    ],
    plugins: {
      jest: fixupPluginRules(jestPlugin),
      "testing-library": fixupPluginRules(testingLibraryPlugin),
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
    },
  },

  // Playwright configuration for e2e test files
  {
    files: ["**/e2e/**/*", "**/*.e2e.{js,ts}"],
    plugins: {
      playwright: fixupPluginRules(playwrightPlugin),
    },
    rules: {
      ...playwrightPlugin.configs["playwright-test"].rules,
    },
  },
];
