import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
  reportDir: "cypress/reports",
  overwrite: false,
  html: false,
  json: true
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  specPattern: "cypress/e2e/*.ts",
  },
});
