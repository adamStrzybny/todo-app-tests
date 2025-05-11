import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


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
      "cypress.config.ts"
    ],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);