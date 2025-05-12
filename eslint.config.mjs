import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    ignores: [
      "dist/",
      "build/",
      "cypress/reports/",
      "cypress/videos/",
      "cypress/screenshots/",
      "cypress/downloads/",
      "node_modules/",
      "package-lock.json",
      "cypress.config.ts",
      "eslint.config.mjs",
    ],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-unused-expressions": "off",
    },
  },
  tseslint.configs.recommended,
]);
