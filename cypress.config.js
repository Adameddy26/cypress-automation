const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com', // Base URL for the application
    specPattern: 'cypress/e2e/features/**/*.feature', // Path to your feature files
    supportFile: false, // No custom support file
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      addCucumberPreprocessorPlugin(on, config); 
      return config;
    },
    cucumber: {
      stepDefinitions: 'cypress/support/step_definitions/**/*.js', // Path to your step definition files
    },
  },
});

