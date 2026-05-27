const newman = require('newman');
const path = require('path');

newman.run({

  collection: path.join(
    __dirname,
    '../postman/collections/api-automation.collection.json'
  ),

  environment: path.join(
    __dirname,
    '../postman/Environments/qa.environment.json'
  ),

  reporters: ['cli','htmlextra'],

  reporter: {
    htmlextra: {
      export: './reports/newman-report.html'
    }
  }

});