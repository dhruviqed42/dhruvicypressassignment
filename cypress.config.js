const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //defaultCommandTimeout: 6000,
 
  env:{
    url : "https://demowebshop.tricentis.com/login"
   },
  e2e: {
    setupNodeEvents(on, config) {
     return config;
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js',
    specPattern: 'cypress/e2e/exCMS/dhruvi_assignment.cy.js'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,       // Will be generated after merging
    json: true
  },
  video: true,
  screenshotOnRunFailure: true
});
