const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mysql = require("mysql2");

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        console.log(results)
        return resolve(results);
      }
    });
  });
}

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  
  on("task", {
    queryDb: (query) => {
      return queryTestDb(query, config);
    }
  }); 
  
  return config;
}

module.exports = defineConfig({
  env: {
    "db": {
      "host": "127.0.0.1",
      "user": "root",
      "password": "MyNewPass",
      "database": "test",
      "port": 3306,
      //"k  ey": "cypress/pemFiles/testPemFile.pem",
      //"http": true
    },
  },
  e2e: {
    setupNodeEvents,
    specPattern: [
      'cypress/e2e/**/*.feature'
    ],
  },
});
