const { Pool } = require('pg');

const myURI = 'postgres://jegrpaph:KX4mfWczgt-gFOtQXI7odbbplyCs-cjM@raja.db.elephantsql.com:5432/jegrpaph';

const pool = new Pool({
  connectionString: myURI
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = pool;