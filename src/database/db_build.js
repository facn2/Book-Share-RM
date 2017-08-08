const fs = require('fs');

const dbConnection = require('./db_connection.js');

const buildScript = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConnection.query(buildScript, (err, res) => {
  if (err) {
    throw err;
  }
  console.log('table successfully created with result: ', res);
});
