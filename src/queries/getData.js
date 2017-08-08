const dbConnection = require('../database/db_connection.js');

const getData = cb => {
	const getBooksQuery = 'SELECT * FROM books;';
	dbConnection.query(getBooksQuery, (err, res) => {
		if (err) {
			return cb(err);
		} else {
			console.log('res.rows:', res.rows)
			cb(null, res.rows);
		}
	})
}

module.exports = getData;