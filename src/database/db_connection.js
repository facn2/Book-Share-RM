const { Pool } = require('pg');
// line 1 is the same as
// const pg = require('pg');
// const Pool = pg.Pool;
const url = require('url');
require('env2')('./config.env');
if (!process.env.DB_URL) {
  throw new Error('environment variable DB_URL must be set.')
}
const params = url.parse(process.env.DB_URL);
const [ username, password ] = params.auth.split(':');
const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost' //for security
}
module.exports = new Pool(options);
// export pool of connections
// dont have to keep creating new connections more fficient than creating new connection each time want to use the database
