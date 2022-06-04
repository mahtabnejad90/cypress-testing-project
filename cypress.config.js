const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1000,
  viewpostHeight: 600,
  waitForAnimations: true,
  animationDistanceTreshold: 20,
  defaultCommandTimeout: 5000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  video: false,
  failOnStatusCode: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
   // excludeSpecPattern: process.env.CI ? 'cypress/e2e/all.cy.js' : [],
  },
})
