import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200",
  },
});
