import { defineConfig } from "eslint/config";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        requireConfigFile: false,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      "constructor-super": "off", // Turn off the warning for constructor-super
      "react/prop-types": "warn", // React PropTypes rule
      "no-console": "warn", // Disallow console logs
      "max-len": ["error", { "code": 100 }], // Limit line length to 100 characters
      "no-unused-vars": "warn", // Warn on unused variables
      "no-eval": "error", // Disallow eval
      "prefer-arrow-callback": "warn", // Encourage arrow functions
      "react/jsx-uses-react": "error", // Ensure React is in scope for JSX
      "react/jsx-uses-vars": "error", // Ensure JSX variables are not marked as unused
      "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
      "react/jsx-no-bind": "warn", // Avoid inline functions in JSX
      "no-magic-numbers": "warn", // Warn on magic numbers
      "no-var": "error" // Disallow var declaration
    },
  },
]);
